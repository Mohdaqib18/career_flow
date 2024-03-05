import { render, screen } from "@testing-library/react";
import JobEditForm from "../components/JobEditForm";

describe("JobDetailsForm Component", () => {
	it("renders without crashing", () => {
		render(<JobEditForm />);
		const modalElement = screen.getByTestId("jobEditForm");
		expect(modalElement).toBeTruthy();
	});
});
