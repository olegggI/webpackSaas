require("touchSwipe");

$('.clickme, .first').on('click', function(e){
	require.ensure([], function(require) {
    	var a = require("clickme.scss");
    	console.log('clicked!');
	})
});




$('.first').swipe({
	tap: function(event, target){
		event.stopPropagation();
		alert(1);
	}
});

$('.third').swipe({
	tap: function(event, target){
		alert(4);
	}
});