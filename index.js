// Get all elements with class drum
var drumButtons = document.querySelectorAll(".drum");

// Add click event listener to buttons with class drum
for (var i = 0; i < drumButtons.length ; i++){
  drumButtons[i].addEventListener("click", handleClick);
}

// Click function/ handler
function handleClick(){
  // Generate sound based on button pressed
  generateSound( this.textContent );

  // Animate the button
  buttonAnimation( this.textContent );

}

// Add keypress event listener to document
document.addEventListener("keypress", function (e) {
  // Generate sound based on key pressed
  generateSound( e.key );

  // Animate the button
  buttonAnimation( e.key );
} );

// Generate sound based on key being pressed
function generateSound( key ){
  switch ( key ) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    break;

    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    break;

    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    break;

    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    break;

    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
    break;

    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
    break;

    case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
    break;

    default:

  }
}


function buttonAnimation( currentKey ){
  var activeKey = document.querySelector("."+currentKey);

  activeKey.classList.add("pressed");

  setTimeout(function(){
    activeKey.classList.remove("pressed");
  }, 100)

  console.log(activeKey);
}
