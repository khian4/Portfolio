const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});


window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 45px;
        height: 45px;
        background-color: #ffffff;
        color: #0a0a0a;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: bold;
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease;
        z-index: 999;
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#e0e0e0';
    });

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#ffffff';
    });
}

createScrollToTopButton();

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        

        if (name && email && message) {
            alert('Thank you for your message! I will get back to you soon.');
            

            contactForm.reset();
        }
    });
}

const projectModal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const modalImage = document.getElementById('modalImage');
const viewProjectButtons = document.querySelectorAll('.view-project');

viewProjectButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const imageUrl = button.getAttribute('data-image');
        modalImage.src = imageUrl;
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});