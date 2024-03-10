"use client"

import * as React from "react";
import { useScrollPositionStore } from "@/store/scrollStore";

export function ImageScrolling() {
	const {
		currentScrollPosition,
		activeComponent,
	} = useScrollPositionStore((state) => ({
		currentScrollPosition: state.currentScrollPosition,
		activeComponent: state.activeComponent,
	}));
	
	type OpacityStyles = {
		[key: string]: number;
		Welcome: number;
		Story: number;
		TidBits: number;
		Schedule: number;
		Where: number;
		Travel: number;
		WeddingPeople: number;
		Faq: number;
	};
	
	// Definir los estilos de opacidad para cada imagen basado en el componente activo
	const opacityStyles: OpacityStyles = {
		Welcome: 1,
		Story: 0,
		Schedule: 0,
		TidBits: 0,
		Where: 0,
		Travel: 0,
		WeddingPeople: 0,
		Faq: 0,
	};
	
	opacityStyles[activeComponent] = 1;
	
	const welcomeImage = "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/ynRW90NbQIGaJieUzlAc_joshua-j-cotten-3dll5tFbOcM-unsplash.jpg?rendition=xlarge";
	const storyImage = "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/O9FtshYmSWmrt7lSfLak_IMG_4754.jpg?rendition=xlarge";
	const scheduleImage = "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/K9yCCSM9SuCZRG5hY1k5_IMG_5229.jpg?rendition=xlarge";
	const tidBitsBackgroundImage = "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/ynRW90NbQIGaJieUzlAc_joshua-j-cotten-3dll5tFbOcM-unsplash.jpg?rendition=xlarge";
	const whereBackgroundImage = "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/O9FtshYmSWmrt7lSfLak_IMG_4754.jpg?rendition=xlarge";
	const travelBackgroundImage = "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/K9yCCSM9SuCZRG5hY1k5_IMG_5229.jpg?rendition=xlarge";
	const weddingPeopleBackgroundImage = "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/O9FtshYmSWmrt7lSfLak_IMG_4754.jpg?rendition=xlarge";
	const faqBackgroundImage = "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/K9yCCSM9SuCZRG5hY1k5_IMG_5229.jpg?rendition=xlarge";
	
	return (
		<div className="w-full bg-red-400">
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${welcomeImage})`,
					opacity: opacityStyles.Welcome,
					transition: 'opacity 500ms cubic-bezier(0.23, 1, 0.32, 1) 0s',
				}}
			/>
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${storyImage})`,
					opacity: opacityStyles.Story,
					transition: 'opacity 500ms cubic-bezier(0.23, 1, 0.32, 1) 0s',
				}}
			/>
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${scheduleImage})`,
					opacity: opacityStyles.Schedule,
					transition: 'opacity 500ms cubic-bezier(0.23, 1, 0.32, 1) 0s',
				}}
			/>
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${tidBitsBackgroundImage})`,
					opacity: opacityStyles.TidBits,
					transition: 'opacity 500ms cubic-bezier(0.23, 1, 0.32, 1) 0s',
				}}
			/>
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${whereBackgroundImage})`,
					opacity: opacityStyles.Where,
					transition: 'opacity 500ms cubic-bezier(0.23, 1, 0.32, 1) 0s',
				}}
			/>
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${travelBackgroundImage})`,
					opacity: opacityStyles.Travel,
					transition: 'opacity 500ms cubic-bezier(0.23, 1, 0.32, 1) 0s',
				}}
			/>
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${weddingPeopleBackgroundImage})`,
					opacity: opacityStyles.WeddingPeople,
					transition: 'opacity 500ms cubic-bezier(0.23, 1, 0.32, 1) 0s',
				}}
			/>
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${faqBackgroundImage})`,
					opacity: opacityStyles.Faq,
					transition: 'opacity 500ms cubic-bezier(0.23, 1, 0.32, 1) 0s',
				}}
			/>
		</div>
	);
}
