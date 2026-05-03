//Handling POST Requests in Node.js

//Node cannot read this following code automatically, the data must be collected manually
// {
//     "name": "Seun",
//     "age": 25
// }

const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    const path = parsedUrl.pathname;
    const method = request.method;

    response.setHeader('Content-Type', 'application/json');

    if (path === '/users' && method === 'POST') {
        let body = '';

        request.on('data', chunk => {
            body += chunk.toString();
        });

        request.on('end', () => {
            try {
                const data = JSON.parse(body);

//  to show error
                if (!data.name || !data.age) {
                    response.statusCode = 400;
                    return response.end(JSON.stringify({
                        error: 'Name and age are required, complete all fields'
                    }));
                }

//It's successful, User created 
                response.statusCode = 201;
                return response.end(JSON.stringify({
                    message: 'User created successfully',
                    user: data
                }));

//catching error
            } catch (error) {
                response.statusCode = 400;
                return response.end(JSON.stringify({
                    error: 'Invalid JSON'
                }));
            }
        });

    } else {

// Handle unknown routes
        response.statusCode = 404;
        response.end(JSON.stringify({
            error: 'Route not found'
        }));
    }
});

server.listen(5000, () => {
    console.log('Server running on port 5000');
});