{/*JSX documents*/}
import Home from './pages/Home'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe'
import Footer from './components/Footer'

import './App.css'
import './index.css'

const App = () => {
 

  return (
    <div>
      <Home />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App