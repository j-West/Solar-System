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

// Use the filter method to create a new array that contains planets with the letter 'e'
var planetsWithE = planets.filter(function(planet) {
  if (planet.indexOf("e") !== -1) {
      return planet
  }
})

console.log(planetsWithE);

// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

words = words.reduce(function(sentence, word) {
  if (word !== words[words.length - 1]) {
    return sentence + word + " "
  } else {
    return sentence + word
  }
}, "")

console.log(words);
