interface Faq {
	question: string;
	answer: string;
}

const faqs: Faq[] = [
	{
		question: "When is the RSVP deadline?",
		answer: "Please RSVP by April 15th, so we can have an accurate headcount. :)"
	},
	{
		question: "Can I bring a date?",
		answer: "Please check your invite for your +1!"
	},
	{
		question: "Are kids welcome?",
		answer: "As much as we love your little ones, we will not be including them in the ceremony or reception. However, we recognize that some of you will be traveling with your kids, so please know they are welcome at the Friday cocktail reception and Sunday brunch! We will also be providing a babysitting service at the venue during the ceremony if you cannot find other accommodations for them. Please reach out if you have questions!"
	},
	{
		question: "What will the weather be like?",
		answer: "Welcome to Washington, all of you out-of-towners! The weather here can be funny. During the day, the weather in Seattle should be beautiful, averaging 75-80 degrees, but will get chilly at night. Please bring some warm layers for the evening, we don't want anyone freezing their bu...well you get the point. ;)"
	},
	{
		question: "Where should I park?",
		answer: "There is plenty of free parking near the entrance of the arboretum."
	},
	{
		question: "Are the ceremony and reception locations wheelchair accessible?",
		answer: "Yes, and we will have a golf cart available for anyone needing assistance getting around the property!"
	},
	{
		question: "What should I wear?",
		answer: "Please see our Schedule for the dress code."
	},
	{
		question: "Is the wedding indoors or outdoors?",
		answer: "Our wedding ceremony is outdoors, but our reception will be in a tent :)"
	},
	{
		question: "What kind of shoes should/shouldn't I wear?",
		answer: "Calling all ladies! Do not wear stiletto heels. I repeat, do not wear stiletto heels. There are a bunch of grassy/dirt areas that you might have to walk in so wear chunky heels or sandals. Can't have any of you ruining nice shoes or breaking any ankles."
	},
	{
		question: "Is it okay to take pictures with our phones and cameras during the wedding?",
		answer: "Yes! We would love for you to take photos and share them on our app Joy. However, please refrain from taking photos during the ceremony."
	},
	{
		question: "Whom should I call with questions?",
		answer: "Please call our lovely maid of honor Marcel with question at 555-555-5555."
	},
];

const Faq = () => {
	return (
		<section className="inline-block w-full">
			<article className="mb-16 mx-auto max-w-2xl">
				<header className="mb-6">
					<h1 className="ml-1 mr-1 break-words text-5xl leading-snug mt-4 text-center">
						Q & A
					</h1>
				</header>
				<div className="font-gotham font-light mx-auto px-10 text-center break-words max-w-lg">
					<p className="m-0">
						For all our friends and family who have lots of questions, please check out our Q & A first!
					</p>
				</div>
				<div className="m-0 mx-auto pb-16 px-8 max-w-xl">
					{faqs.map((faq, index) => (
						<div className="flex flex-col" key={index}>
							<div className="mt-16">
								<p className="font-gotham text-xl">
									{faq.question}
								</p>
								<div className="font-gotham font-light break-words mt-4">
									<p className="m-0">
										{faq.answer}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</article>
		</section>
	);
}

export default Faq;