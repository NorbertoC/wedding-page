import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Where is the wedding?',
	description: 'Wedding location',
};

export default function Blog() {
	return (
		<div>
			<h1>Where is the wedding?</h1>
			<p>Wedding Location section</p>
		</div>
	);
}