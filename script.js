
var nome = document.getElementById("nome_txt");
var email = document.getElementById("email_txt");
var confirmacao = document.getElementById("confirma-email_txt");
var senha = document.getElementById("password_txt");
var telefone = document.getElementById("telefone_txt");
var endereco = document.getElementById("endereco_txt")

var botao = document.getElementById("enviar_btn");

function enviar_dados(){
    if(nome.value.length < 3){
        alert('O nome precisa possuir pelo menos 3 caracteres')
        return false;
    }

    if(email.value != confirmacao.value){
        alert('O e-mail informado precisa ser igual nos dois campos')
        return false;
    }

    if(senha.value.length < 8){
        alert('A sua senha deve conter no mínimo 8 dígitos')
        return false;
    }
    
    if(telefone.value.length != 11){
        alert('Por favor insira um número de telefone válido')
        return false;
    }

    alert('Parabéns, seu cadastro foi realizado com sucesso!\n\n' + 'Nome: ' + nome.value + '\n' + 'Email: ' + email.value + '\n' + 'Telefone: ' + telefone.value + '\n' + 'Endereço: ' + endereco.value);
    return true;
}

botao.onclick = enviar_dados;