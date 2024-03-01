import { Col, Row } from "antd";
import JobCard from "./JobCard";
import { useJobInfoStore } from "../../store/store";

import type { SearchProps } from "antd/es/input/Search";
import { PlusSquareOutlined } from "@ant-design/icons";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { Button, Input, DatePicker } from "antd";
const { Search } = Input;
const { RangePicker } = DatePicker;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
	console.log(info?.source, value);

const style: React.CSSProperties = {
	borderRadius: "10px",
	padding: "8px 0",
	height: "100%",
	display: "flex",
	background: "#e1edff",
	flexDirection: "column",
};

interface Props {
	// showAddFormModal: () => void;
	// showEditFormModal: () => void;
}

const sections = ["Saved", "Applied", "Interviewing", "Offer"];
const JobDashboard: React.FC<Props> = () => {
	const jobs = useJobInfoStore((state) => state.jobs);
	const updatejobSectionOrder = useJobInfoStore(
		(state) => state.updateJobSectionOrder
	);
	const updateCardsBetweenSection = useJobInfoStore(
		(state) => state.updateCardsBetweenSection
	);
	const showAddFormModal = useJobInfoStore((state) => state.showAddFormModal);

	const onDragEnd = (result: any) => {
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		// if (
		// 	destination.droppableId === source.droppableId &&
		// 	destination.index === source.index
		// ) {
		// 	return;
		// }

		const startSectionName = source.droppableId.split("_")[0];

		const finishSectionName = destination.droppableId.split("_")[0];

		if (startSectionName === finishSectionName) {
			const sectionNewJobsArray = Array.from(jobs[startSectionName]);

			const draggableItem = jobs[startSectionName].filter(
				(item) => item.jobId === draggableId
			);

			sectionNewJobsArray.splice(source.index, 1);
			sectionNewJobsArray.splice(destination.index, 0, ...draggableItem);

			updatejobSectionOrder(sectionNewJobsArray, startSectionName);

			return;
		}
		// Moving from one section to another

		const startSectionArray = Array.from(jobs[startSectionName]);

		const draggableItem = jobs[startSectionName].filter(
			(item) => item.jobId === draggableId
		);

		//change the section of the draggable item to finish section

		draggableItem[0].section = finishSectionName;

		// Remove dragged job  from this array
		startSectionArray.splice(source.index, 1);

		//Add the dragged job to finish array;

		const finishSectionArray = Array.from(jobs[finishSectionName]);

		finishSectionArray.splice(destination.index, 0, ...draggableItem);
		console.log(startSectionArray);
		console.log(finishSectionArray);

		updateCardsBetweenSection(
			startSectionName,
			startSectionArray,
			finishSectionName,
			finishSectionArray
		);
	};

	const generateUniqueId = () => {
		return "_" + Math.random().toString(36).substr(2, 9);
	};

	return (
		<>
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

						<Button type="primary" onClick={showAddFormModal}>
							<span>Add Job</span>
							<PlusSquareOutlined />
						</Button>
					</div>
				</div>
			</div>
			<DragDropContext onDragEnd={onDragEnd}>
				<div style={{ overflowX: "scroll", flex: 1 }}>
					<Row
						gutter={{ xs: 4, sm: 8, md: 12, lg: 16 }}
						wrap={false}
						style={{ height: "100%" }}
					>
						{Object.entries(jobs).map(([category, jobsArray], index) => {
							return (
								<Col className="gutter-row" span={6} key={index}>
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
													{jobsArray.length}
												</span>
											</div>
										</div>

										<Droppable droppableId={category + generateUniqueId()}>
											{(provided) => (
												<div
													style={{
														flex: 1,
														background: "radial-gradient(#d6e4f8 20%,#0000 0)",
														backgroundPosition: "0 0 50px 50px",
														backgroundSize: "20px 20px",
														overflowY: "auto",
													}}
													className="col"
													{...provided.droppableProps}
													ref={provided.innerRef}
												>
													{jobsArray.map((item, itemIndex) => {
														if (item.section === category) {
															return (
																<Draggable
																	key={item.jobId}
																	draggableId={item.jobId}
																	index={itemIndex}
																>
																	{(provided) => (
																		<div
																			ref={provided.innerRef}
																			{...provided.draggableProps}
																			{...provided.dragHandleProps}
																		>
																			<JobCard
																				jobTitle={item.jobTitle}
																				companyName={item.companyName}
																				date={item.date}
																				id={item.jobId}
																			/>
																		</div>
																	)}
																</Draggable>
															);
														}
													})}
													{provided.placeholder}
												</div>
											)}
										</Droppable>
									</div>
								</Col>
							);
						})}
					</Row>
				</div>
			</DragDropContext>
		</>
	);
};

export default JobDashboard;
