$('#implantes').click(function(){
	$('#lista-menu').css("display", "inline-flex");
});

$('#superior').click(function(){
	$('#lista-menu-2').css("display", "inline-flex");
});

$('#clavicula').click(function(){
	event.preventDefault()
	$('#lista-menu-3').css("display", "inline-flex");
});