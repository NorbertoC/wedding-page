import { create } from "zustand";

interface State {
	currentScrollPosition: number;
	activeComponent: string;
	fetchCurrentPosition: (position: number) => Promise<void>;
	setActiveComponent: (position: string) => Promise<void>;
}

export const useScrollPositionStore = create<State>((set, get) => {
	return {
		currentScrollPosition: 0,
		activeComponent: "",
		fetchCurrentPosition: async (position: number) => {
			set({ currentScrollPosition: position });
		},
		setActiveComponent: async (componentName: string) => {
			set({ activeComponent: componentName });
		},
	};
});