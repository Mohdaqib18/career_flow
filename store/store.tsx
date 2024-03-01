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
	editJob: (jobToUdpate: any, updatedJob: any) => void;
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
	updateJobSectionOrder: (job: any, category: any) => void;
	updateCardsBetweenSection: (
		startSectionName: any,
		startSectionArray: any,
		finishSectionName: any,
		finishSectionArray: any
	) => void;
};

export const useJobInfoStore = create<State & Action>((set) => ({
	isAddFormModalOpen: false,
	isJobDetailsModalOpen: false,
	isJobEditModalOpen: false,

	jobs: {
		Saved: [
			// {
			// 	jobTitle: "Software Engineer",
			// 	companyName: "Meta",
			// 	description: "Frontend development team",
			// 	date: "28-02-2024",
			// 	jobId: "184",
			// 	section: "Saved",
			// 	tag: [],
			// 	location: "Mumbai",
			// 	salary: "90000",
			// 	jobUrl: "www.meta.com",
			// },
		],
		Applied: [
			// {
			// 	jobTitle: "Software Engineer",
			// 	companyName: "Google",
			// 	description: "Backend development team",
			// 	date: "28-02-2024",
			// 	jobId: "124",
			// 	section: "Applied",
			// 	tag: [],
			// 	location: "Bangalore",
			// 	salary: "85000",
			// 	jobUrl: "www.google.com",
			// },
			// {
			// 	jobTitle: "Product Manager",
			// 	companyName: "Apple",
			// 	description: "Fullstack development team",
			// 	date: "28-02-2024",
			// 	jobId: "122",
			// 	section: "Applied",
			// 	tag: [],
			// 	location: "Delhi",
			// 	salary: "105000",
			// 	jobUrl: "www.apple.com",
			// },
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
	updateJobSectionOrder: (job, category) =>
		set((state) => ({
			...state,
			jobs: {
				...state.jobs,
				[category]: [...job],
			},
		})),

	updateCardsBetweenSection: (
		startSectionName,
		startSectionArray,
		finishSectionName,
		finishSectionArray
	) =>
		set((state) => ({
		
			jobs: {
				...state.jobs,
				[startSectionName]: [
				
					...startSectionArray,
				],
				[finishSectionName]: [
				
					...finishSectionArray,
				],
			},
		})),

	editJob: (jobToUpdate, updatedJob) => {
		if (jobToUpdate.section === updatedJob.section) {
			set((state) => ({
				jobs: {
					...state.jobs,
					[jobToUpdate.section]: state.jobs[jobToUpdate.section].map((job) =>
						job.jobId === state.clickedJobCardId ? updatedJob : job
					),
				},
			}));
		} else {
			set((state) => {
				//remove the jobToUpdated from previous section
				const updatedPrevSectionJobs = state.jobs[jobToUpdate.section].filter(
					(job) => job.jobId !== state.clickedJobCardId
				);

				// add updatedJob to the new section
				const updatedNewSectionJobs = [
					...(state.jobs[updatedJob.section] || []),
					updatedJob,
				];
				return {
					jobs: {
						...state.jobs,
						[jobToUpdate.section]: updatedPrevSectionJobs,
						[updatedJob.section]: updatedNewSectionJobs,
					},
				};
			});
		}
	},
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
