jQuery(document).ready(function($){
	var isLateralNavAnimating = false;
	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		var btn_rec=$(".btn_rec").text().slice(3);
		if(btn_rec==""||btn_rec==0){
			alert("请选择至少一种产品");
			return 
		}
		$("#main").css("z-index","6");
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			// $('body').toggleClass('navigation-is-open');
			$('body').removeClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});
});