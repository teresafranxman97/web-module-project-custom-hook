import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
    const [ values, setValues ] = useLocalStorage("dark-mode toggle", initialValue)

    const toggleMode = value => {
        setValues(!value)
    }

    return [values, setValues, toggleMode]
}