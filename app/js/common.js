$(document).ready(function () {
	var homeSlider = new Swiper('.swiper-home', {
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
	});

	var projectTabs = new Swiper('.swiper-project', {
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
			renderBullet: function (index, className) {
				console.log(this)
				let slide = this.slides[index]
				return '<span class="' + className + '">' + slide.dataset.title + '</span>';
			}
		},

	});

	let fancyboxImg = {
		init() {
			jQuery('.fancybox').fancybox();
		}
	}

	fancyboxImg.init();
});
