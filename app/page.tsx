import { ImageScrolling } from "@/app/components/imageScrollingCarousel/page";
import { RightScrollArea } from "@/app/components/scrollArea/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row relative">
      <div className="flex bg-blue-400 w-2/3 flex-col items-center relative">
        left section
        <ImageScrolling/>
      </div>
      <div className="bg-amber-300 w-1/3 absolute top-0 right-0 z-10 h-[97vh]">
        right section
        <div className="h-full overflow-hidden">
          <RightScrollArea/>
        </div>
      </div>
    </main>
  );
}
