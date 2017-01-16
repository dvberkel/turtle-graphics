var l = require('./src/lindemyer');

if (process.argv.length < 3) {
    throw new Error('not enough arguments');
}

var model_argument = process.argv[2];
var model = require(model_argument);

var stage_argument = process.argv[3];
var stage = stage_argument ? parseInt(stage_argument): 1;

l.show(l.iterate(model, stage));
