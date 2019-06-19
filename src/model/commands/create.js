const CommandUtil = require("../commandUtil");
const FileIOUtil = require("../FileIOUtil");
const Key = require("../Key");
const KeyCollection = require("../KeyCollection");
exports.run = (recievedMessage) => {
    const args = CommandUtil.getArguments(recievedMessage);
    if (args.length > 2 || args.length < 1) {
        recievedMessage.reply("Invalid number of arguments. \nYou must specify the amount of keys and the value for them." + 
        "\n example: !create 1 500 creates 1 key with a 500 point target.");
    }

    const amount = Number(args[0]);
    const points = Number(args[1]);

    let keyCollection = KeyCollection.getKeys();
    for (let i = 0; i < amount; i++) {
        let tempKey = new Key(points);

        for (let i = 0; i < 100; i++) { // check key duplication
            if (keyCollection.isDuplicate(tempKey.id)) {
                console.log("key id was duplicate. generating new key...");
                tempKey = new Key(points);
            } else {
                break;
            }
        }

        keyCollection.addKey(tempKey);
    }
    FileIOUtil.fileWrite(FileIOUtil.KEYS_FILE_PATH, JSON.stringify(keyCollection));
}
