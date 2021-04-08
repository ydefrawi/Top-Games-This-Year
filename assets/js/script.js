//SELECTORS------------------------ 
var gameNameEl = document.querySelector('body')
var copyrightEl = document.querySelector('#copyright')


var year=moment().format("YYYY");
var pastYear = moment().subtract(1, 'Y').format('YYYY');
var platformCodes={
	PS4:"18",
	PS5:"187",
	XB1:"1",
	SWITCH:"7",
	PC:"4",
};

//To find the VALUE of an item in an object, use [objectname].[key]    
//The line below returns "18" (PS4's code)
platform = platformCodes.PS4;
//The same will apply to genreSelection object


//We might need a function converting whatever the user selects in the drop down
//to the correct 'value' before we pass it into the API url. Might be simpler for Genre(?)
//Since they keys are sequential starting from 1 there could be an easy solution.   

var genreSelections={
	1:"action",
	2:"puzzle",
	3:"rpg",
	4:"indie",
	5:"vr",
	6:"shooter",
	7:"fps",
	8:"sports",
	9:"survival",
	10:"horror",
}

// console.log("Genre Object:")
// console.log(genreSelections);


//${platform} below will need to be swapped out with a variable containing the actual platform code (84 or whatever).
//before it was concatenating in the entire object. 


//I guess this section has to global?? 
const settings = {
	"async": true,
	"crossDomain": true,

	"url": `https://rawg-video-games-database.p.rapidapi.com/games?dates=2021&genres=action&platforms=${platform}&page_size=20`,

	"method": "GET",
	"headers": {
		"x-rapidapi-key": "71e3147708msh713981020d02028p1c2586jsn77d951e6a61b",
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
	}
};


//FUNCTIONS--------------------------------


//Accepts selections from user to retrieve response. Calls the rendering function(s)
var getRAWGData=function(){
$.ajax(settings).done(function (response) {

	console.log(response.results);
	renderGameData(response)
	

});
}

// Renders game data to the page
var renderGameData = function(response, genre, platform){

	for (i=0; i<20; i++)
	{
		
		//creates div for a 'section' for each game 
		var gameSection = document.createElement('div')
		gameSection.textContent = "Game Name"
		gameNameEl.appendChild(gameSection)


		gameAPI = response.results[i].name
		console.log(gameAPI)
		var gameName = document.createElement('h4');
		gameName.textContent = gameAPI
		gameSection.appendChild(gameName);

		releasedAPI = response.results[i].released;
		var released=document.createElement('h4');
		released.textContent=releasedAPI; 
		gameSection.appendChild(released);

		MCscore = response.results[i].metacritic; 
		var metaRating = document.createElement('h4')
		metaRating.textContent=MCscore;
		gameSection.appendChild(metaRating)

		// for(i=0; i<response.results[i].short_screenshots.length; i++){

		// }
	
		// screenshotsArr = response.results[i].metacritic; 
		// var metaRating = document.createElement('h4')
		// metaRating.textContent=MCscore;
		// gameSection.appendChild(metaRating)
		
		//  =

		
	}
}












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
$('.dropdown-trigger').dropdown();

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.slider');
//     var instances = M.Slider.init(elems, options);
//   });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

$('.slider').slider({width:1000,});