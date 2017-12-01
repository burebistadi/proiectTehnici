var vid = document.getElementById("bgvid");
vid.volume = 0.25;
var pauseButton = document.getElementById("butt");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

// vid.addEventListener('ended', function()
// {
// // only functional if "loop" is removed 
// vid.pause();
// // to capture IE10
// vidFade();
// }); 

    var pauseButton = document.getElementById("butt");
    pauseButton.addEventListener("click", function(e) {
        console.log(e)
      vid.classList.toggle("stopfade");
      if (vid.paused) {
        vid.play();
        pauseButton.innerHTML = "Pause";
      } else {
        vid.pause();
        pauseButton.innerHTML = "Paused";
      }
    })

console.log(pauseButton)



var vid = document.getElementById("myaudio");
vid.volume = 0.2;



