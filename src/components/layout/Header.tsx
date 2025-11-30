import { BarcosWords } from '../ui/BarcosWords.tsx';
import { NavBar } from './NavBar.tsx';
import styles from '../../styles/Header.module.css';

export function Header() {
  const words = [
    'Backend',
    'Frontend',
    'Storytelling',
    'socialNetwork',
    'Producción audiovisual',
    'Teatro',
    'Música',
    'Creación de Eventos',
    'Comunidades',
  ];
  return (
    <div className="bg-gray-900">
      <header
        className={`md:h-screen bg-linear-to-b from-secondary-200 via-secondary to-secondary-400`}
      >
        <div className={`${styles.header} bg-contain  pb-20 md:pb-0 h-full `}>
          <div className={`${styles.fadeHeader} flex flex-col md:justify-center h-full`}>
            <div className={` md:flex-1 flex justify-center items-center`}>
              <BarcosWords words={words} />
            </div>
            <NavBar />
            <div className="md:flex-1 flex justify-center">
              <p className="max-w-xl text-secondary-00 p-5 text-center text-lg">
                Cada <b>empresa y marca</b> es una aventura.
                <br />
                Divertirse, que el trabajo sea una misión, un pulso vital.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
