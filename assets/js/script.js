//SELECTORS------------------------ 
var gameNameEl = document.querySelector('body')
var copyrightEl = document.querySelector('#copyright')


var year = moment().format("YYYY");
var pastYear = moment().subtract(1, 'Y').format('YYYY');


function selectGenre(){
	var genreSelection=$(this).data('genre');
	console.log(genreSelection);
};

function selectPlatform(){
	var platformSelection=$(this).data('console')
	var platformSelection=JSON.stringify(platformSelection);
	console.log(platformSelection);
};


//I guess this section has to global?? 
// const settings = {
// 	"async": true,
// 	"crossDomain": true,

// 	"url": `https://rawg-video-games-database.p.rapidapi.com/games?dates=${year},${pastYear}&genres=${genreSelection}&platforms=${platformSelection}&page_size=10`,

// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "71e3147708msh713981020d02028p1c2586jsn77d951e6a61b",
// 		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
// 	}
// };


//FUNCTIONS--------------------------------


//Accepts selections from user to retrieve response. Calls the rendering function(s)
// var getRAWGData = function () {
// 	$.ajax(settings).done(function (response) {

// 		console.log(response.results);
// 		renderGameData(response)


// 	});
// }

// Renders game data to the page
// var renderGameData = function (response, genre, platform) {

// 	for (i = 0; i < 20; i++) {

// 		//creates div for a 'section' for each game 
// 		var gameSection = document.createElement('div')
// 		gameSection.textContent = "Game Name"
// 		gameNameEl.appendChild(gameSection)


// 		gameAPI = response.results[i].name
// 		console.log(gameAPI)
// 		var gameName = document.createElement('h4');
// 		gameName.textContent = gameAPI
// 		gameSection.appendChild(gameName);

// 		releasedAPI = response.results[i].released;
// 		var released = document.createElement('h4');
// 		released.textContent = releasedAPI;
// 		gameSection.appendChild(released);

// 		MCscore = response.results[i].metacritic;
// 		var metaRating = document.createElement('h4')
// 		metaRating.textContent = MCscore;
// 		gameSection.appendChild(metaRating)

		// for(i=0; i<response.results[i].short_screenshots.length; i++){

		// }

		// screenshotsArr = response.results[i].metacritic; 
		// var metaRating = document.createElement('h4')
		// metaRating.textContent=MCscore;
		// gameSection.appendChild(metaRating)

		//  =


// 	}
// }











gameName="Tom Clancys Breakpoint"
// when a game is selected it passes the game name into the search query for youtube
function gameVideo(gameName) {
	fetch(`https://www.googleapis.com/youtube/v3/search?list=${gameName}&key=AIzaSyAeKSxi1SCBtErDfdLze16qiqmLbnGTMxI`)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
		})
		// catches any fetch errors
		.catch(function (err) {
			console.log(err);
		});
};



//EVENT LISTENERS----------------------------------------

// this will later be called by an eventListener. Will have 2 arguments, genre and platform
getRAWGData();
gameVideo();



$('.dropdown-trigger').dropdown();

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.slider');
//     var instances = M.Slider.init(elems, options);
//   });

document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.carousel');
	var instances = M.Carousel.init(elems, options);
});

$('.slider').slider({ width: 1000, });

$(".genreSelection").on("click",selectGenre);
$(".platformSelection").on("click",selectPlatform);