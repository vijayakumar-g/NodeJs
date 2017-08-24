var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('Add'));
var fs = require('fs')
//assigning a file to variable
var file = 'Address.json'
// app.use(express.static(__dirname + 'Add'));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));

});
app.get('/readFile/:Address.json', function(req, res) {
      try {

        var fsEvent = fs.readStream(req.params.Address.json);
        var content = "";
        fsEvent.on("data", function(data) {
          content += data;
        });
        fsEvent.on("end", function() {
            res.send({
                status: true,
                message: "",
                data: {
                  content: content
                }
              );
            });
          // res.sendFile(path.join(__dirname + '/index.html'));

        }
        catch (e) {
          res.send({
            status: false,
            message: "server issue"
          });
        }
      }); app.post('/saveFile', function(req, res) {
      // save code
      // res.sendFile(path.join(__dirname + '/index.html'));

    }); app.listen(8088);