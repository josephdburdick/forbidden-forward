function interface(){
	$('.dd-menu').on('click',function(){
		var dd = $(this).parent('li').attr('id');

		dd = '#' + dd.replace('menu','dd');
		//alert(dd)
		$('#mask').toggleClass('active');
		$(dd).toggleClass('active');//.fadeIn(300);
	});

	$('#menu-item-10').on('click',function(e){
		e.preventDefault();
		$.scrollTo( 'section.contact', 1500, {  });
		return false;
	});

	$('#mask').on('click',function(){
		$('.dd.active').removeClass('active');
		$(this).removeClass('active');
	})
}

$(document).ready(function(){
	interface();
});

$(window).ready(function(){
	
});