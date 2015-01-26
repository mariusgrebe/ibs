$(document).ready(function(){
	$('a').hover(
		function() {
			$(this).addClass('highlighted');
		},
		function() {
			$(this).removeClass('highlighted');
		}
	);
});