export default function initFetchAnimalsJson() {
    async function fetchAnimalsJson(url) {
        const jsonUrl = './json/animals_count.json'
        const animalsResponse = await fetch(url || jsonUrl)
        const animalsJson = await animalsResponse.json()

        return animalsJson
    }
    return fetchAnimalsJson();
}

