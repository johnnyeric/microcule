var stack = require('../');
var express = require('express');
var app = express();

var nodeService = function testService (opts) {
  var res = opts.res;
  console.log('logging to console');
  res.end('ran service');
};

var handler = stack.plugins.spawn({
  code: nodeService,
  language: "javascript"
});

app.use(handler);

app.listen(3000, function () {
  console.log('server started on port 3000');
});