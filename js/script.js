const nav = document.querySelector('.nav__menu')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__menu__item')

const handlelNav = () => {
	nav.classList.toggle('nav__menu--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__menu--active')
		})
	})

	handleNavItemsAnimation()
    deleteAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
        //animation-delay: .3s;
        item.style.animationDelay = "." + delayTime + 's';
        delayTime++
	})
}

navBtn.addEventListener('click', handlelNav)

const deleteAnimation = () => {
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			allNavItems.forEach(el => {
				el.classList.remove('nav-items-animation')
			})
		})
	})
}