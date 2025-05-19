//DICE ROLLER PROGRAM


function rollDice(){

    const numOfDice = document.getElementById("numOfDice");
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    let values = [];
    let images = [];


    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6 ) + 1;
        console.log(value);
    }
}