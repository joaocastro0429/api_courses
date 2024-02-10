import http from 'http'


const rota = {
    "/": "curso de Express API",
    "/course": "Entrei na rota cursos",
    "/teacher": "Encontrei professores"

}



const server = http.createServer((request, response) => {

    response.writeHead(200, { "Content-Type": "text/plain" })
    response.end(rota[request.url])

})


server.listen(3333)