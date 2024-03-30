import { create } from "zustand";

interface State {
	currentScrollPosition: number;
	activeComponent: string;
	fetchCurrentPosition: (position: number) => void;
	setActiveComponent: (componentName: string) => void;
	scrollToComponent: (componentName: string) => void; // New function to scroll to a component
}

export const useScrollPositionStore = create<State>((set, get) => {
	return {
		currentScrollPosition: 0,
		activeComponent: "",
		fetchCurrentPosition: (position: number) => {
			set({ currentScrollPosition: position });
		},
		setActiveComponent: (componentName: string) => {
			set({ activeComponent: componentName });
		},
		scrollToComponent: (componentName: string) => { // Implementation to scroll to a component
			const component = document.getElementById(componentName);
			if (component) {
				component.scrollIntoView({ behavior: "smooth" });
			}
		}
	};
});