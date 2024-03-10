import * as React from "react"

export function ImageScrolling() {
	const backgroundImage = "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/ynRW90NbQIGaJieUzlAc_joshua-j-cotten-3dll5tFbOcM-unsplash.jpg?rendition=xlarge";
	const backgroundImage2 = "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/O9FtshYmSWmrt7lSfLak_IMG_4754.jpg?rendition=xlarge";
	const backgroundImage3 = "https://withjoy.com/media/e0da4e13fea775086e5fa3bb47c9b21ffc5a21c3fd28ae027/K9yCCSM9SuCZRG5hY1k5_IMG_5229.jpg?rendition=xlarge";
	
	
	
	return (
		<div className="w-full bg-red-400">
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${backgroundImage})`,
					transition: 'background-position 500ms cubic-bezier(0.23, 1, 0.32, 1) 0s'
				}}
			/>
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${backgroundImage2})`,
					transition: 'background-position 500ms cubic-bezier(0.23, 1, 0.32, 1) 0s'
				}}
			/>
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden"
				style={{
					backgroundImage: `url(${backgroundImage3})`,
					transition: 'background-position 500ms cubic-bezier(0.23, 1, 0.32, 1) 0s'
				}}
			/>
		</div>
	)
}

