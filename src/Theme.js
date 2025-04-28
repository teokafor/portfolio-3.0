const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
const button = document.querySelector("[data-theme-toggle]");  

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

updateThemeOnHtmlEl(currentThemeSetting);
updateButtonTheme(currentThemeSetting);

function updateThemeOnHtmlEl(theme) { document.querySelector("html").setAttribute("data-theme", theme); }
function updateButtonTheme(theme) {  
  button.id = theme; 

  // Switch theme button
  if (theme === 'light') {
    button.children[1].setAttribute('style', 'display: block;');
    button.children[0].setAttribute('style', 'display: none;');
  } else {
    button.children[1].setAttribute('style', 'display: none;');
    button.children[0].setAttribute('style', 'display: block;');
  }
}

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) return localStorageTheme;
  if (systemSettingDark.matches) return "dark";
  return "light";
}

button.addEventListener("click", () => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark"; 
  updateThemeOnHtmlEl(newTheme);
  updateButtonTheme(newTheme);
  localStorage.setItem("theme", newTheme);
  currentThemeSetting = newTheme;
});