import React from "react";
import Header from "../Header";
import { render, cleanup, screen } from "@testing-library/react";

const component = () => render(<Header />);

describe("Header tests", () => {
    afterEach(cleanup);

    it("Renders correctly", async () => {
        component();
        expect(screen.getByText("Weather App")).toBeVisible();
    });
});