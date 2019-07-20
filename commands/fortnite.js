
const Discord = require("discord.js");
const Client = require('fortnite');
const fortnite = new Client('948ac340-6e14-4d31-9a8c-49b01fa64178');

module.exports.run = async (client, message, args) => {
        //
        let username = args[0];
        let platform = args[1] || "pc";
        
        fortnite.user(username, platform).then(console.log);
               
}
        
        
                
