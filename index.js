const div = document.createElement("div");
const elbody = document.querySelector("body");

const api = `https://jsonplaceholder.typicode.com/posts`;

function showData(user) {
    elbody.append(div);

    user.forEach((element) => {
        const { body, title, id, userId } = element;

        div.innerHTML += `
            <h2>${title}</h2>
            <p>id: ${id}</p>
        `;
    });
}

fetch(api)
    .then((response) => response.json())
    .then((data) => showData(data));