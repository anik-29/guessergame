document.getElementById('luck').addEventListener('click', luckiest);
var button1 = document.querySelector('#restart');
button1.disabled = true;
var count = 0;

function luckiest(e) {
    var e = Math.floor(Math.random() * 20) + 1;

    for (let i = 0; i < 3; i++) {
        var count = 0;

        let number = prompt(`You have ${3-i} chance to play.Enter a number`);


        if (number < e) {
            alert('Correct answer is greater');
        } else if (number > e) {
            alert('Correct answer is smaller');
        } else if (number == e) {
            document.getElementById('result').innerHTML = "You Win";
            count++;
            break;

        }

    }
    if (count == 0)
        document.getElementById('result').innerHTML = "You Lose";

    const button = document.querySelector('#luck');
    button.disabled = true;
    button1.disabled = false;


}

button1.addEventListener('click', reStart)

function reStart(e) {
    var count = 0;



    var e = Math.floor(Math.random() * 20) + 1;


    for (let i = 0; i < 3; i++) {

        let number = prompt(`You have ${3-i} chance to play.Enter a number`);


        if (number < e) {
            alert('Correct answer is greater');
        } else if (number > e) {
            alert('Correct answer is smaller');
        } else if (number == e) {
            document.getElementById('result').textContent = "You Win";

            count++;
            break;

        }

    }
    if (count == 0)
        document.getElementById('result').textContent = "You Lose";

}