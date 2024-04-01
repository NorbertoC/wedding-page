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
			<ul>
				<li>
					<button onClick={() => handleItemClick("welcome")}>Welcome</button>
				</li>
				<li>
					<button onClick={() => handleItemClick("story")}>Story</button>
				</li>
				<li>
					<button onClick={() => handleItemClick("schedule")}>Schedule</button>
				</li>
				<li>
					<button onClick={() => handleItemClick("tidBits")}>Tidbits</button>
				</li>
				<li>
					<button onClick={() => handleItemClick("where")}>Where</button>
				</li>
				<li>
					<button onClick={() => handleItemClick("travel")}>Travel</button>
				</li>
				<li>
					<button onClick={() => handleItemClick("weddingPeople")}>Wedding People</button>
				</li>
				<li>
					<button onClick={() => handleItemClick("faq")}>FAQ</button>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;