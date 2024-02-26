import { create } from "zustand";

type State = {
	jobTitle: string;
	companyName: string;
	jobUrl: string;
	description: string;
	tags: Array<[]>;
    date: string
};

type Action = {
	updateJobTitle: (jobTitle: State["jobTitle"]) => void;
	updateCompanyName: (companyName: State["companyName"]) => void;
	updateJobUrl: (jobUrl: State["jobUrl"]) => void;
	updateDescription: (description: State["description"]) => void;
	updateTags: (tags: State["tags"]) => void;
	updateDate: (date: State["date"]) => void
};

// Create your store, which includes both state and (optionally) actions
export const useJobInfoStore = create<State & Action>((set) => ({
	jobTitle: "",
	companyName: "",
	jobUrl: "",
	description: "",
	tags: [],
	date: "",

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
	updateDate: (date) =>  set(() =>({date: date}) )
}));
