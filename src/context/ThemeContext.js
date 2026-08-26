"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        try {
            const userSelected = localStorage.getItem("theme_user_selected");
            const savedTheme = localStorage.getItem("theme");

            // Always keep dark mode unless the visitor explicitly tapped the mode button
            if (userSelected === "true" && (savedTheme === "light" || savedTheme === "dark")) {
                setTheme(savedTheme);
                document.documentElement.setAttribute("data-theme", savedTheme);
            } else {
                setTheme("dark");
                document.documentElement.setAttribute("data-theme", "dark");
            }
        } catch {
            setTheme("dark");
            document.documentElement.setAttribute("data-theme", "dark");
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const nextTheme = prevTheme === "dark" ? "light" : "dark";
            try {
                localStorage.setItem("theme", nextTheme);
                localStorage.setItem("theme_user_selected", "true");
            } catch {
                // Ignore storage errors in private/restricted mode
            }
            return nextTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
