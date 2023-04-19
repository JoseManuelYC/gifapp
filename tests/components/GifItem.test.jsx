import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Haciendo pruebas en el GifItem", () => {
  const title = "Residente del Mal";
  const url = "https://residente.evil.com/RE.jpg";
  test("haciendo match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test("debe existir el title y el url en el componente", () => {
    render(<GifItem title={title} url={url} />);

    //expect(screen.getByRole("img").src).toBe(url);   (Otra manera de verlo)

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
