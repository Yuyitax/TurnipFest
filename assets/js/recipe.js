
var userRecipe = JSON.parse(localStorage.getItem("recipe"));
var foodData = JSON.parse(localStorage.getItem("foodData"));
var YTdata = JSON.parse(localStorage.getItem("YTdata"));
var videos = [];
var currentVideoIndex = 0;
var carousel = document.querySelector(".carouselbox");
var nextBtn = carousel.querySelector(".next");
var previousBtn = carousel.querySelector(".previous");
var cuisine = localStorage.getItem("cuisine");
var banner = document.getElementById("banner");
var title = document.getElementById("cuisine-title");

if (cuisine === "american") {
  banner.classList.add("bg-[url('./../assets/images/banner-americancuisine2-bimo-luki-unsplash.jpg')]");
  title.innerHTML = "American Cuisine";

} else if (cuisine === "italian") {
  banner.classList.add("bg-[url('./../assets/images/banner-Italiancuisine-josh-hild-unsplash.png')]");
  title.innerHTML = "Italian Cuisine";

} else if (cuisine === "asian") {
  banner.classList.add("bg-[url('./../assets/images/banner-asiancuisine-vernon-raineil-cenzon-unsplash.jpg')]");
  title.innerHTML = "Asian Cuisine";

} else if (cuisine === "caribbean") {
  banner.classList.add("bg-[url('./../assets/images/banner-caribbeancuisine2-carmina-muntean-unsplash.jpg')]");
  title.innerHTML = "Caribbean Cuisine";

} else if (cuisine === "french") {
  banner.classList.add("bg-[url('./../assets/images/banner-frenchcuisine-cafe-gourmande-258201_1920.jpg')]");
  title.innerHTML = "French Cuisine";

} else if (cuisine === "indian") {
  banner.classList.add("bg-[url('./../assets/images/banner-indiancuisine-debashis-rc-biswas-unsplash.png')]");
  title.innerHTML = "Indian Cuisine";
}




var h2 = document.getElementById('h2');
h2.textContent = foodData.hits[userRecipe].recipe.label;

var foodImage = document.getElementById('food-image');
foodImage.src = foodData.hits[userRecipe].recipe.images.REGULAR.url;
foodImage.setAttribute('class', 'w-[500px]');

var ingredientsList = document.getElementById('ingredients');
    var ingredientsData = foodData.hits[userRecipe].recipe.ingredients;
    for (var x = 0; x < ingredientsData.length; x++) {
    var ingredientsItem = document.createElement('li');
    ingredientsItem.textContent = ingredientsData[x].text;
    ingredientsList.appendChild(ingredientsItem);
    ingredientsList.setAttribute('class', 'mb-3');
    // console.log(ingredientsList);
    }

  var instructions = document.getElementById('instructions');
  instructions.src = foodData.hits[userRecipe].recipe.url;

// Link

    var link = document.createElement('a');
    var linkData = foodData.hits[userRecipe].recipe.url;
    var instructions = document.getElementById("instructions");
    link.setAttribute('href', linkData);
    link.setAttribute('target', '_blank');
    link.setAttribute(
    'class',
    'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#420948] rounded-lg hover:bg-black mb-3 mx-5'
    );
    link.textContent = 'View More';
    instructions.appendChild(link);
    


buildYTurl ();
carouselBtn(0);
function buildYTurl () {
    videos = [];
    for (var i in YTdata.items) {
        console.log(YTdata.items[i].id.videoId);
        videos.push("https://www.youtube.com/embed/" + YTdata.items[i].id.videoId + "?autoplay=1")
    }
}


function carouselBtn(position) {
  currentVideoIndex = currentVideoIndex + position;
  if (currentVideoIndex < 0) {
      currentVideoIndex = videos.length - 1;
  } else if (currentVideoIndex > videos.length - 1) {
      currentVideoIndex = 0;
    }

    console.log(videos[currentVideoIndex])
    document.getElementById("carouselVideos").src = videos[currentVideoIndex];

}

  nextBtn.addEventListener("click", function(event) {
    event.stopPropagation();

    carouselBtn(1);
  });

  previousBtn.addEventListener("click", function(event) {
    event.stopPropagation();

    carouselBtn(-1);
  });




// function useApiData(data) {
//     // 6 RESULTS
//     var i = JSON.parse(localStorage.getItem("recipe"));
//     var test = document.querySelector('#test1');

