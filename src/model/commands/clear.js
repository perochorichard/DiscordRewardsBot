const KeyCollection = require("../KeyCollection");

/**
 * command clears all existing keys.
 */
exports.run = (recievedMessage) => {
    let keyCollection = KeyCollection.getKeyCollection();
    keyCollection.clear();
    keyCollection.saveToFile();
    
    recievedMessage.reply("all keys removed from database");
}