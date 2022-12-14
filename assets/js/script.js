// Basic search URL for edamam:("https://api.edamam.com/api/recipes/v2");
// Final link example for edamam: https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=7bb5e52a&app_key=0c1e8ad80757342d9801acaefa2e9df0&ingr=1-6&diet=balanced&health=egg-free&cuisineType=American&imageSize=REGULAR

// Global Variables for EDAMAME API Fetch
var appID = '4b84d97d';
var appApiKey = '1c89a1a2ce12b0c5f0a0f657dc941c8b';
var checkedAllergies = []; // Array for "&health=" area on URL
var qValue = [];
var checkedCuisine = '';
// var searchButton = document.querySelector('#search');

// DOM Elements
// Allergies checkboxes
var allergiesSection = $('#allergies'); // Main section ID

// We are currrently not using these variables:
// var alcoholFreeCbox = $("#alcohol-free");
// var dairyCbox = $("#dairy-free");
// var eggsCbox = $("#eggs");
// var fishCbox = $("#fish-free");
// var ketoCbox = $("#keto-friendly");
// var lowSugarCbox = $("#low-sugar");
// var paleoCbox = $("#paleo");
// var peanutsCbox = $("peanut-free");
// var shellfishCbox = $("#shellfish-free");
// var soyCbox = $("#soy-free");
// var treeNutsCbox = $("#tree-nuts");
// var veganCbox = $("#vegan");
// var wheatCbox = $("#wheat-free");


// This is the Youtube API Section:

var YTAPIkey = "AIzaSyAE9G-nF9KIIBGo89zGvMGuPdxuYRcm3Lc";
// AIzaSyD_7qskIScu2G9J1dWitB2PLLZXyfvabIU
// 1: AIzaSyCREkvLlXKzAhqOjjsVunYzIyDuAXJJjWI
var videoSearch = "dog"
// var genre = $("#select-genre");
// var cuisine = "french";
var userGenre;
var genreRadios = document.getElementsByName("genre");
var YTdata;
// var videos = []
// // var currentVideoIndex = 0;
// var carousel = document.querySelector(".carouselbox");
// // var nextBtn = carousel.querySelector(".next");
// var previousBtn = carousel.querySelector(".previous");
// var searchButton = document.querySelector('#search');
var cuisine;
var userSearchInput;

// Variables for for Main Sections
var allergiesBxs = document.querySelectorAll(
  '#allergies input[type="checkbox"]'
);

var albx = $('#allergies input[type="checkbox"]');
// console.log(allergiesBxs);

// Pushing Delected Diets into the checkedallergiess array
var arrOfdiets = [];
allergiesBxs.forEach((el) => {
  arrOfdiets.push(el);
});

function allergyclick(value, checked) {
  // console.log(checked);

  if (checked == true) {
    // console.log(value);
    checkedAllergies.push(value);
  } else if (checked !== -1) {
    checkedAllergies.splice(checked, 1);
  }
  return checkedAllergies;
}
// Cristina's ftch
var recipes = {
  fetchRecipes: function (data) {
    fetch(
      'https://api.edamam.com/api/recipes/v2?type=public&q=' +
        qValue +
        '&app_id=' +
        appID +
        '&app_key=' +
        appApiKey +
        '&ingr=1-5&health=' +
        checkedAllergies +
        '&cuisineType=' +
        checkedCuisine +
        '&imageSize=REGULAR'
    )
      .then((response) => response.json())
      .then((data) => {
        this.displayRecipe(hits);
      });
  },

  displayRecipe: function(hits) {
    const dietLabels = hits.recipe.dietLabels;
    const { healthLabels } = hits.recipe.healthLabels;
    const cuisineType = hits.recipe.cuisineType;
  },
};

// Brian's part of EDAMAME:
var searchButton = document.querySelector('#continue-btn');

searchButton.addEventListener('click', () => {
  // console.log('button clicked');
  userSearchInput = document.getElementById('search').value;
  // console.log(inputValue);
  // sendApiRequest(userSearchInput);
});

