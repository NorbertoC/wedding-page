"use client"

import * as React from "react";
import { useRef, useEffect } from "react";

import Where from "@/app/where/page";
import Faq from "@/app/faq/page";
import Story from "@/app/story/page";
import Welcome from "@/app/welcome/page";
import Travel from "@/app/travel/page";
import WeddingPeople from "@/app/wedding-people/page";
import TidBits from "@/app/tidbits/page";
import Schedule from "@/app/schedule/page";
import { useScrollPositionStore } from "@/store/scrollStore";

const components = [
	{ id: "welcome", component: <Welcome /> },
	{ id: "story", component: <Story /> },
	{ id: "tidBits", component: <TidBits /> },
	{ id: "schedule", component: <Schedule /> },
	{ id: "where", component: <Where /> },
	{ id: "travel", component: <Travel /> },
	{ id: "weddingPeople", component: <WeddingPeople /> },
	{ id: "faq", component: <Faq /> }
];

export function RightScrollArea() {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const {
		currentScrollPosition,
		fetchCurrentPosition,
		setActiveComponent,
		activeComponent,
	} = useScrollPositionStore((state) => ({
		currentScrollPosition: state.currentScrollPosition,
		fetchCurrentPosition: state.fetchCurrentPosition,
		setActiveComponent: state.setActiveComponent,
		activeComponent: state.activeComponent,
	}));
	
	useEffect(() => {
		setActiveComponent("welcome");
	}, []);
	
	const handleScroll = () => {
		const currentPosition = scrollContainerRef.current?.scrollTop || 0;
		fetchCurrentPosition(currentPosition);
		
		components.forEach(({ id }) => {
			const elementPos = document.getElementById(id)?.offsetTop || 0;
			const nextElementPos =
				document.getElementById(components[components.length - 1].id)
					?.offsetTop || 0;
			
			if (
				currentPosition >= elementPos &&
				currentPosition < nextElementPos
			) {
				setActiveComponent(id);
			}
		});
	};
	
	useEffect(() => {
		const handleScrollEvent = () => handleScroll();
		scrollContainerRef.current?.addEventListener("scroll", handleScrollEvent);
		
		return () => {
			scrollContainerRef.current?.removeEventListener(
				"scroll",
				handleScrollEvent
			);
		};
	}, [scrollContainerRef]);
	
	const scrollToComponent = (id: string) => {
		const component = document.getElementById(id);
		if (component) {
			component.scrollIntoView({ behavior: "smooth" });
		}
	};
	
	return (
		<div className="h-screen w-full overflow-y-auto" ref={scrollContainerRef}>
			{components.map(({ id, component }) => (
				<div key={id} id={id}>
					{component}
				</div>
			))}
		</div>
	);
}