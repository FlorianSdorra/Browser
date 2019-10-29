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
let main = document.querySelector(".container")
let cardDIV = document.createElement("div")
cardDIV.classList.add(".card-deck");
main.appendChild(cardDIV);
cardDIV.style.display = "flex"
cardDIV.style.justifyContent = "space-between"

function fillCards(book) {
    book.author.split(" ").reverse().join(" ");
    let newCard = document.createElement("div");
    newCard.classList.add("card", "border-dark");
    newCard.style.width = "24%";

    if (book.alreadyRead == true) {
        newCard.innerHTML = `<img class="card-img-top" height="280" src="${book.img}" alt="Book Cover">
    <div class="card-body">
      <h5 class="card-title">${book.title}</h5>
      <p class="card-text">${book.author}</p></div>
      <div class="card-footer"><small height="240"class="badge badge-success">${book.alreadyRead}</small></div>
    `
    } else {
        newCard.innerHTML = `<img class="card-img-top" height="280" src="${book.img}" alt="Book Cover">
    <div class="card-body">
      <h5 class="card-title">${book.title}</h5>
      <p class="card-text">${book.author}</p></div>
      <div class="card-footer"><small height="240"class="badge badge-secondary">${book.alreadyRead}</small></div>
    `;
    }
    cardDIV.appendChild(newCard);
}
books.sort((a, b) => a.author.split(" ")[1].localeCompare(b.author.split(" ")[1]))
    .forEach(el => {
        fillCards(el)
    });