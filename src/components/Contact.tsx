//Contact component
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section className='text-center p-5 bg-complementary py-10'>
        <h1 className='text-6xl p-5 text-primary'>Newsletter</h1>
        <p className="text-gray-800 font-bold">
           Recibe y lee la información y noticias que ayudan a crear una comunidad y base de conocimientos al rededor del arte como herramienta.
        </p>
        <form className="mt-5 flex flex-col items-center">
            <input
                type="email"
                placeholder="Tu correo electrónico"
                className="p-2 border border-gray-300 rounded mb-4 w-64 bg-white"
            />
            <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
            >
                Suscribirse
            </button>
        </form>
    </section>
    );
};