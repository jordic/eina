

document.addEventListener("DOMContentLoaded", () => {
    const $menu_open = document.getElementById("menu_open");
    const $menu = document.getElementById("menu");
    const $menu_close = document.getElementById("menu_close");
    $menu_open.addEventListener("click", () => {
        $menu.classList.add('opened');
    })
    $menu_close.addEventListener("click", () => {
        $menu.classList.remove('opened');
    })
})