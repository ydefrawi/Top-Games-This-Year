var year=moment().format("YYYY");
var pastYear = moment().subtract(1, 'Y').format('YYYY');
var platformCodes={
	PS4:"18",
	PS3:"16",
	XB1:"1",
	XB360:"14",
	SWITCH:"7",
	N3DS:"8",
	PC:"4",
};

//To find the VALUE of an item in an object, use [objectname].[key]    
//The line below returns "18" (PS4's code)
platform = platformCodes.PS4;
console.log("The code for PS4: " +platform)
//-----------------------
//The same will apply to genreSelection object

//We might need a function converting whatever the user selects in the drop down
//to the correct key before we pass it into the API url. Might be simpler for Genre(?)
//Since they keys are sequential starting from one there's probably a an easier way.  

console.log("Platform Codes Object:")
console.log(platformCodes);

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

console.log("Genre Object:")
console.log(genreSelections);


//${platform} below will need to be swapped out with a variable containing the actual platform code (84 or  whatever).
//before it was concatenating in the entire object. 

const settings = {
	"async": true,
	"crossDomain": true,
	"url": `https://rawg-video-games-database.p.rapidapi.com/games?dates=2010&genres=action&platforms=${platform}&ordering=metacritic&page_size=20`,
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "71e3147708msh713981020d02028p1c2586jsn77d951e6a61b",
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {

	console.log(response.results);


});