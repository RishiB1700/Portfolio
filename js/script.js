// Modal Functionality
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function () {
        const section = this.getAttribute('data-section');
        const modal = document.getElementById(section + 'Modal');
        modal.style.display = 'flex';
    });
});

document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function () {
        this.closest('.modal').style.display = 'none';
    });
});
// Handle Scroll Parchment Reveal
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function () {
        const section = this.getAttribute('data-section');
        const modal = document.getElementById(section + 'Modal');
        modal.style.display = 'flex';
    });
});

// Handle Scroll Opening
document.getElementById('openScroll').addEventListener('click', function () {
    document.getElementById('scrollParchment').style.display = 'none';
    document.getElementById('scrollContent').style.display = 'block';
});

// Close the modal
document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function () {
        this.closest('.modal').style.display = 'none';
    });
});
