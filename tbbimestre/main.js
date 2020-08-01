
//Elementos HTML
const tabela = document.getElementById("registro")
const expandir = document.getElementsByClassName("expandir")

//função para calcular a nota final
document.getElementById("calc").addEventListener("click",function calcular(){ 

    let nome = document.getElementById("nome").value
// váriaveis com os valores dos quatro bimestres
let pbim = Number(document.getElementById("pbim").value)
let sbim = Number(document.getElementById("sbim").value)
let tbim = Number(document.getElementById("tbim").value)
let qbim = Number(document.getElementById("qbim").value)
//variável com a média 
let nfinal = (pbim + sbim + tbim + qbim )/4
//Esse condicional é para garantir que as notas sejam sempre menores que 10
if(pbim <=10 && sbim <=10 && tbim <=10 && qbim <=10 )
{
   let row = tabela.insertRow()
   let celula = row.insertCell()
   let dados = document.createTextNode(nome)
   celula.appendChild(dados)

   let celula1 = row.insertCell()
   let dados1 = document.createTextNode(pbim)
   celula1.appendChild(dados1)

   let celula2 = row.insertCell()
   let dados2 = document.createTextNode(sbim)
   celula2.appendChild(dados2)

   let celula3 = row.insertCell()
   let dados3 = document.createTextNode(tbim)
   celula3.appendChild(dados3)

   let celula4 = row.insertCell()
   let dados4 = document.createTextNode(qbim)
   celula4.appendChild(dados4)

   let celula5 = row.insertCell()
   let dados5 = document.createTextNode(nfinal)
   celula5.appendChild(dados5)
   //Aqui um condicional para adcionar a situação do aluno
   if(nfinal >= 7 && nfinal<=10){
    let celula6 = row.insertCell()
    let dados6 = document.createTextNode("Aprovado")
    celula6.appendChild(dados6)
   }else if(nfinal >= 11 ){
      alert("Você digitou algo errado, atualize a página e insira os dados novamente")
   }
   else{
    let celula6 = row.insertCell()
    let dados6 = document.createTextNode("Reprovado")
    celula6.appendChild(dados6)
   }
}
   else{
       alert("Você digitou um valor invalido atualize a página e tente novamente")
   }
})

//Função para abrir e fechar a tabela de alunos
for(let i = 0; i<expandir.length; i++){
    expandir[i].addEventListener('click', function acionar(){
        let turma = document.getElementById("turma")
        if(turma.style.display === "block"){
            turma.style.display = 'none'
            expandir[i].innerText = "Abrir Tabela da turma"
        }else{
            turma.style.display = 'block'
            expandir[i].innerText = "Fechar tabela da turma"
        }
    })
}






 