function sumOfDigits(number){
    const numString = number.toString();

    let sum = 0;

    for(let i = 0; i < numString.length; i++){
        sum += parseInt (numString[i]);
    }

    return sum;
}

function FindPower(){
    const x = document.getElementById("num2X").value;
    const y = document.getElementById("num2Y").value;

    if (y == 0){
        document.getElementById("answer2").innerHTML = "Answer: 1";
    } else if (y < 0){
        document.getElementById("answer2")?.innerHTML = "Answer: " + (1/Math.pow(x, -y));
    } else {
        document.getElementById("answer2")?.innerHTML = "Answer: " +Math.pow(x, y);
    }
}