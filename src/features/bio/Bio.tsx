import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import {
  BioContainer,
  BioDescripcion,
  BioImagen,
  BioNombre,
  BotonBio,
  ContenedorBotones,
} from "./styled";

/**
 * Componente para mostrar biografías de personajes de los Simpsons.
 * Maneja el evento de clic en un botón de biografía.
 * @param {NombresSimpsons} nombre - Nombre del personaje de los Simpsons.
 * Crea los botones de selección de biografía.
 * @returns {JSX.Element[]} - Array de elementos JSX para los botones.
 */

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <BotonBio
        active={bioActiva.id === nombre}
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
      >
        {nombre}
      </BotonBio>
    ));
  };

  return (
    <BioContainer>
      <ContenedorBotones>{crearBotones()}</ContenedorBotones>
      <div>
        <div>
          <BioImagen src={bioActiva.image} alt={bioActiva.nombre} />
        </div>
        <div>
          <BioNombre>{bioActiva.nombre}</BioNombre>
          <BioDescripcion>{bioActiva.descripcion}</BioDescripcion>
        </div>
      </div>
    </BioContainer>
  );
};

export default Bio;
