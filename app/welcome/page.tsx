import {useScrollPositionStore} from "@/store/scrollStore";

export default function Welcome() {
	const { activeComponent, setActiveComponent, scrollToComponent } = useScrollPositionStore((state) => ({
		activeComponent: state.activeComponent,
		setActiveComponent: state.setActiveComponent,
		scrollToComponent: state.scrollToComponent,
	}));
	
	const onButtonClick = () => {
		scrollToComponent("story");
		setActiveComponent("story");
	}
	
	return (
		<div className="w-full bg-[#f5f4ef] h-screen flex flex-col relative justify-center items-center gap-y-12 box-border px-[14%]">
			<div  className="flex flex-col text-center text-indigo-950">
				<p className="text-4xl font-normal whitespace-pre-wrap font-serif text-center">Friday <br/> November 22, 2024</p>
				<p className="text-2xl font-normal whitespace-pre-wrap font-serif mt-8 text-center">Auckland, New Zealand</p>
			</div>
			<div className="h-20 flex flex-col items-center" onClick={onButtonClick}>
				<div>View Details</div>
				<div className="h-14">
					<svg width="66" height="15" viewBox="0 0 66 15" fill="none"
					     className="">
						<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd"
						      d="M30.294 14.1a10 10 0 005.882 0l27.905-8.586a2.5 2.5 0 00-1.47-4.779L36.176 8.87a10 10 0 01-5.882 0L3.86.735a2.5 2.5 0 00-1.47 4.78L30.293 14.1z"
						      fill="currentColor">
						</path>
					</svg>
				</div>
			</div>
		</div>
	);
}
// bg-[#361e55]

// animation: 500ms ease 1.5s 1 normal forwards running gceTDB;