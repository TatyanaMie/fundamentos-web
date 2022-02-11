
/*
Formas para acessar o DOM:
por Tag: getElementByTagName()
por Id: getElementById()
por nome: get ElementsByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/
/*let nome = document.querySelector("#nome")
ou : let nome = window.document.getElementById('nome')
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')

let nomeOk = false //aqui ele já esta flndo q é um boolean (ao colocar o false)
let emailOk = false
let assuntoOk = false

//aumentar o tamanho dos campos
nome.style.width = '100%'
email.style.width = '100%'

/*Função para validar o campo de Nome - só vamos usar essa função quando chama-la por meio de um evento
o campo nome não pode ter menos que 3 letras, por isso terá a condicional If.
*length - para saber o tamanho
* let txtNome = document.querySelector('#txtNome') -> trazer a <div id="txtNome"></div> que foi criada em Contato para essa função
*txtNome.innerHTML = 'Nome inválido'->innerHTML serve para colcoar um valor dentro dessa div txt.
*txtNome.style.color = 'red' -> mudar a cor
*/

function validarNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
        nomeOk = false
    }else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'blue'
        nomeOk = true
    }
}

/*
*if(email.value.indexOf('@') == -1) -> indexof = metodo para saber se tem um valor específico, dentro do () inserir o valor que deseja procurar.
 ele retorna 1 ou -1 (1 = existe o elemento, -1 = não existe)
*/
function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'blue'
        emailOk = true
    }
}

/*
*txtAssunto.style.display = 'none' --> fazer com que o elemento não apareça na tela. 
*txtAssunto.style.display = 'block' --> vai bloquear esse função de style.display

*assuntoOk = true --> A próxima função será a enviar(), que pede que seja colocada esse condição para que possa ser enviado o formulário. 
*/
function validarAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >=100){
        txtAssunto.innerHTML = 'Texto muito grande. Digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
        
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Preencha o formulário corretamente antes de enviar.')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}