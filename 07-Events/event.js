// const river = document.getElementById("river");
// const flower = document.getElementById("flower");
// const pata = document.getElementById("pata");
// const nime = document.getElementById("nime");

// river.addEventListener("click", function() {
//     alert("You clicked on the river image!");
// });

// flower.addEventListener("click", function() {
//     alert("You clicked on the flower image!");
// });

// pata.addEventListener("click", function() {
//     alert("You clicked on the pata image!");
// });

// nime.addEventListener("click", function() {
//     alert("You clicked on the nime image!");
// });

const images = document.querySelectorAll("img");

images.forEach(image => {
    image.addEventListener("click", () => {
        alert(`You clicked on ${image.id} image!`);
    });
});

// type of event: click, mouseover, mouseout, keydown, keyup, submit, etc.

//timestamp: when the event occurred

//target: the element that triggered the event

//dfaultprevented: whether the default action of the event was prevented

//toElement: the element that the event is being dispatched to

//currentTarget: the element that is currently handling the event

//clintX: the x-coordinate of the mouse pointer relative to the viewport

//clientY: the y-coordinate of the mouse pointer relative to the viewport

//screenX: the x-coordinate of the mouse pointer relative to the screen

//screenY: the y-coordinate of the mouse pointer relative to the screen

//altKey: whether the alt key was pressed during the event

//ctrlKey: whether the ctrl key was pressed during the event

//shiftKey: whether the shift key was pressed during the event

//keycode: the code of the key that was pressed during a keyboard event