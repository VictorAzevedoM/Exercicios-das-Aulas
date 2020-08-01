 let num = prompt("Digite um número")
 let expo = prompt("Agora digite um número para servir como expoente")
 
 if(num != null &&  expo != null){
        let resultado = Number(num)**Number(expo)
        alert(resultado)
 }
 else{
     alert("Você digitou algo que não era um número")
 }
