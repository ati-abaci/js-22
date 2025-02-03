//1. The URL where our planet data is located is: "https://handlers.education.launchcode.org/static/planets.json".
//2. Add the code to fetch this URL
//   -The data you receive as a response should be an array containing 6 objects
//3. show the first planet name and distance(first index of the array data)
//4. let's dynamically change which planet's info we're displaying each time the element with id "destination" is clicked. To do this:
//      a) Declare a counter variable, index that changes each time a click event takes place.
//      b) Use the value of index as the position in the planets array to use in the template literal.
//      c) Lastly, to ensure that the value of the index does not surpass the length of the planets array, implement a mechanism to control the maximum allowed value for the index

////////Answer///////////



fetch("https://handlers.education.launchcode.org/static/planets.json")
  .then(response => response.json())
  .then(data => {
    const planets = data;
    let index = 0; 
    const destinationDiv = document.getElementById("destination");

    destinationDiv.innerHTML = `<h3>${planets[index].name}</h3>
    <p>Distance: ${planets[index].distance} </p> 
    <p> Star:${planets[index].star}</p> <p> Moon:${planets[index].moons}</p> 
    <img src="${planets[index].image}" alt="${planets[index].name}" 
    style="width: 300px; height: auto;">`;

    destinationDiv.addEventListener("click", () => {
      index++; 

      if (index >= planets.length) {
        index = 0; 
      }

      destinationDiv.innerHTML = `<h3>${planets[index].name}</h3>
      <p>Distance: ${planets[index].distance}</p> 
      <p> Star:${planets[index].star}<p> 
      <p> Moon:${planets[index].moons}</p> 
      <img src="${planets[index].image}" alt="${planets[index].name}" 
      style="width: 300px; height: auto;">`;
    });
  })
  .catch(error => {
    console.error("Error fetching planet data:", error);
  });
