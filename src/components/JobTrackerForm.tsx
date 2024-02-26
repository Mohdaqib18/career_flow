import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Modal, Select } from "antd";
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

interface Props {
	isModalOpen: boolean;
	handleCancel: (e: any) => void;
	handleOk: (e: any) => void;
}

const JobTrackerForm: React.FC<Props> = ({
	isModalOpen,
	handleCancel,
	handleOk,
}: Props) => {
	const [form] = Form.useForm();
	const { Option } = Select;
	const jobTitle = useJobInfoStore((state) => state.jobTitle);
	const tags = useJobInfoStore((state) => state.tags);
	const date = useJobInfoStore((state) => state.date);
	const updateJobTitle = useJobInfoStore((state) => state.updateJobTitle);
	const updateTags = useJobInfoStore((state) => state.updateTags);
	const updateDate = useJobInfoStore((state) => state.updateDate);
	const updateCompanyName = useJobInfoStore((state) => state.updateCompanyName);
	const onFinish = (values: any) => {
		console.log("Success:", values);
		updateJobTitle(values.jobtitle);
		updateTags(values.tags);
		updateCompanyName(values.companyName);
		updateDate(getDate());
	};

	console.log(jobTitle);
	console.log(tags);
	console.log(date);
	return (
		<div>
			<Modal
				title="Add Job"
				open={isModalOpen}
				onOk={handleOk}
				width={"45%"}
				footer={""}
				onCancel={(e) => {
					form.resetFields();
					handleCancel(e);
				}}
				afterOpenChange={() => form.resetFields()}
			>
				<Form
					form={form}
					name="basic"
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
							name="section"
							label="Section"
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							rules={[
								{ required: true, message: "Please select your country!" },
							]}
						>
							<Select
								placeholder="Please select a country"
								style={{
									height: "42px",
									borderRadius: "3px",
									background: "#fbfcfc",
								}}
							>
								<Option value="saved">Saved</Option>
								<Option value="applied">Applied</Option>
								<Option value="interviewing">Interviewing</Option>
								<Option value="offer">Offer</Option>
								<Option value="rejected">Rejected</Option>
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
								placeholder="Paste of Type the Job Descriotion here"
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
							onClick={(e) => {
								form.resetFields();
								handleCancel(e);
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
							onClick={handleOk}
						>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
};

export default JobTrackerForm;