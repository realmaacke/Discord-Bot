const Discord = require('discord.js');

const client = new Discord.Client({
    intents: [
        "Guilds",
        "GuildMessages"
    ]
})



client.on('ready', (client) => {
    console.log(`Logged in as : ${client.user.name}`);
})