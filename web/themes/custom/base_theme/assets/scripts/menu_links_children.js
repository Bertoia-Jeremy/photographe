document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".toggle-btn").forEach((button) => {
        button.addEventListener("click", function () {
            const submenu = this.nextElementSibling;
            const icon = this.querySelector("span");

            if (submenu.classList.contains("hidden")) {
                submenu.classList.remove("hidden");
                submenu.classList.add("block");
                icon.classList.add("rotate-180"); // Flèche vers le haut
            } else {
                submenu.classList.add("hidden");
                submenu.classList.remove("block");
                icon.classList.remove("rotate-180"); // Flèche vers le bas
            }
        });
    });
});
