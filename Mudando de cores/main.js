//botão
const button = document.querySelector("button")
//corpo do documento
const body = document.querySelector("body")
//array com algumas cores
const colors = ["blue", "red", "yellow", "pink", "green"]

body.style.backgroundColor = "black"; 
//função para trocar as cores
function changeColors(){
    const colorIndex= parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
}
button.addEventListener("click", changeColors)



    
  