# Image Uploader with Interactive Features

This is a simple HTML, CSS, and JavaScript code for an Image Uploader web application with interactive features. It allows users to upload images and interact with them by clicking on an image to focus on it and using arrow keys to move the focused image within a container.

## How It Works

1. **HTML Structure:**
   - The HTML file defines the basic structure of the web page.
   - It includes an `<input>` element of type "file" with an ID of "fileInput" and accepts only image files ("image/*").
   - A button with an ID of "addImageButton" is provided to allow users to trigger the file input selection.
   - A `<div>` with an ID of "animation_container" serves as the container for the uploaded images.

2. **Styling:**
   - The CSS file (style.css) contains the styles for the uploaded images, such as positioning and focusing.

3. **JavaScript Functionality:**
   - The JavaScript code (script.js) handles the interactive functionality of the image uploader.

4. **Event Listeners:**
   - The code uses event listeners to wait for the DOM content to be fully loaded before executing the code.

5. **Image Uploading:**
   - When the user clicks the "+ Add Image" button, the code triggers a click on the file input, allowing the user to select an image.

6. **Displaying Images:**
   - When a file is selected through the file input, the code reads the image file as a data URL using the FileReader API.
   - It creates a new `<img>` element, sets its source to the data URL, and adds the image to the container.
   - The newly added image is given a random initial position (left and top) within the container and a unique zIndex to ensure it appears on top of other images.
   - Each uploaded image also gets an "uploaded-image" class for styling purposes.

7. **Interactivity - Focusing and Moving Images:**
   - When an uploaded image is clicked, the code sets it as the focusedImage and adds a "focused" class to apply styling changes.
   - The zIndex of the focused image is increased, bringing it to the front among all other images.
   - The user can move the focused image using arrow keys (up, down, left, right).
   - The "keydown" event listener on the window captures arrow key presses and moves the focused image within the container.
   - The movement speed can be adjusted by changing the `step` value in the code.

8. **Helper Function:**
   - The code includes a helper function `getRandomPosition(min, max)` that generates a random position (horizontal or vertical) between the specified min and max values.


---
