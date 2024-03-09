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
import { useScrollPositionStore } from "@/app/store/scrollStore";

export function RightScrollArea() {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const fetchCurrentPosition = useScrollPositionStore((state) => state.fetchCurrentPosition);
	const scrollPosition = useScrollPositionStore(state => state.currentScrollPosition);
	
	console.log("scrollPosition: ", scrollPosition);
	
	const handleScroll = () => {
		const currentPosition = scrollContainerRef.current?.scrollTop || 0;
		console.log("handleScroll currentPosition: ", currentPosition);
		fetchCurrentPosition(currentPosition);
	};
	
	useEffect(() => {
		const handleScrollEvent = () => handleScroll();
		scrollContainerRef.current?.addEventListener("scroll", handleScrollEvent);
		
		return () => {
			scrollContainerRef.current?.removeEventListener("scroll", handleScrollEvent);
		};
	}, [scrollContainerRef]);
	
	return (
		<div className="h-screen w-full overflow-y-auto" ref={scrollContainerRef}>
			<div className="">
				<Welcome />
				<Story />
				<Where />
				<Travel />
				<WeddingPeople />
				<TidBits />
				<Faq />
			</div>
		</div>
	);
}