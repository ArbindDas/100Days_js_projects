const panels = document.querySelectorAll(".pannel");

panels.forEach((panel) => {
    panel.addEventListener("click", function() {
        removingActiveClass();  // Corrected function name
        panel.classList.add('active');
    });
});

function removingActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}

