fetch('./doc.txt')
    .then((response) =>
        response.text()
    )
    .then((text) => {
        document.body.innerText = text;
    })
