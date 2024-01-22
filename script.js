;(() => {
	window.onload = () => {
		let burger = document.querySelector('.burger')
		let menu = document.querySelector('.header-list')
		let body = document.querySelector('body')

		burger.addEventListener('click', e => {
			burger.classList.toggle('active')
			menu.classList.toggle('active')
			body.classList.toggle('lock')
		})

		let list = document.querySelector('.header-container')
		list.addEventListener('click', e => {
			burger.classList.toggle('active')
			menu.classList.toggle('active')
			body.classList.toggle('lock')
		})
	}
})()
