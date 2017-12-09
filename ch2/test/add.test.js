var add = require('../src/add.js');
var sub = require('../src/sub.js');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('任何数加0应该等于自身', function() {
    expect(add(1, 0)).to.be.equal(1);
  });
  it('8 减 3 应该等于 5', function() {
    expect(sub(add(3, 5), 3)).to.be.equal(5);
  });
});
