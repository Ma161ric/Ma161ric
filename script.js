// Dark Mode
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Filter
const filterButtons = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll(".projekt");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    projects.forEach((project) => {
      project.style.display =
        filter === "all" || project.dataset.tech === filter ? "block" : "none";
    });
  });
});

// AOS Init
AOS.init({
  duration: 1000,
  once: true,
});
