var expect = require('expect.js'),
    Linter = require('../../libs/lint.js');

describe('Lint setup', function () {
    it('should pass back the validater', function () {
        expect(Linter.prototype.validate).to.be.a('function');
    });

    it('should pass back the reporting tool', function () {
        expect(Linter.prototype.reporting).to.be.a('function');
    });

    it('should pass back the loaader', function () {
        expect(Linter.prototype.loader).to.be.a('function');
    });
});