//     // make container
//     var testContainer = document.createElement('a');
//     testContainer.setAttribute(
//     'class',
//     'test-container flex flex-col justify-center items-center'
//     );
//     testContainer.setAttribute(
//     'href',
//     'html/cuisine.html'
//     );
//     testContainer.setAttribute(
//     'target',
//     '_blank'
//     );
//     // console.log(testContainer);

//     // make card
//     var testCard = document.createElement('div');
//     testCard.setAttribute(
//     'class',
//     'max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'
//     );
//     // console.log(testCard);

//     // Image
//     var image = document.createElement('img');
//     // console.log("READ ME");
//     // console.log(data);
//     var imageURL = data.hits[i].recipe.images.REGULAR.url;
//     // console.log(imageURL);
//     image.setAttribute('src', imageURL);
//     image.setAttribute('alt', 'food');
//     image.setAttribute('class', 'rounded-t-lg w-full');
//     // console.log(image);

//     // Title
//     var title = document.createElement('h1');
//     title.textContent = data.hits[i].recipe.label;
//     title.setAttribute('class', 'mb-2 text-2xl font-bold text-center');
//     // console.log(title);

//     // Ingredients
//     // var ingredientsList =
//     var ingredientsList = document.createElement('ul');
//     var ingredientsData = data.hits[i].recipe.ingredients;
//     for (var x = 0; x < ingredientsData.length; x++) {
//     var ingredientsItem = document.createElement('li');
//     ingredientsItem.textContent = ingredientsData[x].text;
//     ingredientsList.appendChild(ingredientsItem);
//     ingredientsList.setAttribute('class', 'mb-3 text-center');
//     // console.log(ingredientsList);
//     }

//     // Serving Size
//     var serving = document.createElement('p');
//     serving.textContent = data.hits[i].recipe.yield;
//     serving.setAttribute('class', 'mb-3 text-center');
//     // console.log(serving);

//     // Total Calories
//     var calories = document.createElement('p');
//     calories.textContent =
//     `Total Calories: ` + data.hits[i].recipe.calories.toFixed(2);
//     calories.setAttribute('class', 'mb-3 text-center');
//     // console.log(calories);

//     // Total Fat
//     var fat = document.createElement('p');
//     fat.textContent =
//     `Total Fat (g): ` + data.hits[i].recipe.digest[0].total.toFixed(2);
//     fat.setAttribute('class', 'mb-3 text-center');
//     // console.log(fat);

//     // Total Carbs
//     var carbs = document.createElement('p');
//     carbs.textContent =
//     `Total Carbohydrate (g): ` + data.hits[i].recipe.digest[1].total.toFixed(2);
//     carbs.setAttribute('class', 'mb-3 text-center');
//     // console.log(carbs);

//     // Total Protein
//     var protein = document.createElement('p');
//     protein.textContent =
//     `Protein (g): ` + data.hits[i].recipe.digest[2].total.toFixed(2);
//     protein.setAttribute('class', 'mb-3 text-center');
//     // console.log(protein);

//     // Total Sodium
//     var sodium = document.createElement('p');
//     sodium.textContent =
//     `Sodium (mg): ` + data.hits[i].recipe.digest[3].total.toFixed(2);
//     sodium.setAttribute('class', 'mb-3 text-center');
//     // console.log(sodium);

//     // Link
//     var link = document.createElement('a');
//     var linkData = data.hits[i].recipe.shareAs;
//     link.setAttribute('href', linkData);
//     link.setAttribute('target', '_blank');
//     link.setAttribute(
//     'class',
//     'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#420948] rounded-lg hover:bg-black mb-3'
//     );
//     link.textContent = 'View More';
//     // console.log(link);

//     // Append to tailwind card
//     testCard.appendChild(image);
//     testCard.appendChild(title);
//     // testCard.appendChild(ingredientsList);
//     // testCard.appendChild(serving);
//     // testCard.appendChild(calories);
//     // testCard.appendChild(fat);
//     // testCard.appendChild(protein);
//     // testCard.appendChild(carbs);
//     // testCard.appendChild(sodium);
//     // testCard.appendChild(link);
//     // append card to the container
//     testContainer.appendChild(testCard);
//     // append container div to actual html div
//     test.appendChild(testContainer);
// }

