$(document).ready(function(){

$('.anyway').hide();
$('.deleivery').click(function(){
	$('.anyway').toggle();
});


	$(window).scroll(function(){
		if($(this).scrollTop()>300){
			$('a.scrol').fadeIn();
		}
		else{
			$('a.scrol').fadeOut();
		}

});