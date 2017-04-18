$(function(){
	var html = $('#tmp').html();
	// console.log('html', html);
	var data = {
	 	test: 'Hello gays',
	 	test2: 'test2'
	};
	// console.log('data', data);
	var content = tmpl(html, data);
	// console.log('content', content);
	
	$('body').append(content);
})