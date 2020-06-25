import outsideClick from './outside-click.js'

export default function initDropdownMenu(){
    const dropdownMenu = document.querySelectorAll('[data-dropdown]');
    const userEvents = ['touchstart', 'click'];

    dropdownMenu.forEach((menu) => {
        userEvents.forEach(userEvent => menu.addEventListener(userEvent, handleClick));
    })

    function handleClick(event) {
        if(event.target.dataset.dropdown != 'link') {
            event.preventDefault();
            this.classList.add('active')
        }

        outsideClick(this, userEvents, () => {
            this.classList.remove('active');
        })
    }
}
