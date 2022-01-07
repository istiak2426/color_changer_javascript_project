

const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const orange = document.querySelector(".orange");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");


const circle = document.querySelector(".circle");

const getBgcolor = (selectedElement) =>
{
    return window.getComputedStyle(selectedElement).backgroundColor;
}
var color = getBgcolor(red);

// red.addEventListener("click", () => {
//     circle.style.backgroundColor = color;
// });


const magicShow = (element, color) =>{
     return element.addEventListener("mouseenter", () => {
        circle.style.backgroundColor = color;
     });
    }



magicShow(red, getBgcolor(red));
magicShow(blue, getBgcolor(blue));
magicShow(orange, getBgcolor(orange));
magicShow(green, getBgcolor(green));
magicShow(yellow, getBgcolor(yellow));
