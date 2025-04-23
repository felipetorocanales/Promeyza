//Modal de anuncios

const modal = document.getElementById('image-modal');
const closeButton = document.querySelector('.close-button');

// Function to open the modal
function openModal() {
    modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listener for the close button
closeButton.addEventListener('click', closeModal);

// Automatically open the modal when the page loads
document.addEventListener('DOMContentLoaded', () => {
    openModal();
});

// Optional: Close the modal when clicking outside the content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});