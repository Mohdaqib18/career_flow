import React, { useState } from "react";

import { Layout, theme, Form } from "antd";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

import JobAddForm from "./components/JobAddForm";
import JobDetailsForm from "./components/JobDetailsForm";
import JobDashboard from "./components/JobDashboard";

const { Content } = Layout;

const App: React.FC = () => {
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
						<JobDashboard />
						<JobDetailsForm />
						<JobAddForm />
					</Content>
				</Layout>
			</Content>
		</Layout>
	);
};

export default App;
