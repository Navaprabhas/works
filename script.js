// Newsletter form submission
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  if (email) {
    alert(`Thank you for subscribing, ${email}!`);
    this.reset();
  }
});
