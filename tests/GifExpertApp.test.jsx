import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
import { faker } from "@faker-js/faker";

describe("Pruebas en GiftExpertApp", () => {
  const category = faker.music.songName();

  test("debe de mostrar el componente correctamente", () => {
    render(<GifExpertApp />);
    screen.debug();
  });

  test("Deberia añadir una categoria correctamente", async () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);

    await waitFor(() => expect(screen.findByText(category)));
    screen.debug();
  });

  test("No deberia añadir la categoria si ya existe", async () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);

    await waitFor(() => expect(screen.queryAllByText(category).length).toBe(1));
    screen.debug();
  });
});
