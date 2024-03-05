import React from "react";
import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import { useJobInfoStore } from "../../store/store";

const onFinishFailed = (errorInfo: any) => {
	console.log("Failed:", errorInfo);
};



interface Props {}

const JobEditForm: React.FC<Props> = () => {
	const [form] = Form.useForm();
	const { Option } = Select;

	const jobs = useJobInfoStore((state) => state.jobs);
	const clickedJobCardId = useJobInfoStore((state) => state.clickedJobCardId);
	const editJob = useJobInfoStore((state) => state.editJob);

	const isJobEditModalOpen = useJobInfoStore(
		(state) => state.isJobEditModalOpen
	);
	const handleJobEditFormOk = useJobInfoStore(
		(state) => state.handleJobEditFormOk
	);
	const handleJobEditFormCancel = useJobInfoStore(
		(state) => state.handleJobEditFormCancel
	);

	const onFinish = (values: any) => {
		console.log("Success:", values);

	const jobToUpdate = Object.entries(jobs)
		.flatMap(([category, categoryJobs]) =>
			categoryJobs.map((job) => ({ ...job, category }))
		)
		.find((job) => job.jobId === clickedJobCardId);

		const updatedJob = {
			...jobToUpdate,
			jobTitle: values.jobtitle,
			companyName: values.companyName,
			description: values.description,
			tag: values.tags,
			jobUrl: values.jobUrl,
			section: values.section,
			salary: values.salary,
			location: values.location,
		};

		editJob(jobToUpdate, updatedJob);
		handleJobEditFormOk();
	};

	return (
		<div data-testId="jobEditForm">
			<Modal
				title="Edit Job Details"
				open={isJobEditModalOpen}
				onOk={handleJobEditFormOk}
				width={"60%"}
				footer={""}
				onCancel={() => {
					form.resetFields();
					handleJobEditFormCancel();
				}}
				afterOpenChange={() => form.resetFields()}
			>
				<Form
					form={form}
					name="editDetails"
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
					<div
						style={{
							overflowY: "scroll",
							height: "450px",
						}}
						className="col"
					>
						<Row>
							<Col span={11}>
								<Form.Item
									label="Job Title"
									labelCol={{ span: 24 }}
									wrapperCol={{ span: 24 }}
									name="jobtitle"
									rules={[
										{ required: true, message: "Please input your Job Title!" },
									]}
									initialValue={
										Object.values(jobs)
											.find((item) =>
												item.find((item) => item.jobId === clickedJobCardId)
											)
											?.find((item) => item.jobId === clickedJobCardId)
											?.jobTitle
									}
								>
									<Input
										style={{
											height: "42px",
											border: "2px solid #e5ebf0",
											borderRadius: "3px",
											background: "#fbfcfc",
										}}
										placeholder="Job Title"
									/>
								</Form.Item>
							</Col>
							<Col span={11} offset={2}>
								<Form.Item
									label="Company Name"
									labelCol={{ span: 24 }}
									wrapperCol={{ span: 24 }}
									name="companyName"
									rules={[
										{
											required: true,
											message: "Please input your Company Name!",
										},
									]}
									initialValue={
										Object.values(jobs)
											.find((item) =>
												item.find((item) => item.jobId === clickedJobCardId)
											)
											?.find((item) => item.jobId === clickedJobCardId)
											?.companyName
									}
								>
									<Input
										style={{
											height: "42px",
											border: "2px solid #e5ebf0",
											borderRadius: "3px",
											background: "#fbfcfc",
										}}
										placeholder="Company Name"
									/>
								</Form.Item>
							</Col>
						</Row>
						<Form.Item
							label="Job Url"
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							name="jobUrl"
							rules={[{ message: "Please input your job url!" }]}
							initialValue={
								Object.values(jobs)
									.find((item) =>
										item.find((item) => item.jobId === clickedJobCardId)
									)
									?.find((item) => item.jobId === clickedJobCardId)?.jobUrl
							}
						>
							<Input
								style={{
									height: "42px",
									border: "2px solid #e5ebf0",
									borderRadius: "3px",
									background: "#fbfcfc",
								}}
								placeholder="Job Url"
							/>
						</Form.Item>
						<Row>
							<Col span={11}>
								<Form.Item
									label="Salary"
									labelCol={{ span: 24 }}
									wrapperCol={{ span: 24 }}
									name="salary"
									rules={[
										{ required: true, message: "Please input your salary!" },
									]}
									initialValue={
										Object.values(jobs)
											.find((item) =>
												item.find((item) => item.jobId === clickedJobCardId)
											)
											?.find((item) => item.jobId === clickedJobCardId)?.salary
									}
								>
									<Input
										style={{
											height: "42px",
											border: "2px solid #e5ebf0",
											borderRadius: "3px",
											background: "#fbfcfc",
										}}
										placeholder="Job Title"
									/>
								</Form.Item>
							</Col>
							<Col span={11} offset={2}>
								<Form.Item
									label="Location"
									labelCol={{ span: 24 }}
									wrapperCol={{ span: 24 }}
									name="location"
									rules={[
										{
											required: true,
											message: "Please input your location!",
										},
									]}
									initialValue={
										Object.values(jobs)
											.find((item) =>
												item.find((item) => item.jobId === clickedJobCardId)
											)
											?.find((item) => item.jobId === clickedJobCardId)
											?.location
									}
								>
									<Input
										style={{
											height: "42px",
											border: "2px solid #e5ebf0",
											borderRadius: "3px",
											background: "#fbfcfc",
										}}
										placeholder="Location"
									/>
								</Form.Item>
							</Col>
						</Row>
						<Form.Item
							name="section"
							label="Section"
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							rules={[
								{ required: true, message: "Please select your section" },
							]}
							initialValue={
								Object.values(jobs)
									.find((item) =>
										item.find((item) => item.jobId === clickedJobCardId)
									)
									?.find((item) => item.jobId === clickedJobCardId)?.section
							}
						>
							<Select
								placeholder="Please select a section"
								style={{
									height: "42px",
									borderRadius: "3px",
									background: "#fbfcfc",
								}}
							>
								<Option value="Saved">Saved</Option>
								<Option value="Applied">Applied</Option>
								<Option value="Interviewing">Interviewing</Option>
								<Option value="Offer">Offer</Option>
								<Option value="Rejected">Rejected</Option>
							</Select>
						</Form.Item>
						<Form.Item
							name="description"
							label="Description"
							rules={[{ message: "Please input Intro" }]}
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							initialValue={
								Object.values(jobs)
									.find((item) =>
										item.find((item) => item.jobId === clickedJobCardId)
									)
									?.find((item) => item.jobId === clickedJobCardId)?.description
							}
						>
							<Input.TextArea
								placeholder="Please type the Job Description here"
								style={{
									height: "100px",
									borderRadius: "3px",
									background: "#fbfcfc",
								}}
							/>
						</Form.Item>

						<Form.Item
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							name="tags"
							label="Tags"
							rules={[
								{
									required: true,
									message: "Please select tags related to your job",
									type: "array",
								},
							]}
							initialValue={
								Object.values(jobs)
									.find((item) =>
										item.find((item) => item.jobId === clickedJobCardId)
									)
									?.find((item) => item.jobId === clickedJobCardId)?.tag
							}
						>
							<Select
								mode="multiple"
								placeholder="Tags"
								style={{
									height: "42px",
									borderRadius: "3px",
									background: "#fbfcfc",
								}}
							>
								<Option value="frontend developer">Frontend Developer</Option>
								<Option value="backend developer">Backend Developer</Option>
								<Option value="fullstack developer">Fullstack Developer</Option>
							</Select>
						</Form.Item>
					</div>
					<Form.Item
						wrapperCol={{ offset: 6, span: 16 }}
						style={{
							padding: "1rem",
							marginBottom: "0px",
							borderTop: "1px solid var(--Gray-200, #eaecf0)",
						}}
					>
						<Button
							style={{
								width: "35%",
								height: "2.4rem",
								background: "#edf3fd",
								borderRadius: "6px",
								marginRight: "1rem",
								color: "#276cd2",
								fontSize: " 15px",
							}}
							onClick={() => {
								form.resetFields();
								handleJobEditFormCancel();
							}}
						>
							Cancel
						</Button>
						<Button
							type="primary"
							htmlType="submit"
							style={{
								width: "35%",
								height: "2.4rem",
								borderRadius: "6px",
								backgroundColor: "#508de8",
								fontSize: "15px",
							}}
						>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
};

export default JobEditForm;
