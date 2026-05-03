//Routing + HTTP Method

//Basic Server setup
const http = require('http');
let url = require('url');

//Basic http request
const server = http.createServer((request, response)=>{
    const parsedUrl = url.parse(request.url, true);
    const path =parsedUrl.pathname;
    const method = request.method;
    response.setHeader('Content-Type', 'application/json');

//Handle route
    if (path === '/' && method === 'GET') {
        response.end(JSON.stringify({message: 'Welcome Back'}));
    } 
    
//multiple routes
    else if (path === '/users' && method === 'GET'){
        response.end(JSON.stringify({message: ['Seun', 'Oluwaseun', 'Gaius']}));
    } 
    else if (path === '/users' && method === 'POST'){
        response.end(JSON.stringify({message: 'User created'}));

//Route parameters
    } else if (path.startsWith('/users') && method === 'GET'){
        const userID = path.split('/')[2];
        response.end(JSON.stringify({message: `User ID is ${userID}`}));
    }

//Query strings
    else if(path === '/search'&& method === 'GET') {
        const query = parsedUrl.query;
        response.end(JSON.stringify({query}));
    }

    else {
        response.statusCode = 400;
        response.end(JSON.stringify({message: 'Route not found'}))
    }
});
server.listen(8080, ()=>{
        console.log('Server running on port 8080');
})

