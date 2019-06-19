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
}

parseToKeyCollection = (data) => {
    const temp = JSON.parse(data);
    let keyCollection = new KeyCollection();
    keyCollection.keys = temp.keys;
    return keyCollection;
}

exports.getKeyCollection = () => {
    try {
        const FileIOUtil = require("./FileIOUtil");
        let data = FileIOUtil.fileRead(FileIOUtil.KEYS_FILE_PATH);
        return parseToKeyCollection(data);
    } catch(err) {
        return new KeyCollection();
    }
}