document.addEventListener('DOMContentLoaded', function() {
  // --- Feedback Form Handling ---
  document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch(this.action, {
      method: this.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        alert('Thank you for your feedback!');
        this.reset();
      } else {
        alert('There was a problem with your submission.');
      }
    }).catch(error => {
      console.error('Error:', error);
      alert('There was an issue with the request.');
    });
  });

  // --- Background Video Controls ---
  const bgVideo = document.querySelector('.bg-video');
  const pausePlayBtn = document.getElementById('pause-play-btn');
  const progressBar = document.querySelector('.progress');
  pausePlayBtn.addEventListener('click', () => {
    if (bgVideo.paused) {
      bgVideo.play();
      pausePlayBtn.textContent = 'Pause';
    } else {
      bgVideo.pause();
      pausePlayBtn.textContent = 'Play';
    }
  });
  bgVideo.addEventListener('timeupdate', () => {
    if (bgVideo.duration) {
      const percentage = (bgVideo.currentTime / bgVideo.duration) * 100;
      progressBar.style.width = `${percentage}%`;
    }
  });

  // --- Navigation Active Link Highlight on Scroll ---
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // --- Scroll-to-Top Button ---
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  window.addEventListener('scroll', () => {
    scrollToTopBtn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? 'block' : 'none';
  });
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- Dark/Light Mode Toggle (global) ---
  const modeToggle = document.getElementById('modeToggle');
  modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    modeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
  });

  // --- Dynamic Certificates Loading with "Show More"/"Show Less" ---
  const certificates = [
    'CertificateOfCompletion_Advanced Pandas.png', 'CertificateOfCompletion_Career Essentials in Software Development by Microsoft and LinkedIn.png', 
    'CertificateOfCompletion_Certified EntryLevel Python Programmer PCEP3002 Cert Prep.png', 'CertificateOfCompletion_First Look Java 10 and Java 11.png', 
    'CertificateOfCompletion_Introduction to Career Skills in Software Development.png', 'CertificateOfCompletion_Java Data Structures.png', 'CertificateOfCompletion_JavaScript Essential Training.png', 
    'CertificateOfCompletion_Learning Java 11.png', 'CertificateOfCompletion_Level Up Python.png', 'CertificateOfCompletion_OpenEDG Python Institute Programming with Python Professional Certificate.png', 
    'CertificateOfCompletion_Practice It Java Arrays.png', 'CertificateOfCompletion_Programming Foundations Beyond the Fundamentals.png', 'CertificateOfCompletion_Programming Foundations Fundamentals.png', 
    'CertificateOfCompletion_Python Essential Training.png', 'CertificateOfCompletion_Python ObjectOriented Programming.png', 'Coursera 35WYZ4MHU5WW.png', 'Coursera 9YMKF1A387UL.png', 'Coursera FD8ADB7D3WQW.png', 
    'Coursera LDNE74DZVP2L.png', 'Coursera QPUJU43QGTHT.png', 'Introduction_to_Cybersecurity_Badge20240703-7-vs25dj.png', 'UC-22388d2e-fbcc-43e6-a413-767da769dc12.png'
  ];
  const certificatesPerRow = 3;
  const totalRows = Math.ceil(certificates.length / certificatesPerRow);
  let currentVisibleRows = 2; // Initially show 2 rows (6 certificates)
  const certificatesGrid = document.querySelector('.certificates-grid');

  certificates.forEach((filename, index) => {
    const certificateDiv = document.createElement('div');
    certificateDiv.className = 'certificate';
    if (index >= currentVisibleRows * certificatesPerRow) {
      certificateDiv.classList.add('hidden');
    }
    const img = document.createElement('img');
    img.className = 'certificate-image';
    img.src = `images/certificates/${filename}`;
    img.alt = filename.split('.')[0];
    const titleDiv = document.createElement('div');
    titleDiv.className = 'certificate-title';
    titleDiv.textContent = filename.split('.')[0].replace(/_/g, ' ');
    const btn = document.createElement('a');
    btn.href = '#';
    btn.className = 'btn certificate-btn';
    btn.textContent = 'View and Verify Certificate';
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(`images/certificates/${filename}`);
    });
    certificateDiv.appendChild(img);
    certificateDiv.appendChild(titleDiv);
    certificateDiv.appendChild(btn);
    certificatesGrid.appendChild(certificateDiv);
  });

  const toggleBtn = document.getElementById('toggleCertificatesBtn');
  toggleBtn.addEventListener('click', () => {
    if (toggleBtn.textContent.trim() === 'Show More') {
      if (currentVisibleRows < totalRows) {
        const startIndex = currentVisibleRows * certificatesPerRow;
        const endIndex = Math.min(startIndex + certificatesPerRow, certificates.length);
        for (let i = startIndex; i < endIndex; i++) {
          certificatesGrid.children[i].classList.remove('hidden');
        }
        currentVisibleRows++;
        if (currentVisibleRows === totalRows) {
          toggleBtn.textContent = 'Show Less';
        }
      }
    } else {
      Array.from(certificatesGrid.children).forEach((child, index) => {
        if (index >= 6) {
          child.classList.add('hidden');
        }
      });
      currentVisibleRows = 2;
      toggleBtn.textContent = 'Show More';
    }
  });

    // Preload certificate images once the certificates section is in view
  const certificatesSection = document.getElementById('certifications');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const imgs = document.querySelectorAll('.certificate-image');
        imgs.forEach(img => {
          // This creates a new Image object, triggering a load.
          const preloader = new Image();
          preloader.src = img.src;
        });
        obs.disconnect(); // Stop observing after preloading once
      }
    });
  }, { threshold: 0.1 });

  observer.observe(certificatesSection);


  // --- Modal Functionality ---
  function openModal(imageSrc) {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = imageSrc;
    modal.style.display = 'block';
    // Hide the dark/light toggle while modal is open
    document.getElementById('modeToggle').style.display = 'none';
  }
  
  document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('certificateModal').style.display = 'none';
    // Show the toggle when modal is closed
    document.getElementById('modeToggle').style.display = 'block';
  });
  
  window.addEventListener('click', (event) => {
    const modal = document.getElementById('certificateModal');
    if (event.target === modal) {
      modal.style.display = 'none';
      document.getElementById('modeToggle').style.display = 'block';
    }
  });
  
  document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('certificateModal').style.display = 'none';
  });
  window.addEventListener('click', (event) => {
    const modal = document.getElementById('certificateModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
