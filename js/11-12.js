$(function(){
	var html = $('#tmp').html();
	console.log('html', html);
	var data = {
	 	li1: '<a href="https://www.youtube.com/watch?v=evE4SpLRl78">Я в АйТи хочу пойти<a>',
	 	li2: 'Я в АйТи хочу пойти',
	 	li3: 'Может к тридцати пяти',
	 	li4: 'Я тогда войду в АйТи',
	 	phone: '+380962139157',
	 	feedback: 'Якщо потрібно, можу працювати, можу "не працювати"(але подвійна оплата)',
	 	href: '"https://www.facebook.com/profile.php?id=100002572048895"'
	};
	// console.log('data', data);
	var content = tmpl(html, data);
	// console.log('content', content);
	
	$('body').append(content);
})