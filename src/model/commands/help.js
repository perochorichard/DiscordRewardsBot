exports.run = (recievedMessage) => {
    recievedMessage.reply("Available commands:" +
    "```!create <amount> <points>\n!clear\n!list\n!redeem <key>```");
}