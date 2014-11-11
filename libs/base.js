var base = function (options) {
    var $this = this;

    $this.filePath = options.filePath;
    $this.loader();
};

base.prototype.files = 0;
base.prototype.errors = {
    collection: [],
    amount: 0
};

module.exports = base;
