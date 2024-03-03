export default {
	testEnvironment: "jsdom",
	preset: "ts-jest",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
		// process `*.tsx` files with `ts-jest`
	},
	moduleNameMapper: {
		"\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
		"\\.(css|less|sass|scss)$": "identity-obj-proxy",
	},
	resolver: undefined,

};
