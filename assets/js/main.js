$('#implantes').click(function(){
	$('#lista-menu').css("display", "inline-flex");
	$('#lista-menu-2').css("display", "none");
	$('#lista-menu-3').css("display", "none");
	$('#lista-menu-4').css("display", "none");
	$('#lista-menu-5').css("display", "none");
	$('#lista-menu-8').css("display", "none");
	$('#lista-menu-9').css("display", "none");
});

$('#superior').click(function(){
	$('#lista-menu-2').css("display", "inline-flex");
	$('#lista-menu').css("display", "none");
	$('#lista-menu-3').css("display", "none");
	$('#lista-menu-4').css("display", "none");
	$('#lista-menu-5').css("display", "none");
	$('#lista-menu-6').css("display", "none");
	$('#lista-menu-8').css("display", "none");
	$('#lista-menu-9').css("display", "none");
});

/*$('#inferior').click(function(){
	$('#lista-menu-7').css("display", "inline-flex");
	$('#lista-menu').css("display", "none");
	$('#lista-menu-2').css("display", "none");
	$('#lista-menu-3').css("display", "none");
	$('#lista-menu-4').css("display", "none");
	$('#lista-menu-5').css("display", "none");
	$('#lista-menu-6').css("display", "none");
	$('#lista-menu-8').css("display", "none");
	$('#lista-menu-9').css("display", "none");
});*/

$('#medicina').click(function(){
	$('#lista-menu-8').css("display", "inline-flex");
	$('#lista-menu').css("display", "none");
	$('#lista-menu-2').css("display", "none");
	$('#lista-menu-3').css("display", "none");
	$('#lista-menu-4').css("display", "none");
	$('#lista-menu-5').css("display", "none");
	$('#lista-menu-6').css("display", "none");
	$('#lista-menu-9').css("display", "none");
});

$('#clavicula').click(function(){
	event.preventDefault()
	$('#lista-menu-3').css("display", "inline-flex");
	$('#lista-menu-6').css("display", "none");
	$('#lista-menu-4').css("display", "none");
	$('#lista-menu-5').css("display", "none");
	$('#lista-menu-9').css("display", "none");
});

$('#humero').click(function(){
	event.preventDefault()
	$('#lista-menu-4').css("display", "inline-flex");
	$('#lista-menu-3').css("display", "none");
	$('#lista-menu-6').css("display", "none");
	$('#lista-menu-5').css("display", "none");
	$('#lista-menu-9').css("display", "none");
});

$('#radio').click(function(){
	event.preventDefault()
	$('#lista-menu-5').css("display", "inline-flex");
	$('#lista-menu-3').css("display", "none");
	$('#lista-menu-4').css("display", "none");
	$('#lista-menu-6').css("display", "none");
	$('#lista-menu-9').css("display", "none");
});

$('#mano').click(function(){
	event.preventDefault()
	$('#lista-menu-6').css("display", "inline-flex");
	$('#lista-menu-3').css("display", "none");
	$('#lista-menu-4').css("display", "none");
	$('#lista-menu-5').css("display", "none");
	$('#lista-menu-9').css("display", "none");
});

$('#initials').click(function(){
	event.preventDefault()
	$('#lista-menu-9').css("display", "inline-flex");
	$('#lista-menu-6').css("display", "none");
	$('#lista-menu-3').css("display", "none");
	$('#lista-menu-4').css("display", "none");
	$('#lista-menu-5').css("display", "none");
})

