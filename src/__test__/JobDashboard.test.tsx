
import { render } from "@testing-library/react";
import JobDashboard from "../components/JobDashboard";

describe("JobDashboard", () => {
	test("renders job search header", () => {
		const { getByText } = render(<JobDashboard />);
		expect(getByText("My 2024 Job Search")).toBeTruthy();
	});

	test("renders add job button", () => {
		const { getByText } = render(<JobDashboard />);
		expect(getByText("Add Job")).toBeTruthy();
	});


	
});

Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: jest.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // deprecated
		removeListener: jest.fn(), // deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
});