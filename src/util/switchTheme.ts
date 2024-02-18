import { useState, useEffect } from "react";

const [theme, setTheme] = useState("light")

useEffect(() => {
    if (theme == "dark")
        document.documentElement.classList.add("dark")

    else document.documentElement.classList.remove("dark")
}, [theme])

export const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
}