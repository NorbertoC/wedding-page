"use client"

import * as React from "react";
import { useScrollPositionStore } from "@/store/scrollStore";
import {useEffect, useRef, useState} from "react";
import Sidebar from "@/components/sidebar";

const ImageScrolling = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const { activeComponent, setActiveComponent, scrollToComponent } = useScrollPositionStore((state) => ({
		activeComponent: state.activeComponent,
		setActiveComponent: state.setActiveComponent,
		scrollToComponent: state.scrollToComponent,
	}));
	const sidebarRef = useRef<HTMLDivElement>(null); // Specify the type of sidebarRef
	
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
				setIsSidebarOpen(false);
			}
		}
		
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [sidebarRef]);
	
	const imageUrls = [
		{ name: "welcome", url: "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/srAEJ3TPuw8ejjuRCJeQ_IMG_4823.jpg?rendition=xlarge" },
		{ name: "story", url: "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/eytFvJZKScik5QGRwn5i_tauranga-2.jpg?rendition=xlarge" },
		{ name: "schedule", url: "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/aTI1FF1kTzeVYV6edc3P_disney-fun.jpg?rendition=xlarge" },
		{ name: "tidBits", url: "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/bFKBljVjR228t5Xfj95c_rose.jpg?rendition=xlarge" },
		{ name: "where", url: "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/O9FtshYmSWmrt7lSfLak_IMG_4754.jpg?rendition=xlarge" },
		{ name: "travel", url: "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/cHIznte6S3OnWedGcpZK_hand-ring.jpg?rendition=xlarge" },
		{ name: "weddingPeople", url: "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/MJl3uWmiQqWN6bgpq704_harry-potter.jpg?rendition=xlarge" },
		{ name: "faq", url: "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/srAEJ3TPuw8ejjuRCJeQ_IMG_4823.jpg?rendition=xlarge" },
	]
	
	const opacityStyles: { [key: string]: number } = {};
	
	imageUrls.forEach((imageObj) => {
		opacityStyles[`${imageObj.name}`] = activeComponent === `${imageObj.name}` ? 1 : 0;
	});
	
	const sidebarClick = (id: string) => {
		scrollToComponent(id);
		setActiveComponent(id);
		setIsSidebarOpen(false);
	}
	
	return (
		<div className="w-full bg-red-400">
			<button
				type="button"
				className="bg-gray-200 rounded-full inline-flex items-center justify-center h-12 min-w-12 px-6 text-gray-800 z-20 fixed top-6 left-6"
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			>
				<div className="flex items-center justify-between z-50">
					<svg width="24" height="18" fill="#333" className="mr-4">
						<rect width="24" height="2" rx="1"></rect>
						<rect y="8" width="24" height="2" rx="1"></rect>
						<rect y="16" width="24" height="2" rx="1"></rect>
					</svg>
					<p className="font-medium text-sm leading-7 tracking-widest uppercase">MENU</p>
				</div>
			</button>
			
			<div ref={sidebarRef}>
				<Sidebar isOpen={isSidebarOpen} onItemClick={sidebarClick}/>
			</div>
			
			{imageUrls.map((imageObj, index) => (
				<div
					key={index}
					className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
					style={{
						backgroundImage: `url(${imageObj.url})`,
						opacity: opacityStyles[`${imageObj.name}`],
						transition: "opacity 3000ms cubic-bezier(0.23, 1, 0.32, 1) 0s",
					}}
				/>
			))}
		</div>
	);
}

export default ImageScrolling;
