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
// Combine with your existing JS

   const imageCount = 298;
    const basePath = "./images/1/fig(";
    const imageExtension = ").png";
    let currentIndex = 0;
    const welcomeSection = document.getElementById("welcome-section");
    let isSlideshowActive = true;

    // Preload images with error handling
    function preloadImages() {
        for (let i = 1; i <= imageCount; i++) {
            const img = new Image();
            img.src = `${basePath}${i}${imageExtension}`;
            img.onerror = () => console.error(`Failed to load image: ${img.src}`);
        }
    }

    // Improved transition with requestAnimationFrame
    function changeBackground() {
        if (!isSlideshowActive) return;

        const imageUrl = `${basePath}${currentIndex + 1}${imageExtension}`;
        
        // Create temporary image to load before switching
        const tempImg = new Image();
        tempImg.src = imageUrl;
        
        tempImg.onload = () => {
            welcomeSection.style.backgroundImage = `url('${imageUrl}')`;
            currentIndex = (currentIndex + 1) % imageCount;
            
            // Schedule next change
            setTimeout(changeBackground, 3000);
        };

        tempImg.onerror = () => {
            console.error(`Skipping missing image: ${imageUrl}`);
            currentIndex = (currentIndex + 1) % imageCount;
            changeBackground();
        };
    }

    // Start the slideshow
    function startSlideshow() {
        isSlideshowActive = true;
        changeBackground();
    }

    // Initial setup
    preloadImages();
    startSlideshow();

    // Optional: Add pause/play control
    document.addEventListener('keypress', (e) => {
        if (e.code === 'Space') {
            isSlideshowActive = !isSlideshowActive;
            if (isSlideshowActive) startSlideshow();
        }
    });
});
