const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();

const prefix = '-'
const adminprefix = "-";
const developers = ['412275773014016011' , '412275773014016011'];

client.on('ready', () => {
 console.log("hi"); 
console.log("bye");
});




client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/paaaaaartly");


client2.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client2.user.setGame(argresult);
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client2.user.setActivity(argresult, {type:'WATCHING'});
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client2.user.setActivity(argresult , {type:'LISTENING'});
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client2.user.setGame(argresult, "https://www.twitch.tv/paaaaaartly");



}
});
client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);

