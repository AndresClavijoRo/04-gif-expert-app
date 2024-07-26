import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/componentes/GifItem";
import { faker } from "@faker-js/faker";

describe("Pruebas en GifItem", () => {
  const title = faker.music.songName();
  const url = faker.internet.url();

  test("Deberia tener un parrafo con el title", () => {
    const { getByText } = render(<GifItem title={title} url={url} />);
    expect(getByText(title).innerHTML).toBe(title);
  });

  test("Deberia tener una imagen con el url y alt", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src.includes(url)).toBe(true);
    expect(alt).toBe(title);
  });
});
