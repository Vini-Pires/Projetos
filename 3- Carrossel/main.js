const carbtn = document.querySelectorAll('[data-carBtn] button')
const img = document.querySelectorAll('[data-car] div')
const btns = document.querySelectorAll('[data-btn]')
//Joga as div dentro de um array

const btnPrev = btns[0]
const btnNext = btns[1]


const carousel = () => {
	for (let num = 0; num < img.length; num++) {
		if (img[num].classList.contains('active')) {
			if (num == (img.length - 1)) {
				img[0].classList.toggle('active')
				img[num].classList.toggle('active')
				carbtn[0].classList.toggle('active')
				carbtn[num].classList.toggle('active')
				return

			} else {
				img[num].classList.toggle('active')
				img[num + 1].classList.toggle('active')
				carbtn[num].classList.toggle('active')
				carbtn[num + 1].classList.toggle('active')
				return

			}
			
		}
	}
}

const carouselPrev = () => {
	for (let num = 0; num < img.length; num++) {
		if (img[num].classList.contains('active')) {
			if (num == 0) {
				img[num].classList.toggle('active');
				img[img.length-1].classList.toggle('active');
				carbtn[num].classList.toggle('active');
				carbtn[carbtn.length-1].classList.toggle('active');
				return

			} else {
				img[num].classList.toggle('active');
				img[num-1].classList.toggle('active');
				carbtn[num].classList.toggle('active');
				carbtn[num-1].classList.toggle('active');
				return

			}
		}
	}
}
const tempo = 3000;

let interval = setInterval(carousel, tempo)

btnNext.addEventListener('click', ()=>{
	clearInterval(interval)
	carousel()
	interval = setInterval(carousel, tempo)
})

btnPrev.addEventListener('click', ()=>{
	clearInterval(interval)
	carouselPrev()
	interval = setInterval(carousel, tempo)
})