const Discord = require('discord.js');

const client = new Discord.Client({
    intents: [
        "Guilds",
        "GuildMessages"
    ]
})



client.on('ready', (client) => {
   console.log("logged in")
})


client.on('messageCreate', (message) => {
    message.reply("test");
})


client.login("");