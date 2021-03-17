import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [ values, setValues ] = useLocalStorage("dark-mode__toggle")


    return [values, setValues]
}