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
document.addEventListener('DOMContentLoaded', function () {
    const totalImages = 298; // Adjust this number based on your images
    const basePath = './images/1/fig('; // Base path
    const imageExtension = ').png'; // File extension
    const imagePaths = Array.from({ length: totalImages }, (_, i) => `${basePath}${i + 1}${imageExtension}`);
    
    let currentImageIndex = 0;
    const welcomeSection = document.getElementById('welcome-section');
  
    function changeBackground() {
        if (!welcomeSection) return;

        const nextImage = imagePaths[currentImageIndex];
        welcomeSection.style.backgroundImage = `url('${nextImage}')`;
        
        console.log(`Changing background to: ${nextImage}`);

        // If it's the last image, wait 5 seconds; otherwise, switch every 0.1s
        let delay = (currentImageIndex === totalImages - 1) ? 5000 : 100;
        currentImageIndex = (currentImageIndex + 1) % totalImages;

        setTimeout(changeBackground, delay);
    }

    // Preload images to avoid flickering
    function preloadImages(images) {
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    preloadImages(imagePaths);
    changeBackground(); // Start slideshow
});
