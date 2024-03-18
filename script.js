let win=0
let lose=0
let draw=0
function play(userChoice){
    const choices =['rock','paper','scissors']

    const  computerChoices=choices[Math.floor(Math.random()*choices.length)]

    let result
    if (userChoice === computerChoices) {
        result = "Ничья!";
        draw++
    } else if ((userChoice === 'rock' && computerChoices === 'scissors') ||
        (userChoice === 'paper' && computerChoices === 'rock') ||
        (userChoice === 'scissors' && computerChoices === 'paper')) {
        result = "Вы победили!";
        win++
    } else {
        result = "Вы проиграли!";
        lose++
    }

    document.getElementById('win').innerHTML = "win: " + win;
    document.getElementById('lose').innerHTML = "lose: " + lose;
    document.getElementById('draw').innerHTML = "draw: " + draw;

    document.getElementById('result').innerHTML = "Ваш выбор: " + userChoice + "<br>Выбор компьютера: " + computerChoices + "<br>Результат: " + result;

}

