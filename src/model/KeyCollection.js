const FileIOUtil = require("./FileIOUtil");

/**
 * Encapsulates Key objects in a collection to iterate through
 */
class KeyCollection {
    constructor() {
        this.keys = [];
    }

    /**
     * adds key object to collection of keys 
     */
    addKey(key) {
        this.keys.push(key);
    }

    /**
     * checks if given key id already exists within the collection. 
     */
    isDuplicate(id) {
        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i].id === id) {
                return true;
            }
        }
        return false;
    }

    /**
     * clears the key colelction
     */
    clear() {
        this.keys = [];
    }

    /**
     * returns the key with given id.
     * returns null if key id is not identified. 
     */
    getKey(id) {
        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i].id === id) {
                return this.keys[i];
            }
        }
        return null;
    }

    /**
     * removes given key object from collection of keys.
     * does nothing if key could not be found in collection. 
     */
    removeKey(key) {
        for (let i = 0; i < this.keys.length; i++) {
            let temp = this.keys[i];
            if (temp.id === key.id) {
                this.keys.splice(i, 1); // replaces 1 element at index i with nothing (delete)
                return;
            }
        }
    }

    /**
     * saves this KeyCollection object to file as JSON object
     */
    saveToFile() {
        FileIOUtil.fileWrite(FileIOUtil.KEYS_FILE_PATH, JSON.stringify(this));
    }
}

/**
 * parses file data from JSON object to KeyCollection object
 * for KeyCollection method integrity.
 */
parseToKeyCollection = (data) => {
    const temp = JSON.parse(data);
    let keyCollection = new KeyCollection();
    keyCollection.keys = temp.keys;
    return keyCollection;
}

/**
 * returns KeyCollection object
 */
exports.getKeyCollection = () => {
    try {
        let data = FileIOUtil.fileRead(FileIOUtil.KEYS_FILE_PATH);
        return parseToKeyCollection(data);
    } catch (err) {
        return new KeyCollection();
    }
}