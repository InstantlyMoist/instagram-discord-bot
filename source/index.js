const Discord = require('discord.js');
const client = new Discord.Client();

const credentials = require('./credentials.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!davide') {
    msg.reply('plattegrondj');
  }
});

client.login(credentials.discord);