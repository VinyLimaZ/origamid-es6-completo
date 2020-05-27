import outsideClick from './outside-click.js'

export default function initDropdownMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const events = ['click', 'touchstart'];

    if(menuButton) {
        function openMenu(event) {
            menuList.classList.toggle('active');
            menuButton.classList.toggle('active');

            outsideClick(menuList, events, () => {
                menuList.classList.remove('active');
                menuButton.classList.remove('active');
            });
        }
        events.forEach((event) => menuButton.addEventListener('click', openMenu))
    }
}

