/**requiring express module*/
var express = require("express");
/**requiring body-parser module*/
var bodyParser = require("body-parser");
/**requiring path module*/
var path = require("path");
var app = express();
/**requiring fs module*/
var fs = require('fs');

var elasticsearch = require('elasticsearch');
var esClient = new elasticsearch.Client({
  host: '127.0.0.1:9200',
  log: 'error'
});
var PORT = process.env.PORT || 3001;
var json;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
var indexName = "addressbook";
var indexType = "contactinfo";
/*making the folder static to update the changes over there*/
app.use("/", express.static('./sample'));
/*posting the details sent by the client side and update
those details in the file for the future process*/
app.post('/saving', function(req, res) {
  var result = {
    status: true,
    message: "Successfully added"
  };

  res.setHeader('Content-Type', 'application/json');

  fs.readFile("filename.json", "utf8", function(err, data) {
    try {
      data = JSON.parse(data);
    } catch (e) {
      console.log(e);
      data = [];
    }
    if (!(data instanceof Array)) {
      data = [];
    }
    data.push(req.body);

    fs.writeFile("filename.json", JSON.stringify(data), "utf8", function(err, data) {
      try {
        if (err) {
          throw err;
        }
        res.send(result);

      } catch (e) {
        result.status = false;
        result.message = "failed set";
        res.send(result);
      }
    });
  });
});

/*deleting the value / object from the file */
app.post('/deleting', function(req, res) {
  var result = {
    status: true,
    message: "Successfully added"
  };

  res.setHeader('Content-Type', 'application/json');

  fs.readFile("filename.json", "utf8", function(err, data) {
    try {
      data = JSON.parse(data);
      console.log("sucess");
    } catch (e) {
      console.log(e);
      data = [];
    }
    for (i = 0; i < data.length; i++) {
      if (data[i] != null) {
        if (data[i].firstName == req.body.firstName) {
          delete data[i];
        }
      }
    }
    if (!(data instanceof Array)) {
      data = [];
    }

    fs.writeFile("filename.json", JSON.stringify(data), "utf8", function(err, data) {
      try {
        if (err) {
          throw err;
        }
        res.send(result);

      } catch (e) {
        result.status = false;
        result.message = "failed set";
        res.send(result);
      }
    });
  });
});
/*updating the changes that are to be done to a
particular object*/
app.post('/updating', function(req, res) {
  var result = {
    status: true,
    message: "Successfully added"
  };

  res.setHeader('Content-Type', 'application/json');

  fs.readFile("filename.json", "utf8", function(err, data) {
    try {
      data = JSON.parse(data);
      console.log("sucess");
    } catch (e) {
      console.log(e);
      data = [];
    }
    for (i = 0; i < data.length; i++) {
      if (data[i] != null) {
        if (data[i].firstName == req.body.firstName) {
          data[i].firstName = req.body.firstName;
          data[i].lastName = req.body.lastName;
          data[i].address = req.body.address;
          data[i].city = req.body.city;
          data[i].state = req.body.state;
          data[i].zip = req.body.zip;
          data[i].mobile = req.body.mobile;
        }
      }
    }
    if (!(data instanceof Array)) {
      data = [];
    }

    fs.writeFile("filename.json", JSON.stringify(data), "utf8", function(err, data) {
      try {
        if (err) {
          throw err;
        }
        res.send(result);

      } catch (e) {
        result.status = false;
        result.message = "failed set";
        res.send(result);
      }
    });
  });
});
/* using get method read the file values and display it to
the user*/
app.get('/get', function(req, res) {
  fs.readFile("filename.json", "utf8", function(err, data) {
    try {
      data = JSON.parse(data);
    } catch (e) {
      console.log(e);
      data = [];
    }
    if (!(data instanceof Array)) {
      data = [];
    }
    res.send(data);
  });
});
var search = function search(index, body) {
  return esClient.search({
    index: index,
    body: body
  });
}

