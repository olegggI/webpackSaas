$('.clickme').on('click', function(e){
	require.ensure([], function(require) {
    	var a = require("clickme.scss");
    	console.log('clicked!');
	})
});