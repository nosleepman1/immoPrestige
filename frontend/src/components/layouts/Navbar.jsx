import { useTheme } from "@/lib/ThemeProvider"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-slate-900 shadow-md">
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">ImmoPrestige</h1>
      
      <div className="flex items-center gap-4">
        {/* Ici tu peux ajouter tes liens, recherche, etc. */}
        
        {/* Bouton pour changer de thème */}
        <Button onClick={toggleTheme}>
          {theme === "dark" ? "☀️ Clair" : "🌙 Sombre"}
        </Button>
      </div>
    </nav>
  )
}
