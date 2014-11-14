var expect = require('expect.js'),
    Base = require('../../libs/base.js');

describe('Setup the core of the module', function () {
    it('should pass back a function', function () {
        expect(Base).to.be.a('function');
    });

    it('should add a counter for the amount of files linted', function () {
        expect(Base.prototype.files).to.be(0);
    });

    it('should set up a errors object', function () {
        expect(Base.prototype.errors.collection).to.be.an('array');
        expect(Base.prototype.errors.amount).to.be(0);
    });
});
