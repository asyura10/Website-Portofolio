// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const header = document.querySelector('header');
    header.classList.toggle('dark-mode');  // Toggle dark mode for header as well

    const contactButton = document.querySelector('#contact form button');
    contactButton.classList.toggle('dark-mode');  // Toggle dark mode for contact form button

    const skillElements = document.querySelectorAll('.skill');
    skillElements.forEach(skill => skill.classList.toggle('dark-mode'));  // Toggle dark mode for all skill elements

    const toggleButton = document.getElementById('darkModeToggle');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Download CV
function downloadCV() {
    window.location.href = 'CV Syifa 2024.pdf';
}

// Scroll Highlights (Optional)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    sections.forEach(section => {
        if (section.offsetTop <= scrollPos + 50 && section.offsetTop + section.offsetHeight > scrollPos) {
            document.querySelectorAll("header nav ul li a").forEach(a => {
                a.classList.remove("active");
                if (a.getAttribute("href").substring(1) === section.getAttribute("id")) {
                    a.classList.add("active");
                }
            });
        }
    });
});
