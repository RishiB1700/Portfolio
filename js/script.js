// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Section hover-triggered animation (background color change)
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.backgroundColor = '#f0f8ff';
    });
    section.addEventListener('mouseout', () => {
        section.style.backgroundColor = 'white';
    });
});
