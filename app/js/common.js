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

	let moviePlay = {
		
		timeFormat(time) {
			let min = Math.floor(time / 60),
				sec = Math.floor(time % 60);
			return time > 60 ? (min >= 9 ? min : '0' + min) + ':' + (sec <= 9 ? '0' + sec : sec) : '00 : ' + (time <= 9 ? '0' + time : time);
		},

		init() {
			setTimeout(() => {
				let movie = $('#movie')[0],
					obj = this,
					playBtn = $('#btn-play'),
					timeContainer = $('.section-presentation__time'),
					time = Math.floor(movie.duration),
					totalTime = obj.timeFormat(time),
					timerID = '';

				timeContainer.text(totalTime)

				playBtn.click(function () {
					let movie = $('#movie')[0];
					movie.play();
					let linkObj = obj;
					if (timerID === '') {
						timerID = setInterval(() => {
							if (time <= 0) {
								clearInterval(timerID);
								timerID = '';
								time = Math.floor(movie.duration);
							} else {
								time -= 1;
							}
							totalTime = linkObj.timeFormat(time);
							timeContainer.text(totalTime);
						}, 1000)
					}
				});

			}, 500)

		}
	}

	moviePlay.init();
	fancyboxImg.init();
});
