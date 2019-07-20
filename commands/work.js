const db = require('quick.db');
const ms = require('parse-ms');
const timelimit = 3.6e+6;
const timelimitdata = new db.table('WorkTime');
exports.run = async (Discord, client, message, args) => {
let previousDaily = await timelimitdata.fetch(`previousDaily_${message.author.id}`);
let cooldowntime = ms(timelimit - (Date.now() - previousDaily));
if (previousDaily !== null && timelimit - (Date.now() - previousDaily) > 0) {
  return message.channel.send(`You've already worked this hour. Come back in ${cooldowntime.hours} hours ${cooldowntime.minutes} mins!`)
} else if (timelimit - (Date.now() - previousDaily) <= 0) {
timelimitdata.set(`previousDaily_${message.author.id}`, Date.now())
let user = message.author;
let balance = await db.fetch(`balance_${user.id}`)
if (balance === null) await db.set(`balance_${user.id}`, 0);
function coinToss() {
    var rand = ['You washed a friends car, they payed you $50.','You drove an uber and got payed $35','You worked in McDonalds and got payed $30','You became a youtuber and got $200','You became a pilot and got payed $70','You beacme a EMT and save someones life and got payed 100$'] 
    return rand[Math.floor(Math.random()*rand.length)];
}
let result = coinToss()
if(result === 'You washed a friends car, they payed you $50.') {
  await db.add(`balance_${user.id}`, 50);
  let balance2 = await db.fetch(`balance_${user.id}`)
   const embed = new Discord.RichEmbed()
              .setAuthor("You Worked ")
              .setDescription(result)
              .setFooter("New Balance: " + balance2)
              .setColor("#83b1fc")
        message.channel.send(embed)

} else if (result === 'You drove an uber and got payed $35') {
  await db.add(`balance_${user.id}`, 35);
  let balance2 = await db.fetch(`balance_${user.id}`)
   const embed = new Discord.RichEmbed()
              .setAuthor("You Worked ")
              .setDescription(result)
              .setFooter("New Balance: " + balance2)
              .setColor("#83b1fc")
        message.channel.send(embed)

} else if (result === 'You worked in McDonalds and got payed $30') {
  await db.add(`balance_${user.id}`, 30);
  let balance2 = await db.fetch(`balance_${user.id}`)
   const embed = new Discord.RichEmbed()
              .setAuthor("You Worked ")
              .setDescription(result)
              .setFooter("New Balance: " + balance2)
              .setColor("#83b1fc")
        message.channel.send(embed)

  } else if (result === 'You became a pilot and got payed $70') {
  await db.add(`balance_${user.id}`, 70);
  let balance2 = await db.fetch(`balance_${user.id}`)
   const embed = new Discord.RichEmbed()
              .setAuthor("You Worked ")
              .setDescription(result)
              .setFooter("New Balance: " + balance2)
              .setColor("#83b1fc")
        message.channel.send(embed)
    } else if (result === 'You worked in McDonalds and got payed $30') {
  await db.add(`balance_${user.id}`, 30);
  let balance2 = await db.fetch(`balance_${user.id}`)
   const embed = new Discord.RichEmbed()
              .setAuthor("You Worked ")
              .setDescription(result)
              .setFooter("New Balance: " + balance2)
              .setColor("#83b1fc")
        message.channel.send(embed)
    } else if (result === 'You became a youtuber and got $200') {
  await db.add(`balance_${user.id}`, 200);
  let balance2 = await db.fetch(`balance_${user.id}`)
   const embed = new Discord.RichEmbed()
              .setAuthor("You Worked ")
              .setDescription(result)
              .setFooter("New Balance: " + balance2)
              .setColor("#83b1fc")
        message.channel.send(embed) 
       } else if (result === 'You became a EMT and saved someones life and got paid $100') {
  await db.add(`balance_${user.id}`, 100);
  let balance2 = await db.fetch(`balance_${user.id}`)
   const embed = new Discord.RichEmbed()
              .setAuthor("You Worked ")
              .setDescription(result)
              .setFooter("New Balance: " + balance2)
              .setColor("#83b1fc")
        message.channel.send(embed) 
}}}