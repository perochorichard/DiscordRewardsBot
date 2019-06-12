const Discord = require("discord.js");
const client = new Discord.Client();

const token = "NTg4MDQ1MjI2OTIxNDI2OTU0.XQE9Fw.duA7gmIRhDeMg744D4xc4nKBRE8";

client.on("ready", () => {
    console.log('Discord rewards bot is online');
});

client.on("message", msg => {
    switch (msg.content) {
        case '!help':
            msg.reply('help page to be created');
            break;
        case '!create':
            msg.reply('generating reward key...');
            break;
    }
});

client.login(token);