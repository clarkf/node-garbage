var test = require('tap').test;
var traverse = require('traverse');
var garbage = require('../');

test('boolean', function (t) {
    t.plan(30);
    for (var i = 0; i < 30; i++) {
        var xs = garbage.number();
        t.equal(typeof xs, 'number');
    }
});
test('boolean', function (t) {
    t.plan(30);
    for (var i = 0; i < 30; i++) {
        var xs = garbage.boolean();
        t.equal(typeof xs, 'boolean');
    }
});
test('string', function (t) {
    t.plan(30);
    for (var i = 0; i < 30; i++) {
        var xs = garbage.string();
        t.equal(typeof xs, 'string');
    }
});
test('char', function (t) {
    t.plan(30 * 2);
    for (var i = 0; i < 30; i++) {
        var xs = garbage.char();
        t.equal(typeof xs, 'string');
        t.equal(xs.length, 1);
    }
});
