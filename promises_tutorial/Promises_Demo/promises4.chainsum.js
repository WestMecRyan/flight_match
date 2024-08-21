// what's the difference in using arrow function syntax?
// does resolve and reject need to be the same word?
// what's inside resolve and reject functions?
let count = new Promise(function (resolve, reject) {
    resolve(1);
});

function addOne(num) {
    return num + 1;
}
count.then(function (num) { return addOne(num); }).then(function (num) { return addOne(num) }).then(function (num) { console.log(num); }).catch(function (error) { console.warn(error) });