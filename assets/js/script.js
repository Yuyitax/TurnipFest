/* to push onto main */
var searchButton = document.querySelector('#search');
var cuisine;

searchButton.addEventListener('click', () => {
  console.log('button clicked');
  var inputValue = document.getElementById('myInput').value;
  console.log(inputValue);
  sendApiRequest(inputValue);
});

async function sendApiRequest(inputValue) {
  let APP_ID = '7bb5e52a';
  let API_KEY = '0c1e8ad80757342d9801acaefa2e9df0';
  console.log(inputValue);
  let response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${API_KEY}&q=${inputValue}`
  );
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
}

function useApiData(data) {
  // 4 RESULTS
  for (var i = 0; i < 4; i++) {
    var image = document.createElement('img');
    var title = document.createElement('h1');
    var ingredients = document.createElement('p');
    var serving = document.createElement('p');
    var calories = document.createElement('p');
    var fat = document.createElement('p');
    var protein = document.createElement('p');
    var carbs = document.createElement('p');
    var sodium = document.createElement('p');
    var link = document.createElement('p');

    // foodImgEl.setAttribute("src", imgURL);
    // foodImgEl.setAttribute("alt", "Picture of prepared recipe");

    // Image
    // image.textContent = data.hits[i].recipe.image;
    // console.log(image);
    // Title
    title.textContent = data.hits[i].recipe.label;
    console.log(title);
    // Ingredients
    ingredients.textContent = data.hits[i].recipe.ingredientsLines;
    console.log(ingredients);
    // Serving Size
    serving.textContent = data.hits[i].recipe.yield;
    console.log(serving);
    // Total Calories
    calories.textContent = data.hits[i].recipe.calories.toFixed(2);
    console.log(calories);
    // Total Fat
    fat.textContent = data.hits[i].recipe.digest[0].total.toFixed(2);
    console.log(fat);
    // Total Carbs
    carbs.textContent = data.hits[i].recipe.digest[1].total.toFixed(2);
    console.log(carbs);
    // Total Protein
    protein.textContent = data.hits[i].recipe.digest[2].total.toFixed(2);
    console.log(protein);
    // Total Sodium
    sodium.textContent = data.hits[i].recipe.digest[3].total.toFixed(2);
    console.log(sodium);
    // Link
    link.textContent = data.hits[i].recipe.shareAs;
    console.log(link);

    // TODO: append to actual card / this is for testing
    // document.body.appendChild(image);
    document.body.appendChild(title);
    document.body.appendChild(ingredients);
    document.body.appendChild(serving);
    document.body.appendChild(calories);
    document.body.appendChild(fat);
    document.body.appendChild(protein);
    document.body.appendChild(carbs);
    document.body.appendChild(sodium);
    document.body.appendChild(link);
  }
}
function selectCountry(country) {
  cuisine = country
}