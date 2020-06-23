$(function () {
	var homeSlider = new Swiper ('.swiper-home', {
		autoplay: {
			delay: 5000,
		  },
		loop: true,
		pagination: {
		  el: '.swiper-pagination',
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  })
});
