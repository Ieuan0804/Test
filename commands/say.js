exports.run = (Discord, client, message, args) => {

let sender = message.author;
let allowedRole = message.guild.roles.find("name", "bot admin");
let sendchannel = message.channel;

       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("wot u doin? this command is for kewl ppl only (If you think this is wrong, make sure you have the administrator discord permission)")

        const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
       let reason = args.slice(0).join(" ");
       let staffc = message.guild.channels.find("name", "logs")
        
        if (!staffc) 
            return message.reply('I cannot find a logs channel');

        if (reason.length < 1) 
            return message.reply('You must supply something to say.');


        const embed = new Discord.RichEmbed()
            .setColor(0x8cff00)
            .setTimestamp()
            .setDescription(`**Action:** Say\n**User:** ${message.author.tag}\n**They said:** ${reason}\n**In Channel:** ${sendchannel}`);
        staffc.send({embed});

        
        
}
