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
    foodCat[j].style.backgroundColor = `rgb(${getRan()},${getRan()},${getRan()})`;
};

function getRan() {
    return Math.floor(Math.random() * 255);
}



// function get_rand_color()
// {
//     var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
//     while(color.length < 6) {
//         color = "0" + color;
//     }
//     return "#" + color;
// }