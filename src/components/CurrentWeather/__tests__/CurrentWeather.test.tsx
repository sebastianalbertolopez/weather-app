import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import CurrentWeather, { CurrentWeatherProps } from "../CurrentWeather";
import { IWeather } from "../../../apis/models/weather";
import { mock } from 'jest-mock-extended';

const testProps: CurrentWeatherProps = {
    weather: mock<IWeather>({
        weather: [{
            main: 'Clouds',
            description: 'few clouds',
            icon: '02d'
        }],
        main: {
            temp: 19.2,
            feels_like: 17.56,
            temp_min: 19.2,
            temp_max: 19.31,
            pressure: 1018,
            humidity: 42,
        },
        name: 'Buenos Aires, AR',
        sys: {
            country: 'Argentina',
        },
        wind: {
            speed: 1.03,
        },
        dt: 1616090400,
        dt_txt: '2021-03-18 18:00:00'
    })
};

const component = () => render(<CurrentWeather {...testProps} />);

describe("CurrentWeather tests", () => {
    afterEach(cleanup);

    it("Renders correctly", async () => {
        component();

        expect(screen.getByText("CURRENT WEATHER")).toBeVisible();
    });
});