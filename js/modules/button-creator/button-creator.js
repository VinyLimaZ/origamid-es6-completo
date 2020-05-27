const controls = document.getElementById('controls');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controls.addEventListener('change', handleChange);

function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    handleStyle.chooseRightStyle(name, value);
    saveCssValues(name, value);
    showCss();
}

const handleStyle = {
    element: btn,
    pxProperties: ['height', 'width', 'borderRadius'],

    chooseRightStyle(name, value) {
        if(this.hasOwnProperty(name)) {
            this[name](value);
        } else if(this.pxProperties.includes(name)) {
            this.pxProperty(name, value);
        } else {
            this.style(name, value);
        }

    },
    text(value) {
        this.element.innerText = value;
    },
    fontSize(value) {
        this.element.style.fontSize = `${value}rem`;
    },
    pxProperty(name, value) {
        this.element.style[name] = `${value}px`;
    },
    style(property, value) {
        this.element.style[property] = value;
    }
}

function showCss() {
    cssText.innerHTML = `<span>${btn.style.cssText.split('; ').join(';</span><span>')}`
    btn.style.cssText.split('; ').join('');

}

function saveCssValues(name, value) {
    localStorage[name] = value;
}

function setValue() {
    const properties = Object.keys(localStorage);

    if(properties) {
        properties.forEach((property) => {
            controls.elements[property].value = localStorage[property];
            handleStyle.chooseRightStyle(property, localStorage[property]);
            showCss();
        });
    }
}

setValue();
