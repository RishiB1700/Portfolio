// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky navigation effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Hover animation for work section items
document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'translateY(-10px)';
        item.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
    });
});
