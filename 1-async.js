const { readFile, writeFile} = require('fs');
 console.log('start')
readFile('./content/aba.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err)
        return;
    }
const first = result;

writeFile('./content/jo.txt',
 `here is result: ${first} `, (err, result)=>{
    if(err){
        console.log(err)
        return;
    }

    console.log('throgh everything')
 })
})

console.log('the magic start here')





