import ImageScrolling from "@/app/ui/imageScrollingCarousel";
import RightScrollArea from "@/app/ui/rightScrollArea";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row relative">
      <div className="flex bg-blue-400 w-3/5 flex-col items-center relative">
        <ImageScrolling/>
      </div>
      <div className="right-scroll-area absolute top-0 right-0 z-10 h-full">
        <div className="bg-white overflow-hidden flex align-middle items-center">
          <RightScrollArea/>
        </div>
      </div>
    </main>
  );
}