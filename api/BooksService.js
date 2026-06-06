const key = "AIzaSyAv4Kquwg8OcDlgQVhFVuDkveCKZlc0ETI";
const baseUrl = "https://www.googleapis.com/books/v1/volumes?key=" + key;

export function getByCategory(category) {
    const url = baseUrl + "&q=subject:"+category;
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.warn(error));
}

export function getByTitle(category, title) {
    return fetch(baseUrl + `&q=subject:${category}+intitle:${title}`)
    .then(response => response.json())
    .catch((error) => console.warn(error));
}

// export async function getByTitle(category, title) {
//     return await fetch(baseUrl `&q=subject:${category}+intitle:${title}`)
//     .then(response => response.json())
//     .catch(error => console.warn(error));
// }
