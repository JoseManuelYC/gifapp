import { getGifs } from "../../src/helpers/GetGifs";

describe("haciendo pruebas en el getGifs", () => {
  test("debe retornar un arreglo", async () => {
    const gifs = await getGifs("Resident Evil");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
