const charModel = require(`./models/CharSchema`);


CreateCharacter = () => {
    function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let charprofile = charModel.create({
        
        CharName: 'Billy',
        CharStamina: getRandomInt(60,100),
        CharAttack: getRandomInt(60,100),
        CharDefense: getRandomInt(60,100),
        CharMana: getRandomInt(60,100),
    })
    charprofile.save();
};

CreateCharacter();
