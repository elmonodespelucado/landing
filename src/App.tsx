import { Hero } from './components/Hero.tsx';
import { Header } from './components/layout/Header.tsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <Services />
        <Contact /> */}
      </main>
    </>
  );
}

export default App;
