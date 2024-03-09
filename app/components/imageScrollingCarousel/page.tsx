"use client"

import * as React from "react"
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image";


export function ImageScrollingCarousel() {
	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)
	
	useEffect(() => {
		if (!api) {
			return
		}
		
		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)
		
		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])
	
	return (
		<div>
			<Carousel setApi={setApi} className="w-full max-w-xs">
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									<Image src="/Image-1.jpeg" alt="image-1" fill />
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<div className="py-2 text-center text-sm text-muted-foreground">
				Slide {current} of {count}
			</div>
		</div>
	)
}
