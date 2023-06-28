import {
  ContenedorModal,
  TarjetaModal,
  CloseButton,
  ImagenModal,
  CotenedorTexto,
  TituloModal,
  DescripcionModal,
} from "./styled";
import { CloseButton as Close } from "../../assets";

/**
 * @typedef {Object} ModalPremiumProps
 * @property {string} image - URL de la imagen del personaje.
 * @property {string} nombre - Nombre del personaje.
 * @property {string} descripcion - Descripción del personaje.
 * @property {funtion} onClose - Manejador de cierre del modal.
 */

/**
 * Componente para el modal premium.
 * @param {ModalPremiumProps} props - Propiedades del componente.
 *@returns {JSX.Element} - Elemento JSX del modal premium.
 */

interface IModalPremiumProps {
  onClose: () => void;
  imagen: string;
  titulo: string;
  descripcion: string;
}
const ModalPremium = ({
  onClose,
  imagen,
  titulo,
  descripcion,
}: IModalPremiumProps) => {
  return (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={onClose}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal src={imagen} alt="news-image" />
        <CotenedorTexto>
          <TituloModal>{titulo}</TituloModal>
          <DescripcionModal>{descripcion}</DescripcionModal>
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  );
};

export default ModalPremium;
