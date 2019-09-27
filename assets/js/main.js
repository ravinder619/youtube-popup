// Developer Info - Arjun (https://github.com/arjun0108)

$(document).ready(function(){
	$('#myBtn').click(function(event){
		showModal();
		event.stopPropagation(); 
	});
	
	// Load Video
	$('.btn-LoadVideo').click(function(){
		var videoSrc = $(this).data('src');
		$('#video').attr('src',videoSrc);
	});
	
	// Close Modal
	$('button.close, #myModal').click(function(){
		$('#video').attr('src','');
		hideModal();
	});
	
	// Do nothing when clicking on the modal content
	$('.modal-content').click(function(event){
       event.stopPropagation(); 
    });
});

function showModal(){
	$('#myModal').fadeIn('slow');
		(function fun(){
			//$('.modal-content').css({'transform':'translateY(-50px)'});
		})();
}

function hideModal(){
	$('#myModal').fadeOut('fast');
		(function fun2(){
			//$('.modal-content').css({ 'transform':'translateY(0px)' });
		})();
}



$(document).on("click", function () {
    //click outside of ".nav__dropdown" class itself and menu will be hidden
	hideModal();
});