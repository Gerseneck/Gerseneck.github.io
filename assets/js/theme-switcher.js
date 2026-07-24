document.getElementById("theme-switcher").addEventListener("click", () => {
    let attribute = "data-bs-theme";
    let current_state = document.documentElement.getAttribute(attribute);
    let new_state = current_state === "light" ? "dark" : "light";
    localStorage.setItem(attribute, new_state);

    document.documentElement.setAttribute(attribute, new_state);
});
