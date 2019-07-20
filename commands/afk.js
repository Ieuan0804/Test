
const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args, tools) => {

  const status = new db.table('AFKs');
  let afk = await status.fetch(message.author.id);
  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')

  if (!afk) { 
    embed.setDescription('You are now AFK.');
    status.set(message.author.id, args.join(' ') || `Sorry, ${message.author.username} is AFK.`);
  } else { 
    embed.setDescription('You are no longer AFK.'); 
    status.delete(message.author.id);
      
  }
  message.channel.send(embed);
}
