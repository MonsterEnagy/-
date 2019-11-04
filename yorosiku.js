const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var channel = "617577875574620160"

let image = [];
fs.readdir('./gif file', function(err, files){
	for(var i = 0; i < files.length; i++){
		image.push(files[i])
	}
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd" , async member => {
	fs.readFile(`./gif file/${image[Math.floor( Math.random() * image.length )]}`, async (err, files) => {
		member.guild.channels.get("557151054723022859").send(/*files*/"aaa");
	})
});


client.login(process.env.token);