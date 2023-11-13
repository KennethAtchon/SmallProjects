module.exports = {
    name: 'kick',
    aliases: [],
    permissions: ["KICK_MEMBERS"],
    cooldown: 1,
    description: 'This is a kick command.',
    execute(client, message, args){
        
        let member = message.mentions.members.first();
        if(!member) return message.reply("Please mention a valid member of this server");
        if(!member.kickable) return message.reply("I cannot kick this member!");

        member.kick();
    
    }
}


