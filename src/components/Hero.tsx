import { Words } from "./Words";

export function Hero(){
    const words = 
    ['Backend', 'Frontend', 'Storytelling', 'socialNetwork', 'Teatro', 'Música', 'Producción audiovisual', 'Creación de Eventos', 'Comunidades'];
    return (
        <section className="bg-gray-900 hero-bg grid sm:grid-cols-2 gap-4 px-5 py-5 shadow-lg items-center text-white divide-gray-700">
            <div className="flex flex-col items-center justify-center text-center px-10 py-10 bg-gray-800/50">
                <h1 className="text-4xl sm:text-5xl font-bold pb-10">Arte, Código y Comunicación.</h1>
                <p className="text-lg sm:text-xl max-w-2xl mb-8 ">
                    ¿Piensas que comunicar es un acto artístico? ¿Crees que construir y entender sistemas es un acto creativo?
                    Yo soy <a href="http://instagram.com/elmonodespelucado" className="text-primary font-black" target="_blank">@elmonodespelucado</a> y quiero comunicar tus ideas a través del arte y la tecnología.
                </p>
                <a href="#learn-more" className="bg-primary text-white px-6 py-3 text-lg hover:bg-primary-200 shadow hover:shadow-lg transition-all">
                    Conozcámonos
                </a>
            </div>
            <div className="xl:px-20">
                <h1 className="text-4xl sm:text-5xl font-bold pb-10 text-center">SKILLS</h1>
                <Words words={words}/>
            </div>
        </section>
    )
}