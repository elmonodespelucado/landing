import { ServiceCard } from './ui/ServiceCard.tsx';
import style from '../styles/Hero.module.css';

export function Hero() {
  return (
    <section
      className={`${style.hero} bg-gray-900 hero-bg px-5 shadow-lg text-white divide-gray-700 flex justify-center flex-wrap gap-4`}
    >
      <ServiceCard title="Guión de tu empresa">
        Entendemos la <b>historia</b> de tu marca.
        <br />
        <br />
        Identificamos el <b>héroe</b>, su <b>ideal</b> y sus <b>misiones</b>.
      </ServiceCard>
      <ServiceCard title="Tracemos los caminos" directionXMap="right">
        Tenemos caminos infinitos. Podemos detenernos a trazar el mapa.
        <br />
        <br />O embarcarnos a crear una historia.
      </ServiceCard>
      <ServiceCard title="A la aventura!" directionXMap="center">
        ¿Empezaremos con tu contenido? ¿Creando un evento?
        <br />
        ¿Se te ocurre una aplicación? Quizá una landing.
        <br /> Tenemos todo a nuestra disposición.
        <br /> La creatividad es el hilo que une los procesos.
      </ServiceCard>
    </section>
  );
}
