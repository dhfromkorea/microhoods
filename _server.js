var app = require('./server/app.js');

app.start(function() {
  // var query = client.query("SELECT * FROM users");
  //   query.on('row', function(row) {
  //   console.log(row.username);
  // });
  // var query = client.query("SELECT * FROM TAGS;");
  // query.on('row', function(row) {
  //   console.log(row);
  // });

  console.log('server running at: ' + app.info.uri); 
});