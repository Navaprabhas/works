const testimonials = [
  {
    quote:
      "When passion meets technology, innovation becomes your second nature.",
    name: "Nava Prabhas",
    designation: "AI & Tech Enthusisat",
    src: "https://unsplash.com/photos/man-is-wearing-a-vr-headset-G2nJfkEdUlk",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let current = 0;

const img = document.getElementById("testimonial-img");
const quote = document.getElementById("testimonial-quote");
const name = document.getElementById("testimonial-name");
const role = document.getElementById("testimonial-role");
const card = document.getElementById("testimonial-card");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const indexSpan = document.getElementById("testimonial-index");

function showTestimonial(idx) {
  // Animate out
  card.classList.remove("fade-in");
  card.classList.add("fade-out");
  setTimeout(() => {
    // Update content
    img.src = testimonials[idx].src;
    img.alt = `Photo of ${testimonials[idx].name}`;
    quote.textContent = `“${testimonials[idx].quote}”`;
    name.textContent = testimonials[idx].name;
    role.textContent = testimonials[idx].designation;
    indexSpan.textContent = `${idx + 1} / ${testimonials.length}`;
    // Animate in
    card.classList.remove("fade-out");
    card.classList.add("fade-in");
  }, 250);
}

// Initial load
showTestimonial(current);

prevBtn.addEventListener("click", () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
});

