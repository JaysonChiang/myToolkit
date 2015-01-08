$.fn.equalHeight = function() {
	$(this).each(function(){
		var currentHeight = 0;
		$(this).children().each(function(idx, obj){
			if ($(obj).height() > currentHeight) { currentHeight = $(obj).height(); }
		});

		$(this).children().css({'min-height': currentHeight}); 
	  //$(this).children().css({'height': currentTallest});
	});
};