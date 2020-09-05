const assert = require("assert").strict;
const formatNaira = require("../index");

describe("add", function () {
  it("should return 0 when no argument is passed", function () {
    assert.strictEqual(formatNaira(), "₦0");
  });
});

describe("add", function () {
  it("should return a formatted naira equivalent when you pass a number", function () {
    assert.strictEqual(formatNaira(2000), "₦2,000");
  });
});
