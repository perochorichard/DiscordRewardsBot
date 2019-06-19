const CommandUtil = require("../CommandUtil");
const KeyCollection = require("../KeyCollection");
const FileIOUtil = require("../FileIOUtil");

exports.run = (recievedMessage) => {
    const args = CommandUtil.getArguments(recievedMessage);

    if (args.length !== 1) {
        recievedMessage.reply("Invalid number of arguments. TIP: type the key exactly as seen\n"
        + "example: !redeem E327-T45I-12IE-3RBR");
        return;
    }

    const id = args.pop();
    let key = KeyCollection.getKeyCollection().getKey(id);
    if (key !== null) {
        redeem(key);
        recievedMessage.reply("key successfully redeemed.");
    } else {
        recievedMessage.reply("The key you entered was not found or has already been redeemed.");
    }
}

redeem = (key) => {
    let rewards = FileIOUtil.fileRead(FileIOUtil.REWARDS_FILE_PATH); // TODO: create reward objects to list
}