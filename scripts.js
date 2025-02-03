// Wait for the DOM to load before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Handle the feedback form submission
  document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var formData = new FormData(this); // Create a FormData object from the form

    // Send the form data using the Fetch API
    fetch(this.action, {
      method: this.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        // If the response is successful, show a success message
        alert('Thank you for your feedback!');
        this.reset(); // Reset the form
      } else {
        // If there's an error, show a failure message
        alert('There was a problem with your submission.');
      }
    }).catch(error => {
      // Catch and handle any other errors (like network issues)
      console.error('Error:', error);
      alert('There was an issue with the request.');
    });
  });

// Combine with your existing JS

const totalImages = 298; // Adjust this number
const basePath = './images/1/fig('; // Base path
const imageExtension = ').png'; // File extension

const imagePaths = Array.from({ length: totalImages }, (_, i) => `${basePath}${i + 1}${imageExtension}`);

let currentImageIndex = 0;
let intervalId;
let isPaused = false;

const slideshowDiv = document.getElementById('welcome-section');
const pausePlayBtn = document.getElementById('pause-play-btn');
const progressBar = document.querySelector('.progress');

function changeBackground() {
  if (isPaused) return;

  // Set background image
  slideshowDiv.style.backgroundImage = `url('${imagePaths[currentImageIndex]}')`;

  // Update progress bar
  progressBar.style.width = `${((currentImageIndex + 1) / totalImages) * 100}%`;

  // Move to the next image
  if (currentImageIndex === imagePaths.length - 1) {
    // Pause for 5 seconds on the last image
    clearInterval(intervalId);
    setTimeout(() => {
      currentImageIndex = 0; // Reset to the first image
      intervalId = setInterval(changeBackground, 100); // Resume normal interval
    }, 5000);
  } else {
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
  }
}

function preloadImages(images) {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

// Pause/Play functionality
pausePlayBtn.addEventListener('click', () => {
  isPaused = !isPaused;
  pausePlayBtn.textContent = isPaused ? 'Play' : 'Pause';
  if (isPaused) {
    clearInterval(intervalId);
  } else {
    intervalId = setInterval(changeBackground, 100);
  }
});

// Preload images and start slideshow
preloadImages(imagePaths);
intervalId = setInterval(changeBackground, 100);
});
