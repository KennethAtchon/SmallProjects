// }else if(command === 'russianroulette' && playingRoulette == false){
        
//     message.channel.send("Your user id is " + message.author.id);
//     roulette.push(message.author.id);
//     console.log(roulette);

//     playingRoulette = true;

// }else if(command === 'play' && playingRoulette == true)
// {
//     if(roulette.includes(message.author.id))
//     {
//         message.channel.send("You are already in the roulette.");
//     }
//     else{
//         roulette.push(message.author.id);
//     console.log(roulette);
//     message.channel.send("You have been added to the roulette.");
//     }
// }else if(command === 'log')
// {
//     console.log(roulette);

// }else if(command === 'start' && message.author.id === roulette[0] && playingRoulette == true)
// {
//     randomint = getRandomInt(roulette.length);
//     let convertBacktick = roulette[randomint];
//     let backtick = eval('`'+convertBacktick+'`');
//     const memberTarget = message.guild.members.cache.get(backtick);
//     memberTarget.kick("Lost russianroulette.");
//     message.channel.send("The loser has been kicked!");
//     roulette = [];
    
// }else if(command === 'ckick')
// {
//     let convertBacktick = "417390577345101824";
//     let backtick = eval('`'+convertBacktick+'`');
//     console.log(backtick);
//     const memberTarget = message.guild.members.cache.get(backtick);
//     //const memberTarget = message.guild.members.cache.get(`417390577345101824`);
//     memberTarget.kick();

// }
//});