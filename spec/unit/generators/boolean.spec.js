var booleanGenerator = require('../../../lib/generators/boolean');

describe("Boolean Generator", function() {
  it("should always return a boolean type", function() {
    expect(booleanGenerator()).toEqual(jasmine.any(Boolean));
  });
});
