const Discord = require('discord.js'),
     arraySort = require('array-sort'),
     table = require('table'),
     send = require("quick.hook");

exports.run = async (client,message,args,tools) => {

let invites = await message.guild.fetchInvites().catch(error =>{
return tools.embed(message.channel, "Sorry I don't Have Perm To View Invites :x:" , 5000)
})

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = [['User', 'Uses']];
    invites.forEach(function(invite) {
      possibleInvites.push([invite.inviter.username , invite.uses]);
    })
    const embed = new Discord.RichEmbed()
    .setColor(0x7289da)
    .setTitle("Server Invites")
    .addField('Leaderboard' , `\`\`\`${table.table(possibleInvites)}\`\`\``);

  send( message.channel,embed,{
      name: "leaderboard"
  })

}
