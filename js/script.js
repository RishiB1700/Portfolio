// Typewriter effect for "Hi, I'm Rishi"
document.addEventListener("DOMContentLoaded", () => {
    const typewriterText = document.getElementById("typewriter");
    typewriterText.style.animationPlayState = "running";
});

// Smooth Scroll on Navigation Click
document.querySelectorAll('.horizontal-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
