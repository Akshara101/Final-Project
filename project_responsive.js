
// Ensure main navigation toggles visibility correctly
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.main-nav');

    menuButton.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.toggle('show');
        }
    });
});
