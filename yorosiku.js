const Discord = require('discord.js');
const client = new Discord.Client();
var channel = ""
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd" , async member => {
client.channels.get("")

});


client.login(process.env.token);