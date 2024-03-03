

import { render, screen } from "@testing-library/react";
import JobCard from "../components/JobCard";

describe("JobCard component", () => {
	it("renders job card with title, company name, and date", () => {
		// Define props for the JobCard component
		const jobTitle = "Software Engineer";
		const companyName = "Example Company";
		const date = "2022-12-31";
		const id = "1";

		// Render the JobCard component with the defined props
		render(
			<JobCard
				jobTitle={jobTitle}
				companyName={companyName}
				date={date}
				id={id}
			/>
		);

		// Verify that the job title, company name, and date are rendered correctly
		expect(screen.getByText(jobTitle)).toBeTruthy();
		expect(screen.getByText(companyName)).toBeTruthy();
		expect(screen.getByText(`Added on ${date}`)).toBeTruthy();
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