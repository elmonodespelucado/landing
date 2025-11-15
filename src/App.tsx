import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import { Services } from './components/Services'

function App() {

  return (
    <>
      <header className='text-'>
        <NavBar />
      </header>
      <main>
        <Hero />
        <Services/>
        <Contact/>
      </main>
      <footer></footer>
    </>
  )
}

export default App
