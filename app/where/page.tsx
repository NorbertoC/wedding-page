import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Where is the wedding?',
	description: 'Wedding location',
};

export default function Where() {
	return (
		<div className="w-full bg-white h-screen">
			<h1>Where is the wedding?</h1>
			<p>Wedding Location section</p>
		</div>
	);
}