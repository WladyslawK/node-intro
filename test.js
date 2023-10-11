import fs from 'node:fs'

const readPjson = async () => {
    const pjsonPath = new URL('./package.json', import.meta.url).pathname
    fs.readFile(pjsonPath, (err, data) => {
        console.log(data)
    })
}

readPjson();