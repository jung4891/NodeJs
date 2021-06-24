var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname + url);   // C:\Workspaces\NodeJs/index.html
    console.log(__dirname);         // C:\Workspaces\NodeJs
    console.log(url);               // /index.html
    response.end(fs.readFileSync(__dirname + url));  // 위 경로의 파일을 읽어서 응답으로 옴
    // response.end('hyukJung : ' + url);             // hyukJung : /index.html
    // 즉, end() 이 안에 넣는 코드에 따라 사용자에게 전송하는 데이터가 바뀐다!!
    // 다시말해, 사용자에게 전송할 데이터를 생성할 수 있다는것. 이게 Node.js의 장점이다.
    // 이 기능은 Apache 웹서버는 할수 없고 PHP, Python의 장고와 같은 것들은 할 수 있다.
});
app.listen(3000);
