
import { render, screen } from "@testing-library/react";
import SideBar from "../components/SideBar"; 

describe("SideBar component", () => {
	it("renders sidebar items correctly", () => {
		
		render(<SideBar />);

		
		const sidebarItems = [
			{ icon: "Dashboard", label: "Dashboard" },
			{ icon: "Job Tracker", label: "Job Tracker" },
			{ icon: "Resume Builder", label: "Resume Builder" },
			{ icon: "Contacts", label: "Contacts" },
			{ icon: "Documents", label: "Documents" },
			{ icon: "Linkedin", label: "Linkedin" },
			{ icon: "Community", label: "Community" },
			{ icon: "Find Recruiters", label: "Find Recruiters" },
		];

		sidebarItems.forEach(({  label }) => {
			expect(screen.getByText(label)).toBeTruthy();
		});
	});

	
});
