import React, { useState } from "react";

import { Layout, theme, Form } from "antd";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import JobDashboardHeader from "./components/JobDashboardHeader";
import JobDashboardMain from "./components/JobDashboardMain";
import JobTrackerForm from "./components/JobAddForm";
import JobDetailsForm from "./components/JobDetailsForm";

const { Content } = Layout;

const App: React.FC = () => {
	const [isAddFormModalOpen, setIsAddFormModalOpen] = useState(false);
	const [isEditFormModalOpen, setIsEditFormModalOpen] = useState(false);

	const handleAddFormOk = () => {
		setIsAddFormModalOpen(false);
	};

	const handleAddFormCancel = () => {
		setIsAddFormModalOpen(false);
	};
	const showAddFormModal = () => {
		setIsAddFormModalOpen(true);
	};
	const handleEditFormOk = () => {
		setIsEditFormModalOpen(false);
	};

	const handleEditFormCancel = () => {
		setIsEditFormModalOpen(false);
	};
	const showEditFormModal = () => {
		setIsEditFormModalOpen(true);
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
						<JobDashboardHeader showModal={showAddFormModal} />
						<JobDashboardMain showModal={showEditFormModal} />
						<JobTrackerForm
							isModalOpen={isAddFormModalOpen}
							handleOk={handleAddFormOk}
							handleCancel={handleAddFormCancel}
						/>
						<JobDetailsForm
							isModalOpen={isEditFormModalOpen}
							handleOk={handleEditFormOk}
							handleCancel={handleEditFormCancel}
						/>
					</Content>
				</Layout>
			</Content>
		</Layout>
	);
};

export default App;
