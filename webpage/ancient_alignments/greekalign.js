$(document).ready(function() {
	$('#colorpen').click(function() { //by clicking on the pencil the marked up words shall be turned into red or green
		$('.markred').toggleClass('red'), $('.markgreen').toggleClass('green'); //clicking it again will remove the class
	});
});