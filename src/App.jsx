import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'
import './assets/css/style.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'about':
        return <About key="about" />
      case 'resume':
        return <Resume key="resume" />
      case 'portfolio':
        return <Portfolio key="portfolio" />
      case 'blog':
        return <Blog key="blog" />
      case 'contact':
        return <Contact key="contact" />
      default:
        return <About key="about" />
    }
  }

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        {renderActiveSection()}
      </div>
    </main>
  )
}

export default App