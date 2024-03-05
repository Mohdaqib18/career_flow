import { render, screen } from "@testing-library/react";
import JobAddForm from "../components/JobAddForm";

describe("JobDetailsForm Component", () => {
	it("renders without crashing", () => {
		render(<JobAddForm />);
		const modalElement = screen.getByTestId("jobAddForm");
		expect(modalElement).toBeTruthy();
	});
});
