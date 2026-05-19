const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(`
        <html>
        <head>
            <title>DevOps Docker  Project javeed</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: linear-gradient(to right, #4facfe, #00f2fe);
                    color: white;
                    text-align: center;
                    padding-top: 100px;
                }
                .card {
                    background: rgba(0,0,0,0.3);
                    padding: 30px;
                    border-radius: 15px;
                    display: inline-block;
                }
                h1 {
                    font-size: 40px;
                    margin-bottom: 10px;
                }
                p {
                    font-size: 20px;
                }
                .footer {
                    margin-top: 20px;
                    font-size: 14px;
                    color: #ddd;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1> DevOps Project docker+jenkins</h1>
                <p>Hello from Jenkins + Docker + AWS EC2 </p>
                <p>Status: <b style="color:lightgreen;">Running Successfully </b></p>
                <div class="footer">
                    <p>Powered by Node.js | Jenkins | Docker | AWS</p>
                </div>
            </div>
        </body>
        </html>
    `);

    res.end();
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
