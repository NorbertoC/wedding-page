import { create } from "zustand";

interface State {
	currentScrollPosition: number;
	fetchCurrentPosition: (limit: number) => Promise<void>
}

export const useScrollPositionStore = create<State>((set, get) => {
	return {
		currentScrollPosition: 0,
		
		fetchCurrentPosition: async (position: number) => {
			set({ currentScrollPosition: position })
			console.log('limit: ', position)
		}
	}
})