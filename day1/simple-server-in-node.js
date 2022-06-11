let fs = require('fs')
let http = require('http')

let port = 3000
let host = 'localhost'

let server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', (err, data) => {
		if (err) 
			throw err;
		console.log("Operation Success");
        response.end(data)
    })
})

server.listen(port, host, (error) => {
    if (error) {
        return console.log('Erorr :', error)
    }

    console.log(`Server is listening on ${host}:${port}`)
})