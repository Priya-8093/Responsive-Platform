// Simple Quiz
const questions = [
  { question: "JavaScript is case-sensitive?", answer: true },
  { question: "HTML stands for Hyper Tech Markup Language?", answer: false },
  { question: "CSS is used for styling web pages?", answer: true },
  { question: "JavaScript can be used for server-side programming?", answer: true },
  { question: "The 'var' keyword is used to declare variables in JavaScript?", answer: true },
  { question: "JSON stands for JavaScript Object Notation?", answer: true }
];

let current = 0;
let score = 0;

function showQuestion() {
  document.getElementById("question").textContent = questions[current].question;
}

function answer(userAnswer) {
  if (userAnswer === questions[current].answer) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong!");
  }

  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz").innerHTML = `<p>Your score: ${score}/${questions.length}</p>`;
  }
}

showQuestion();

// API Fetch
function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(() => {
      document.getElementById("joke").textContent = "Failed to fetch joke.";
    });
}
// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Image carousel array
  const images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1020/600/300",
    "https://picsum.photos/id/1035/600/300",
    "https://picsum.photos/id/1041/600/300",
    "https://www.shihoriobata.com/wp-content/uploads/2021/10/if-you-work-it-will-work.jpg"
  ];

  let currentImgIndex = 0;
  const imgElement = document.getElementById("carousel-img");

  // Show image by index with fade animation
  function showImage(index) {
    imgElement.style.opacity = 0;
    setTimeout(() => {
      imgElement.src = images[index];
      imgElement.style.opacity = 1;
    }, 300);
  }

  // Manual controls
  window.nextImage = function () {
    currentImgIndex = (currentImgIndex + 1) % images.length;
    showImage(currentImgIndex);
  };

  window.prevImage = function () {
    currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
    showImage(currentImgIndex);
  };

  // Auto-slide every 3 seconds
  setInterval(() => {
    nextImage();
  }, 3000);
});

