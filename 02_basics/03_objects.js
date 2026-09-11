// singleton

//oeject literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Tejaplsinh",
    "full name":"Pal tejpalsinh",
    [mySym]:"mykey1",
    age: 18,
    location: "jaipur",
    emali:"paltejpal@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]
}

// console.log(JsUser.emali)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.emali = "om@gmail.com"
// Object.freeze(JsUser)
JsUser.emali ="om#gmail.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello Js user,${this.name}`);

}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

