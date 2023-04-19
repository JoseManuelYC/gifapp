import { GifGrid } from "../../src/components/GifGrid";
import { render, screen } from "@testing-library/react";
import { useGifFetch } from "../../src/hooks/useGifFetch";

jest.mock("../../src/hooks/useGifFetch"); //Haga un MOCK completo de ese Path

describe("Haciendo pruebas en el GifGrid", () => {
  const category = "Resident Evil";

  test("debe mostrar el cargando", () => {
    useGifFetch.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe mostrar todas las imagenes", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Resident Evil",
        url: "https://localhost.com/re.jpg",
      },
      {
        id: "123",
        title: "LOLAZo",
        url: "https://localhost.com/LOL.jpg",
      },
    ];

    useGifFetch.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
