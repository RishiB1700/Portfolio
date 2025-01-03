// Typewriter Effect Initialization
document.addEventListener('DOMContentLoaded', function() {
    let heroText = document.getElementById('heroText');
    let text = "Hey, I'm Rishi"; // Customize the text
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            heroText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});

// Open corresponding panel when menu item is clicked
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function () {
        const section = this.getAttribute('data-section');
        const panel = document.getElementById(section + 'Panel');
        panel.style.display = 'flex';
    });
});

// Close panel when close button is clicked
document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function () {
        this.closest('.panel').style.display = 'none';
    });
});
