const modal = document.getElementById("expertModal");
const talkButtons = document.querySelectorAll(".hero-btn-outline, .btn-outline-light");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("expertForm");

talkButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };
  console.log("Form Submitted:", data);
  alert("Thank you! We'll get in touch soon.");
  form.reset();
  modal.style.display = "none";
});
// Learn more functionality
const learnMore = document.getElementById('learn-more');
learnMore.addEventListener('click', function () {
  alert('Learn more about our Series B funding');
});

// CTA buttons functionality
const downloadButtons = document.querySelectorAll('.btn-primary, .hero-btn-primary, .analytics-btn');
downloadButtons.forEach(button => {
  button.addEventListener('click', function () {
    alert('App download started');
  });
});


// Feature links functionality
const viewDashboard = document.getElementById('view-dashboard');
viewDashboard.addEventListener('click', function () {
  alert('Viewing Analytics Dashboard');
});

const viewTokens = document.getElementById('view-tokens');
viewTokens.addEventListener('click', function () {
  alert('Viewing Digital Credit Tokens');
});

const viewCodeCollab = document.getElementById('view-code-collab');
viewCodeCollab.addEventListener('click', function () {
  alert('Viewing Code Collaboration');
});

// Add hover effects to feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.boxShadow = 'none';
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
const footBtn = document.getElementsByClassName('btn-light bounce')[0];
if (footBtn) {
  footBtn.addEventListener('click', scrollToTop);
}