var Linter = require('./base.js');

Linter.prototype.loader = require('./loader.js');
Linter.prototype.validate = require('./validate.js');
Linter.prototype.reporting = require('./reporting.js');

module.exports = Linter;
