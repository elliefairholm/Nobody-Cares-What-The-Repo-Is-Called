'use strict';

require('chai').should();

var dash = require('../index.js');

describe('dash', function () {

  it('274 should return "2-7-4"', function () {
    dash(274).should.equal("2-7-4");
  });

  it('5311 should return "5-3-1-1"', function () {
    dash(5311).should.equal("5-3-1-1");
  });

  it('86320 should return "86-3-20"', function () {
    dash(86320).should.equal("86-3-20");
  });

  it('974302 should return "9-7-4-3-02"', function () {
    dash(974302).should.equal("9-7-4-3-02");
  });

  it('0 should return "0"', function () {
    dash(0).should.equal("0");
  });

  it('-1 should return "1"', function () {
    dash(0).should.equal("0");
  });

  it('NaN should return "NaN"', function () {
    dash(NaN).should.equal("NaN");
  });
  
  it('-28369 should return "28-3-6-9" ', function () {
    dash(-28369).should.equal("28-3-6-9");
  });

  it('-33363 should return "3-3-3-6-3" ', function () {
    dash(-33363).should.equal("3-3-3-6-3");
  });

});
