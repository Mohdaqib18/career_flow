
import { render, screen } from "@testing-library/react";
import JobDetailsForm from "../components/JobDetailsForm";

describe("JobDetailsForm Component", () => {
	it("renders without crashing", () => {
		render(<JobDetailsForm />);
		const modalElement = screen.getByTestId("jobDetailsForm");
		expect(modalElement).toBeTruthy();
	});
});
