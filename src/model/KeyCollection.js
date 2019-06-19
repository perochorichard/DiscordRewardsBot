const FileIOUtil = require("./FileIOUtil");

class KeyCollection {
    constructor() {
        this.keys = [];
    }

    addKey(key) {
        this.keys.push(key);
    }

    isDuplicate(id) {
        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i].id === id) {
                return true;
            }
        }
        return false;
    }

    clear() {
        this.keys = [];
    }

    saveToFile() {
        FileIOUtil.fileWrite(FileIOUtil.KEYS_FILE_PATH, JSON.stringify(this));
    }
}

parseToKeyCollection = (data) => {
    const temp = JSON.parse(data);
    let keyCollection = new KeyCollection();
    keyCollection.keys = temp.keys;
    return keyCollection;
}

exports.getKeyCollection = () => {
    try {
        let data = FileIOUtil.fileRead(FileIOUtil.KEYS_FILE_PATH);
        return parseToKeyCollection(data);
    } catch (err) {
        return new KeyCollection();
    }
}