const KeyCollection = require("../KeyCollection");

exports.run = (recievedMessage) => {
    let keyCollection = KeyCollection.getKeyCollection();

    recievedMessage.reply("in list");
}