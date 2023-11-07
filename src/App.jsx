import { useEffect, useState } from 'react' 
import './App.css' 
import { ThemeProvider } from './context/ThemeContext'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div>
        <h1>Hii</h1>
      </div>
      <div>
        <ThemeBtn></ThemeBtn>
      </div>
      <div>
        <Card></Card>
      </div>
    </ThemeProvider>
  )
}

export default App
