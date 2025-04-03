const a = require ("express")
const b = a()

var mensagem = "Vai corinthians!!!!"

b.get('/meuendpoint', (request, response)=>{
    response.send('sua resposta aqui!!!')
})

b.listen(3001,()=>{
    console.log(mensagem)})
