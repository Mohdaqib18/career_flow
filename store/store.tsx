import { create } from "zustand";

type State = {
	jobTitle: string;
	companyName: string;
	jobUrl: string;
	description: string;
	date: string;
	section: string;
	jobs: {
		[category: string]: Job[];
	};
	tags: any[];
	isAddFormModalOpen: boolean;
	isJobDetailsModalOpen: boolean;
	clickedJobCardId: string;
};
type Job = {
	jobTitle: string;
	companyName: string;
	description: string;
	date: string;
	jobId: string;
};
type Action = {
	updateJobTitle: (jobTitle: State["jobTitle"]) => void;
	updateCompanyName: (companyName: State["companyName"]) => void;
	updateJobUrl: (jobUrl: State["jobUrl"]) => void;
	updateDescription: (description: State["description"]) => void;
	updateSection: (section: State["section"]) => void;
	updateTags: (tags: State["tags"]) => void;
	updateDate: (date: State["date"]) => void;
	addJob: (job: any, category: any) => void;
	deleteJob: (job:any, category:any) => void;
	handleAddFormOk: () => void;
	handleAddFormCancel: () => void;
	showAddFormModal: () => void;
	handleJobDetailsFormOk: () => void;
	handleJobDetailsCancel: () => void;
	showJobDetailsFormModal: () => void;
	updateJobCardIdClicked: (id: State["clickedJobCardId"]) => void;
};

export const useJobInfoStore = create<State & Action>((set) => ({
	jobTitle: "",
	companyName: "",
	jobUrl: "",
	description: "",
	date: "",
	section: "",
	isAddFormModalOpen: false,
	isJobDetailsModalOpen: false,
	jobs: {
		Saved: [
			{
				jobTitle: "Software Engineer",
				companyName: "Meta",
				description: "Frontend development team",
				date: "28-02-2024",
				jobId: "184",
			},
		],
		Applied: [
			{
				jobTitle: "Software Engineer",
				companyName: "Google",
				description: "Backend development team",
				date: "28-02-2024",
				jobId: "124",
			},
			{
				jobTitle: "Product Manager",
				companyName: "Apple",
				description: "Fullstack development team",
				date: "28-02-2024",
				jobId: "122",
			},
		],
		Interviewing: [],
		Offer: [],
		Rejected: [],
	},
	tags: [],
	clickedJobCardId: "",

	updateJobTitle: (jobTitle) => set(() => ({ jobTitle: jobTitle })),
	updateCompanyName: (companyName) =>
		set(() => ({
			companyName: companyName,
		})),
	updateJobUrl: (jobUrl) =>
		set(() => ({
			jobUrl: jobUrl,
		})),
	updateDescription: (description) =>
		set(() => ({
			description: description,
		})),
	updateTags: (tags) => set(() => ({ tags: [...tags] })),
	updateDate: (date) => set(() => ({ date: date })),
	updateSection: (section) => set(() => ({ section: section })),
	addJob: (job, category) =>
		set((state) => ({
			...state,
			jobs: {
				...state.jobs,
				[category]: [job, ...(state.jobs[category] || [])],
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
}));
