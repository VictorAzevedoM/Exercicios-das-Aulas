
document.querySelector("#Finalizar").onclick = () =>{
    alert("Obrigador por participar da iniciativa")
    const form = document.querySelector("#Cadastro")
    const final = document.querySelector("#Final")
    if(form.style.display === "block"){
        form.style.display = "none"
    }
    else{
        form.style.display = "none"
        final.style.display = "block"
    }
}
document.querySelector("#Sobre").onclick = () =>{
    location.href = "./about.html"
}