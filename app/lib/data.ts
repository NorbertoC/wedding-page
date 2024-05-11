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