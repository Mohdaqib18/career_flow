import React, { useState } from "react";

import { Layout, theme, Form } from "antd";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import JobTrackerHeader from "./components/JobTrackerHeader";
import JobTrackerMain from "./components/JobTrackerMain";
import JobTrackerForm from "./components/JobTrackerForm";

const { Content } = Layout;

const App: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
	
		setIsModalOpen(false);
	};
	const showModal = () => {
		setIsModalOpen(true);
	};

	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	return (
		<Layout
			style={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
				overflow: "clip",
			}}
		>
			<NavBar />
			<Content
				style={{
					// padding: "0 48px",
					height: "100%",
				}}
			>
				<Layout
					style={{
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
						height: "100%",
					}}
				>
					<SideBar />
					<Content
						style={{
							padding: "0 24px",
							height: "100%",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<JobTrackerHeader showModal={showModal} />
						<JobTrackerMain />
						<JobTrackerForm
							isModalOpen={isModalOpen}
							handleOk={handleOk}
							handleCancel={handleCancel}
						/>
					</Content>
				</Layout>
			</Content>
		</Layout>
	);
};

export default App;
