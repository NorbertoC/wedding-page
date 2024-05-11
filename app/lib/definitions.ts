export type WeddingLocation = "New Zealand" | "日本" | "Argentina";

export type Guest = {
	first_name: string;
	middle_name: string;
	last_name: string;
	email: string;
	rsvp: boolean;
	wedding_location: WeddingLocation;
};