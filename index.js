// Test 1:
// "moveDodgerLeft(): moves the DODGER to the left"
// THIS IS DONE BY UPDATING THE ELEMENT'S POSITION ON THE PAGE CONDITIONALLY
/*Before we can use JavaScript to move the dodger, 
we first need to grab it and save a reference to it in a variable.*/
const dodger = document.getElementById("dodger");

/*Now we'll build our moveDodgerLeft() function, 
adding a check on the current position of the dodger: 
we first ensure that the dodger's left edge has not reached the left edge of its container.
*/

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Now let's wire this up to our event listener:
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

// TEST 2:
//  moveDodgerRight(): moves the DODGER to the right:
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});