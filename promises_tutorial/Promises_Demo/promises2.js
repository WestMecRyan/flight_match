let sayHello = new Promise(function (resolve, reject) {
    try {
        // some function or code that could fail/throw an error
        resolve("Hi, world");
    }
    catch (err) {
        reject('second error message');
    };
});

sayHello.then(function (success) {
    console.log(success);
}).catch(function (error) {
    console.warn(error);
});

module.exports = { sayHello };