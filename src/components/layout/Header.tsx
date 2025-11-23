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
        className={`h-screen bg-linear-to-b from-secondary-200 via-secondary to-secondary-400`}
      >
        <div className={`${styles.header} h-full flex flex-col justify-center `}>
          <div className="flex-1 flex justify-center items-center">
            <BarcosWords words={words} />
          </div>
          <NavBar />
          <div className="flex-1 flex justify-center items-center">
            <p className="max-w-xl text-secondary-600 p-5 text-center text-lg">
              Quiero que cada empresa sea una aventura.
              <br /> Devolverle el valor a lo "divertido", "importante" y "vital"
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}
