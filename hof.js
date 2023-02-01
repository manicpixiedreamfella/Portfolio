//______________________________________________________
//Higher Order Functions is hwen you call a function using another function as a parameter

const whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`);
}
//created a function that will print good _____timeofday

const greet = (time, fn) => {
    if (time < 1200){
        fn("Morning !")
    } else if (time <= 1200){
        fn("Afternoon !")
    } else fn("Evening !")
}

//created a function that 
greet(1400, whichGreeting)


const add = (num1) => {
    return (num2) => {
        return num1 + num2;
    }
}

console.log(add(2)(1));

