import React from 'react'
import useTheme from '../context/ThemeContext'

export default function Card() {
  const {themeMode, darkTheme, lightTheme} =  useTheme()
  return (
    <div>
      <h1>Card</h1>
      {themeMode}
    </div>
  )
}
