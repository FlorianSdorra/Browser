const books = [{
        title: "The Design of EveryDay Things",
        author: "Don Norman",
        alreadyRead: false,
        img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true,
        img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
    },
    {
        title: "Thinking with Type",
        author: "Ellen Lupton",
        alreadyRead: true,
        img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
    },
    {
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        alreadyRead: false,
        img: "https://eloquentjavascript.net/img/cover.jpg"
    }
];

let bookList = document.querySelector(".book-list");

let ul = document.querySelector("ul");
let cardDeck = document.createAttribute("class");
cardDeck.value = "card-deck";
ul.setAttributeNode(cardDeck);


for (let i = 0; i < books.length; i++) {
    let li = document.createElement("li");
    li.className = "card book mb-3";
    li.innerHTML =
        `<img class="card-img-top book-cover img-fluid" src="${books[i].img}">
        <div class="card-body">
        <h5 class="card-title">${books[i].title}</h5>
        <p class="card-text">${books[i].author}</p>
        <a href="#" class="btn btn-primary"></a>`;
    bookList.appendChild(li);
};