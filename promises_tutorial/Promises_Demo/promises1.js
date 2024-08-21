// the Promise object is cached to a variable. It is passed a callback function that takes
// two objects? resolve and reject, which is the anonymous? callbacks that can 
// be named anything? 
let sayHello = new Promise(function (resolve, reject) {
    // resolve("Hi, world");
    reject("Something went wrong");
});

sayHello.then(function (response) {
    console.log(response);
}).catch(function (error) { 
    console.log(error);
});