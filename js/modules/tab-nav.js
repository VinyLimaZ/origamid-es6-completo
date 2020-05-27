export default function initTabNav() {
    const tabMenus = document.querySelectorAll('[data-content="menu"] li')
    const tabContents = document.querySelectorAll('[data-content="tab"] section')
    const firstSectionAnimTo = tabContents[0].dataset.anim
    tabContents[0].classList.add('active', firstSectionAnimTo);


    if(tabMenus.length && tabContents.length) {
        function activateDescription(index) {
            const animTo = tabContents[index].dataset.anim
            tabContents[index].classList.add('active', animTo)
        }

        function removeActiveClassFromDescription() {
            tabContents.forEach((content) => {
                const animTo = content.dataset.anim
                content.classList.remove('active', animTo)
            })
        }

        tabMenus.forEach((menu, index) => {
            menu.addEventListener('click', () =>{
                removeActiveClassFromDescription();
                activateDescription(index);
            });
        });
    }
}
