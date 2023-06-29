import { INoticiasNormalizadas } from "./noticias.contracts";
import {
  TarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  BotonLectura,
} from "./styled";

export interface ICardNoticias {
  noticias: INoticiasNormalizadas[];
  handelClick: (n: INoticiasNormalizadas) => void;
}

/**
 * Componente para mostrar cada noticia.
 * @param {noticia[]} props.noticias - Array de objetos que representan las noticias a mostrar
 * @param {number} props.noticias[].id - id de noticia
 * @param {string} props.noticias[].titulo - titulo de la noticia
 * @param {string} props.noticias[].descripcion - descripcion de la notica
 * @param {(number|string)} props.noticias[].fecha - fecha de la noticia
 * @param {boolean} props.noticias[].esPremium - booleano que determina si la noticia es premium o no
 * @param {string} props.noticias[].imagen - imagen de la noticia
 * @param {descripcionCorta} props.noticias[].[descripcionCorta] - descripcion resumida de la noticia
 * @param {function} props.handelClick - función para ver más información sobre una noticia
 * @returns {JSX.Element} - Elemento JSX del listado de las noticias.
 */

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
