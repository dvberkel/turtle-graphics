// Variables: A B
// Constants: + -
// Start: A
// Rules: (A -> L B R A R B L) (B -> R A L B L A R)

function apply_productions(productions, start) {
    return start.map(function(word){ return productions[word]; })
        .reduce(function(acc, words){ return acc.concat(words); }, []);
};

function iterate(productions, start, n) {
    var current = start;
    while (n > 0) {
        current = apply_productions(productions, current);
        n--;
    }
    return current;
}

function show(words) {
    console.log(words.join(' '));
}

var start = ['A'];

var productions = {
    'A': ['L', 'B', 'R', 'A', 'R', 'B', 'L'],
    'B': ['R', 'A', 'L', 'B', 'L', 'A', 'R'],
    'L': ['L'],
    'R': ['R']
};

var arg = process.argv[2];
var n = arg ? parseInt(arg): 1;

show(iterate(productions, start, n));
