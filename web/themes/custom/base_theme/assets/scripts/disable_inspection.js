document.addEventListener("DOMContentLoaded", function () {
    // Désactiver le clic droit
    document.addEventListener("contextmenu", function (event) {
        event.preventDefault();
    });

    // Désactiver le glisser-déposer
    document.addEventListener("dragstart", function (event) {
        event.preventDefault();
    });

    // Désactiver les raccourcis pour l'inspection
    document.addEventListener("keydown", function (event) {
        if (
            event.key === "F12" || // DevTools
            (event.ctrlKey && event.shiftKey && event.key === "I") || // Inspecteur
            (event.ctrlKey && event.shiftKey && event.key === "J") || // Console
            (event.ctrlKey && event.shiftKey && event.key === "C") || // Éléments
            (event.ctrlKey && event.key === "U") // Afficher le code source
        ) {
            event.preventDefault();
        }
    });

    // Détecter l'ouverture de la console développeur
    let devtoolsOpen = false;
    const element = new Image();
    Object.defineProperty(element, "id", {
        get: function () {
            devtoolsOpen = true;
            alert("🚨 Inspection interdite !");
        },
    });
});
