// Handle navigation menu toggle
if (!customElements.get('nav-menu')) {
    const closeMenu = function closeMenu(event) {
        const toggler = event.currentTarget.querySelector('.navbar-toggler');
        if (toggler?.checked && event.target.closest('.nav-scrollable')) {
            toggler.checked = false;
        }
    };

    customElements.define('nav-menu', class extends HTMLElement {
        connectedCallback() {
            this.addEventListener('click', closeMenu);
        }

        disconnectedCallback() {
            this.removeEventListener('click', closeMenu);
        }
    });
}
