var year=moment().format("YYYY");
var futureMonth = moment().subtract(1, 'Y').format('YYYY-MM-DD');
console.log(year);
var platformCode={
	Playstation4:"18",
	Playstation3:"16",
	Xboxone:"1",
	Xbox360:"14",
	Switch:"7",
	Nintendo3ds:"8",
	PC:"4",
};
console.log(platformCode);
var genreSelection={
	1:"action",
	2:"puzzle",
	3:"rpg",
	4:"indie",
	5:"vr",
	6:"shooter",
	7:"fps",
	8:"sports",
	9:"survival",
	10:"horrer",

}
console.log(genreSelection);

const settings = {
	// Platform for PC code is 4, ps4 is 18, xbox one 1, ps3 is 16, 360 is 14, switch is 7, 3ds is 8
	"async": true,
	"crossDomain": true,
	"url": `https://rawg-video-games-database.p.rapidapi.com/games?genres=${genreSelection}&platforms=${platformCode}&ordering=metacritic&page_size=20`,
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "71e3147708msh713981020d02028p1c2586jsn77d951e6a61b",
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response.results);


});