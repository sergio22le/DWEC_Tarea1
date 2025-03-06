import React from 'react';
import TarjetaPersona from "./TarjetaPersona.jsx";
import datosPersonas from "./data.js";

const Main = () => {
    const numeroCumpleaños = datosPersonas.length;
    return (
        <main>
            <section className="container">
                <h3>Hoy hay {numeroCumpleaños} cumpleaños</h3>
                {datosPersonas.map((persona) => (
                    <TarjetaPersona key={persona.id} {...persona} />
                ))}
            </section>
        </main>
    );
}

export default Main;
