const texto = document.querySelector("#texto")

texto.addEventListener("mouseenter",()=>{
        if(texto.style.display === "block"){
        texto.style.display = "none"}
        else{
            texto.style.display = "none"
        }
})
