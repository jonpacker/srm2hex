var srm2hex = require("../index");

describe("basic functionality", () => {
  it("exports a valid hex", () => {
    expect(srm2hex(20.5)).toEqual('#562e11');
  });
  it("returns white for srm values at 0 or below", () => {
      expect(srm2hex(0)).toEqual('#FFFFFF');
      expect(srm2hex(-1)).toEqual('#FFFFFF');
  });
  it("returns black for srm values at 0 or below", () => {
      expect(srm2hex(40)).toEqual('#000000');
      expect(srm2hex(41)).toEqual('#000000');
  });
});
