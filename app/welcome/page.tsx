'use client';

import {useScrollPositionStore} from "@/store/scrollStore";
import styles from "./welcome.module.css"
import React, { useState } from "react";
import Image from "next/image";

export default function Welcome() {
	const { setActiveComponent, scrollToComponent } = useScrollPositionStore((state) => ({
		activeComponent: state.activeComponent,
		setActiveComponent: state.setActiveComponent,
		scrollToComponent: state.scrollToComponent,
	}));
	const [isClicked, setIsClicked] = useState(false);
	
	const onButtonClick = () => {
		scrollToComponent("story");
		setActiveComponent("story");
		setIsClicked(true);
	}
	
	return (
		<div
			className="w-full bg-[#f5f4ef] h-screen flex flex-col relative justify-center items-center gap-y-12 box-border px-[14%]">
			<div className="flex flex-col text-center text-indigo-950">
				<p className="text-4xl whitespace-pre-wrap text-center leading-tight tracking-normal">Friday <br/> November 22,
					2024</p>
				<p className="text-2xl whitespace-pre-wrap mt-8 text-center">Auckland, New Zealand</p>
			</div>
			<div className={`${styles.svgFirstAppear} h-20 flex flex-col items-center cursor-pointer`}
			     onClick={onButtonClick}>
				<p className="h-9 text-center text-inherit text-xl leading-9 mb-8">View Details</p>
				<div className="h-12 relative mx-auto text-inherit text-center">
					<svg width="66" height="15" viewBox="0 0 66 15" fill="none"
					     className={`${!isClicked ? styles.svgMoving : ''}`}>
						<path opacity="0.8" fillRule="evenodd" clipRule="evenodd"
						      d="M30.294 14.1a10 10 0 005.882 0l27.905-8.586a2.5 2.5 0 00-1.47-4.779L36.176 8.87a10 10 0 01-5.882 0L3.86.735a2.5 2.5 0 00-1.47 4.78L30.293 14.1z"
						      fill="currentColor">
						</path>
					</svg>
				</div>
			</div>
			<div className={styles.topRightCornerImage}>
				<div style={{position: 'relative', width: '100%', paddingBottom: '75%'}}>
					<Image
						src="https://withjoy.dexecure.net/assets/public/styles/dev/lavender_leaves/fe8f3d2056c626e5bcf9529d69bf4b0006a7b54013df4c10863e03a8be14bf66@1x"
						alt="Top Right Corner Image"
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</div>
			<div className={styles.bottomLeftCornerImage}>
				<div style={{position: 'relative', width: '100%', paddingBottom: '75%'}}>
					<Image
						src="https://withjoy.dexecure.net/assets/public/styles/dev/lavender_leaves/84a6c69d59d9a653dccb19413601a69f5e7c05010fb2b3d1ec1277729f340822@1x"
						alt="Bottom Left Corner Image"
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</div>
		</div>
	);
}