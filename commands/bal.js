const db = require('quick.db')
exports.run = async (Discord, client, message, args) => {
let user = message.author;
let balance = await db.fetch(`balance_${message.author.id}`)
if (balance === null) await db.set(`balance_${user.id}`, 0);
        const embed = new Discord.RichEmbed()
              .setAuthor("Balance Of " + message.author.tag, message.author.avatarURL)
              .setDescription("$ **"+balance+"**")
              .setColor("#83b1fc")
message.channel.send(embed)
}