async function sendApiRequest() {
  let APP_ID = '4b84d97d';
  let API_KEY = '1c89a1a2ce12b0c5f0a0f657dc941c8b';
  // console.log(inputValue);
  console.log(cuisine)
  let finalURL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${API_KEY}&q=${userSearchInput}&cuisineType=${cuisine}`;

  if (checkedAllergies.length > 0) {
    let text2 = `&health=${checkedAllergies}`

    for (let i = 0; i < checkedAllergies.length; i++) {
      finalURL += "&health=" + checkedAllergies[i];
    }
  }

  // console.log("JUMP")
  // console.log(typeof(checkedAllergies))
  let response = await fetch(finalURL);
  // console.log(response);
  let data = await response.json();
  localStorage.setItem("foodData", JSON.stringify(data));
  // console.log(data);
  useApiData(data);
}


function getUserRecipe(userRecipe) {
  localStorage.setItem("recipe", JSON.stringify(userRecipe))
}
function useApiData(data) {
  // 6 RESULTS
  for (var i = 0; i < 6; i++) {
        // target div
    // line 206 in html
    var test = document.querySelector('#test1');

    // make container
    var testContainer = document.createElement('a');
    testContainer.setAttribute(
      'class',
      'test-container flex flex-col justify-center items-center'
    );
    testContainer.setAttribute(
      'href',
      'html/cuisine.html'
    );
    testContainer.setAttribute(
      'target',
      '_blank'
    );
    testContainer.setAttribute(
      'onclick',
      "getUserRecipe(" + i + ")"
    );
    // console.log("HELLO FROM HER" + userRecipe)


    
    // console.log(testContainer);

    // make card
    var testCard = document.createElement('div');
    testCard.setAttribute(
      'class',
      'max-w-sm bg-white rounded-lg border border-gray-200 shadow-md w-72 h-[380px]'
    );
    // console.log(testCard);

    // Image
    var image = document.createElement('img');
    // console.log("READ ME");
    // console.log(data);
    var imageURL = data.hits[i].recipe.images.REGULAR.url;
    // console.log(imageURL);
    image.setAttribute('src', imageURL);
    image.setAttribute('alt', 'food');
    image.setAttribute('class', 'rounded-t-lg w-full');
    // console.log(image);

    // Title
    var title = document.createElement('h1');
    title.textContent = data.hits[i].recipe.label;
    title.setAttribute('class', 'text-black mb-2 text-2xl text-center');
    // console.log(title);

    // // Ingredients
    // // var ingredientsList =
    // var ingredientsList = document.createElement('ul');
    // var ingredientsData = data.hits[i].recipe.ingredients;
    // for (var x = 0; x < ingredientsData.length; x++) {
    //   var ingredientsItem = document.createElement('li');
    //   ingredientsItem.textContent = ingredientsData[x].text;
    //   ingredientsList.appendChild(ingredientsItem);
    //   ingredientsList.setAttribute('class', 'mb-3 text-center');
    //   // console.log(ingredientsList);
    // }

    // // Serving Size
    // var serving = document.createElement('p');
    // serving.textContent = data.hits[i].recipe.yield;
    // serving.setAttribute('class', 'mb-3 text-center');
    // // console.log(serving);

    // // Total Calories
    // var calories = document.createElement('p');
    // calories.textContent =
    //   `Total Calories: ` + data.hits[i].recipe.calories.toFixed(2);
    //   calories.setAttribute('class', 'mb-3 text-center');
    // // console.log(calories);

    // // Total Fat
    // var fat = document.createElement('p');
    // fat.textContent =
    //  `Total Fat (g): ` + data.hits[i].recipe.digest[0].total.toFixed(2);
    //  fat.setAttribute('class', 'mb-3 text-center');
    // // console.log(fat);

    // // Total Carbs
    // var carbs = document.createElement('p');
    // carbs.textContent =
    // `Total Carbohydrate (g): ` + data.hits[i].recipe.digest[1].total.toFixed(2);
    // carbs.setAttribute('class', 'mb-3 text-center');
    // // console.log(carbs);

    // // Total Protein
    // var protein = document.createElement('p');
    // protein.textContent =
    // `Protein (g): ` + data.hits[i].recipe.digest[2].total.toFixed(2);
    // protein.setAttribute('class', 'mb-3 text-center');
    // // console.log(protein);

    // // Total Sodium
    // var sodium = document.createElement('p');
    // sodium.textContent =
    // `Sodium (mg): ` + data.hits[i].recipe.digest[3].total.toFixed(2);
    // sodium.setAttribute('class', 'mb-3 text-center');
    // // console.log(sodium);

    // // Link
    // var link = document.createElement('a');
    // var linkData = data.hits[i].recipe.shareAs;
    // link.setAttribute('href', linkData);
    // link.setAttribute('target', '_blank');
    // link.setAttribute(
    //   'class',
    //   'inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#420948] rounded-lg hover:bg-black mb-3'
    // );
    // link.textContent = 'View More';
    // // console.log(link);

    // Append to tailwind card
    testCard.appendChild(image);
    testCard.appendChild(title);
    // testCard.appendChild(ingredientsList);
    // testCard.appendChild(serving);
    // testCard.appendChild(calories);
    // testCard.appendChild(fat);
    // testCard.appendChild(protein);
    // testCard.appendChild(carbs);
    // testCard.appendChild(sodium);
    // testCard.appendChild(link);
    // append card to the container
    testContainer.appendChild(testCard);
    // append container div to actual html div
    test.appendChild(testContainer);
  }
}

function selectCountry(country) {
  cuisine = country;
  localStorage.setItem("cuisine", country);
  
  // console.log(typeof(cuisine));
}

// retrieving the user's input from genres and country's section

function musicPageContinue(userMusic) {
  // userMusic.preventDefault();
  userGenre = userMusic
  getYTdata();
  
    // displayPage('music-page', 'recipe-gallery-page')
}

// function getGenre () {

//     for (var i = 0, length = genreRadios.length; i < length; i++) {
//         if (genreRadios[i].checked) {

//             userGenre = genreRadios[i].value;

//             // if a radio isn't checked, then stop the for loop
//             break;
//         }
//     }

//     if (userGenre === undefined || userGenre === null) {
//         document.getElementById('id01').classList.remove("hidden");
//         return false;
//     }
//     return true;
// }


// function getFakeYTdata() {
//     var fakeData = {
//         "kind": "youtube#searchListResponse",
//         "etag": "q3Zjdb5AXXe32RWx8Dx8s-h4c78",
//         "nextPageToken": "CAEQAA",
//         "regionCode": "US",
//         "pageInfo": {
//           "totalResults": 1000000,
//           "resultsPerPage": 1
//         },
//         "items": [
//           {
//             "kind": "youtube#searchResult",
//             "etag": "251ciU54FGaZxfwREouXUOp85Yk",
//             "id": {
//               "kind": "youtube#video",
//               "videoId": "L818dKnixGs"
//             },
//             "snippet": {
//               "publishedAt": "2022-08-15T17:43:52Z",
//               "channelId": "UCYbggI6qVceWa1_1dfH0hMA",
//               "title": "FUNNY CAT MEMES COMPILATION OF 2022 PART 44",
//               "description": "Try Not To Laugh Challenge is a hilarious compilation of Funny and cute Animal Videos, featuring some of the funniest cats ...",
//               "thumbnails": {
//                 "default": {
//                   "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/default.jpg",
//                   "width": 120,
//                   "height": 90
//                 },
//                 "medium": {
//                   "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/mqdefault.jpg",
//                   "width": 320,
//                   "height": 180
//                 },
//                 "high": {
//                   "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/hqdefault.jpg",
//                   "width": 480,
//                   "height": 360
//                 }
//               },
//               "channelTitle": "Meowthemall",
//               "liveBroadcastContent": "none",
//               "publishTime": "2022-08-15T17:43:52Z"
//             }
//           },
//           {
//             "kind": "youtube#searchResult",
//             "etag": "251ciU54FGaZxfwREouXUOp85Yk",
//             "id": {
//               "kind": "youtube#video",
//               "videoId": "3CuAboWK1ec"
//             },
//             "snippet": {
//               "publishedAt": "2022-08-15T17:43:52Z",
//               "channelId": "UCYbggI6qVceWa1_1dfH0hMA",
//               "title": "FUNNY CAT MEMES COMPILATION OF 2022 PART 44",
//               "description": "Try Not To Laugh Challenge is a hilarious compilation of Funny and cute Animal Videos, featuring some of the funniest cats ...",
//               "thumbnails": {
//                 "default": {
//                   "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/default.jpg",
//                   "width": 120,
//                   "height": 90
//                 },
//                 "medium": {
//                   "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/mqdefault.jpg",
//                   "width": 320,
//                   "height": 180
//                 },
//                 "high": {
//                   "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/hqdefault.jpg",
//                   "width": 480,
//                   "height": 360
//                 }
//               },
//               "channelTitle": "Meowthemall",
//               "liveBroadcastContent": "none",
//               "publishTime": "2022-08-15T17:43:52Z"
//             }
//           },
//           {
//             "kind": "youtube#searchResult",
//             "etag": "251ciU54FGaZxfwREouXUOp85Yk",
//             "id": {
//               "kind": "youtube#video",
//               "videoId": "jRetP9JmmO4"
//             },
//             "snippet": {
//               "publishedAt": "2022-08-15T17:43:52Z",
//               "channelId": "UCYbggI6qVceWa1_1dfH0hMA",
//               "title": "FUNNY CAT MEMES COMPILATION OF 2022 PART 44",
//               "description": "Try Not To Laugh Challenge is a hilarious compilation of Funny and cute Animal Videos, featuring some of the funniest cats ...",
//               "thumbnails": {
//                 "default": {
//                   "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/default.jpg",
//                   "width": 120,
//                   "height": 90
//                 },
//                 "medium": {
//                   "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/mqdefault.jpg",
//                   "width": 320,
//                   "height": 180
//                 },
//                 "high": {
//                   "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/hqdefault.jpg",
//                   "width": 480,
//                   "height": 360
//                 }
//               },
//               "channelTitle": "Meowthemall",
//               "liveBroadcastContent": "none",
//               "publishTime": "2022-08-15T17:43:52Z"
//             }
//           }
//         ]
//     }

  // YTdata = fakeData;
  // localStorage.setItem("YTdata", JSON.stringify(YTdata));
  // buildYTurl();
// };

function getYTdata() {
    var queryUrlYT = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=7&q=" + cuisine + "+" + userGenre + "+" + "music&publishedAfter=2020-01-10T00%3A00%3A00.0Z&videoLicense=creativeCommon&videoEmbeddable=true&videoDuration=short&type=video&key=" + YTAPIkey;
    //console.log(queryUrlYT);
    fetch(queryUrlYT)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                   //console.log(typeof(data.items[0].id.videoId));
                    YTdata = data;
                    //carouselBtn(0);
                    localStorage.setItem("YTdata", JSON.stringify(YTdata));
                    buildYTurl();

          // buildYTurl();

          //videoSearchEl.innerHTML =
          // for (var i = 0, length = genreRadios.length; i < length; i++) {
          //     if (genreRadios[i].checked) {

          //       alert(genreRadios[i].value);
          //       console.log(genreRadios[i].value);

          //       // if a radio isn't checked, then stop the for loop
          //       break;
          //     }
          //   }
        });
      } 
    })
    
};

// getFakeYTdata();
// //console.log(YTdata);

function buildYTurl () {
    videos = [];
    for (var i in YTdata.items) {
        console.log(YTdata.items[i].id.videoId);
        videos.push("https://www.youtube.com/embed/" + YTdata.items[i].id.videoId + "?autoplay=1")
    }
}

// function carouselBtn(position) {
//   currentVideoIndex = currentVideoIndex + position;
//   if (currentVideoIndex < 0) {
//       currentVideoIndex = videos.length - 1;
//   } else if (currentVideoIndex > videos.length - 1) {
//       currentVideoIndex = 0;
//     }

//     console.log(videos[currentVideoIndex])
//     document.getElementById("carouselVideos").src = videos[currentVideoIndex];

// }

//   nextBtn.addEventListener("click", function(event) {
//     event.stopPropagation();

//     carouselBtn(1);
//   });

//   previousBtn.addEventListener("click", function(event) {
//     event.stopPropagation();

//     carouselBtn(-1);
//   });


  function displayPage (currentId, nextId) {
    // console.log(currentId);
    // console.log(nextId);
     var currentPage = document.getElementById(currentId);
     var nextPage = document.getElementById(nextId);


     currentPage.classList.add("hidden");
     nextPage.classList.remove("hidden");
 };

