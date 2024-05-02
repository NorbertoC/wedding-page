import React from "react";

interface SidebarProps {
	isOpen: boolean;
	onItemClick: (id: string) => void; // Define a function to handle item clicks
}

function Sidebar({ isOpen, onItemClick }: SidebarProps) {
	const handleItemClick = (id: string) => {
		onItemClick(id);
	};
	
	return (
		<div className={`absolute top-0 left-0 bg-white w-64 h-full shadow-lg transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-20`}>
			<div
				className={`relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-20`}>
				<div className="mb-2 p-4">
					<h5
						className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
						Mana and Norberto
					</h5>
				</div>
				<nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
					{['welcome', 'story', 'schedule', 'tidBits', 'where', 'travel', 'weddingPeople', 'faq'].map((id) => (
						<div key={id} role="button" tabIndex={0}
						     className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
						     onClick={() => handleItemClick(id)}>
							{id.charAt(0).toUpperCase() + id.slice(1)}
						</div>
					))}
				</nav>
			</div>
		</div>
	);
}

export default Sidebar;