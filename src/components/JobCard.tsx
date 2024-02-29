import { Card, Col, Row } from "antd";

import company_placeholder_image from "../assets/images/company_placeholder_image.png";

import { useJobInfoStore } from "../../store/store";
import { Draggable } from "react-beautiful-dnd";


const JobCard = ({
	jobTitle,
	companyName,
	date,
	id,
}: {
	jobTitle: string;
	companyName: string;
	date: string;
	id: string;
}) => {
	const showJobDetailsFormModal = useJobInfoStore(
		(state) => state.showJobDetailsFormModal
	);
	const updateJobCardIdClicked = useJobInfoStore(
		(state) => state.updateJobCardIdClicked
	);
	const clickedJobCardId = useJobInfoStore((state) => state.clickedJobCardId);

	const handleOnClick = () => {
		showJobDetailsFormModal();
		updateJobCardIdClicked(id);
	};

	console.log(clickedJobCardId);

	return (
	
			<div onClick={handleOnClick}>
				<Row
					style={{
						margin: "10px 0",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Col span={22}>
						<Card title={jobTitle} bordered={false}>
							<div
								style={{ display: "flex", gap: "12px", alignItems: "center" }}
							>
								<img src={company_placeholder_image} width={24} height={24} />
								<span>{companyName}</span>
								<span
									style={{
										color: "gray",
										fontSize: "12px",
										fontWeight: "500",
										position: "absolute",
										bottom: "5px",
										right: "15px",
									}}
								>
									Added on {date}
								</span>
							</div>
						</Card>
					</Col>
				</Row>
			</div>
	
	);
};

export default JobCard;
