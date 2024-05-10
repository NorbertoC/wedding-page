'use client'

import { useState } from "react";
import { addGuest } from "@/app/lib/data";

const Attendance = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [middleName, setMiddleName] = useState('');
	const [email, setEmail] = useState('');
	const [rsvp, setRsvp] = useState(false);
	const [weddingLocation, setWeddingLocation] = useState('Auckland');
	
	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		
		const guest = {
			first_name: firstName,
			last_name: lastName,
			middle_name: middleName,
			email,
			rsvp,
			wedding_location: weddingLocation,
		};
		
		try {
			await addGuest(guest);
			alert('Guest added successfully');
		} catch (error) {
			alert('Failed to add guest');
		}
	};
	
	return (
		<section className="inline-block w-full mt-16">
			<article className="mb-16 mx-auto max-w-2xl">
				<header className="mb-6">
					<h1 className="ml-1 mr-1 break-words text-5xl leading-snug mt-4 text-center">
						Attendance
					</h1>
				</header>
				<div className="font-gotham font-light mx-auto px-10 text-center break-words max-w-lg">
					<p className="m-0">
						Please fill the form below to RSVP.
					</p>
				</div>
				<form onSubmit={handleSubmit} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						placeholder="First Name"
						required
					/>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
						type="text"
						value={middleName}
						onChange={(e) => setMiddleName(e.target.value)}
						placeholder="Middle Name (Optional)"
					/>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						placeholder="Last Name"
						required
					/>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
						required
					/>
					<div className="inline-flex items-center mt-4">
						<span className="mr-2 block text-gray-700 text-sm font-bold">
					    RSVP
					  </span>
						<label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="rsvp">
							<input
								type="checkbox"
								className="peer relative appearance-none w-5 h-5 border rounded-md border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-gray-900 checked:border-gray-900 checked:before:bg-gray-900"
								id="rsvp"
								checked={rsvp}
								onChange={(e) => setRsvp(e.target.checked)}
							/>
							<span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
					      <svg
						      xmlns="http://www.w3.org/2000/svg"
						      className="w-3 h-3"
						      viewBox="0 0 20 20"
						      fill="currentColor"
					      >
					        <path
						        fillRule="evenodd"
						        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
						        clipRule="evenodd"
					        ></path>
					      </svg>
              </span>
						</label>
					</div>
					<div className="mt-4">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weddingLocation">
							Wedding Location
						</label>
						<select
							className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							value={weddingLocation} onChange={(e) => setWeddingLocation(e.target.value)} id="weddingLocation">
							<option value="New Zealand">New Zealand</option>
							<option value="日本">日本</option>
							<option value="Argentina">Argentina</option>
						</select>
					</div>
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
						type="submit">Add Guest
					</button>
				</form>
			</article>
		</section>
	);
}

export default Attendance;