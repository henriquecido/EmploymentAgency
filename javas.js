
/* Usando setInterval para chamar a função e ter a hora real na page*/
var tempoReal = setInterval(tempo ,1000);
function tempo(){
    var d = new Date();

    document.getElementById("data").innerHTML = d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();

    document.getElementById("hora").innerHTML = d.getHours()+":"+d.getMinutes();
}
/* -- -- --  */

/* Transformei uma div em um botão, ao click ele atraves do location faz a mudanã de pagina */
$(document).ready(function(){
    $(".div_cand").click(function() {
        window.location.href = 'Vagas.html' ;
    });
});

$(document).ready(function(){
    $(".div_login").click(function() {
        window.location.href = 'Vagas.html' ;
    });
});
/* -- -- -- */

/* Mudança de imagem ao clicar no botão menu (disponivel na dimensão de mobile/ipad)*/
var val = true;
function teste(){
    
    if(val){
        document.getElementById("img_menu").src = 'image/menu_amarelo.png';
        val = false;
    }else {
        document.getElementById("img_menu").src = 'image/menu_azul.png';
        val = true;
    }
}

/* -- -- -- */

/* Impedir que o Carousel pare após houver touch do usuario */
Flickity.prototype.stopPlayer = function() {
    this.player.stop();
    this.player.play();
};

/* -- -- -- */