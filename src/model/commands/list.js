const KeyCollection = require("../KeyCollection");

exports.run = (recievedMessage) => {
    let response = '';
    let keyCollection = KeyCollection.getKeyCollection();
    if (keyCollection.keys.length < 1) {
        response = "There are no keys to be displayed!";
    } else {
        response = '```Here are your keys: \n';
        for (let i = 0; i < keyCollection.keys.length; i++) {
            let tempKey = keyCollection.keys[i];
            response += "amount: " + tempKey.targetPoints + "\n" +
                "id: " + tempKey.id + "\n\n";
        }
        response += "```";
    }
    recievedMessage.reply(response);
}