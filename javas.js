
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
    $(".div_login").click(function() {
        window.location.href = 'Candidato.html' ;
    });

    $(".div_cand").click(function() {
        window.location.href = 'Candidato.html' ;
    });
    $(".div_canda").click(function() {
        window.location.href = 'Candidato.html' ;
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


/* Filtro da pagina de vagas  */


/* Menu lateral, valido com ifelse se já foi selecionado o filtro, se sim, ele quer limpar */
var selecionado = true;
$(document).ready(function(){
    
    $(".botao").click(function() {
        if(selecionado){
            var categoria = $(this).html().toUpperCase();

            $('#teste div div').each(function() { 
                if($(this).html().toUpperCase().indexOf(categoria) === -1) {
                    $(this).hide();
                }
            });
            selecionado = false;
        }else {
            $('#teste div div ').show();
            selecionado = true;
        } 
    });
});

/* -- -- -- */


/* Input de pesquisa , com limpador dos dados */
function limpar() {
    $('#teste div div').show();
}

function buscar() {
    var termo = $('#pesquisa').val().toUpperCase();
    $('#teste div div').each(function() { 
       if($(this).html().toUpperCase().indexOf(termo) === -1) {
           $(this).hide();
       }
    });
}
/* -- -- -- */


/* -- -- --  */


/* Se possui nao possuir conta a tela de login desaparece e a de cadastro aparece*/
$(document).ready(function(){
    
    $(".div_cadastra").click(function() {
        $(".div_main_login").hide();
        $(".div_main_cadas").show();
    });

});

$(document).ready(function(){
    
    $(".div_cadastra2").click(function() {
        $(".div_main_cadas").hide();
        $(".div_main_login").show();
    });

});

/* -- -- --  */


$(document).ready(function(){
    
    $(".div_entrar2").click(function() {
        alert("Cadastro com Sucesso");
    });

});