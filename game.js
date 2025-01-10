let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 30;
let boxcount = 0;

document.getElementById('btn').addEventListener('click', function () {
    const guess = parseInt(document.getElementById('guessInput').value);
    const lock = document.getElementById('lock');

    if (guess === randomNumber) {
        boxcount++;
        lock.src = 'open2.jpg';
        display(`Congratulations! You opened Box ${boxcount}`);

        if (boxcount === 5) {
            display("Congratulations! You won the game!");
            document.getElementById('btn').disabled = true;
            document.getElementById('guessInput').disabled = true;
            return;
        }

        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 30;

        setTimeout(() => {
            lock.src = 'close.jpg';
            display(`Guess the number to open Box ${boxcount + 1}`);
            document.getElementById('guessInput').value ="";
        }, 5000);
    } 
    else if (guess < randomNumber) {
        display('Number is too Low! Try a higher number.');
    } 
    else {
        display('Number is too High! Try a lower number.');
    }

    attempts--;

    if (attempts === 0) {
        display('Game Over! Try Again.');
        document.getElementById('btn').disabled = true;
        document.getElementById('guessInput').disabled = true;
    }
});

function display(msg) {
    document.getElementById('msg').textContent = msg;
}
