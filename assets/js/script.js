var gameNameEl = document.querySelector('body')
var copyrightEl = document.querySelector('#copyright')
var genreSelection="";
var platformSelection="";
var year = moment().format("YYYY");
var pastYear = moment().subtract(1, 'Y').format('YYYY');
var gamesList="";







function selectGenre(){
	genreSelection=$(this).data('genre');
	return genreSelection;
};

function selectPlatform(){
	platformSelection=$(this).data('console')
	platformSelection=JSON.stringify(platformSelection);
	return platformSelection;
};


function apicall(){
const settings = {
		"async": true,
		"crossDomain": true,
		"url": `https://rawg-video-games-database.p.rapidapi.com/games?dates=${year}${pastYear}&genres=${genreSelection}&platforms=${platformSelection}&page_size=10`,
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "71e3147708msh713981020d02028p1c2586jsn77d951e6a61b",
			"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
		}
	};
	$.ajax(settings).done(function (response) {
		gamesList=response.results;
;		renderGamesData(gamesList);
	});
	};

// Renders game data to the page
function renderGamesData(gamesList){
	$(".gameCards").empty();
	console.log(gamesList);

	for (i = 0; i < gamesList.length; i++) {
		var gameName=gamesList[i]['name'];
		var metacritic=gamesList[i]['metacritic'];
		var screenshot=gamesList[i]['short_screenshots'][0]['image'];
		var clip=gamesList[i]['clip']['clips'][320];
		var genreList0=gamesList[i]['genres'][0]['name'];
		var genreList1=gamesList[i]['genres'][1]['name'];
		var genreList2=gamesList[i]['genres'][2]['name'];
		var store0=gamesList[i]['stores'][0]['store']['name'];
		var store1=gamesList[i]['stores'][1]['store']['name'];
		var store2=gamesList[i]['stores'][2]['store']['name'];
		$(".gameCards").append(`
		<div id="game-card" class="card blue-grey darken-1">
		<div class="row">
		  <div class="col s12 m3">
			<div id="game-blurb" class="card-content white-text">
			  <span class="card-title game-card-title card-columns">${gameName}</span>
			  <p id="left-blurb">Metacritic Score: ${metacritic}</p>
			  <br>
			  <p id="left-blurb">${genreList0}</p>
			  <br>
			  <p id="left-blurb">${genreList1}</p>
			  <br>
			  <p id="left-blurb">${genreList2}</p>
			</div>
		  </div>
		  <div class="col s12 m3 card-columns">
			<img class="materialboxed card-pics" width="100%"
			  src='${screenshot}'>
		  </div>
		  <div class="col s12 m3 card-columns">
			<iframe title='Video player' type="text/html" width='320' height='195' src='${clip}'frameborder='0' allowFullScreen></iframe>
		  </div>
		  <div id='review-blurb' class="col s3 card-columns">
			<p id='right-text'>${store0}</p>
			<br>
			<p id='right-text'>${store1}</p>
			<br>
			<p id='right-text'>${store2}</p>
		  </div>
		</div>
	  </div>
		`)

		

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


	}
};












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
// getRAWGData();
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
$("#submitButton").on("click",apicall);