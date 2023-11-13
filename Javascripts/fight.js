class Stats {
    constructor(stamina, attack, defense, speed, name){
        this.stamina = stamina;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed
        this.name = name
    }
    damage(theattack){
        // the attack is 5th of the damage of the cards
        theattack = theattack / 5;
        // defense divided by 2 minus the attack 
        theattack = theattack - (this.defense / 20);

        if (theattack <= 0)
        {
            theattack = 1;
        }

        return theattack;
    }
    healme(theheal){
        return this.stamina = this.stamina + this.heal;
    }
}


// stimulates a battle between two fighters
function battle(fighter1, fighter2){


if(fighter1.speed < fighter2.speed)
{
    console.log(fighter2.name + " is faster! They go first.");
while(fighter1.stamina > 0 || fighter2.stamina > 0)
{

damagedealt = fighter1.damage(fighter2.attack);

console.log(fighter2.name + " has dealt " + damagedealt + " to " + fighter1.name);

fighter1.stamina = fighter1.stamina - damagedealt;

// console.log(fighter1.name + "is using heal! Current stamina: " + fighter1.stamina);
// fighter1.heal(15);

if(fighter1.stamina >= 0)
{
    console.log(fighter1.name + " is still alive.");
    console.log(fighter1.name + " stamina: " + fighter1.stamina)
    console.log("Starting counterattack.\n");
}else
{
    console.log(fighter1.name + " is dead.");
    return fighter2;
}

damagedealt = fighter2.damage(fighter1.attack);

console.log(fighter1.name + " has dealt " + damagedealt + " to " + fighter2.name);

fighter2.stamina = fighter2.stamina - damagedealt;

if(fighter2.stamina >= 0)
{
    console.log(fighter2.name + " is still alive.");
    console.log(fighter2.name + " stamina: " + fighter2.stamina)
    console.log("Starting counterattack.\n");
}else
{
    console.log(fighter2.name + " is dead.");
    return fighter1;
}

}
}else
{
    console.log(fighter1.name + "is faster! They go first.");
    while(fighter1.stamina > 0 || fighter2.stamina > 0)
    {
damagedealt = fighter2.damage(fighter1.attack);

console.log(fighter1.name + " has dealt " + damagedealt + " to " + fighter2.name);

fighter2.stamina = fighter2.stamina - damagedealt;

if(fighter2.stamina >= 0)
{
    console.log(fighter2.name + " is still alive.");
    console.log(fighter2.name + " stamina: " + fighter2.stamina)
    console.log("Starting counterattack.\n");
}else
{
    console.log(fighter2.name + " is dead.");
    return fighter1;
}
damagedealt = fighter1.damage(fighter2.attack);

console.log(fighter2.name + " has dealt " + damagedealt + " to " + fighter1.name);

fighter1.stamina = fighter1.stamina - damagedealt;

// console.log(fighter1.name + "is using heal! Current stamina: " + fighter1.stamina);
// fighter1.heal(15);

if(fighter1.stamina >= 0)
{
    console.log(fighter1.name + " is still alive.");
    console.log(fighter1.name + " stamina: " + fighter1.stamina)
    console.log("Starting counterattack. \n");
}else
{
    console.log(fighter1.name + " is dead.");
    return fighter2;
}

    }

}

}


function supportclass(index)
{
    let support;
    switch(index)
    {
        case 1:
            support = new Stats(138, 65, 130, 20, "Herald",0);
            return support;
        case 2:
            support = new Stats(130, 55, 140, 25, "Hulk",0);
            return support;
        case 3:
            support = new Stats(120, 50, 130, 20, "Buster",0);
            return support;
        case 4:
            support = new Stats(140, 45, 135, 10, "Ran",0);
            return support;
    }
}

let fighter1 = new Stats(100, 100, 100, 100, "Saiyan",0);

let fighter2 = new Stats(139, 99, 100, 12, "Steven",0);

let support1 = supportclass(1);

let healer = new Stats(120, 50, 120, 57, 'Ven',10);


winner = battle(healer,support1);
console.log(winner);

// var n = healer.stamina;
// n = n.toString();
