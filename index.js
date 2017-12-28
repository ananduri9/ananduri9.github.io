//NavBar functionality

function changeColor(obj) {
	$('.nav').css({color:"white"});
	obj.style.color="blue";
}

$(document).ready(function(){
    $(".nav").mouseleave(function(){
  		$('.nav').css({color:"white"});
    });
});

$(document).ready(function(){
    $("li").click(function(){
    	console.log('hello');
        $(this).animate({top: '+=2px'});
        $(this).animate({top: '-=2px'});
    });
});