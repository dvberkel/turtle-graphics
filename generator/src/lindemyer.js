function apply_productions(productions, current) {
    return current.map(function(word){ return productions[word]; })
        .reduce(function(acc, words){ return acc.concat(words); }, []);
}

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

module.exports = {
    iterate: iterate,
    show: show
}
