document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    fadeElements.forEach(el => appearOnScroll.observe(el));

    // Formular Contact
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("thanksMessage").classList.remove("hidden");
        this.reset();
    });
});
