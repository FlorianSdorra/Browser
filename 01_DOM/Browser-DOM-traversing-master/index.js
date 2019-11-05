let whole = document.body;

let headOne = document.querySelector(".heading").parentElement;

headOne.style.border = "solid grey 5px";
headOne.style.textAlign = "center";

let navList = document.querySelector(".nav-list");
navList.style.margin = 0;
navList.style.minHeight = "40px";
navList.style.backgroundColor = "blue";
navList.style.listStyle = "none";
navList.style.display = "flex";
navList.style.flexDirection = "row";
navList.style.justifyContent = "space-evenly";
navList.style.alignItems = "center";
navList.style.color = "white";

let infoCont = document.querySelector(".info");
infoCont.style.display = "flex";
infoCont.style.flexDirection = "row";
infoCont.style.width = "100vw";

let infoPack = document.getElementsByClassName("info-package");
console.log(infoPack.length)

for (let j = 0; j < infoPack.length; j++) {
    infoPack[j].style.width = "30%";

}



let imgS = document.getElementsByTagName("img");
console.log(imgS.length)

for (let i = 0; i < imgS.length; i++) {
    // imgS[i].style.width = "30vw";
    // imgS[i].style.objectFit = "cover";
}