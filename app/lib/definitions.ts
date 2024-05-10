export type GuestGroup = {
	id: number;
	name: string;
	description: string | null;
};

export type Guest = {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	phone_number: string | null;
	rsvp: boolean;
	wedding_location: 'Auckland' | 'Japan' | 'Argentina';
	guest_group_id: number;
};