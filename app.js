const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to nodejs')
    }
    if(req.url === '/about'){
        res.end('this is about page')
    }
    res.end(`<h1>oops!</h1> 
    <p>we can't find the page</P>
    `)

})

server.listen(5000)





