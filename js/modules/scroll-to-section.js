export default function initScrollToSection(){
    const allNavbarLinks = document.querySelectorAll('[data-content="navbar"] a[href^="#"]')

    if(allNavbarLinks.length) {
        function scrollToSection(event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href)

            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        allNavbarLinks.forEach((link) => link.addEventListener('click', scrollToSection))
    }
}
