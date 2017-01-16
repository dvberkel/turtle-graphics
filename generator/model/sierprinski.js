module.exports = {
    start: ['A'],
    productions: {
        'A': ['L', 'B', 'R', 'A', 'R', 'B', 'L'],
        'B': ['R', 'A', 'L', 'B', 'L', 'A', 'R'],
        'L': ['L'],
        'R': ['R']
    }
}
