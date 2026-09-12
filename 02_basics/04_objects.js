// const tinderUSER = NEW object()
const tinderUser = {}

tinderUser.id = "1234abc"
tinderUser.name = "om"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "om@gmail.com",
    fullname:{
        userfullname:{
            firstname: "tejaplsinh",
            lastname:"Pal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2: "b"}
const obj2 = {3:"a",4: "b"}
const obj4 = {5:"a",6: "b"}

// const obj3 ={obj1,obj2}

const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3)

const users = [
    {
        id :1,
        email:"p@gmail.com"
    },

       {
        id :1,
        email:"p@gmail.com"
    },
       {
        id :1,
        email:"p@gmail.com"
    },
       {
        id :1,
        email:"p@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const coures = {
    coursename : "js in hindi",
    price : "999",
    couresInstuructor :"Tejpalsinh"
}

// const {couresInstuructor: instuructor} = coures

// console.log(instuructor);

