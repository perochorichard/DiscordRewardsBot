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

    getKey(id) {
        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i].id === id) {
                return this.keys[i];
            }
        }
        return null;
    }

    removeKey(key) {
        for (let i = 0; i < this.keys.length; i++) {
            let temp = this.keys[i];
            if (temp.id === key.id) {
                this.keys.splice(i, 1); // replaces 1 element at index i with nothing (delete)
                return;
            }
        }
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