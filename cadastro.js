//criaçao do nosso array que irá receber dados do cliente
var cadastrados = [];

function cadastrar() {

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var genero = document.querySelector('input[name="genero"]:checked');

    if (nome && email && senha && genero) {

        //push é um metodo para adicionar novas informações ao nosso array
        cadastrados.push({ nome: nome, email: email, senha: senha, genero: genero.value });

        //aqui é para apagar o campo do formulario
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('senha').value = '';
        alert("cadastro feito com sucesso, Seja bem vindo")
        console.log(cadastrados);
        //dando um tempo de 7 seg
        setTimeout(function() {
            window.location.href = "index.html";
          }, 3000);
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
}



