document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.about, .contact');

    // Asigurăm că secțiunile rămân vizibile
    sections.forEach(section => {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
    });

    // Activează/dezactivează butonul "Send"
    const form = document.getElementById("contactForm");
    const button = form.querySelector("button");
    
    form.addEventListener("input", () => {
        button.disabled = !form.checkValidity();
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("thanksMessage").classList.remove("hidden");
        this.reset();
        button.disabled = true; // Dezactivează butonul după submit
    });
});
