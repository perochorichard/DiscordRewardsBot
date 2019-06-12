const Discord = require("discord.js");
const client = new Discord.Client();

const token = "NTg4MDQ1MjI2OTIxNDI2OTU0.XQE9Fw.duA7gmIRhDeMg744D4xc4nKBRE8";

client.on("ready", () => {
    console.log('Discord rewards bot is online');
});

client.on("message", msg => {
    if (!msg.author.bot) {
        const commandIdentifier = msg.content.split(" ")[0];
        msg.reply("command identifier: " + commandIdentifier);
    }
});

client.login(token);