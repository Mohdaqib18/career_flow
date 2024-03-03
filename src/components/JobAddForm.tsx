import React from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import { useJobInfoStore } from "../../store/store";

const onFinishFailed = (errorInfo: any) => {
	console.log("Failed:", errorInfo);
};

const getDate = () => {
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = currentDate.getMonth() + 1;
	const day = currentDate.getDate();

	const date = `${year}-${month}-${day}`;
	return date;
};

interface Props {}
function generateUniqueId(): string {
	const timestamp = new Date().getTime();
	const random = Math.floor(Math.random() * 10000);
	return `${timestamp}-${random}`;
}

const JobAddForm: React.FC<Props> = () => {
	const [form] = Form.useForm();
	const { Option } = Select;

	
	const isAddFormModalOpen = useJobInfoStore(
		(state) => state.isAddFormModalOpen
	);
	const handleAddFormOk = useJobInfoStore((state) => state.handleAddFormOk);
	const handleAddFormCancel = useJobInfoStore(
		(state) => state.handleAddFormCancel
	);

	const addJob = useJobInfoStore((state) => state.addJob);

	const onFinish = (values: any) => {
		console.log("Success:", values);

		addJob(
			{
				jobTitle: values.jobtitle,
				companyName: values.companyName,
				date: getDate(),
				jobId: generateUniqueId(),
				description: values.description,
				tag: values.tags,
				jobUrl: values.jobUrl,
				section: values.section,
				salary: values.salary,
				location: values.location,
			},

			values.section
		);
		handleAddFormOk();
	};

	return (
		<div>
			<Modal
				title="Add Job"
				open={isAddFormModalOpen}
				onOk={handleAddFormOk}
				width={"55%"}
				footer={""}
				onCancel={() => {
					form.resetFields();
					handleAddFormCancel();
				}}
				afterOpenChange={() => form.resetFields()}
			>
				<Form
					form={form}
					name="addJob"
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
						<Form.Item
							label="Job Title"
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							name="jobtitle"
							rules={[
								{ required: true, message: "Please input your Job Title!" },
							]}
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
						<Form.Item
							label="Company Name"
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							name="companyName"
							rules={[
								{ required: true, message: "Please input your Company Name!" },
							]}
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
						<Form.Item
							label="Job Url"
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							name="jobUrl"
							rules={[
								{ required: true, message: "Please input your Company Name!" },
							]}
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
						<Form.Item
							label="Salary"
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							name="salary"
							rules={[{ required: true, message: "Please input the salary!" }]}
						>
							<Input
								style={{
									height: "42px",
									border: "2px solid #e5ebf0",
									borderRadius: "3px",
									background: "#fbfcfc",
								}}
								placeholder="Salary"
							/>
						</Form.Item>
						<Form.Item
							label="Location"
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							name="location"
							rules={[
								{ required: true, message: "Please input the job location!" },
							]}
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

						<Form.Item
							name="section"
							label="Section"
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							rules={[
								{ required: true, message: "Please select your country!" },
							]}
							initialValue={"Applied"}
						>
							<Select
								placeholder="Please select a country"
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
						<div className="form-buttons">
							<Button
								style={{
									width: "45%",
									height: "40px",
									background: "#edf3fd",
									borderRadius: "6px",
									marginRight: "1rem",
									color: "#276cd2",
									fontSize: " 15px",
								}}
								onClick={() => {
									form.resetFields();
									handleAddFormCancel();
								}}
							>
								Cancel
							</Button>
							<Button
								type="primary"
								htmlType="submit"
								style={{
									width: "45%",
									height: "40px",
									borderRadius: "6px",
									backgroundColor: "#508de8",
									fontSize: "15px",
									marginTop: "10px",
								}}
							>
								Submit
							</Button>
						</div>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
};

export default JobAddForm;
