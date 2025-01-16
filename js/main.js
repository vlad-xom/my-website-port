window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
})
const movingObject = document.querySelector(".moving-object");
let x = 0, y = 0;
let directionX = 2, directionY = 2;

function animate() {
    x += directionX;
    y += directionY;

    if (x > 200 || x < 0) directionX *= -1; // Змінюємо напрямок
    if (y > 200 || y < 0) directionY *= -1;

    movingObject.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(animate);
}

animate();

// Отримуємо кнопку
const scrollToTopButton = document.querySelector('.scroll-to-top');

// Показуємо кнопку після того, як користувач прокрутив більше ніж 100% висоти вікна
window.onscroll = function() {
    // Отримуємо висоту вікна і прокручену відстань
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    // Якщо прокручено більше, ніж 100vh (100% висоти вікна)
    if (scrollPosition > windowHeight) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
};

// Функція для прокручування вгору
function scrollToTop() {
    window.scrollTo({
        top: 900,
        behavior: 'smooth' // Плавне прокручування
    });
}


