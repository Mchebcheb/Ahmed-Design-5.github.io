// ==========================================
// CONTROL DEL MENÚ HAMBURGUESA (BLINDADO)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita interferencias
            navMenu.classList.toggle('active');

            // Cambiar icono entre barras y equis
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('bx-menu');
                    icon.classList.add('bx-x');
                } else {
                    icon.classList.remove('bx-x');
                    icon.classList.add('bx-menu');
                }
            }
        });

        // Cerrar menú al hacer clic en cualquier enlace del menú
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('bx-x');
                    icon.classList.add('bx-menu');
                }
            });
        });

        // Cerrar menú si haces clic fuera de él
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('bx-x');
                    icon.classList.add('bx-menu');
                }
            }
        });
    } else {
        console.error("No se ha encontrado el botón 'menuToggle' o el menú 'navMenu' en el HTML.");
    }
});