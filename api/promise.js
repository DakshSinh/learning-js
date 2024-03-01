// callback
const promise_1 = new Promise((resolve, reject) => {
    // An async task
    // DB calls, netwoek calls, cryptogrphy
    setTimeout(() => {
        console.log('Async task');
        resolve()
    }, 1000)
})
// .then -> resolve
promise_1.then(() => {
    console.log("Promise consumed")
});

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(() => {
    console.log('Async 2 resolved')
})

const promise_3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // used to pass data to .then via reslover parameters
        // usually objects, functions, arrays
        resolve({
            uname: 'Daksh', price: 'demo@example.com'
        })
    }, 1000)
})

promise_3.then((user) => {
    console.log(user)
})

const promise_4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = false
        if (!err) {
            resolve({
                userName: "daksh",
                pass: "pass123"
            })
        } else {
            reject('ERROR: Oops, something went wrong')
        }
    }, 1000)
})
promise_4
    .then((user) => {
        console.log(user)
        return user.userName
    })
    .then((userName) => {
        console.log(userName)
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log("Promise resolved or rejected")
    });

const promise_5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true
        if (!err) {
            resolve({
                userName: "daksh",
                pass: "pass123"
            })
        } else {
            reject('ERROR: Oops, something went wrong')
        }
    }, 1000)
})
async function consumePromise_5() {
    try {
        const resp = await promise_5
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}
consumePromise_5()

async function fetchUser() {
    try {
        const resp = await fetch('https://api.github.com/users/Dakshsinh')
        const wait = await resp.json()
        console.log(wait);
    } catch (error) {
        console.log("E: ", error);
    }
}

fetchUser()

fetch('https://api.github.com/users/Dakshsinh')
    .then((response) => (
        response.json()
    ))
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })