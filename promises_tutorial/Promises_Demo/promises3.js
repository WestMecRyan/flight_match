function createPromiseTest(shouldFail = false) { 
    return new Promise(function (resolve, reject) { 
        try { 
            if (shouldFail) { 
                throw new Error('Intentional failure.');
            }
            resolve('Everything is good.');
        } catch (err) { 
            reject(err.message);
        }
    }) 
}

module.exports = { createPromiseTest };