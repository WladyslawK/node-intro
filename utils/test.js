const delay = (time) => {
    
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Time out') 
                resolve()
            }, time)
        })
}

const run = async () => {
    await delay(3000)
}