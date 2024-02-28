import { Button, Form, Modal, Select, Menu, Row, Col } from "antd";
import company_placeholder_image from "../assets/images/company_placeholder_image.png";
import job_placeholder_image from "../assets/images/job_placeholder_image.png";
import salary from "../assets/images/salary.png";
import location from "../assets/images/location.png";
import description from "../assets/images/Description.svg";
import notes from "../assets/images/notes.png";
import interview from "../assets/images/interview.png";
import contact from "../assets/images/contact.png";
import document from "../assets/images/document.png";
import task from "../assets/images/task.svg";
import {
	ProfileOutlined,
	InfoCircleOutlined,
	FileTextOutlined,
	LaptopOutlined,
	ContactsOutlined,
	FileDoneOutlined,
	CheckSquareOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useJobInfoStore } from "../../store/store";

const onFinishFailed = (errorInfo: any) => {
	console.log("Failed:", errorInfo);
};
const onFinish = (values: any) => {
	console.log("Success:", values);
};
interface Props {}

const items = [
	{ icon: ProfileOutlined, label: "Overview" },
	{ icon: InfoCircleOutlined, label: "Company" },
	{ icon: FileTextOutlined, label: "Notes" },
	{ icon: LaptopOutlined, label: "Interview" },
	{ icon: ContactsOutlined, label: "Contacts" },
	{ icon: FileDoneOutlined, label: "Documents" },
	{ icon: CheckSquareOutlined, label: "Tasks" },
].map((item, index) => ({
	key: item.label,
	icon: <item.icon style={{ fontSize: "20px" }} />,
	label: `${item.label}`,
}));

