import React from "react";

import { Layout, theme } from "antd";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import JobTrackerHeader from "./components/JobTrackerHeader";
import JobTrackerMain from "./components/JobTrackerMain";

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
						<JobTrackerHeader />
						<JobTrackerMain />
					</Content>
				</Layout>
			</Content>
		</Layout>
	);
};

export default App;
