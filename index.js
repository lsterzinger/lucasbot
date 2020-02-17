const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.discord_bot_token

client.once('ready', () => {
    console.log("Ready!");
});

client.login(token)

client.on('message', message => {
    if (message.content === '!hello') {
        message.channel.send('Hi there, ' +  message.author + "!");
    }
    if (message.content === '!whoareyou') {
        message.channel.send('I am a bot created by Lucas')
    }

});