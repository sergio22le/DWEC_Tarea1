import React from 'react';

const TarjetaPersona = ({name, age, image}) => {
    return (
        <article className="person">
            <img src={image} alt={`foto de ${name}`} />
            <div>
                <h4>{name}</h4>
                <p>{age} años</p>
            </div>
        </article>
    );
}

export default TarjetaPersona;