const http = require('http')

const server = http.createServer((req,res)=>{
 
 if(req.url === '/'){
     res.end('Hello World')
 }
 else if(req.url === '/about'){
     res.end('Bye World')
 }
 
 res.end(`
 <h1>Page not found</h1>
 <a href='/'>Back</a>
 `)

})

server.listen(5000)