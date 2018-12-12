require("dotenv").config();
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var request = require('request');
var moment = require('moment');

var command = process.argv[2];
var name = process.argv[3];

switch (command) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":

        break;
    case "movie-this":

        break;
    case "do-what-it-says":

        break;
    default:
        console.log("Please enter valid command.");
}

function concertThis() {
    request("https://rest.bandsintown.com/artists/" + name + "/events?app_id=codingbootcamp", function (error, response, body) {

        if (!error && response.statusCode === 200) {

            if (typeof JSON.parse(body)[0] !== undefined) {

                console.log("Venue: " + JSON.parse(body)[0].venue.name);
                console.log("Venue location: " + JSON.parse(body)[0].venue.city + ", " + JSON.parse(body)[0].venue.country);
                console.log("Date: " + JSON.parse(body)[0].datetime);
            }
            else {
                console.log("No upcoming concerts.");
            }
        }
    });
}