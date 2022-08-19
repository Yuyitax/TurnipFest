/* to push onto main */
var YTAPIkey = "AIzaSyD_7qskIScu2G9J1dWitB2PLLZXyfvabIU";
// AIzaSyD_7qskIScu2G9J1dWitB2PLLZXyfvabIU
// 1: AIzaSyCREkvLlXKzAhqOjjsVunYzIyDuAXJJjWI
var videoSearch = "dog"
// var genre = $("#select-genre");
var cuisine = "french";
var userGenre;
var genreRadios = document.getElementsByName("genre");
var YTdata;
var videos = []
var currentVideoIndex = 0;
var carousel = document.querySelector(".carouselbox");
var nextBtn = carousel.querySelector(".next");
var previousBtn = carousel.querySelector(".previous");


// var getCountry = function () {
//     $("#select-genre");
// };

// retrieving the user's input from genres and country's section
$("#continue-from-music").on("click", function(event){
    event.preventDefault();

    getGenre();
    getFakeYTdata();
})

function getGenre () {
    
    for (var i = 0, length = genreRadios.length; i < length; i++) {
        if (genreRadios[i].checked) {
            
            userGenre = genreRadios[i].value;
        
            // if a radio isn't checked, then stop the for loop
            break;
        }
        }
        if (userGenre === undefined || userGenre === null) {
            document.getElementById('id01').style.display = 'block';
        }
}


var getFakeYTdata = function () {
    var fakeData = {
        "kind": "youtube#searchListResponse",
        "etag": "q3Zjdb5AXXe32RWx8Dx8s-h4c78",
        "nextPageToken": "CAEQAA",
        "regionCode": "US",
        "pageInfo": {
          "totalResults": 1000000,
          "resultsPerPage": 1
        },
        "items": [
          {
            "kind": "youtube#searchResult",
            "etag": "251ciU54FGaZxfwREouXUOp85Yk",
            "id": {
              "kind": "youtube#video",
              "videoId": "L818dKnixGs"
            },
            "snippet": {
              "publishedAt": "2022-08-15T17:43:52Z",
              "channelId": "UCYbggI6qVceWa1_1dfH0hMA",
              "title": "FUNNY CAT MEMES COMPILATION OF 2022 PART 44",
              "description": "Try Not To Laugh Challenge is a hilarious compilation of Funny and cute Animal Videos, featuring some of the funniest cats ...",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "Meowthemall",
              "liveBroadcastContent": "none",
              "publishTime": "2022-08-15T17:43:52Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "251ciU54FGaZxfwREouXUOp85Yk",
            "id": {
              "kind": "youtube#video",
              "videoId": "3CuAboWK1ec"
            },
            "snippet": {
              "publishedAt": "2022-08-15T17:43:52Z",
              "channelId": "UCYbggI6qVceWa1_1dfH0hMA",
              "title": "FUNNY CAT MEMES COMPILATION OF 2022 PART 44",
              "description": "Try Not To Laugh Challenge is a hilarious compilation of Funny and cute Animal Videos, featuring some of the funniest cats ...",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "Meowthemall",
              "liveBroadcastContent": "none",
              "publishTime": "2022-08-15T17:43:52Z"
            }
          },
          {
            "kind": "youtube#searchResult",
            "etag": "251ciU54FGaZxfwREouXUOp85Yk",
            "id": {
              "kind": "youtube#video",
              "videoId": "jRetP9JmmO4"
            },
            "snippet": {
              "publishedAt": "2022-08-15T17:43:52Z",
              "channelId": "UCYbggI6qVceWa1_1dfH0hMA",
              "title": "FUNNY CAT MEMES COMPILATION OF 2022 PART 44",
              "description": "Try Not To Laugh Challenge is a hilarious compilation of Funny and cute Animal Videos, featuring some of the funniest cats ...",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/3Mz-KwDofLQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "Meowthemall",
              "liveBroadcastContent": "none",
              "publishTime": "2022-08-15T17:43:52Z"
            }
          }
        ]
    }

    YTdata = fakeData;
    buildYTurl();
}

var getYTdata = function () {
    var queryUrlYT = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=7&q=" + cuisine + "+" + userGenre + "+" + "music&videoDuration=short&type=video&key=" + YTAPIkey;
    //console.log(queryUrlYT);
    fetch(queryUrlYT)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                   //console.log(typeof(data.items[0].id.videoId));
                    YTdata = data;
                    //carouselBtn(0);
                    
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
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to the YouTube API ');
    });
};


// getFakeYTdata();
// //console.log(YTdata);

function buildYTurl () {
    videos = [];
    for (var i in YTdata.items) {
        console.log(YTdata.items[i].id.videoId);
        videos.push("https://www.youtube.com/embed/" + YTdata.items[i].id.videoId + "?autoplay=1")
    }
    carouselBtn(0);
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
  

  