var bulkIndex = function bulkIndex(req,res) {
  esClient.indices.create({
      index: indexName,
      body: {
          "settings": {
              "analysis": {
                  "filter": {
                      "autocomplete_filter": {
                          "type": "edge_ngram",
                          "min_gram": 1,
                          "max_gram": 10
                      }
                  },
                  "analyzer": {
                      "autocomplete": {
                          "type": "custom",
                          "tokenizer": "standard",
                          "filter": [
                              "lowercase",
                              "autocomplete_filter"
                          ]
                      }
                  }
              }
          },
          "mappings": {
              "contactinfo": {
                  "properties": {
                      "city": {
                          "type": "string",
                          "fields": {
                              "raw": {"type": "string", "index": "not_analyzed"}
                          }
                      },
                      "state": {
                          "type": "string",
                          "fields": {
                              "raw": {"type": "string", "index": "not_analyzed"}
                          }
                      },
                      "firstName": {
                          "type": "string",
                          "fields": {
                              "autocomplete": {"type": "string", "index_analyzer": "autocomplete"}
                          }
                      },
                      "lastName": {
                          "type": "string",
                          "fields": {
                              "autocomplete": {"type": "string", "index_analyzer": "autocomplete"}
                          }
                      },
                      "address": {
                          "type": "string", "index": "not_analyzed"
                      },
                      "zip": {
                          "type": "string",
                          "fields": {
                              "autocomplete": {"type": "string", "index_analyzer": "autocomplete"}
                          }
                      },
                      "mobile": {
                          "type": "string",
                          "fields": {
                            "autocomplete": {"type": "string", "index_analyzer": "autocomplete"}
                          }
                      }
                  }
              }
          }
      }

  }, function (error, response) {
      fs.readFile('filename.json', 'utf8', function (err, data) {
          if (err) throw err;
          var sampleDataSet = JSON.parse(data);

          var body = [];

          sampleDataSet.forEach(function (item) {
              body.push({"index": {"_index": indexName, "_type": indexType}});
              body.push(item);
          });
          esClient.bulk({body: body});
      });
  });
}

function indexExists(a) {
  return new Promise(function(resolve, reject) {
    if (a) {
      resolve(esClient.indices.exists({
        index: a
      }));
    } else {
      reject("unsuccess");
    }
  });
}
app.post('/search', function(req, res) {
  esClient.search({
    index: indexName,
    type: indexType,
    size: 20,
    from: 0,
    body: {
      query: {
        multi_match: {
          query: req.body.firstname,
          fields: ["firstName", "lastName", "address", "city", "mobile"],
          type: "cross_fields",
          minimum_should_match: 3,
          fuzziness: 1
        }
      },
    "suggest": {
        "text": req.body.firstname,
        "simple_phrase": {
            "phrase": {
                "field": "firstName",
                "size": 1,
                "real_word_error_likelihood": 0.95,
                "max_errors": 0.5,
                "gram_size": 2,
                "direct_generator": [{
                    "field": "firstName",
                    "suggest_mode": "always",
                    "min_word_length": 1
                }],
                "highlight": {
                    "pre_tag": "<b><em>",
                    "post_tag": "</em></b>"
                }
            }
        }
    }
  }
  }).then(results =>
    {
    res.send(results);
  }).catch(console.error);
});
app.post('/updateindex', function(req, res) {
  var checkindex = indexExists(indexName);
  checkindex.then(function(data) {
    if (data == true) {
      esClient.indices.delete({
        index: indexName
      });
        bulkIndex(req,res);
    } else {
        bulkIndex(req,res);
    }
  }).catch(function(error) {
    console.log("Direct Index Exists", error);
  });
  res.send({
    status: true
  });
});

app.get('/autocomplete', function(req, res) {
  esClient.search({
    index: "addressbook",
    type: "contactinfo",
    body: {
      query: {
        multi_match: {
          query: req.query.term,
          fields: ['firstName', 'lastName', 'zip', 'mobile'],
          type: "phrase",
          minimum_should_match: 2,
          fuzziness: 2
        }
      }
    }
  }).then(function(resp) {
    var results = resp.hits.hits.map(function(hit) {
      return hit._source.firstName + " " + hit._source.lastName;
    });
    res.send(results);
    //console.log(results);
  }, function(err) {
    console.trace(err);
    res.send({
      response: err.message
    });
  });
});
app.listen(PORT, function() {
  console.log("server is listening to %s port", PORT);
})
