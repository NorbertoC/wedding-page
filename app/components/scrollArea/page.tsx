import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import Where from "@/app/where/page";
import Faq from "@/app/faq/page";
import Story from "@/app/story/page";
import Welcome from "@/app/welcome/page";
import Travel from "@/app/travel/page";
import WeddingPeople from "@/app/wedding-people/page";
import TidBits from "@/app/tidbits/page";

export function RightScrollArea() {
	return (
		<ScrollArea className="h-screen w-full">
			<div className="">
				<Welcome />
				<Story />
				<Where />
				<Travel />
				<WeddingPeople />
				<TidBits />
				<Faq />
			</div>
		</ScrollArea>
	)
}
