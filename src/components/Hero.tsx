


export function Hero(){

    return (
        <section className="bg-gray-900 hero-bg px-5 shadow-lg flex flex-col justify-center items-center text-white divide-gray-700">
       
            <div className="flex flex-col items-center justify-center text-center sm:px-10 py-10">
                <h1 className="text-2xl sm:text-6xl font-bold pb-2 sm:pb-10 text-complementary">Arte, Código y Comunicación.</h1>
                <p className="text-md sm:text-xl max-w-2xl mb-4 sm:mb-8 ">
                    ¿Piensas que comunicar es un acto artístico? ¿Crees que construir y entender sistemas es un acto creativo?
                    Yo soy Santi Marchena <a href="http://instagram.com/elmonodespelucado" className="text-primary font-black" target="_blank">@elmonodespelucado</a> y quiero ayudarte a comunicar tus ideas a través del arte y la tecnología.
                </p>
                <a href="#learn-more" className="bg-primary text-white px-6 py-3 text-lg hover:bg-primary-200 shadow hover:shadow-lg transition-all">
                    Conozcámonos
                </a>
            </div>
            
        </section>
    )
}