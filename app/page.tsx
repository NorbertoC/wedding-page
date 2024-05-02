import ImageScrolling from "@/components/imageScrollingCarousel/page";
import RightScrollArea from "@/components/rightScrollArea/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row relative">
      <div className="flex bg-blue-400 w-3/5 flex-col items-center relative">
        <ImageScrolling/>
      </div>
      <div className="w-2/5 absolute top-0 right-0 z-10 h-full">
        <div className="bg-white overflow-hidden flex align-middle items-center">
          <RightScrollArea/>
        </div>
      </div>
    </main>
  );
}
