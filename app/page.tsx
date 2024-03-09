import Image from "next/image";
import { ImageScrollingCarousel } from "@/app/components/imageScrollingCarousel/page";
import {RightScrollArea} from "@/app/components/scrollArea/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
      <div className="flex bg-blue-400 w-3/5 flex-col items-center ">
        left section
        <ImageScrollingCarousel />
      </div>
      <div className="bg-amber-300 w-2/5">
        right section
        <RightScrollArea />
      </div>
    </main>
  );
}
