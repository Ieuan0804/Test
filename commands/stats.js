exports.run = (Discord, client, message, args) => {
var list = client.channels.array().sort();
message.channel.send(" Users: " + client.users.size.toLocaleString() + " Guilds: " + client.guilds.size)
}
