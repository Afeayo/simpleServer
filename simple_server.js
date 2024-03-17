const http = require('http')
const HOSTName = 'localhost'
const PORT =8900


function  resquestHandler(req, res){
    res.writeHead(200)
    res.end('Afe Ayo Sunday')

}

const server = http.createServer(resquestHandler);
server.listen(8900, HOSTName, ()=>{
    console.log(`server listing @ ${HOSTName} ${PORT} To God be the Glory.........`)
});
