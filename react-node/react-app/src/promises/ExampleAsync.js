function checkValues(n1, n2) {
    if (n1 > 0 && n2 > 0) {
        return true
    }
    else {
        return false
    }
}


async function addition(n1, n2) {
    const flag = await checkValues(n1, n2)
    return new Promise((resolve, reject) => {

        if (flag) {
            if (n1 + n2 > 30) {

                resolve(n1 + n2)
            } else {
                reject("error=" + (n1 + n2))
            }

        } else {
            reject("error= Invalid values...")
        }
    })

}

const add = addition(10, 20)
add.then((r) => {
    console.log(r)
}).catch((err) => {
    console.log(err)
})
// console.log(add)