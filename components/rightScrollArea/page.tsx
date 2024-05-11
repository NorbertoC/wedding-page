"use client"

import * as React from "react";
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import Attendance from "@/app/ui/attendance";
import Faq from "@/app/ui/faq";
import Story from "@/app/ui/story";
import Welcome from "@/app/ui/welcome";
import TidBits from "@/app/ui/tidBits";
import Schedule from "@/app/ui/schedule";
import { useScrollPositionStore } from "@/store/scrollStore";
import { debounce } from "next/dist/server/utils";

const RightScrollArea = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [elementPositions, setElementPositions] = useState<number[]>([]);
	const [elementHeights, setElementHeights] = useState<number[]>([]);
	const {
		fetchCurrentPosition,
		setActiveComponent,
		activeComponent,
	} = useScrollPositionStore((state) => ({
		fetchCurrentPosition: state.fetchCurrentPosition,
		setActiveComponent: state.setActiveComponent,
		activeComponent: state.activeComponent,
	}));
	
	const components = useMemo(() => [
		{ id: "welcome", component: <Welcome /> },
		{ id: "story", component: <Story /> },
		{ id: "tidBits", component: <TidBits /> },
		{ id: "schedule", component: <Schedule /> },
		{ id: "attendance", component: <Attendance /> },
		{ id: "faq", component: <Faq /> }
	], []);
	
	useEffect(() => {
		setActiveComponent('welcome');
	}, []);
	
	const handleScroll = useCallback(() => {
		const debouncedFunc = debounce(() => {
			const currentPosition = scrollContainerRef.current?.scrollTop || 0;
			fetchCurrentPosition(currentPosition);
			
			for (let i = 0; i < components.length; i++) {
				const elementStart = elementPositions[i];
				const activationPoint = i > 0 ? elementStart - elementHeights[i - 1] * 0.5 : elementStart;
				
				if (
					currentPosition >= activationPoint &&
					currentPosition < (elementPositions[i + 1] || Infinity)
				) {
					setActiveComponent(components[i].id);
					break;
				}
			}
		}, 200);
		debouncedFunc();
	}, [fetchCurrentPosition, setActiveComponent, elementPositions, elementHeights, components]);
	
	useEffect(() => {
		const scrollContainerCurrent = scrollContainerRef.current;
		
		const handleScrollEvent = () => handleScroll();
		scrollContainerCurrent?.addEventListener('scroll', handleScrollEvent);
		
		return () => {
			scrollContainerCurrent?.removeEventListener('scroll', handleScrollEvent);
		};
	}, [handleScroll]);
	
	useEffect(() => {
		const positions = components.map(({ id }) =>
			document.getElementById(id)?.offsetTop || 0
		);
		const heights = components.map(({ id }) =>
			document.getElementById(id)?.offsetHeight || 0
		);
		setElementPositions(positions);
		setElementHeights(heights);
	}, []);
	
	return (
		<div className='h-screen w-full overflow-y-auto' ref={scrollContainerRef}>
			{components.map(({ id, component }) => (
				<div key={id} id={id}>
					{component}
				</div>
			))}
		</div>
	);
}

export default RightScrollArea;