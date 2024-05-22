// script.js (Optional, for interactivity)
document.querySelectorAll('.episode img').forEach(image => {
    image.addEventListener('click', () => {
      // Redirect to another page when image is clicked
      window.location.href = image.parentElement.getAttribute('href');
    });
  });
  // script.js
document.querySelectorAll('.episode img').forEach(image => {
    image.addEventListener('click', () => {
      window.location.href = image.parentElement.getAttribute('href');
    });
  });
  // script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if (name && email && message) {
    alert('Thank you for your message! We will get back to you soon.');
    // Here you can add code to actually send the form data to your server
  } else {
    alert('Please fill in all fields.');
  }
});
// script.js
document.querySelectorAll('.episode img').forEach(image => {
  image.addEventListener('click', function() {
    window.location.href = this.parentElement.getAttribute('href');
  });
});
// script.js
document.querySelectorAll('.blog-post img').forEach(image => {
  image.addEventListener('click', function() {
    window.location.href = this.parentElement.querySelector('a').getAttribute('href');
  });
});
// script.js
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;

  if (email) {
    // Example: Display a thank you message
    alert('Thank you for subscribing!');

    // Here you would add code to submit the email to your mailing service
    // Example: Using fetch to post data to a server
    // fetch('https://your-mailing-service-api.com/subscribe', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ email: email })
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
  } else {
    alert('Please enter a valid email address.');
  }
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
  const videoPlayer = document.getElementById('videoPlayer');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const muteBtn = document.getElementById('muteBtn');
  const seekBar = document.getElementById('seekBar');
  const currentTime = document.getElementById('currentTime');
  const duration = document.getElementById('duration');

  // Play/Pause functionality
  playPauseBtn.addEventListener('click', function() {
    if (videoPlayer.paused) {
      videoPlayer.play();
      playPauseBtn.textContent = 'Pause';
    } else {
      videoPlayer.pause();
      playPauseBtn.textContent = 'Play';
    }
  });

  // Mute/Unmute functionality
  muteBtn.addEventListener('click', function() {
    videoPlayer.muted = !videoPlayer.muted;
    muteBtn.textContent = videoPlayer.muted ? 'Unmute' : 'Mute';
  });

  // Update seek bar as the video plays
  videoPlayer.addEventListener('timeupdate', function() {
    const value = (100 / videoPlayer.duration) * videoPlayer.currentTime;
    seekBar.value = value;
    currentTime.textContent = formatTime(videoPlayer.currentTime);
  });

  // Seek functionality
  seekBar.addEventListener('input', function() {
    const time = videoPlayer.duration * (seekBar.value / 100);
    videoPlayer.currentTime = time;
  });

  // Display video duration
  videoPlayer.addEventListener('loadedmetadata', function() {
    duration.textContent = formatTime(videoPlayer.duration);
  });

  // Format time in minutes and seconds
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }
});
// Add this JavaScript to your existing script.js file
document.addEventListener('DOMContentLoaded', function() {
  const socialLinks = document.querySelectorAll('.social-sharing a');
  socialLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const url = this.href;
      window.open(url, '_blank');
    });
  });
});
// Add this JavaScript code to your existing script.js file
document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');

  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = searchInput.value.toLowerCase().trim();
    search(searchTerm);
  });

  function search(term) {
    // Replace this with your own logic to search through your content
    // For example, you can search through episode titles or blog post titles
    // and display the results on a search results page or dynamically on the current page
    console.log('Searching for:', term);
    // Example: You can search through episode titles
    // and display matching episodes on a search results page
  }
});
