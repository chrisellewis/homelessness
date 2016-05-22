

// Uncomment to initialise WOW.js
new WOW().init();

// Owl Carousel initialisation
$(document).ready(function(){
  $(".owlcarousel").owlCarousel({
    items: 1,
    nav: false,
    autoplay: true,
    dots: false,
    animateOut: 'fadeOut',
    loop:true,
  });


});


// YouTube Stuff

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'wH7cUcnS9a8',
    playerVars: {
      controls: 0,
      modestbranding: 0,
      showinfo: 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.pauseVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 600000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}


// Scroll Magic Stuff

var controller = new ScrollMagic.Controller();

//
$(function () {
  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#_video", duration: 500})

  .on("enter", function () {
    player.playVideo();
  })
  .on("leave", function () {
    player.pauseVideo();
  })
  .addTo(controller);
});



$(function () {
  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#_htmlVid", duration: 500})
  // var htmlVideo = document.getElementById("foo")[0];

  .on("enter", function () {
    document.getElementById('foo').play();
  })
  .on("leave", function () {
    document.getElementById('foo').pause();

  })
  .addTo(controller);
});

$(function () { // wait for document ready
// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#playMe", duration: 2300})
                  .on("enter", function (){
document.getElementById('MyAudio').play();
                  })
                  .on("leave", function () {
document.getElementById('MyAudio').pause();
                      })
      						.addTo(controller);
      	});
$(function () { // wait for document ready
// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#playMe2", duration: 1000})
                  .on("enter", function (){
document.getElementById('MyAudio2').play();
                  })
                  .on("leave", function () {
document.getElementById('MyAudio2').pause();
                      })
      						.addTo(controller);
      	});
$(function () { // wait for document ready
// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#playsme", duration: 2800})
                  .on("enter", function (){
document.getElementById('MyAudio3').play();
                  })
                  .on("leave", function () {
document.getElementById('MyAudio3').pause();
                      })
      						.addTo(controller);
      	});