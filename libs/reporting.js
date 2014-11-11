module.exports = function (errors) {
    var $this = this;
    console.log($this.errors.amount + ' of ' + $this.files + ' files contain errors');
    console.error($this.errors.collection);
};
