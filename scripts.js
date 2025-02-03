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

  // Example of dynamically loading project content
  const projects = [
    {
      title: 'Project 1',
      description: 'A simple Python-based web scraper.',
      link: 'https://github.com/vaibhav88614/project1'
    },
    {
      title: 'Project 2',
      description: 'A data analysis tool built with Python and pandas.',
      link: 'https://github.com/vaibhav88614/project2'
    }
  ];

  const projectsList = document.getElementById('projects-list');
  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.innerHTML = `
      <h3><a href="${project.link}" target="_blank">${project.title}</a></h3>
      <p>${project.description}</p>
    `;
    projectsList.appendChild(projectElement);
  });
});
const totalImages = 298; // Adjust this number
const basePath = './images/1/fig('; // Base path
const imageExtension = ').png'; // File extension

const imagePaths = Array.from({ length: totalImages }, (_, i) => `${basePath}${i + 1}${imageExtension}`);
let currentImageIndex = 0;

function changeBackground() {
    const welcomeSection = document.getElementById('welcome-section');
    
    const nextImage = imagePaths[currentImageIndex];
    welcomeSection.style.backgroundImage = `url('${nextImage}')`;
    
    console.log(`Changing background to: ${nextImage}`);
    
    // Determine delay: 5 seconds for the last image, 0.1 seconds otherwise
    let delay = (currentImageIndex === imagePaths.length - 1) ? 5000 : 100;
    
    // Move to the next image after the delay
    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
        changeBackground();
    }, delay);
}

// Preload images
function preloadImages(images) {
    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
}

preloadImages(imagePaths);
changeBackground();

