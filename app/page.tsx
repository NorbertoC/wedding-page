import ImageScrolling from "@/components/imageScrollingCarousel/page";
import RightScrollArea from "@/components/rightScrollArea/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row relative">
      <div className="flex bg-blue-400 w-2/3 flex-col items-center relative">
        <ImageScrolling/>
      </div>
      <div className="w-1/3 absolute top-0 right-0 z-10 h-full">
        <div className="bg-white overflow-hidden flex align-middle items-center">
          <RightScrollArea/>
        </div>
      </div>
    </main>
  );
}
