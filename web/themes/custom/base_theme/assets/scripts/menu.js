document.addEventListener("DOMContentLoaded", () => {
    const burgerButton = document.getElementById("menu-burger");
    const burgerMobileButton = document.getElementById("menu-burger-mobile");
    const sideMenu = document.getElementById("side-menu");
    const closeButton = document.getElementById("close-menu");
    const overlay = document.getElementById("overlay");

    setTimeout(() => {
        sideMenu.classList.add("transition-enabled");
      }, 50)

    // Ouvrir le menu
    const openMenu = () => {
        sideMenu.style.display = "flex"; // Rendre visible pour démarrer l'animation
        setTimeout(() => {
        sideMenu.classList.add("active");
        overlay.classList.add("active");
        }, 10);
    };
    
    // Fermer le menu
    const closeMenu = () => {
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
        sideMenu.addEventListener(
            "transitionend",
            () => {
            sideMenu.style.display = "none"; // Cacher complètement après l'animation
            },
            { once: true } // Assure que l'événement est attaché une seule fois
        );
    };

    // Événements
    burgerButton.addEventListener("click", openMenu);
    burgerMobileButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    // Gestion des touches (ex: "Esc" pour fermer le menu)
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && overlay.classList.contains("active")) {
            closeMenu();
        }
    });
});
