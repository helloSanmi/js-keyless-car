// Make a keyless car EVEN BETTER!

//function declaration and using alert
function checkDriverAge() {
    let age = prompt("What is your age?");
    let msg = ''
    if (Number(age) < 18) {
        msg = "Sorry, you are too yound to drive this car. Powering off";
    } else if (Number(age) > 18) {
        msg = "Powering On. Enjoy the ride!";
    } else if (Number(age) === 18) {
        msg = "Congratulations on your first year of driving. Enjoy the ride!";
    }
    return msg;
}

//function expression and using console.log
checkAge = function checkDriverAge2() {
    let age = prompt("What is your age?");
    let msg = ''
    if (Number(age) < 18) {
        msg = "Sorry, you are too yound to drive this car. Powering off";
    } else if (Number(age) > 18) {
        msg = "Powering On. Enjoy the ride!";
    } else if (Number(age) === 18) {
        msg = "Congratulations on your first year of driving. Enjoy the ride!";
    }
    return msg;
}

//calling function declation
myDriver = checkDriverAge();
alert(myDriver)

//calling function expression
cAge = checkAge()
console.log(cAge)
