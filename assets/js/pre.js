const dark_mode_preference = window.matchMedia("(prefers-color-scheme: dark)");

const get_theme = () => {
    let system_defaults = dark_mode_preference.matches ? "dark" : "light";

    return localStorage.getItem("data-bs-theme") ?? system_defaults;
};

const set_mode = (dark) => {
    let new_state = dark ? "dark" : "light";

    localStorage.setItem("data-bs-theme", new_state);
    document.documentElement.setAttribute("data-bs-theme", new_state);
};

dark_mode_preference.addEventListener("change", (event) => {
    set_mode(event.matches);
});

addEventListener("DOMContentLoaded", document.documentElement.setAttribute("data-bs-theme", get_theme()));
