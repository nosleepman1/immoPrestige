import { ThemeProvider } from '@/lib/ThemeProvider'
import Navbar from '@/components/layouts/Navbar'
import { CardDemo } from './components/Card'


function App() {
  

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-primaire dark:bg-fondSombre">
        
        <Navbar />
        <main className="p-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Bienvenue sur ImmoPrestige
          </h2>
          < CardDemo />
          {/* Contenu principal */}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
