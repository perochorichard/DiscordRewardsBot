const KeyCollection = require("../KeyCollection");

exports.run = (recievedMessage) => {
    let keyCollection = KeyCollection.getKeyCollection();
    let output = 'ALL KEYS\n';
    for (let i = 0; i < keyCollection.keys.length; i++) {
        let tempKey = keyCollection.keys[i];
        output += "amount: " + tempKey.targetPoints + "\n" +
        "id: " + tempKey.id + "\n\n";
    }
    recievedMessage.reply(output);
}