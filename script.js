function rollDice() {

    // Assign each dice variable to Id in index.html
    var dice1 = document.getElementById('dice1');
    var dice2 = document.getElementById('dice2');
    var dice3 = document.getElementById('dice3');
    var dice4 = document.getElementById('dice4');
    var dice5 = document.getElementById('dice5');

    // Change value of each dice to random number from 1 to 6
    dice1.value = Math.floor(Math.random() * 6) + 1;
    dice2.value = Math.floor(Math.random() * 6) + 1;
    dice3.value = Math.floor(Math.random() * 6) + 1;
    dice4.value = Math.floor(Math.random() * 6) + 1;
    dice5.value = Math.floor(Math.random() * 6) + 1;
}