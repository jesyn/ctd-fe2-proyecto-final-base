import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CardNoticias, { ICardNoticias } from "../CardNoticias";
import { INoticiasNormalizadas } from "../noticias.contracts";

describe("CardNoticias", () => {
  it("se hace clic en el botón 'Ver más'", async () => {
    /*  const mockNoticias = [
      {
        id: 1,
        imagen: "imagen1.jpg",
        titulo: "Noticia 1",
        fecha: "2023-06-26",
        descripcionCorta: "Descripción corta de la noticia 1",
      },
      {
        id: 2,
        imagen: "imagen2.jpg",
        titulo: "Noticia 2",
        fecha: "2023-06-27",
        descripcionCorta: "Descripción corta de la noticia 2",
      },
    ];
    const handleClickMock = jest.fn();

    render(
      <CardNoticias noticias={mockNoticias} handelClick={handleClickMock} />
    );

    const botonVerMas = await screen.findAllByText("Ver más");
    userEvent.click(botonVerMas[0]);

    await waitFor(() => {
      expect(handleClickMock).toHaveBeenCalledTimes(1);
    });
    //expect(handleClickMock).toHaveBeenCalledWith(mockNoticias[0]); */
  });
});
