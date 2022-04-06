// Make a keyless car EVEN BETTER!

var age = prompt("What is your age?");

//function declaration and using alert
function checkDriverAge(inputAge) {
    if (Number(inputAge) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(inputAge) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(inputAge) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
    return alert;
}

//function expression and using console.log
checkAge = function checkDriverAge2(age) {
    if (Number(age) < 18) {
        console.log("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        console.log("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }
    return console.log;
}

//calling function declation
checkDriverAge(age);

//calling function expression
console.log(checkAge(age))