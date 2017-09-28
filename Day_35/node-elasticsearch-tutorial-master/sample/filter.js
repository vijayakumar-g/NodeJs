(function () {
  'use strict';

  const elasticsearch = require('elasticsearch');
  const esClient = new elasticsearch.Client({
    host: '127.0.0.1:9200',
    log: 'error'
  });

  const search = function search(index, body)
  {
    return esClient.search({index: index, body: body});
  };

  // only for testing purposes
  // all calls should be initiated through the module
  const test = function test() {
    let body = {
      size: 20,
      from: 0,
      query: {
        bool: {
          must: [
            {
              query_string: {
                query: '(first_name:K*)'
              }
            }
          ],
          filter: [
            {
              match:
              {
                country:
                {
                  query: 'China',
                   type : 'phrase'
                }
              }
            }
          ]
          // should: [
          //   {
          //     match: {
          //       body: {
          //         query: 'Elit nisi fugiat dolore amet',
          //         type: 'phrase'
          //       }
          //     }
          //   }
          // ],
          // must_not: [
          //   {
          //     range: {
          //       year: {
          //         lte: 2000,
          //         gte: 1990
          //       }
          //     }
          //   }
          // ],

        }
      }
    };
    console.log(`retrieving documents with a combined bool query and filter (displaying ${body.size} items at a time)...`);
    search('address', body)
    .then(results => {
      console.log(`found ${results.hits.total} items in ${results.took}ms`);
      if (results.hits.total > 0) console.log(`returned article titles:`);
      results.hits.hits.forEach((hit, index) => console.log(`\t${body.from + ++index} - ${hit._source.first_name} (score: ${hit._score})`));
    })
    .catch(console.error);
  };

  test();

  module.exports = {
    search
  };
} ());
