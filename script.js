function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Animate menu cards when scrolling
const cards = document.querySelectorAll('.card');

function animateCards() {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom){
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', animateCards);

// Contact form alert
const form = document.getElementById("orderForm");
form.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thanks! Your order has been sent.");
  form.reset();
});
