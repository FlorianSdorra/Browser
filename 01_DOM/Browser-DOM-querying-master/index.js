let body = document.querySelector("body");
body.style.fontFamily = "monospace";

let h1 = document.querySelector("h1");
h1.style.textAlign = "center";

let cat = document.getElementsByClassName("category");

for (var i = 0; i < cat.length; i++) {
    cat[i].style.color = "gold";
    cat[i].style.fontWeight = "bolder";
};

let foodCat = document.getElementsByClassName("food-category");

for (var j = 0; j < foodCat.length; j++) {
    foodCat[j].style.backgroundColor = `rgba(${getRan()},${getRan()},${getRan()},${getTran()})`;
};

function getRan() {
    return Math.floor(Math.random() * 255);
};

function getTran() {
    return Math.random();
};

//flex main container

const mainSection = document.querySelector(".main");
mainSection.style.display = "flex";
mainSection.style.flexFlow = "row wrap";
mainSection.style.justifyContent = "space-around";
mainSection.style.width = "33%";