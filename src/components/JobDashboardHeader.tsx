import type { SearchProps } from "antd/es/input/Search";
import { PlusSquareOutlined } from "@ant-design/icons";

import { Button, Input, DatePicker } from "antd";
const { Search } = Input;
const { RangePicker } = DatePicker;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
	console.log(info?.source, value);

interface JobDashboardHeaderProps {
	showModal: (e: any) => void;
}

const JobDashboardHeader: React.FC<JobDashboardHeaderProps> = ({
	showModal,
}) => {
	return (
		<div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					gap: 10,
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<h1>My 2024 Job Search</h1>

				<div
					style={{
						display: "flex",
						flexDirection: "row",
						gap: 10,
					}}
				>
					<Search
						placeholder="Search"
						allowClear
						onSearch={onSearch}
						style={{ width: 300 }}
					/>
					<RangePicker
						format="MMM DD YYYY"
						placeholder={["AddedFrom", "AddedUntil"]}
					/>

					<Button type="primary" onClick={showModal}>
						<span>Add Job</span>
						<PlusSquareOutlined />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default JobDashboardHeader;
