const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://rawg-video-games-database.p.rapidapi.com/games?page_size=20&ordering=metacritic",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "71e3147708msh713981020d02028p1c2586jsn77d951e6a61b",
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response.results);


});