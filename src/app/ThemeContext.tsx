import {createContext, useContext, useEffect, useState} from 'react';

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {
        console.warn('ThemeContext not provided');
    },
});


export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({children}) => {

    const getInitialTheme = () => {
        const saved = localStorage.getItem('theme');
        return saved ? saved : 'light';
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};