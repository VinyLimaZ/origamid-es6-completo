export default function fetchDocText() {
    const spanDoc = document.createElement('span')
    fetch('./doc.txt')
        .then((response) =>
            response.text()
        )
        .then((text) => {
            spanDoc.innerText = text;
        })

    document.body.appendChild(spanDoc)
}
