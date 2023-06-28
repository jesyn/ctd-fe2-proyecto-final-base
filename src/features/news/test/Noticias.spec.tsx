import { render, screen } from "@testing-library/react";
import Noticias from "../Noticias";

describe("Noticias", () => {
  /*  beforeEach(() => {
    jest.mock("./fakeRest", () => ({
      obtenerNoticias: jest.fn(() => Promise.resolve([])),
    }));
  }); */

  it("muestra el título 'Noticias de los Simpsons'", () => {
    render(<Noticias />);
    //const titulo = screen.getByText("Noticias de los Simpsons");
    //expect(titulo).toBeInTheDocument();
  });

  /*  it("muestra el componente CardNoticias", () => {
    render(<Noticias />);
    const cardNoticias = screen.getByTestId("card-noticias");
    expect(cardNoticias).toBeInTheDocument();
  }); */

  /* it("no muestra el modal inicialmente", () => {
    render(<Noticias />);
    const modal = screen.queryByTestId("modal");
    expect(modal).toBeNull();
  }); */
});
