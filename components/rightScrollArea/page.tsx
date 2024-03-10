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
		
		const welcomePos = document.getElementById("welcome")?.offsetTop || 0;
		const storyPos = document.getElementById("story")?.offsetTop || 0;
		const tidbitsPos = document.getElementById("tidbits")?.offsetTop || 0;
		const schedulePos = document.getElementById("schedule")?.offsetTop || 0;
		const wherePos = document.getElementById("where")?.offsetTop || 0;
		const travelPos = document.getElementById("travel")?.offsetTop || 0;
		const weddingPeoplePos =
			document.getElementById("wedding-people")?.offsetTop || 0;
		const faqPos = document.getElementById("faq")?.offsetTop || 0;
		
		if (
			currentPosition >= welcomePos &&
			currentPosition < storyPos
		) {
			setActiveComponent("welcome");
		} else if (
			currentPosition >= storyPos &&
			currentPosition < tidbitsPos
		) {
			setActiveComponent("story");
		} else if (
			currentPosition >= tidbitsPos &&
			currentPosition < schedulePos
		) {
			setActiveComponent("tidBits");
		} else if (
			currentPosition >= schedulePos &&
			currentPosition < wherePos
		) {
			setActiveComponent("schedule");
		} else if (
			currentPosition >= wherePos &&
			currentPosition < travelPos
		) {
			setActiveComponent("where");
		} else if (
			currentPosition >= travelPos &&
			currentPosition < weddingPeoplePos
		) {
			setActiveComponent("travel");
		} else if (
			currentPosition >= weddingPeoplePos &&
			currentPosition < faqPos
		) {
			setActiveComponent("weddingPeople");
		} else if (currentPosition >= faqPos) {
			setActiveComponent("faq");
		}
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
	
	return (
		<div className="h-screen w-full overflow-y-auto" ref={scrollContainerRef}>
			<div className="">
				<div id="welcome">
					<Welcome />
				</div>
				<div id="story">
					<Story />
				</div>
				<div id="tidbits">
					<TidBits />
				</div>
				<div id="schedule">
					<Schedule />
				</div>
				<div id="where">
					<Where />
				</div>
				<div id="travel">
					<Travel />
				</div>
				<div id="wedding-people">
					<WeddingPeople />
				</div>
				<div id="faq">
					<Faq />
				</div>
			</div>
		</div>
	);
}