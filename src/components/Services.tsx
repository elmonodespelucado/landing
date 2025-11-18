import { Card } from "./Card";

export function Services() {
    return (
        <section className="bg-blueking text-white p-5">
            <h1 className="text-6xl p-5 text-center text-primary-300">Servicios y Artesanías</h1>
            <p className="text-center text-secondary max-w-3xl mx-auto">
                Una empresa es una aventura, <span className="italic">un viaje del heroe</span>. ¿Sabes ya narrar tu producto? 
            </p>
            <div className="grid md:grid-cols-3 justify-center gap-10 my-10">
                <Card
                    title="Guión & Marca"
                    description="Entiende la narrativa de tu marca y explora herramientas creativas para darle juego y profundidad."
                    imageUrl="https://placehold.co/200x100?text=Guion+e+Historia"
                />
                <Card
                    title="Comunicación & Marketing"
                    description="Tenemos servicio de capacitación y creación audiovisual de tu marca. Comunica narrando como quieres que te vean."
                    imageUrl="https://placehold.co/200x100?text=Desarrollo+web"
                />
                <Card
                    title="TEcnología & Conocimiento"
                    description="Soluciones tecnológicas innovadoras para optimizar procesos y mejorar la eficiencia de tu negocio."
                    imageUrl="https://placehold.co/200x100?text=Marketing"
                />
            </div>
        </section>
    )
}