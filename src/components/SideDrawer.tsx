import React, { useState } from "react";
import { Button, Drawer } from "antd";

const SideDrawer: React.FC = () => {
	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button type="primary" onClick={showDrawer}>
				Open
			</Button>
			<Drawer title="Menu" onClose={onClose} open={open}>
				<p>AI Tools</p>
				<p>Upgrade to premium</p>
				<p>Log in</p>
			</Drawer>
		</div>
	);
};

export default SideDrawer;
