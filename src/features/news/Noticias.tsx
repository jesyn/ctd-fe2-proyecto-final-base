import { useCallback, useEffect, useState } from "react";
import { obtenerNoticias } from "./fakeRest";
import { ContenedorNoticias, ListaNoticias, TituloNoticias } from "./styled";
import { INoticiasNormalizadas } from "./noticias.contracts";
import { toFront } from "./noticias.mapper";
import ModalSubscripcion from "./ModalSubscripcion";
import ModalPremium from "./ModalPremium";
import CardNoticias from "./CardNoticias";

/**
 *Componente para mostrar noticias de los Simpsons.
 * @returns {JSX.Element} - Elemento JSX que incluye el listado de las noticias e incluye logica para mostrar distintos modales.
 */

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  const getModal = useCallback(() => {
    if (!modal) {
      return undefined;
    }
    if (modal?.esPremium) {
      return (
        <ModalSubscripcion
          onClose={() => setModal(null)}
          onSubscription={() =>
            setTimeout(() => {
              alert("Suscripto!");
              setModal(null);
            }, 1000)
          }
        />
      );
    }
    return <ModalPremium {...modal} onClose={() => setModal(null)} />;
  }, [modal]);

  useEffect(() => {
    const obtenerInformacion = async () => {
      const respuesta = await obtenerNoticias();
      const noticiasNormalizadas = toFront(respuesta);
      setNoticias(noticiasNormalizadas);
    };
    obtenerInformacion();
  }, []);

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        <CardNoticias noticias={noticias} handelClick={setModal} />
        <>{getModal()}</>
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;

// Aplicaque el primer principio SOLID, single responsability para liberar al componente "Noticias" de ciertas responsabilidades que no le eran propias.
// En principio extraje las funciones para normalizar las noticias que recibe: capitalizeWords, calculateMinutes y noticias.mapper.
// Por último extraje 3 componentes que pueden ser reutilizados y da más legibilidad al código: ModalPremium, ModalSubscripcion y CardNoticias.
