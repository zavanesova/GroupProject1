# MoodList
  MoodList is a web application that gives you playlists to listen to based on your mood. Users can save their previous moods and connect it to current local weather.

## Set Up
  Create a Spotify account or log in to your personal Spotify account.

  You must also be able to work with GitHub repositories.

  Clone repository. ```git clone``` https://github.com/zavanesova/GroupProject1

## Getting Started
Click on the main link: https://zavanesova.github.io/GroupProject1/

Type in your current mood or a mood of your preference.

Type in your city location or future destination.

## Built With
- HTML, CSS, JavaScript
- AJAX
- JQuery
- Spotify API
- OpenWeather API
- Firebase
- Materialize
- Anime.js

## Issues/ Future Features
- Limitations with Spotify API access token
  The Spotify access token expires after an hour of usage. Ultimately, we want the user to be able to use MoodList without having to refresh the Spotify access token.

  Until Spotify access is allowed without refreshing token key, the user must follow the steps to request a new token from Spotify.

  Download Spotify token key for access to your playlists and have it available.

  Site to get new OAuth token: [Access Token Link](https://developer.spotify.com/console/get-search-item/?q=%22doom%20metal%22&type=playlist&market=&limit=&offset=)

  Enter new token in API access token of the code.

- YouTube API access

- Facial Recognition/ Instagram API access
  Will need further research on storing images and account access to photo libraries.

- ```Node.js``` may be the answer to many of our issues with API refresh tokens and server options available for storing files.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors
- Zhanna Avanesova - Spotify API, Anime.js, Firebase
- Matt Feeley - Open Weather API
- Daniel Gomez - Front-End Design, Materialize, Favicon
- Ben Vega - Development Research

