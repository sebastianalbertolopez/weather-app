import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import CitySelector, { CitySelectorProps } from "../CitySelector";
import userEvent from '@testing-library/user-event';

const testProps: CitySelectorProps = {
    onCheckWeather: jest.fn,
    citiesLength: 0
};

const component = () => render(<CitySelector {...testProps} />);

describe("CitySelector tests", () => {
    afterEach(cleanup);

    it("Renders correctly", async () => {
        component();

        const input = screen.getByPlaceholderText("Enter a city e.g.: Buenos Aires");
        const button = screen.getByText("Check Weather");
    
        expect(button).toBeVisible();
        expect(input).toBeVisible();
    });

    it("Button has to be disabled if input not contains value or citiesLength prop is 5", async () => {
        const { rerender } = component();

        const input = screen.getByPlaceholderText("Enter a city e.g.: Buenos Aires");
        const button = screen.getByText("Check Weather");

        expect(button).toBeDisabled();

        userEvent.type(input, 'Buenos Aires');

        expect(button).not.toBeDisabled();

        testProps.citiesLength = 5;
        rerender(<CitySelector {...testProps} />);

        expect(button).toBeDisabled();
    }); 
});