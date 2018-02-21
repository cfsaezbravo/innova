$('#implantes').click(function(){
	$('#lista-menu').css("display", "inline-flex");
	$('#lista-menu-2').css("display", "none");
});

$('#superior').click(function(){
	$('#lista-menu-2').css("display", "inline-flex");
	$('#lista-menu').css("display", "none");
});

$('#clavicula').click(function(){
	event.preventDefault()
	$('#lista-menu-3').css("display", "inline-flex");
});

$('#humero').click(function(){
	event.preventDefault()
	$('#lista-menu-4').css("display", "inline-flex");
});