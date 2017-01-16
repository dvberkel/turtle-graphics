var l = require('./src/lindemyer');
var model = require('./model/sierprinski');

var arg = process.argv[2];
var n = arg ? parseInt(arg): 1;

l.show(l.iterate(model, n));
