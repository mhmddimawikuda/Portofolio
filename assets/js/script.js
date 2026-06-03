document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });

    });

});

window.addEventListener('scroll', function () {

    const navbar = document.querySelector('.custom-navbar');

    if (window.scrollY > 50) {
        navbar.style.padding = '15px 0';
    } else {
        navbar.style.padding = '25px 0';
    }

});

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

    reveals.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.classList.add('active');

        }

    });

});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute('id');

        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (
            link.getAttribute('href')
                .includes(current)
        ) {

            link.classList.add('active');

        }

    });

});