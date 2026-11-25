function ThemeToggle() {

  const savedTheme = localStorage.getItem("theme") || "light";

  function saveTheme(event) {
    const theme = event.target.checked ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }

  return (
    <label className="swap swap-rotate shadow-sm rounded-2xl mr-3">
      <input
        type="checkbox"
        className="toggle theme-controller"
        value="dark"
        defaultChecked={savedTheme === "dark"} // true or false
        onChange={saveTheme}
      />

    </label>
  );
}

export default ThemeToggle;
