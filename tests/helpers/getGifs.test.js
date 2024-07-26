import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs', () => {
    test('Deberia retornar un arreglo de gifs', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
})