// Dark Mode
const toggleButton = document.getElementById("darkModeToggle");

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
  toggleButton.textContent = "🌞 Bright Mode";
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const darkModeAktiv = document.body.classList.contains("dark");
  toggleButton.textContent = darkModeAktiv ? "🌞 Bright Mode" : "🌙 Dark Mode";
  localStorage.setItem("darkMode", darkModeAktiv);
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
