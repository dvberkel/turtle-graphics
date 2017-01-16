var model = require('./model/sierprinski.js');

// Variables: A B
// Constants: + -
// Start: A
// Rules: (A -> L B R A R B L) (B -> R A L B L A R)

function apply_productions(productions, current) {
    return current.map(function(word){ return productions[word]; })
        .reduce(function(acc, words){ return acc.concat(words); }, []);
};

function iterate(model, n) {
    var current = model.start;
    while (n > 0) {
        current = apply_productions(model.productions, current);
        n--;
    }
    return current;
}

function show(words) {
    console.log(words.join(' '));
}

var arg = process.argv[2];
var n = arg ? parseInt(arg): 1;

show(iterate(model, n));
