// let age = 18
// if (age <= 18 ){
//     console.log("you are underage");
// }else{
//     console.log("You are not under age");
// }

// console.log("5" - 1)

// console.log(typeof false)

// let price = 19.9;
// if (price >= 20){
//     console.log('you have been granted free shipping');
// } else{
//     console.log('you will be charged 5$')
// }

// testing 3 conditions
// let totalPrice = 11;
// shippingCost;

// if (totalPrice <= 10){
//     console.log('shippingCost = 5')
// } else if (totalPrice <=20) {
//     console.log('shippingCost = 3')
// } else{
//     console.log('shippingCost = 0')
// }


/*
let totalPrice = 11;

if (totalPrice <= 10){
    shippingCost = 5;
} else if (totalPrice <=20) {
    shippingCost = 3;
} else{
    shippingCost = 0;
}

console.log("shipping cost is " + shippingCost);
*/

// calculating shipping cost

/*
function calculateShippingCost(){
    let totalPrice = 11;

    if (totalPrice <= 10){
    shippingCost = 5;
    } else if (totalPrice <=20) {
    shippingCost = 3;
    } else{
    shippingCost = 0;
    }

console.log("shipping cost is " + shippingCost);
}

calculateShippingCost() */

// Function to calculate the age grade

function calculateAgeGrade(){
    let age = 2;

    if (age <= 3){
        ageGrade = "Toddler";
    } else if (age <= 12){
        ageGrade = "Preteen";
    } else if (age <= 19) {
        ageGrade = "Teenager";
    } else{
        ageGrade = "Youth";
    }

    console.log("the child's age grade is " + ageGrade);
}

calculateAgeGrade()



var number = 20; 

function classToBe(){
    age = number;

    if (age <= 10){
        classNow = "primary school";
    }else if (age<= 18){
        classNow = "secondary school";
    } else if (age <= 20){
        classNow = "University";
    }else{
        classNow = "Prison";
    }

    console.log("send the child to " + classNow)
}

classToBe()

// learning variables from es6 with tutorial point
var gender = "male";

console.log("This person is a " + gender);