// if

// const isUserloggedIn = ture
const temperature = 41

// if(temperature === 40 ){
// console.log("LESS THAN 50");

// }else{

//     console.log("temperature is greater than 50");
// }

// <,>, <= ,>= ,== != ,=== ,!==

// const score = 200
// if(score >100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
    
// }
// console.log(`user power: ${power}`);

// const balance = 1000

// if(balance >500) console.log("test");

// if(balance < 500){
//  console.log("less than");
// } else if (balance <750){
//     console.log("less than 750");
// }else if (balance <900){
//     console.log("less than 750");
// }else {
//     console.log("less than 1200");
// }


const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmali = true

if(userloggedIn && debitCard ){
    console.log("Allow to buy coures ");
    
}
if(loggedInFromGoogle || loggedInFromEmali){
    console.log("User logged in");
}