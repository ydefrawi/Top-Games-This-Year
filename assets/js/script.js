var gameNameEl = document.querySelector('body')
var copyrightEl = document.querySelector('#copyright')
var genreSelection = "";
var platformSelection = "";
var year = moment().format("YYYY");
var pastYear = moment().subtract(1, 'Y').format('YYYY');
var gamesList = "";






// on click event pulls data for selected element and strigifys it to work with api call
function selectGenre() {
	genreSelection = $(this).data('genre');
	platformSelection = JSON.stringify(genreSelection);
	return genreSelection;
};

// on click event pulls data for selected element and strigifys it to work with api call
function selectPlatform() {
	platformSelection = $(this).data('console')
	platformSelection = JSON.stringify(platformSelection);
	return platformSelection;
};

// on click event runs an api call taking in the current year, one year ago today, genre selection, and platformselection
function apicall() {
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
		gamesList = response.results;
		; renderGamesData(gamesList);
	});
};

// Renders game data to the page
function renderGamesData(gamesList) {
	$(".gameCards").empty();
	console.log(gamesList);

	// creates game cards for the length of games recieved using variables pulled from information of game card
	for (i = 0; i < gamesList.length; i++) {
		var gameName = gamesList[i]['name'];
		var metacritic = gamesList[i]['metacritic'];
		var screenshot = gamesList[i]['short_screenshots'][0]['image'];
		var clip = gamesList[i]['clip']['clips'][320];
		var genreList0 = gamesList[i]['genres'][0]['name'];
		var genreList1 = gamesList[i]['genres'][1]['name'];
		var store0 = gamesList[i]['stores'][0]['store']['name'];
		var store1 = gamesList[i]['stores'][1]['store']['name'];
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
		
		  </div>
		</div>
	  </div>
		`)

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

$(".genreSelection").on("click", selectGenre);
$(".platformSelection").on("click", selectPlatform);
$("#submitButton").on("click", apicall);