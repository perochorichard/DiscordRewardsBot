const Discord = require("discord.js");
const client = new Discord.Client();

const token = "NTg4MDQ1MjI2OTIxNDI2OTU0.XQnGEw.0lny-YPw5IpxRjXs7hoNPWL7T5k";

client.on("ready", () => {
    console.log('Discord rewards bot is online');
});

client.on("message", recievedMessage => {
    if (recievedMessage.author == client.user) {
        return;
    }
    if (recievedMessage.channel.type !== "dm") {
        recievedMessage.reply("this bot only operates in dm chat.");
        return;
    }

    if (recievedMessage.content.startsWith("!")) {
        require("./src/model/CommandUtil").processCommand(recievedMessage);
    }
});

client.login(token);