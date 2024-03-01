import { UserOutlined, DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout } from "antd";
import logo from "../assets/images/logo.png";
import star from "../assets/images/star.svg";
import profileIcon from "../assets/images/profile_icon.png";
import { Dropdown, Space, Button } from "antd";
import SideDrawer from "./SideDrawer";

const { Header } = Layout;

const items: MenuProps["items"] = [
	{
		label: "1st menu item",
		key: "1",
		icon: <UserOutlined />,
	},
	{
		label: "2nd menu item",
		key: "2",
		icon: <UserOutlined />,
	},
	{
		label: "3rd menu item",
		key: "3",
		icon: <UserOutlined />,
		danger: true,
	},
	{
		label: "4rd menu item",
		key: "4",
		icon: <UserOutlined />,
		danger: true,
		disabled: true,
	},
];

const NavBar = () => {
	return (
		<div>
			<Header
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<img src={logo} alt="logo" width={200} className="logo" />
				<div
					// style={{ display: "flex", gap: "20px" }}
					className="navbar-buttons"
				>
					<Dropdown menu={{ items }} trigger={["click"]}>
						<Button
							style={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
							}}
						>
							<img src={star} alt="stars" />

							<span>AI tools</span>
							<DownOutlined />
						</Button>
					</Dropdown>
					<Button>
						<Space>
							<span>Upgrade to premium</span>
						</Space>
					</Button>
					<Dropdown menu={{ items }} trigger={["click"]}>
						<Button
							style={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
							}}
						>
							<span>Mohd Aqib</span>
							<img src={profileIcon} alt="stars" width={20} />
							<DownOutlined />
						</Button>
					</Dropdown>
				</div>

				<div className="side-drawer">
					<SideDrawer />
				</div>
			</Header>
		</div>
	);
};

export default NavBar;
