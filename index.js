var numberOfCharacters = document.querySelectorAll(".family").length;

for (var i = 0; i < numberOfCharacters; i++) {

  document.querySelectorAll(".family")[i].addEventListener("click", function() {

    var characterName = this.classList[0];

    makeSound(characterName);
    buttonAnimation(characterName);

  });

}

// document.addEventListener("keypress", function(event) {

//   makeSound(event.key);

//   buttonAnimation(event.key);

// });


function makeSound(key) {

  switch (key) {
    case "peter":
      var peter = new Audio("Soundboard/sounds/peter.mp3");
      peter.play();
      break;

    case "lois":
      var lois = new Audio("Soundboard/sounds/lois.mp3");
      lois.play();
      break;

    case "chris":
      var chris = new Audio('Soundboard/sounds/chris.mp3');
      chris.play();
      break;

    case "meg":
      var meg = new Audio('Soundboard/sounds/meg.mp3');
      meg.play();
      break;

    case "stewie":
      var stewie = new Audio('Soundboard/sounds/stewie.mp3');
      stewie.play();
      break;

    case "brian":
      var brian = new Audio('Soundboard/sounds/brian.mp3');
      brian.play();
      break;

    case "quagmire":
      var quagmire = new Audio('Soundboard/sounds/quagmire.mp3');
      quagmire.play();
      break;

    default: console.log(key);

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  // Get the audio element associated with the currentKey
  var audioElement = document.querySelector("sounds/" + currentKey + ".mp3");

  // Check if the audio element exists and has a duration
  if (audioElement && audioElement.duration) {
    // Set the timeout duration to the length of the audio
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, audioElement.duration * 1000); // Convert seconds to milliseconds
  } else {
    // Fallback timeout duration if audio information is not available
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 1000); // Default to 1 second
  }
}

// function buttonAnimation(currentKey) {

//   var activeButton = document.querySelector("." + currentKey);

//   activeButton.classList.add("pressed");

//   setTimeout(function() {
//     activeButton.classList.remove("pressed");
//   }, 10000);

// }
