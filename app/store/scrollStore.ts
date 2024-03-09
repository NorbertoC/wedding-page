import { create } from "zustand";

interface State {
	currentScrollPosition: number;
	fetchCurrentPosition: (position: number) => Promise<void>
}

export const useScrollPositionStore = create<State>((set, get) => {
	return {
		currentScrollPosition: 0,
		
		fetchCurrentPosition: async (position: number) => {
			set({ currentScrollPosition: position })
		}
	}
})