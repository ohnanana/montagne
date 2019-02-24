jQuery(document).ready(function(){
$('.menu-item').addclass ('menu-trigger');
$('menu-trigger').click(fonction(){
	$('#menu-trigger').toggleclass('clicked');
$ ('.container') .toggleclass('push');
$('menu-type') .toggleclass('open');
});
});