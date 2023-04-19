import { render, screen } from "@testing-library/react";
import { GifApp } from "../src/GifApp";

describe("Pruebas en GifApp", () => {
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<GifApp />);
    expect(container).toMatchSnapshot();
  });
  test('Debe tener un titulo h1 con el nombre "GifApp"', () => {
    render(<GifApp />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe("GifApp");
  });
});
