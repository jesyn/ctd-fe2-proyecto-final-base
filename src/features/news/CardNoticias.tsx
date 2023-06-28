import { INoticiasNormalizadas } from "./noticias.contracts";
import {
  TarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  BotonLectura,
} from "./styled";

/**
 * Componente para mostrar cada noticia.
 * @param {NoticiasProps} props - Propiedades del componente.
 * @returns {JSX.Element} - Elemento JSX de la noticia.
 */

export interface ICardNoticias {
  noticias: INoticiasNormalizadas[];
  handelClick: (n: INoticiasNormalizadas) => void;
}

const CardNoticias = ({ noticias, handelClick }: ICardNoticias) => {
  return (
    <>
      {noticias.map((n) => (
        <TarjetaNoticia key={n.id}>
          <ImagenTarjetaNoticia src={n.imagen} />
          <TituloTarjetaNoticia>{n.titulo}</TituloTarjetaNoticia>
          <FechaTarjetaNoticia>{n.fecha}</FechaTarjetaNoticia>
          <DescripcionTarjetaNoticia>
            {n.descripcionCorta}
          </DescripcionTarjetaNoticia>
          <BotonLectura onClick={() => handelClick(n)}>Ver más</BotonLectura>
        </TarjetaNoticia>
      ))}
    </>
  );
};

export default CardNoticias;
