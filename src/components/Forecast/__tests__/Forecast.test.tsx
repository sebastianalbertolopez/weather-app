import React from "react";
import { IForecast } from "../../../apis/models/forecast";
import { mock } from 'jest-mock-extended';
import Forecast, { ForecastProps } from "../Forecast";
import { render, cleanup, screen } from "@testing-library/react";

const testProps: ForecastProps = {
    forecastList: mock<IForecast>([{
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
    }])
};

const component = () => render(<Forecast {...testProps} />);

describe("Forecast tests", () => {
    afterEach(cleanup);

    it("Renders correctly", async () => {
        component();

        expect(document.getElementsByClassName('card').length).toBe(1);
        expect(screen.getByText("THURSDAY")).toBeVisible();
    });
});