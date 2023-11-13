const profileModel = require(`../models/profileSchema`);

module.exports = {
    name: 'start',
    aliases: [],
    permissions: [],
    cooldown: 1,
    description: 'Allows the user to play the game',
    execute(client, message, args){
        let profile = profileModel.create({
            userID: message.author.id,
            serverID: message.guild.id,
            gold: 0,

        })
        profile.save();
    }
}
