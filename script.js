$(document).ready(function () {
    var context = new AudioContext();
    var audio = $("audio")[0];
    $("#home").mouseenter(function() {
         var playPromise = audio.play();
         if (playPromise !== undefined) {
           playPromise.then(function() {

           }).catch(function(error) {
             // Automatic playback failed.
             // Show a UI element to let the user manually start playback.
           });
       }
    });

});
