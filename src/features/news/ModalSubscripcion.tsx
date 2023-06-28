import React from "react";
import {
  BotonSuscribir,
  CloseButton,
  ContenedorModal,
  CotenedorTexto,
  DescripcionModal,
  ImagenModal,
  TarjetaModal,
  TituloModal,
} from "./styled";
import { SuscribeImage, CloseButton as Close } from "../../assets";

/**
 * @typedef {Object} ModalSubscripcionProps
 * @property {funtion} onClose - Manejador de cierre del modal.
 * @property {funtion} onSubscription - Manejador de suscripción.
 */

/**
 * Componente para el modal de suscripción.
 * @param {ModalSubscripcionProps} props - Propiedades del componente.
 * @returns {JSX.Element} - Elemento JSX del modal de suscripción.
 */

interface IModalSubscripcionProps {
  onClose: () => void;
  onSubscription: () => void;
}

const ModalSubscripcion = ({
  onClose,
  onSubscription,
}: IModalSubscripcionProps) => {
  return (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={onClose}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
        <CotenedorTexto>
          <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
          <DescripcionModal>
            Suscríbete a nuestro newsletter y recibe noticias de nuestros
            personajes favoritos.
          </DescripcionModal>
          <BotonSuscribir onClick={onSubscription}>Suscríbete</BotonSuscribir>
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  );
};

export default ModalSubscripcion;
