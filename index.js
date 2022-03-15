import $ from "jquery";

console.log('welcome npm world');

$(
	function(){
		$('body').css('background', 'yellow');
		$('h1').css({fontsize : '30px', color : '#fff'});
	}
)