const Discord = require('discord.js'),

    client = new Discord.Client({sisableEveryone: true})

    console.log("bb,");

client.on('guildMemberAdd', member => {

const mohamed= member.guild.channels.get("532228348278079489");

if(!mohamed) return;

if(mohamed) {

setTimeout(() => mohamed.send(`Welcome to  **Arbilank** Server`), 1000)        

}

});

client.on('ready',async () => {

  client.channels.find(ch => ch.id === "536596708268834816" && ch.type === 'voice').join();

});




client.login(process.env.BOT_TOKEN);
