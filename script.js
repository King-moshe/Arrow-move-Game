// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", () => {
  // Get the required elements 
  const container = document.getElementById("animation_container"); // Container that hold the images
  const fileInput = document.getElementById("fileInput"); // File input to select images
  const addImageButton = document.getElementById("addImageButton"); // Add a new image to the container
  let focusedImage = null; // To keep track of the currently focused image

  let zIndexCounter = 1; 

  
  addImageButton.addEventListener("click", () => {
    fileInput.click();
  });

  // When a file is selected through the file input, display the image in the container
  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Create a new image element and set its source to the data URL
        const img = new Image();
        img.src = e.target.result;

        // Add CSS class and set initial position for the uploaded image
        img.classList.add("uploaded-image");
        img.style.left = `${getRandomPosition(0, 600 - 120)}px`; // Set a random horizontal position within the container
        img.style.top = `${getRandomPosition(0, 400 - 120)}px`; // Set a random vertical position within the container
        img.style.zIndex = zIndexCounter++; // Increase zIndex and set it for the new image

        // Append the image to the container
        container.appendChild(img);

        // When an uploaded image is clicked, focus on it and bring it to the front
        img.addEventListener("click", () => {
          if (focusedImage) {
            focusedImage.classList.remove("focused"); // Remove the focus from the previously focused image
          }
          img.classList.add("focused"); // Add focus to the currently clicked image
          focusedImage = img; 
          img.style.zIndex = zIndexCounter++; 
        });
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  });

  // Listen for keydown events on the window to move the focused image
  window.addEventListener("keydown", (event) => {
    if (focusedImage) {
      event.preventDefault(); // Prevent default scrolling behavior for arrow keys

      const step = 5; // Adjust this value to change the movement speed

      // Get the current position of the focused image (if not present, set to 0)
      let newLeft = parseInt(focusedImage.style.left, 10) || 0;
      let newTop = parseInt(focusedImage.style.top, 10) || 0;

      // Move the image based on the arrow key pressed
      switch (event.key) {
        case "ArrowUp":
          newTop = Math.max(newTop - step, 0); // Move up while ensuring it stays within the container
          break;
        case "ArrowDown":
          newTop = Math.min(newTop + step, container.clientHeight - focusedImage.clientHeight); // Move down while staying within the container
          break;
        case "ArrowLeft":
          newLeft = Math.max(newLeft - step, 0); // Move left while staying within the container
          break;
        case "ArrowRight":
          newLeft = Math.min(newLeft + step, container.clientWidth - focusedImage.clientWidth); // Move right while staying within the container
          break;
      }

      // Update the CSS styles to move the focused image to the new position
      focusedImage.style.left = `${newLeft}px`;
      focusedImage.style.top = `${newTop}px`;
    }
  });

  // Helper function to get a random position between min and max
  function getRandomPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});
