p = new Promise((resolve, reject) => {

    const posibility = Math.random()
    console.log(posibility)
    setTimeout(() => {
        if ((posibility * 10) > 7) {
            resolve("Success.....")
        } else {
            reject("Failed......")
        }

    }, 3000)

})

console.log(p)

p.then((data) => {
    console.log(data + " from then 1..........")
    return data
}).then((data) => {
    console.log(p)
    console.log(data, "from then 2..........")
    return data
})
    .then((data) => {
        console.log(data, "from then 3..........")
    })
    .then(() => {
        console.log("from then 4..........")
    })
    .then(() => {
        console.log("from then 5..........")
    }).catch((err) => {
        console.log(err + " from catch..........")
        console.log(p)
    })

// console.log("Out of Promise....")