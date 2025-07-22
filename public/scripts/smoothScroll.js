document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const verProgramaButton = document.getElementById("ver-programa");

    // Function to handle smooth scrolling
    const smoothScroll = (event, targetId) => {
        event.preventDefault(); // Prevent default behavior
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth", // Smooth scrolling
                block: "start" // Align to the top of the section
            });
        }
    };

    // Add smooth scrolling to nav links
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href").substring(1); // Get the target section ID
            smoothScroll(event, targetId);
        });
    });

    // Add smooth scrolling to the "Ver Programa" button
    if (verProgramaButton) {
        verProgramaButton.addEventListener("click", event => {
            const targetId = verProgramaButton.getAttribute("href").substring(1); // Get the target section ID
            smoothScroll(event, targetId);
        });
    }
    
});