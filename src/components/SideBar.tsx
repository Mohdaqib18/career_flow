
import {
	AppstoreOutlined,
	BugOutlined,
	TeamOutlined,
	BulbOutlined,
	DownloadOutlined,
	FileDoneOutlined,
	FileTextOutlined,

	HomeOutlined,
	
	LinkedinOutlined,
	SearchOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Button, Menu, Tooltip, Layout, theme } from "antd";

const { Sider } = Layout;

const items = [
	{ icon: HomeOutlined, label: "Dashboard" },
	{ icon: AppstoreOutlined, label: "Job Tracker" },
	{ icon: FileDoneOutlined, label: "Resume Builder" },
	{ icon: UserOutlined, label: "Contacts" },
	{ icon: FileTextOutlined, label: "Documents" },
	{ icon: LinkedinOutlined, label: "Linkedin" },
	{ icon: TeamOutlined, label: "Community" },
	{ icon: SearchOutlined, label: "Find Recruiters" },
].map((item, index) => ({
	key: String(index + 1),
	icon: <item.icon style={{ fontSize: "25px" }} />,
	label: `${item.label}`,
}));

const SideBar: React.FC = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<div
			style={{
				height: "100%",
				position: "relative",
			}}
		>
			<Sider
				style={{
					background: colorBgContainer,
					height: "100%",
				}}
				width={200}
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={(broken) => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
			>
				<div className="demo-logo-vertical" />
				<Menu
					theme="light"
					mode="inline"
					defaultSelectedKeys={["2"]}
					style={{ height: "100%" }}
				>
					{items.map((item, index) => (
						<Menu.Item key={String(index + 1)} style={{ marginTop: 10 }}>
							<Tooltip title={item.label}>
								<div
									style={{
										display: "flex",
									}}
								>
									{item.icon}
									<span>{item.label}</span>
								</div>
							</Tooltip>
						</Menu.Item>
					))}
				</Menu>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "10px",
						padding: "20px 10px",
						marginTop: "-160px",
					}}
				>
					<Button>
						<DownloadOutlined />
						<span>Download Extension</span>
					</Button>

					<Button>
						<BulbOutlined />
						<span>Suggest a feature</span>
					</Button>
					<Button>
						<BugOutlined />
						<span>Report an Issue</span>
					</Button>
				</div>
			</Sider>
		</div>
	);
};

export default SideBar;
