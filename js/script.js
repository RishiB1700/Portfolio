// Handle Menu Item Click and Open Modal
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function () {
        const section = this.getAttribute('data-section');
        const modal = document.getElementById(section + 'Modal');
        modal.style.display = 'flex';
    });
});

// Open Scroll in About Me Modal
document.getElementById('openScroll').addEventListener('click', function () {
    document.getElementById('scrollParchment').style.display = 'none';
    document.getElementById('scrollContent').style.display = 'block';
});

// Close Modal
document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function () {
        this.closest('.modal').style.display = 'none';
    });
});
