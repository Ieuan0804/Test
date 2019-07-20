const db = require('quick.db');
exports.run = (Discord, client, message, args) => {
let guildid = message.guild.id;
let status = args[0];
let password = args[1];
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No can do pal!, ADMINISTRATOR is needed.");
db.set(`ServerPass_${message.guild.id}`, { status: args[0], password: args[1], guildid: message.guild.id})
if(!status === "true") {
  message.channel.send("Password set to false") 
}else {
message.channel.send("Password Set To: "+status+", the password is now: "+password)
}}
