console.log("JavaScript file is linked!");

// Grab all items in the scene
const items = document.querySelectorAll(".item");

// Grab all modal boxes inside your lock modal
const modalBoxes = document.querySelectorAll("#myModal .modal-box");

// Map items to modal boxes by index (axe -> first box, rope -> second box, etc.)
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Hide the clicked item in the scene
    item.style.display = "none";

    // Create a copy of the item for the corresponding modal box
    const invItem = document.createElement("img");
    invItem.src = item.src;
    invItem.alt = item.alt;
    invItem.style.width = "800px";
    invItem.style.margin = "5px";
    invItem.style.cursor = "pointer";
    invItem.style.pointerEvents = "none"; // disable clicking

    // Find the corresponding modal box (wrap around if more items than boxes)
    const box = modalBoxes[index % modalBoxes.length];
    box.appendChild(invItem);

    // Optional: click inventory item to return to scene
    invItem.addEventListener("click", () => {
      invItem.remove(); // remove from modal box
      item.style.display = "inline-block"; // show back in scene
    });
  });
});

// Link to the next sandbox
const submitButton = document.getElementById("submitAnswer");
const userInput = document.getElementById("userAnswer");

submitButton.addEventListener("click", () => {
  const answer = userInput.value.trim().toLowerCase(); // normalize input
  if (answer === "trap") {
    alert(
      "That is correct. Continue to the next game if you wish to save Eric..."
    );

    // Uncomment and set your next URL if needed:
    window.location.href = "https://g5vhfh.csb.app/";
  } else {
    alert("Incorrect! Try again or it's bye-bye Eric.");
  }
});

// Show news modal on page load
window.onload = function () {
  document.getElementById("newsModal").style.display = "flex";
};

// Close news modal and open dialogue modal
function closeNews() {
  document.getElementById("newsModal").style.display = "none";
  document.getElementById("dialogueModal").style.display = "flex";
  document.getElementById("bgMusic").play();
}

// Show/hide lock modal
function showModal() {
  document.getElementById("myModal").style.display = "block";
}

function hideModal() {
  document.getElementById("myModal").style.display = "none";
}

// Hide dialogue modal
function hideElement(id) {
  const elem = document.getElementById(id);
  if (elem) elem.style.display = "none";
}
