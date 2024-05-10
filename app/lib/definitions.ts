export type Guest = {
	id: number;
	first_name: string;
	middle_name: string;
	last_name: string;
	email: string;
	rsvp: boolean;
	wedding_location: 'New Zealand' | '日本' | 'Argentina';
};