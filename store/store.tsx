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
	updateJobs: (job: any, category: any) => void;
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
	jobs: { Saved: [], Applied: [], Interviewing: [], Offer: [], Rejected: [] },
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
	updateJobs: (job, category) =>
		set((state) => ({
			...state,
			jobs: {
				...state.jobs,
				[category]: [job, ...(state.jobs[category] || [])],
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
