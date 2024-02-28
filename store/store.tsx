import { create } from "zustand";

type State = {
	jobs: {
		[category: string]: Job[];
	};

	isAddFormModalOpen: boolean;
	isJobDetailsModalOpen: boolean;
	isJobEditModalOpen: boolean;
	clickedJobCardId: string;
};
type Job = {
	jobTitle: string;
	companyName: string;
	description: string;
	date: string;
	jobId: string;
	section: string;
	tag: any[];
	location: string;
	salary: string;
	jobUrl: string;
};
type Action = {
	addJob: (job: any, category: any) => void;
	deleteJob: (job: any, category: any) => void;
	editJob: (job: any, category: any) => void;
	handleAddFormOk: () => void;
	handleAddFormCancel: () => void;
	showAddFormModal: () => void;
	handleJobDetailsFormOk: () => void;
	handleJobDetailsCancel: () => void;
	showJobDetailsFormModal: () => void;
	handleJobEditFormOk: () => void;
	handleJobEditFormCancel: () => void;
	showJobEditFormModal: () => void;
	updateJobCardIdClicked: (id: State["clickedJobCardId"]) => void;
};

export const useJobInfoStore = create<State & Action>((set) => ({
	isAddFormModalOpen: false,
	isJobDetailsModalOpen: false,
	isJobEditModalOpen: false,

	jobs: {
		Saved: [
			{
				jobTitle: "Software Engineer",
				companyName: "Meta",
				description: "Frontend development team",
				date: "28-02-2024",
				jobId: "184",
				section: "Saved",
				tag: [],
				location: "Mumbai",
				salary: "90000",
				jobUrl: "www.meta.com",
			},
		],
		Applied: [
			{
				jobTitle: "Software Engineer",
				companyName: "Google",
				description: "Backend development team",
				date: "28-02-2024",
				jobId: "124",
				section: "Applied",
				tag: [],
				location: "Bangalore",
				salary: "85000",
				jobUrl: "www.google.com",
			},
			{
				jobTitle: "Product Manager",
				companyName: "Apple",
				description: "Fullstack development team",
				date: "28-02-2024",
				jobId: "122",
				section: "Applied",
				tag: [],
				location: "Delhi",
				salary: "105000",
				jobUrl: "www.apple.com",
			},
		],
		Interviewing: [],
		Offer: [],
		Rejected: [],
	},
	tags: [],
	clickedJobCardId: "",

	addJob: (job, category) =>
		set((state) => ({
			...state,
			jobs: {
				...state.jobs,
				[category]: [job, ...(state.jobs[category] || [])],
			},
		})),
	editJob: (job, category) =>
		set((state) => ({
			...state,
			jobs: {
				...state.jobs,
				[category]: [...(state.jobs[category] || []), ...job],
			},
		})),
	deleteJob: (job, category) =>
		set((state) => ({
			...state,
			jobs: {
				...state.jobs,
				[category]: [...job],
			},
		})),
	updateJobCardIdClicked: (id) => set(() => ({ clickedJobCardId: id })),
	handleAddFormOk: () => set(() => ({ isAddFormModalOpen: false })),
	handleAddFormCancel: () => set(() => ({ isAddFormModalOpen: false })),
	showAddFormModal: () => set(() => ({ isAddFormModalOpen: true })),
	handleJobDetailsFormOk: () => set(() => ({ isJobDetailsModalOpen: false })),
	handleJobDetailsCancel: () => set(() => ({ isJobDetailsModalOpen: false })),
	showJobDetailsFormModal: () => set(() => ({ isJobDetailsModalOpen: true })),
	handleJobEditFormOk: () => set(() => ({ isJobEditModalOpen: false })),
	handleJobEditFormCancel: () => set(() => ({ isJobEditModalOpen: false })),
	showJobEditFormModal: () => set(() => ({ isJobEditModalOpen: true })),
}));
