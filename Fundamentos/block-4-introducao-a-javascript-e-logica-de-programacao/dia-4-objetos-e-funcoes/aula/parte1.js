let player = {
    name : 'Marta',
    lastName : 'Silva',
    age : '34',
    medalsInfo : {
        golden : '2',
        silver : '3',
    },
    bestInTheWorld :[2006,2007,2008,2009,2010,2018],
};
console.log("A jogagora "+player.name +" " +player.lastName +" tem "+ player.age);
console.log("A jogagora "+player.name +" " +player.lastName +" foi eleita a melhor do mundo por "+ player.bestInTheWorld.length + " vezes");
console.log("A jogadora possui "+player.medalsInfo.golden + " medalhas de ouro e " + player.medalsInfo.silver +" de prata" );