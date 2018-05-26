$(document).ready(function($) {
   $(".scroll, .scroll-resp").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
   });
  });
$(function() {
	$window.on("scroll", function() {
		if($window.scrollTop() > posicao.top - 100) {
			document.getElementById("faixa").style.opacity = "1";
		} else {
			document.getElementById("faixa").style.opacity = "0";
		}

		 if($window.scrollTop() > 100) {
			$("#nav-bar").attr("class", "nav-barscroll");
			//Scrollado
			$(".logo").attr("src", "logoscroll.svg");
			$(".imgmenu").attr("src", "menuscroll.svg");
			$(".scroll").attr("class", "scrollscrollado");
		} else {
			$("#nav-bar").attr("class", "");
			//Paradona
			$(".logo").attr ("src", "logo.svg");
			$(".scrollscrollado").attr("class", "scroll");
			$(".imgmenu").attr("src", "menu.svg");
		}
	});
});
function abrir() {
	document.getElementById("lateral").style.right = "0px";
}
 function fechar() {
	document.getElementById("lateral").style.right = "-500px";
}

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: -22.893436, lng: -43.123789},
	zoom: 15
  });
}


var item = $(".faixafixa");
var posicao = item.offset();
var $window = $(window);
var altura = screen.height;