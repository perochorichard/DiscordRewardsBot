const CommandUtil = require("../commandUtil");
const FileIOUtil = require("../FileIOUtil");
const Key = require("../Key");
const KeyList = require("../KeyList");
exports.run = (recievedMessage) => {
    const args = CommandUtil.getArguments(recievedMessage);
    if (args.length > 2 || args.length < 1) {
        recievedMessage.reply("Invalid number of arguments. \nYou must specify the amount of keys and the value for them." + 
        "\n example: !create 1 500 creates 1 key with a 500 point target.");
    }

    const amount = Number(args[0]);
    const points = Number(args[1]);

    let keyList = getKeys();
    for (let i = 0; i < amount; i++) {
        let tempKey = new Key(points);
        keyList.addKey(tempKey);
    }
    FileIOUtil.fileWrite(FileIOUtil.KEYS_FILE_PATH, JSON.stringify(keyList));
}

getKeys = () => {
    try {
        let data = FileIOUtil.fileRead("src/keys.txt");
        console.log("data: " + data);
        return JSON.parse(data);
    } catch(err) {
        return new KeyList();
    }
}
