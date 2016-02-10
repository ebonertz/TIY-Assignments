// Add a script tag in the appropriate place.
// Using JavaScript, change the body's tag style so it has a font-family of the sans-serif font stack of your choice.
// Using JavaScript, replace each of the spans with your own information.
// Iterate through each li and change the class to listitem. Add a style tag that sets a rule for listitem to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

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


var list = document.getElementsByTagName("li");

for (num = 0; item <= list.length; num++)
{
  list[num].className = "listItem";
  list[num].style.color= "red";
}

var Happy = new Image () ;
happy.src = "happy.jpg";
console.log(happy);
body.appendChild(happy);
