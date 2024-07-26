import { render, screen } from "@testing-library/react";
import { faker } from "@faker-js/faker";
import { GifGrid } from "./../../src/componentes/GifGrid";
import { useFetchGifs } from "./../../src/hooks/useFetchGifs";

jest.mock("./../../src/hooks/useFetchGifs");

const crearImagenes = (cantidad) => {
  let images = [];
  for (let i = 0; i < cantidad; i++) {
    images.push({
      id: i,
      title: faker.music.songName(),
      url: faker.internet.url,
    });
  }
  return images;
};

describe("Pruebas en GifGrid", () => {
  const category = faker.music.songName();

  test("Deberia mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({ images: [], isLoading: true });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category)).toBeTruthy();
  });

  test("Deberia mostrar las imagenes cuando se cargan", async () => {
    let images = crearImagenes(faker.number.int({ min: 1, max: 10 }));
    useFetchGifs.mockReturnValue({ images, isLoading: true });
    render(<GifGrid category={category} />);
    const imagesRendered = screen.getAllByRole("img");
    expect(imagesRendered.length).toBe(images.length);
    screen.debug();
  });
});
