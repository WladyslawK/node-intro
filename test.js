import fs from 'node:fs'

const readPjson = async () => {
    const pjsonPath = new URL('./package.json', import.meta.url).pathname
    const file = 'package.json'
    fs.readFile(pjsonPath, (err, data) => {
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    })
}

readPjson();