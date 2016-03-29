var sometimes = require('./sometimes.js');

exports.testReturnsValues = function(test) {
  var counts = {true: 0, false: 0};
  var tolerance = 1000;
  var attempts = 100000;
  for (var i=0; i<=attempts; i++) {
    counts[sometimes()]++;
  }
  function inRange(value, expected, tolerance) {
    return value >= expected - tolerance && value <= expected + tolerance;
  }

  test.ok(inRange(counts[false], attempts/2, tolerance), 'should have enough false values');
  test.ok(inRange(counts[true], attempts/2, tolerance), 'should have enough false values');
  test.done();
};
