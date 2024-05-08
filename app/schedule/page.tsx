interface Event {
	eventName: string;
	description: string;
	dressCode: string;
	location: string;
}

const events: Event[] = [
	{
		eventName: "Post-Wedding Brunch 🥐🥓🥂",
		description: "For all those of you who are staying a day longer, we are going to setup a breakfast, stay tuned.",
		dressCode: "Cocktail Attire",
		location: "Seattle Japanese Garden, Lake Washington Boulevard East, Seattle, WA, USA"
	},
	{
		eventName: "Wedding Party Photoshoot 📷",
		description: "We'll take photos ahead of the ceremony beginning at 2:30 pm sharp. Please be at the venue and photo-ready by this time!",
		dressCode: "Cocktail Attire",
		location: "Seattle Japanese Garden, Lake Washington Boulevard East, Seattle, WA, USA"
	},
	{
		eventName: "Rehearsal Dinner",
		description: "Then let's kick off the wedding celebrations with some of our favorite foods for the rehearsal dinner.",
		dressCode: "Cocktail Attire",
		location: "Seattle Japanese Garden, Lake Washington Boulevard East, Seattle, WA, USA"
	},
	{
		eventName: "Rehearsal",
		description: "Please be present for our rehearsal, so that you know what to do and where to stand on our big day!",
		dressCode: "Cocktail Attire",
		location: "Seattle Japanese Garden, Lake Washington Boulevard East, Seattle, WA, USA"
	},
	{
		eventName: "Shuttle Bus 🚌",
		description: "Shuttle buses leave from The Edgewater Hotel and go straight to the wedding. Don't be late!",
		dressCode: "",
		location: "Seattle Japanese Garden, Lake Washington Boulevard East, Seattle, WA, USA"
	},
	{
		eventName: "Ceremony and Reception",
		description: "We're getting married! We'd like to share a few words with everyone. Dinner, drinks, and dancing to follow! We will be live streaming our ceremony as well for our loved ones who aren't able to join in person. See link below to join!",
		dressCode: "Cocktail Attire",
		location: "Seattle Japanese Garden, Lake Washington Boulevard East, Seattle, WA, USA"
	},
];

const Schedule = () => {
	return (
		<section className="inline-block w-full">
			<article className="mb-16 mx-auto max-w-2xl">
				<header className="">
					<h1 className="ml-1 mr-1 break-words text-5xl leading-snug mt-4 text-center">
						Schedule
					</h1>
					<div className="px-16 mt-0 my-auto">
						<header className="max-w-xl mx-auto pt-10 pb-2 px-8 border-b-2 mb-10">
							<p className="max-w-5xl font-gotham text-center font-light text-2xl">
								To be Announced
							</p>
						</header>
						<ul role="list" className="flex flex-col">
							{events.map((event, index) => (
								<li role="listitem" className="max-w-5xl" key={index}>
									<article className="flex flex-wrap justify-center">
										<section className="flex-grow-0 basis-full">
											<div className="mt-0 mb-10">
												<div className="flex flex-col">
													<h2 className="font-gotham text-xl">
														{event.eventName}
													</h2>
													<div className="mt-6">
														<div className="flex flex-row">
															<p className="font-gotham font-light overflow-hidden">
                                <span className="font-gotham font-light">
                                  {event.description}
                                </span>
															</p>
														</div>
													</div>
												</div>
											</div>
										</section>
									</article>
								</li>
							))}
						</ul>
						<iframe
							title="Map for Seattle Japanese Garden, Lake Washington Boulevard East, Seattle, WA, USA"
							width="100%" height="320px"
							src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB9ePoqHL2N2xqOhy2H_7vjDokVDIq8-fE&amp;zoom=10&amp;q=place_id%3AChIJQ3K1QtIUkFQRNM3jmnMDMVk"
							className="Linkifystyles__StyledLinkifyWrapper-sc-za1d5g-0 eUydfu">
						</iframe>
					</div>
				</header>
			</article>
		</section>
	);
}

export default Schedule;


