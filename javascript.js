// Aquire user input for number of octagons to create
// Added eventListener to make it possible to hit "Enter" instead of just the button,
// just to make Joe happy
const input = document.querySelector("#userInput");
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") makeKitties();
});
// Container for kittyImages
const kittyContainer = document.getElementById("kittyContainer");
// Array of images, this will enable me to easily insert a random image into the octagonal div container
const kittyImages = [
  "1.gif",
  "2.gif",
  "3.gif",
  "4.gif",
  "5.gif",
  "6.gif",
  "7.gif",
  "8.gif",
  "9.gif",
  "10.gif",
  "11.gif",
  "12.jpg",
  "13.gif",
  "14.gif",
  "15.gif",
  "16.gif",
  "17.gif",
];

// Regular function with a for loop to add a random image/gif from the img folder
function makeKitties() {
  if (input.value > 5000 || input.value < 1) {
    window.alert(
      "Please enter a valid number! Accepted values range from 1-5000"
    );
    return;
  }
  // remove old kitties before spawning in new ones
  document
    .querySelectorAll(".kittyContainer")
    .forEach((catdiv) => catdiv.remove());
  // loop for adding elements, terminator is the valid value between 1 and 5000 that the user chooses
  for (let i = 0; i < input.value; ++i) {
    const kitty = document.createElement("div");
    kitty.classList.add("kittyContainer");

    // Randomizer for the cat images/gif which is inserted into the "div"
    // Random index based on kittyImages.length array
    const randoIndex = Math.floor(Math.random() * kittyImages.length);
    // Path to images which will be used
    const kittyImagesPath = `/img/${kittyImages[randoIndex]}`;
    const img = document.createElement("img");
    img.src = kittyImagesPath;
    img.alt = "generated cats";
    // Everything is done and done, image and octagon is added here
    kitty.appendChild(img);
    kittyContainer.appendChild(kitty);
  }
}
