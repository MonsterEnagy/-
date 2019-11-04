const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var channel = "617577875574620160"

let image = [];
fs.readdir('./gif file', function(err, files){
	if(err) return throw new Error();
	for(var i = 0; i < files.length; i++){
		image.push(files[i])
	}
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd" , async member => {
	client.channels.get("557151054723022859").send(image[Math.floor( Math.random() * image.length )])

});


client.login(process.env.token);