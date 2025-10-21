// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
document.querySelectorAll('.dropdown-submenu > .dropdown-toggle').forEach(function (element) {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Close any other open submenus at this level
        const parentMenu = this.closest('.dropdown-menu');
        parentMenu.querySelectorAll('.dropdown-submenu.show').forEach(function (openSubmenu) {
            if (openSubmenu !== element.parentElement) {
                openSubmenu.classList.remove('show');
            }
        });

        // Toggle the clicked submenu
        this.parentElement.classList.toggle('show');
    });
});

// Auto-close nested submenus when parent dropdown closes
document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('hidden.bs.dropdown', function () {
        // Close all nested submenus
        dropdown.querySelectorAll('.dropdown-submenu.show').forEach(function (submenu) {
            submenu.classList.remove('show');
        });
    });
});


// Write your JavaScript code.
