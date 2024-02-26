import { Col, Divider, Row } from "antd";

const style: React.CSSProperties = {
	background: "#e1edff",
	borderRadius: "10px",
	padding: "8px 0",
	height: "100%",
	// overflowY: "scroll",
	scrollbarWidth: "thin",
	scrollbarColor: "blue",
	display: "flex",
	flexDirection: "column",
};

const colCategories = ["Saved", "Applied", "Interviewing", "Offer", "Rejected"];
const JobTrackerMain: React.FC = () => {
	return (
		<div style={{ overflowX: "scroll", flex: 1 }}>
			<Row
				gutter={{ xs: 4, sm: 8, md: 12, lg: 16 }}
				wrap={false}
				style={{ height: "100%" }}
			>
				{colCategories.map((category) => (
					<Col className="gutter-row" span={6}>
						<div style={style}>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "10px",
								}}
							>
								<span style={{ fontSize: "18px", fontWeight: "500" }}>
									{category}
								</span>

								<div
									style={{
										background: "#cad9f6",
										width: "100px",
										height: "40px",
										borderRadius: "10px",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<span
										style={{
											fontSize: "15px",
											fontWeight: "500",
										}}
									>
										5 Jobs
									</span>
								</div>
							</div>

							<div
								style={{
									flex: 1,
									background: "radial-gradient(#d6e4f8 20%,#0000 0)",
									backgroundPosition: "0 0,50px 50px",
									backgroundSize: "20px 20px",
									overflowY: "scroll",
								}}
								className="col"
							></div>
						</div>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default JobTrackerMain;
