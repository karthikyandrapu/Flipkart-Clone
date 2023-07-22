/* Nav bar hamburger-menu in samll screen */
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuItems = document.querySelector('.menu-items');

hamburgerMenu.addEventListener('click', () => {
	menuItems.classList.toggle('open');
});

/* JavaScript function for product search */
const offerimgs = document.querySelectorAll('.offerrow div[class^="offerimg"]');

function searchProducts() {
	const searchQuery = document.getElementById('productSearch').value.toLowerCase();

	offerimgs.forEach(offerimg => {
		const title = offerimg.querySelector('.offerimg-subtxt1').textContent.toLowerCase();
		const price = offerimg.querySelector('.offerimg-subtxt2').textContent.toLowerCase();
		const description = offerimg.querySelector('.offerimg-subtxt3').textContent.toLowerCase();

		if (title.includes(searchQuery) || price.includes(searchQuery) || description.includes(searchQuery)) {
			offerimg.style.display = 'block';
		} else {
			offerimg.style.display = 'none';
		}
	});
}

/* Image Sliding of banner section */
let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const carouselItems = carousel.querySelectorAll('li');

function slideCarousel(direction) {
	currentIndex += direction;
	if (currentIndex < 0) {
		currentIndex = carouselItems.length - 1;
	} else if (currentIndex >= carouselItems.length) {
		currentIndex = 0;
	}

	const slideAmount = -currentIndex * carousel.offsetWidth;
	carousel.querySelector('ul').style.transform = `translateX(${slideAmount}px)`;
}

function startAutoSlide() {
	setInterval(() => {
		slideCarousel(1);
	}, 2000); // (interval time in milliseconds)
}
startAutoSlide();

/* Redirect button */
function redirectToPage(buttonId, url) {
	const button = document.getElementById(buttonId);
	if (button) {
		button.addEventListener('click', () => {
			window.location.href = url;
		});
	}
}
redirectToPage('Top-Deals', 'Top-Deals.html');
redirectToPage('Best-of-Electronics', 'Best-of-Electronics.html');
redirectToPage('Home-Essentials', 'Home-Essentials.html');
redirectToPage('Essentials-for-Kids', 'Essentials-for-Kids.html');
redirectToPage('Top-Picks', 'Top-Picks.html');