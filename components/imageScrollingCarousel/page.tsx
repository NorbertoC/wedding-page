"use client"

import * as React from "react";
import { useScrollPositionStore } from "@/store/scrollStore";

export function ImageScrolling() {
	const {
		activeComponent,
	} = useScrollPositionStore((state) => ({
		activeComponent: state.activeComponent,
	}));
	
	const imageUrls = [
		{ name: "welcome", url: "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/ynRW90NbQIGaJieUzlAc_joshua-j-cotten-3dll5tFbOcM-unsplash.jpg?rendition=xlarge" },
		{ name: "story", url: "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/srAEJ3TPuw8ejjuRCJeQ_IMG_4823.jpg?rendition=xlarge" },
		{ name: "schedule", url: "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/O9FtshYmSWmrt7lSfLak_IMG_4754.jpg?rendition=xlarge" },
		{ name: "tidBits", url: "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/ynRW90NbQIGaJieUzlAc_joshua-j-cotten-3dll5tFbOcM-unsplash.jpg?rendition=xlarge" },
		{ name: "where", url: "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/O9FtshYmSWmrt7lSfLak_IMG_4754.jpg?rendition=xlarge" },
		{ name: "travel", url: "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/K9yCCSM9SuCZRG5hY1k5_IMG_5229.jpg?rendition=xlarge" },
		{ name: "weddingPeople", url: "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/O9FtshYmSWmrt7lSfLak_IMG_4754.jpg?rendition=xlarge" },
		{ name: "faq", url: "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/K9yCCSM9SuCZRG5hY1k5_IMG_5229.jpg?rendition=xlarge" }
	]
	
	const opacityStyles: { [key: string]: number } = {};
	
	imageUrls.forEach((imageObj) => {
		opacityStyles[`${imageObj.name}`] = activeComponent === `${imageObj.name}` ? 1 : 0;
	});
	
	return (
		<div className="w-full bg-red-400">
			{imageUrls.map((imageObj, index) => (
				<div
					key={index}
					className="absolute inset-0 bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: `url(${imageObj.url})`,
						opacity: opacityStyles[`${imageObj.name}`],
						transition: 'opacity 500ms cubic-bezier(0.23, 1, 0.32, 1) 0s',
					}}
				/>
			))}
		</div>
	);
}
