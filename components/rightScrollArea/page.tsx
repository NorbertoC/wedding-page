"use client"

import * as React from "react";
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import Where from "@/app/where/page";
import Faq from "@/app/faq/page";
import Story from "@/app/story/page";
import Welcome from "@/app/welcome/page";
import Travel from "@/app/travel/page";
import WeddingPeople from "@/app/wedding-people/page";
import TidBits from "@/app/tidbits/page";
import Schedule from "@/app/schedule/page";
import { useScrollPositionStore } from "@/store/scrollStore";
import {debounce} from "next/dist/server/utils";

const RightScrollArea = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [elementPositions, setElementPositions] = useState<number[]>([]);
	const [elementHeights, setElementHeights] = useState<number[]>([]);
  const {
    fetchCurrentPosition,
    setActiveComponent,
  } = useScrollPositionStore((state) => ({
    fetchCurrentPosition: state.fetchCurrentPosition,
    setActiveComponent: state.setActiveComponent,
  }));
	
	const components = useMemo(() => [
		{ id: "welcome", component: <Welcome /> },
		{ id: "story", component: <Story /> },
		{ id: "tidBits", component: <TidBits /> },
		{ id: "schedule", component: <Schedule /> },
		{ id: "where", component: <Where /> },
		{ id: "travel", component: <Travel /> },
		{ id: "weddingPeople", component: <WeddingPeople /> },
		{ id: "faq", component: <Faq /> }
	], []);

  useEffect(() => {
    setActiveComponent('welcome');
  }, []);
	
	const handleScroll = useCallback(debounce(() => {
		const currentPosition = scrollContainerRef.current?.scrollTop || 0;
		fetchCurrentPosition(currentPosition);
		
		for (let i = 0; i < components.length; i++) {
			const elementStart = elementPositions[i];
			const elementEnd = elementStart + elementHeights[i];
			const activationPoint = elementStart + elementHeights[i] * 0.7;
			
			if (
				currentPosition >= activationPoint &&
				currentPosition < (elementPositions[i + 1])
			) {
				setActiveComponent(components[i].id);
				break;
			}
		}
	}, 200), [fetchCurrentPosition, setActiveComponent, elementPositions, elementHeights]);

  useEffect(() => {
    const handleScrollEvent = () => handleScroll();
    scrollContainerRef.current?.addEventListener('scroll', handleScrollEvent);

    return () => {
      scrollContainerRef.current?.removeEventListener('scroll', handleScrollEvent);
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