const JobDetailsForm: React.FC<Props> = ({}) => {
	const [form] = Form.useForm();
	const [currentKey, setCurrentKey] = useState("Overview");

	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const showDeleteModal = () => {
		setIsDeleteModalOpen(true);
	};

	const handleDeletaOk = () => {
		setIsDeleteModalOpen(false);

		setTimeout(() => {
			handleDeleteButton();
		}, 1);
	};

	const handleDeleteCancel = () => {
		setIsDeleteModalOpen(false);
	};

	const handleJobDetailsCancel = useJobInfoStore(
		(state) => state.handleJobDetailsCancel
	);
	const handleJobDetailsFormOk = useJobInfoStore(
		(state) => state.handleJobDetailsFormOk
	);
	const isJobDetailsModalOpen = useJobInfoStore(
		(state) => state.isJobDetailsModalOpen
	);
	const jobs = useJobInfoStore((state) => state.jobs);
	const deleteJob = useJobInfoStore((state) => state.deleteJob);
	const clickedJobCardId = useJobInfoStore((state) => state.clickedJobCardId);
	const showJobEditFormModal = useJobInfoStore(
		(state) => state.showJobEditFormModal
	);
	const handleDeleteButton = () => {
		Object.entries(jobs).map(([category, jobsArray], index) =>
			deleteJob(
				jobsArray.filter((item: any) => item.jobId !== clickedJobCardId),
				category
			)
		);

		handleJobDetailsFormOk();
	};

	return (
		<div>
			<Modal
				title="Job Details"
				open={isJobDetailsModalOpen}
				onOk={handleJobDetailsFormOk}
				width={"75%"}
				footer={""}
				onCancel={(e) => {
					form.resetFields();
					handleJobDetailsCancel();
				}}
				afterOpenChange={() => {
					form.resetFields();
				}}
				afterClose={() => {
					setCurrentKey("Overview");
				}}
			>
				<Form
					form={form}
					name="jobDetails"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
					style={{
						margin: "auto",
						marginBottom: "0px",
						borderTop: "1px solid var(--Gray-200, #eaecf0)",
					}}
				>
					<div>
						<div
							style={{
								margin: "15px 0",
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<div style={{ display: "flex", gap: "15px" }}>
								<img src={job_placeholder_image} />
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "15px",
									}}
								>
									<span style={{ fontSize: "22px" }}>
										{
											Object.values(jobs)
												.find((item) =>
													item.find((item) => item.jobId === clickedJobCardId)
												)
												?.find((item) => item.jobId === clickedJobCardId)
												?.jobTitle
										}
									</span>
									<div style={{ display: "flex", gap: "15px" }}>
										<div
											style={{
												display: "flex",
												gap: "5px",
												alignItems: "center",
											}}
										>
											<img src={company_placeholder_image} width={24} />
											<span>
												{
													Object.values(jobs)
														.find((item) =>
															item.find(
																(item) => item.jobId === clickedJobCardId
															)
														)
														?.find((item) => item.jobId === clickedJobCardId)
														?.companyName
												}
											</span>
										</div>
										<div
											style={{
												display: "flex",
												gap: "5px",
												alignItems: "center",
											}}
										>
											<img src={location} width={24} />
											<span>
												{Object.values(jobs)
													.find((item) =>
														item.find((item) => item.jobId === clickedJobCardId)
													)
													?.find((item) => item.jobId === clickedJobCardId)
													?.location || "Location not specified"}
											</span>
										</div>
										<div
											style={{
												display: "flex",
												gap: "5px",
												alignItems: "center",
											}}
										>
											<img src={salary} width={24} />
											<span>
												{Object.values(jobs)
													.find((item) =>
														item.find((item) => item.jobId === clickedJobCardId)
													)
													?.find((item) => item.jobId === clickedJobCardId)
													?.salary || "Salary: not specified"}
											</span>
										</div>
									</div>
								</div>
							</div>
							<div>
								<Modal
									style={{ fontWeight: "bold", top: "200px" }}
									onOk={handleDeletaOk}
									onCancel={handleDeleteCancel}
									open={isDeleteModalOpen}
									width={"35%"}
								>
									<div>Do you want to delete this job?</div>
								</Modal>
							</div>

							<div style={{ display: "flex", gap: "10px" }}>
								<Button
									danger
									style={{ borderRadius: "4px" }}
									onClick={showDeleteModal}
								>
									Delete
								</Button>
								<Button
									style={{ borderRadius: "4px" }}
									type={"primary"}
									onClick={showJobEditFormModal}
								>
									Edit
								</Button>
							</div>
						</div>
					</div>
				</Form>
				<div>
					<Row style={{ backgroundColor: "#f8fbfe" }}>
						<Col span={4}>
							<Menu
								onClick={(e) => setCurrentKey(e.key)}
								theme="light"
								mode="vertical"
								defaultSelectedKeys={["Overview"]}
								style={{ height: "100%" }}
								items={items}
								defaultOpenKeys={["Overview"]}
								selectedKeys={[currentKey]}
								defaultValue={currentKey}
							/>
						</Col>
						<Col span={20}>
							{currentKey === "Overview" ? (
								<div
									style={{
										padding: "20px",
										display: "flex",
										justifyContent: "space-between",
									}}
								>
									<div>
										<div style={{ display: "flex", flexDirection: "column" }}>
											<span style={{ fontSize: "25px", fontWeight: 600 }}>
												Tags
											</span>
											<span>
												{Object.values(jobs)
													.find((item) =>
														item.find((item) => item.jobId === clickedJobCardId)
													)
													?.find((item) => item.jobId === clickedJobCardId)
													?.tag.join(", ") || "No tags created"}
											</span>
										</div>
										<div style={{ display: "flex", flexDirection: "column" }}>
											<span style={{ fontSize: "25px", fontWeight: 600 }}>
												Description
											</span>
											<span>
												{Object.values(jobs)
													.find((item) =>
														item.find((item) => item.jobId === clickedJobCardId)
													)
													?.find((item) => item.jobId === clickedJobCardId)
													?.description || "Description not provided"}
											</span>
										</div>
									</div>
									<div>
										<img src={description} />
									</div>
								</div>
							) : currentKey === "Interview" ? (
								<div
									style={{
										padding: "20px",
									}}
								>
									<span style={{ fontSize: "25px", fontWeight: 600 }}>
										Interview
									</span>

									<div
										style={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											textAlign: "center",
										}}
									>
										<img src={interview} width="120px" />
										<span style={{ fontSize: "22px", fontWeight: 500 }}>
											Engineers at work!
										</span>
									</div>
								</div>
							) : currentKey === "Notes" ? (
								<div
									style={{
										padding: "20px",
									}}
								>
									<span style={{ fontSize: "25px", fontWeight: 600 }}>
										Notes
									</span>

									<div
										style={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											textAlign: "center",
										}}
									>
										<img src={notes} width="120px" />
										<span style={{ fontSize: "22px", fontWeight: 500 }}>
											No Notes Created
										</span>
									</div>
								</div>
							) : currentKey === "Company" ? (
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										justifyItems: "center",
										padding: "20px",
									}}
								>
									<span style={{ fontSize: "25px", fontWeight: 600 }}>
										Company Info
									</span>
									<div
										style={{
											display: "flex",

											alignItems: "center",
											gap: "20px",
										}}
									>
										<img src={company_placeholder_image} width={50} />
										<span style={{ fontSize: "20px", fontWeight: 500 }}>
											{
												Object.values(jobs)
													.find((item) =>
														item.find((item) => item.jobId === clickedJobCardId)
													)
													?.find((item) => item.jobId === clickedJobCardId)
													?.companyName
											}
										</span>
									</div>
								</div>
							) : currentKey === "Contacts" ? (
								<div
									style={{
										padding: "20px",
									}}
								>
									<span style={{ fontSize: "25px", fontWeight: 600 }}>
										Linked Contacts
									</span>

									<div
										style={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											textAlign: "center",
										}}
									>
										<img src={contact} width="120px" />
										<span style={{ fontSize: "22px", fontWeight: 500 }}>
											No Contacts Linked
										</span>
									</div>
								</div>
							) : currentKey === "Documents" ? (
								<div
									style={{
										padding: "20px",
									}}
								>
									<span style={{ fontSize: "25px", fontWeight: 600 }}>
										Linked Documents
									</span>

									<div
										style={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											textAlign: "center",
										}}
									>
										<img src={document} width="120px" />
										<span style={{ fontSize: "22px", fontWeight: 500 }}>
											No Documents Linked
										</span>
									</div>
								</div>
							) : (
								<div
									style={{
										padding: "20px",
									}}
								>
									<span style={{ fontSize: "25px", fontWeight: 600 }}>
										Tasks
									</span>

									<div
										style={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											textAlign: "center",
										}}
									>
										<img src={task} width="120px" />
										<span style={{ fontSize: "22px", fontWeight: 500 }}>
											No Tasks Added
										</span>
									</div>
								</div>
							)}
						</Col>
					</Row>
				</div>
			</Modal>
		</div>
	);
};

export default JobDetailsForm;
