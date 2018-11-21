$('#dropdown a').on('click', function() {
    var moodSelect = $(this).text().toLowerCase();
    var queryURL = 'https://api.spotify.com/v1/search?type=playlist&q=' + moodSelect + '&access_token=BQAFfu82ldJJKxXcvU2eRDb-2ImqcT-rhqGu2NZw36HUd-Kqpfy4BrYldgibgjWkm6nKYpoUqet6-QLhOGAgCSMiHBGyVDXd1VVc-BiS7heHZgOHiH_RFH6x2qxl041K9GQ8P_bpCiQRzZiYlnCZtT4v';

    console.log("mood:" + moodSelect);
    
    $.ajax({
        url: queryURL,
        method:'GET'
    }).then(function(response){
        var embedCode = '<iframe src="https://open.spotify.com/embed/playlist/' + response.playlist + '" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
    $('#playerIframe').html(embedCode);
  })
    
})


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBq9g0wIZE9mw5II9BXZEouUvuKGOWbIK8",
    authDomain: "moodlist-6736e.firebaseapp.com",
    databaseURL: "https://moodlist-6736e.firebaseio.com",
    projectId: "moodlist-6736e",
    storageBucket: "moodlist-6736e.appspot.com",
    messagingSenderId: "224635158925"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

