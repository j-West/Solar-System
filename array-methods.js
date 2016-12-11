var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var el = document.getElementById("planets");

/*

 Use the forEach method to add the name of each planet

 to a div element in your HTML with an id of "planets".

*/

planets.forEach(function(planet) {
  var para = document.createElement("p")
  para.innerHTML = planet
  el.appendChild(para)
})

// Use the map method to create a new array where the first letter of each planet is capitalized
var capitalizedPlanets = planets.map(function(planet) {
  return planet.charAt(0).toUpperCase() + planet.substr(1)
})

console.log(capitalizedPlanets);
