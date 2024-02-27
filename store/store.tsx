import { create } from "zustand";

type State = {
	jobTitle: string;
	companyName: string;
	jobUrl: string;
	description: string;
	date: string;
	section: string;
	jobs: any;
	tags: any[];
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
};

// Create your store, which includes both state and (optionally) actions
export const useJobInfoStore = create<State & Action>((set) => ({
	jobTitle: "",
	companyName: "",
	jobUrl: "",
	description: "",
	date: "",
	section: "",
	jobs: { Saved: [], Applied: [], Interviewing: [], Offer: [], Rejected: [] },
	tags: [],

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
}));
