
import './App.css'
import RealEstateCard from './components/common/card'
import { ThemeProvider } from './context/themeProvider'


function App() {



  

  return (

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       <RealEstateCard />
    </ThemeProvider>

  )
}

export default App
