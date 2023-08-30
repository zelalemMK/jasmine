console.log("From script");

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const menuContainer = document.getElementById("menuContainer");

    menuButton.addEventListener('click', function() {
        if (menuContainer.classList.contains('hidden')) {
            menuContainer.classList.remove('hidden');
        } else {
            menuContainer.classList.add('hidden');
        }
    })
})