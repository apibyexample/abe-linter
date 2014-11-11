var glob = require('glob'),
    path = require('path');

module.exports = function () {
    var $this = this,
        fileLocations = path.join(__dirname, '../', $this.filePath, '**/*.json');

    glob.sync(fileLocations, {
        mark: true
    })
    .forEach(function (file, fileKey, files) {
        $this.validate(file);

        if (files.length - 1 === fileKey) {
            $this.reporting();
        }
    });
};
