// Define an array of thoughts
const thoughts = [
    "Exploring new technologies and programming languages is my passion.",
    "I believe in the power of collaboration to drive innovation in the tech industry.",
    "Learning is a lifelong journey, and I'm excited to keep expanding my knowledge.",
    "Technology has the potential to make a positive impact on society, and I want to be part of that change.",
    "Work hard to reach the top"
  ];
  
  // Function to cycle through thoughts
  function cycleThoughts() {
    const thoughtsText = document.getElementById("thoughts-text");
    let currentIndex = 0;
  
    setInterval(() => {
      thoughtsText.style.animation = "none"; // Remove animation temporarily
      setTimeout(() => {
        thoughtsText.style.animation = ""; // Reapply animation
      }, 10);
  
      thoughtsText.textContent = thoughts[currentIndex];
      currentIndex = (currentIndex + 1) % thoughts.length;
    }, 5000); // Change thought every 5 seconds ( milliseconds)
  }
  
  // Start cycling through thoughts when the page loads
  window.onload = cycleThoughts;

  