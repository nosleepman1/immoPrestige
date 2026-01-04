
import './App.css'
import RealEstateCard from './components/common/card'
import { ThemeProvider } from './context/themeProvider'
import { ModeToggle } from './components/common/themeButton'
import NavbarImmobilier from './components/static/navbar'
import AuthComponent from './pages/auth/register'
import PropertyForm from './pages/admin/addBien'


function App() {



  

  return (

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      < NavbarImmobilier />
      <div className='bloc mt-4'>
        {/* <AuthComponent /> */}
        < PropertyForm />
      </div>
    </ThemeProvider>

  )
}

export default App
