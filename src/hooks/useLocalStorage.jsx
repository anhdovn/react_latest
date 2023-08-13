import React, { useEffect, useState } from 'react'


function getSaveValue(key, initialValue) {
    const saveValue = JSON.parse(localStorage.getItem(key))

    if (saveValue) return saveValue

    return initialValue
}


function useLocalStorage(key, initialValue) {


    const [value, setValue] = useState(() => {
        return getSaveValue(key, initialValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])


    return [value, setValue]
}

export default useLocalStorage