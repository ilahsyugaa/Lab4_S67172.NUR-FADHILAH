function square(number){
    return number*number;
}

function sumOfCubes(num1, num2){
    var cube1 = num1*num1*num1;
    var cube2 = num2*num2*num2;
    return cube1 + cube2;
}

function reverseNumber(number){
    var numString = number.toString();
    var reverseString = numString.split('').reverse().join('');
    var reverseNumber = parseInt(reverseString);
    return reverseNumber;
}

function DivisibleNumbers(){
    var numString = number.toString();
    var reverseString = numString.split('').reverse().join('');
    var reverseNumber = parseInt(reverseString);
    return reverseNumber;
}

function DivisibleNumbers(){
    const z = document.getElementById("num4").value;
    let nums = "";
    for(let i = 1; i <+ 100; i++) {
        if ((i % z) === 0) {
            if (nums === "") {
                nums = i.toString();
            }
            else {
                nums += "," + i;
            }
        }
    }
    document.getElementById("answer4").innerHTML = "Answer: " + nums;

}