const fs = require('fs');

exports.KEYS_FILE_PATH = "src/keys.txt";
exports.REWARDS_FILE_PATH = "src/hits.txt";

exports.fileRead = (path) => {
    return fs.readFileSync(path).toString();
}

exports.fileWrite = (path, data) => {
    fs.writeFile(path, data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
    })
}
