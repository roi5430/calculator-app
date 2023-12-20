import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Calculator App tests", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Render Calculator", () => {
    const output = screen.getByTestId("output");
    expect(output).toHaveTextContent("0");

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(19);
  });

  test("Does subsrtaction corectly", () => {
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "0" }));
    fireEvent.click(screen.getByRole("button", { name: "-" }));
    fireEvent.click(screen.getByRole("button", { name: "6" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTestId("output")).toHaveTextContent("24");
  });

  test("Does addition corectly", () => {
    fireEvent.click(screen.getByRole("button", { name: "4" }));
    fireEvent.click(screen.getByRole("button", { name: "0" }));
    fireEvent.click(screen.getByRole("button", { name: "+" }));
    fireEvent.click(screen.getByRole("button", { name: "6" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTestId("output")).toHaveTextContent("46");
  });

  test("Does multiply corectly", () => {
    fireEvent.click(screen.getByRole("button", { name: "4" }));
    fireEvent.click(screen.getByRole("button", { name: "1" }));
    fireEvent.click(screen.getByRole("button", { name: "*" }));
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTestId("output")).toHaveTextContent("123");
  });

  test("Does divide corectly", () => {
    fireEvent.click(screen.getByRole("button", { name: "4" }));
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.click(screen.getByRole("button", { name: "/" }));
    fireEvent.click(screen.getByRole("button", { name: "6" }));
    fireEvent.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTestId("output")).toHaveTextContent("7");
  });

  test("Does clear corectly", () => {
    const plusButton = screen.getByRole("button", { name: "+" });

    fireEvent.click(screen.getByRole("button", { name: "4" }));
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.click(plusButton);

    expect(plusButton).toHaveStyle({ backgroundColor: "#ffb041" });

    fireEvent.click(screen.getByRole("button", { name: "AC" }));

    expect(screen.getByTestId("output")).toHaveTextContent("0");
  });

  test("Does percent corectly", () => {
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    fireEvent.click(screen.getByRole("button", { name: "0" }));
    fireEvent.click(screen.getByRole("button", { name: "%" }));

    expect(screen.getByTestId("output")).toHaveTextContent("0.3");
  });

  test("Does chain operatoins corectly", () => {
    const output = screen.getByTestId("output");

    fireEvent.click(screen.getByRole("button", { name: "4" }));
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    fireEvent.click(screen.getByRole("button", { name: "+" }));
    fireEvent.click(screen.getByRole("button", { name: "6" }));

    expect(output).toHaveTextContent("6");
    fireEvent.click(screen.getByRole("button", { name: "+" }));

    expect(output).toHaveTextContent("48");
    fireEvent.click(screen.getByRole("button", { name: "2" }));
    expect(output).toHaveTextContent("2");

    fireEvent.click(screen.getByRole("button", { name: "=" }));
    expect(output).toHaveTextContent("50");
  });
});
