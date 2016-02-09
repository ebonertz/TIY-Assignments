var bodyStyle = document.querySelector("body");
bodyStyle.style.fontFamily = "Verdana";

var myName = document.getElementById("fullname");
myName.textContent = "Happy Gilmore";

var myTown = document.getElementById("hometown");
myTown.textContent = "Waterbury";

var myMovie = document.getElementById("movie");
myMovie.textContent = "Slap Shot";

var myFood = document.getElementById("food");
myFood.textContent = "Subway";

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
var happy = new Image(400, 400);
happy.src = "./happy.jpg";
console.log(happy);
body.appendChild(happy);
