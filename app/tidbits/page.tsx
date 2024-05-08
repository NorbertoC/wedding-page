const TidBits = () => {
	
	const qaArray = [
		{
			question: "How did you first meet?",
			answer: "See Our Story!"
		},
		{
			question: "Who made the first move? How?",
			answer: "He made the first move when he texted me on New Years day. A few hours later we had plans for dinner that week."
		},
		{
			question: "Who's going to take out the trash?",
			answer: "Whoever happens to be closer to the trash :)"
		},
		{
			question: "What was your most memorable date?",
			answer: "We spent one of our first dates biking and then kayaking through the sea caves in San Diego. Our guide joked that a few hours in a shared kayak is enough to test any relationship—he was right! But we survived and that adventure remains one of our favorite memories."
		},
		{
			question: "What's your favorite activity together?",
			answer: "We love to paddleboard and bike in the park!"
		},
		{
			question: "Where are you going for your honeymoon?",
			answer: "Anywhere with beautiful beaches!"
		},
		{
			question: "What's the best meal you have eaten together?",
			answer: "We treated ourselves to a five-course meal in Paris. It was magical."
		},
		{
			question: "What's the most memorable trip you have taken together?",
			answer: "Last April we were able to see the Northern Lights in Norway. It was incredible!"
		},
		{
			question: "We’re on the same page about",
			answer: "What's important to us. And that's spending time with the people we love most. (You all!)"
		},
	];
	
	return (
		<section className="inline-block w-full">
			<article className="mb-16 mx-auto max-w-lg">
				<header className="mb-16">
					<h1 className="ml-1 mr-1 break-words text-5xl leading-snug mt-4 text-center">
						Tidbits
					</h1>
					<div className="max-w-xl mx-auto p-16 px-8">
						<div className="max-w-5xl">
							{qaArray.map((item, index) => (
								<section key={index} className="mb-16">
									<h2 className="font-medium text-xl font-gotham leading-7 tracking-tight break-words">
										{item.question}
									</h2>
									<p className="font-gotham font-light leading-7 text-base break-words block my-4 mx-0 tracking-tight mt-4">
										{item.answer}
									</p>
								</section>
							))}
						</div>
					</div>
				</header>
			</article>
		</section>
	);
}

export default TidBits;