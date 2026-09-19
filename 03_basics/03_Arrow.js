const user = {
    username : "tejpalsinh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username= "pal"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "om"
//     console.log(this.username);
// }
// chai()

const chai =()=>{

        let username = "om"
        console.log(this);
}

// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4));

// const addTwo = (num1,num2) => (num1+num2)
const addTwo = (num1,num2) => ({username:"om"})
console.log(addTwo(3,4));

// const maArray = [2,5,3,7,8]
// maArray.forEach(()=>)