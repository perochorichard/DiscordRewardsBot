const CommandUtil = require("./src/model/CommandUtil");
const Discord = require("discord.js");
const client = new Discord.Client(); // discord bot

const token = "NTg4MDQ1MjI2OTIxNDI2OTU0.XQnGEw.0lny-YPw5IpxRjXs7hoNPWL7T5k"; // bot token required for discord access

client.on("ready", () => {
    console.log('Discord rewards bot is online');
});

// event triggers when a message is sent on discord
client.on("message", recievedMessage => {
    if (recievedMessage.author == client.user) { // returns if message was sent by the bot (prevents recursive reply)
        return;
    }

    if (recievedMessage.channel.type !== "dm") { // returns if message was sent on non-dm channel type
        recievedMessage.reply("this bot only operates in dm chat.");
        return;
    }

    if (recievedMessage.content.startsWith("!")) { // if message starts with '!', message is considered a command and will be processed
        CommandUtil.processCommand(recievedMessage);
    }
});

client.login(token);