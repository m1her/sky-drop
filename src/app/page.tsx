import { MainVid } from "@/components/MainVid";
import { NavBar } from "@/components/NavBar";
import { ScrollContainer } from "@/components/ScrollContainer";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <MainVid />
      <ScrollContainer>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="text-5xl font-urbanist font-black">
              WATCH YOUR FOOD <span className="text-darkBlue"> TAKE FLIGHT</span>
            </div>
            <div className="text-3xl font-urbanist font-black">
              DELIVERED STRAIGHT TO YOUR DOOR <span className="text-royalBlue">BY DRONE!</span>
            </div>
          </div>
        </div>
      </ScrollContainer>
    </div>
  );
}
