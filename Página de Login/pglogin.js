function abrir(){
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    if(login == "joao" && senha == "1234" || login == "caio" && senha == "senha" || login =="bruno" && senha == "senha123"){
       alert ("Acesso Permitido");
    }
    else if (login != "joao" && senha == "1234"|| login!="caio" && senha == "senha" || login!="bruno" && senha == "senha123"){
        alert("usuário invalido,verifique seu usuario e tente novamente")
    }
    else if (login == "joao" && senha != "1234" || login == "caio" && senha !="senha"|| login == "bruno" && senha !="senha123"){
        alert("Senha inválida, verifique sua senha e tente  novamente")
    }
    else{
        confirm("Esse usuário ainda não esta cadastrado, gostaria de criar um novo usuário?")
    }

}