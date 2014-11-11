var schema = require('../node_modules/abe-spec/schema.json'),
    JaySchema = require('jayschema'),
    js = new JaySchema();

module.exports = function (mock) {
    var $this = this,
        response = js.validate(mock, schema);

    $this.files++;

    if (response.length) {
        response[0].path = mock;
        $this.errors.amount++;
        $this.errors.collection.push(response[0]);
    }
};
