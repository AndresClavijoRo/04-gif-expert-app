import { faker } from "@faker-js/faker";
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('Pruebas en useFetchGifs', () => {
    const category = faker.music.songName();

    test('debe de regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs(category));
        const { images, isLoading } = result.current;
        expect(images).toEqual([]);
        expect(isLoading).toBeTruthy();
    })

    test('debe de regresar un arreglo de imagenes y el loading en false', async () => {
        const { result } = renderHook(() => useFetchGifs(category));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
})