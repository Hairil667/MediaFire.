//Buat run di Local host ya wak ini!! 

// By FluXz Official

const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {
    // Tentukan file HTML yang akan dilayani
    const filePath = path.join(__dirname, 'index.html');

    // Cek apakah file ada
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Error loading the file');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});