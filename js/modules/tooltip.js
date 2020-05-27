export default function initTooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]')
    tooltips.forEach((item) => {
        item.addEventListener('mouseover', showTip);
    })

    function showTip(event) {
        const tooltipDiv = createTooltipBox(this)

        hideTip.tooltipDiv = tooltipDiv;
        hideTip.element = this;
        this.addEventListener('mouseleave', hideTip);

        moveTip.tooltipDiv = tooltipDiv;
        moveTip.element = this;
        this.addEventListener('mousemove', moveTip);
    }

    const hideTip = {
        tooltipDiv: '',
        element: '',
        handleEvent() {
            this.tooltipDiv.remove();
            this.element.removeEventListener('mouseleave', hideTip);
            this.element.removeEventListener('mousemove', moveTip);
        }
    }

    const moveTip = {
        tooltipDiv: '',
        element: '',
        handleEvent(event) {
            this.tooltipDiv.style.top = `${event.pageY + 10}px`
            this.tooltipDiv.style.left = `${event.pageX + 10}px`
        }
    }

    function createTooltipBox(element) {
        const tooltipDiv = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipDiv.classList.add('tooltip');
        tooltipDiv.innerText = text;

        document.body.appendChild(tooltipDiv);
        return tooltipDiv;
    }
}
