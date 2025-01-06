const http = require('http');

// createServer() takes FUNCTIONS as a parameters : request , response. 1st parameter will always indicate "request" and the 2nd parameter will always indicate "response"
// The request parameter will hit the web page or request the web page to give us data while the response parameter is the response that we give to the user.

http.createServer((req, res)=>{
res.write("<h2>Hello we are showing a response and then we will end it</h2>");
res.end();
}).listen(4500);  