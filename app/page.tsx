import { ImageScrolling } from "@/components/imageScrollingCarousel/page";
import { RightScrollArea } from "@/components/rightScrollArea/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row relative">
      <div className="flex bg-blue-400 w-2/3 flex-col items-center relative">
        <ImageScrolling/>
      </div>
      <div className="w-1/3 absolute top-0 right-0 z-10 h-full">
        <div className="overflow-hidden">
          <RightScrollArea/>
        </div>
      </div>
    </main>
  );
}
