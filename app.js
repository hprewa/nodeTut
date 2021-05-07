const http = require('http')



const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page')
    }
    else if(req.url==='/about'){
        res.end('We are awesome coders')
    }else{
    res.end(`
        <h1>OOps!</h1>
        <p1>Page doesn't exist</p1>
        <a href='/'>Back to Home</a>

    `)
        }
    

})


server.listen(5000);


