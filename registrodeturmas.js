var abrir = document.getElementsByClassName("abrir");
var x;

for (x =0; x<abrir.length; x++){
    abrir[x].addEventListener("click", function(){
        this.classList.toggle("active");
        var conteudo = this.nextElementSibling;
        if(conteudo.style.display ==="block"){
            conteudo.style.display = "none";
        }else{
            conteudo.style.display = "block";
        }
    })
}
