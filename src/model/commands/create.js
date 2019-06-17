const Utility = require("../Utility");
exports.run = (recievedMessage) => {
    const args = Utility.getArguments(recievedMessage);
    if (args.length > 0) {
        recievedMessage.reply("Arguments: " + args);
    } else {
        recievedMessage.reply("no arguments found");
    }

    const amount = Number(args[0]);
    const points = Number(args[1]);

    let keyObj = generateKeyObj(points);
    recievedMessage.reply("your new key is: " + keyObj.key + "\n" +
    "key points: " + keyObj.targetPoints);
}

generateKeyObj = (points) => {
    let keyObj = { targetPoints: points, key: randomKey() };
    return keyObj;
}

randomKey = () => {
    let key = '';
    for (let i = 0; i < 4; i++) {
        key += randomSequence() + "-";
    }
    key = key.substr(0, key.length - 1);
    return key;
}

randomSequence = () => {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let sequenceLength = 5;
    let sequence = '';
    for (let i = 0; i < sequenceLength; i++) {
        sequence += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return sequence;
}

FileIO = () => {
        // READING
        const fs = require("fs");
        fs.readFile("src/hits.txt", "utf8", function (err, buf) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(buf);
        });
    
        // WRITING
        let data = "hello world";
        fs.writeFile("temp.txt", data, (err) => {
            if (err) console.log(err);
            console.log("Successfully Written to File.");
        });
}