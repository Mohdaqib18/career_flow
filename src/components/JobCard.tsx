import { Card, Col, Row } from "antd";
import { useJobInfoStore } from "../../store/store";
import company_placeholder_image from "../assets/images/company_placeholder_image.png";
import job_placeholder_image from "../assets/images/job_placeholder_image.png";

const JobCard = ({
	jobTitle,
	companyName,
	date
}: {
	jobTitle: string;
	companyName: string;
	date:string
}) => {
	
	return (
		<Row
			style={{ margin: "10px 0", display: "flex", justifyContent: "center" }}
		>
			<Col span={22}>
				<Card title={jobTitle} bordered={false}>
					<div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
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
	);
};

export default JobCard;
