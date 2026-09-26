const audioPlayer = document.getElementById("audioPlayer");

// Start playing music automatically when the page loads, or on the first tap/click
window.addEventListener("DOMContentLoaded", () => {
  const startAudio = () => {
    audioPlayer.play().catch(() => {
      const playOnUserInteraction = () => {
        audioPlayer.play();
        document.removeEventListener("click", playOnUserInteraction);
        document.removeEventListener("touchstart", playOnUserInteraction);
      };
      document.addEventListener("click", playOnUserInteraction);
      document.addEventListener("touchstart", playOnUserInteraction);
    });
  };

  startAudio();
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function createHeart() {
  const h = document.createElement("span");
  h.className = "float-heart";
  h.textContent = ["♥", "♡", "❤", "💕"][Math.floor(Math.random() * 4)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = (14 + Math.random() * 20) + "px";
  h.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.querySelector(".floating-hearts").appendChild(h);
  setTimeout(() => h.remove(), 10000);
}

setInterval(createHeart, 650);