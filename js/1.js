$(function(){
	$(".ul-item").hide();
	$(".li-item").hover(function(){
		$(this).find(".ul-item").slideDown();
			},function(){
				$(this).find(".ul-item").slideUp();
						});


	});
