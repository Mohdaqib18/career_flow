

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hello from "../components/Hello";

test("demo", () => {
	expect(true).toBe(true);
});

test("Renders the main page", () => {
	render(<Hello />);
	expect(true).toBeTruthy();
});
