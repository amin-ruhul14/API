const user = {
    id: 14,
    name: "Ruhul",
    lover: {
        name: "Alina",
        favFood: "Pizza",
        phone: 24765708
    },
    friends: ["Hridoy", "Pabel", "Rabbi"],
    friendsAge: [20, 21, 22]
};
// {"id":14,"name":"Ruhul"}
const userJSON = JSON.stringify(user);
console.log(userJSON);

const userFromJSON = JSON.parse(userJSON);
console.log(userFromJSON);

fetch('https://jsonplaceholder.typicode.com/peoples')
    .then(response => response.json())
    .then(json => displayUser(json))
    .catch(error => console.log(error);


const postInfo = {
    title: 'foooo',
    body: 'baaaar',
    userId: 1
}

document.getElementById('submit').addEventListener("click", function () {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const post = { title: title, body: body };
    nowPostToServer(post);
})

function nowPostToServer(postInfo) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))

}

function displayUser(user) {

    const userName = user.map(user => user.username);
    const ul = document.getElementById("user-container");

    for (let i = 0; i < userName.length; i++) {
        const username = userName[i];
        const li = document.createElement("li");
        li.innerText = username;
        ul.appendChild(li);
    }
}