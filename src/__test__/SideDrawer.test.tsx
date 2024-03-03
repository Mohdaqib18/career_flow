
import { render, fireEvent, screen } from "@testing-library/react";
import SideDrawer from "../components/SideDrawer";

describe("SideDrawer", () => {
	it("renders correctly", () => {
		render(<SideDrawer />);

		// Check that the 'Open' button is rendered
		const openButton = screen.getByText("Open");
		expect(openButton).toBeTruthy();

		// Check that the drawer is initially closed
		const drawer = screen.queryByText("Menu");
		expect(drawer).not.toBeTruthy();
	});

	it("opens and closes the drawer", () => {
		render(<SideDrawer />);

		// Click the 'Open' button
		const openButton = screen.getByText("Open");
		fireEvent.click(openButton);

		// Check that the drawer is opened
		const drawer = screen.getByText("Menu");
		expect(drawer).toBeTruthy();

		// Click the 'Close' button in the drawer
		const closeButton = screen.getByRole("button", { name: "Close" });
		fireEvent.click(closeButton);

		
	});
});
