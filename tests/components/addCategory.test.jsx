import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/componentes/addCategory";
import { faker } from "@faker-js/faker";

describe("pruebas en addCategory", () => {
  const text = faker.music.songName();

  test("deberia cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: text } });
    expect(input.value).toBe(text);
    screen.debug();
  });

  test("Deberia de llamar onNewCategory si el input tiene un valor", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: text } });
    fireEvent.submit(form);
    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledWith(text);
  });

  test("No deberia de llamar onNewCategory si el input no tiene un valor", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "" } });
    fireEvent.submit(form);
    expect(input.value).toBe("");
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
