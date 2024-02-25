import { Col, Divider, Row } from "antd";

const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

const JobTrackerMain = () => {
	return (
		<div style={{ overflowX: "scroll", flex: 1 }}>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} wrap={false}>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div style={style}>col-6</div>
				</Col>
			</Row>
		</div>
	);
};

export default JobTrackerMain;
