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

    generateKey(points);
}

generateKey = (points) => {
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
    var data = "New File Contents";
    fs.writeFile("temp.txt", data, (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
}