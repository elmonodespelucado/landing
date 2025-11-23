import { Contact } from './components/Contact.tsx';
import { Hero } from './components/Hero.tsx';
import { Header } from './components/layout/Header.tsx';
import { Services } from './components/Services.tsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
