import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()


export function useTheme() {
    return useContext(ThemeContext)
}

function ThemeProvider({ children }) {
    const [state, setState] = useState()
    return (
        <ThemeContext.Provider value={{ state, setState }}>{children}</ThemeContext.Provider>
    )
}

export default ThemeProvider