import { renderHook, waitFor } from "@testing-library/react";
import { useGifFetch } from "../../src/hooks/useGifFetch";

describe("Haciendo pruebas en el useGifFetch", () => {
  test("debe de retornar las imagenes y el isloading", () => {
    const { result } = renderHook(() => useGifFetch("Resident Evil"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });
  test("Debe retornar un arreglo de imagenes y el isLoading debe estar en falso", async () => {
    const { result } = renderHook(() => useGifFetch("Resident Evil"));
    await waitFor(() => {
      expect(result.current.images.length).toBeGreaterThan(0);
    });
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
