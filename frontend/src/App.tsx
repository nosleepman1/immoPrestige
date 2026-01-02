
import './App.css'
import RealEstateCard from './components/common/card'
import { ThemeProvider } from './context/themeProvider'
import { ModeToggle } from './components/common/themeButton'
import NavbarImmobilier from './components/static/navbar'


function App() {



  

  return (

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      < NavbarImmobilier />
       <RealEstateCard />
    </ThemeProvider>

  )
}

export default App
