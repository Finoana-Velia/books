const key = "AIzaSyAv4Kquwg8OcDlgQVhFVuDkveCKZlc0ETI";
const baseUrl = "https://www.googleapis.com/books/v1/volumes?key=" + key;

export async function getByCategory(category) {
    return await fetch(baseUrl + '&q=subject:' + category)
    .then(response => response.json())
    .catch(error => console.warn(error));
}

export async function getByTitle(category, title) {
    return await fetch(baseUrl `&q=subject:${category}+intitle:${title}`)
    .then(response => response.json())
    .catch(error => console.warn(error));
}
