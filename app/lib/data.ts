import { sql } from '@vercel/postgres';
import { Guest } from './definitions';

export async function fetchGuests() {
	try {
		const data = await sql<Guest>`SELECT * FROM guests`;
		
		return data.rows;
	} catch (error) {
		throw new Error('Failed to fetch guests.');
	}
}

export async function addGuest(guest: {
	first_name: string;
	middle_name: string;
	last_name: string;
	email: string;
	rsvp: boolean
	wedding_location: string;
}) {
	try {
		await sql`
      INSERT INTO guests (first_name, last_name, email, rsvp, wedding_location)
      VALUES (${guest.first_name}, ${guest.middle_name}, ${guest.last_name}, ${guest.email}, ${guest.rsvp}, ${guest.wedding_location})
      ON CONFLICT (email) DO UPDATE SET email = guests.email || '_duplicate' || CURRENT_TIMESTAMP
    `;
	} catch (error) {
		if (error instanceof Error) {
			if (error.message.includes('duplicate key value')) {
				throw new Error('Failed to add guest data. Email already exists.');
			} else {
				throw new Error('An unexpected error occurred: ' + error.message);
			}
		} else {
			throw new Error('An unexpected error occurred.');
		}
	}
}