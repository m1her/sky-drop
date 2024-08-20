import { FirstLayerContent } from "@/components/FirstLayerContent";
import { ForthLayerContent } from "@/components/ForthLayerContent";
import { MainVid } from "@/components/MainVid";
import { NavBar } from "@/components/NavBar";
import { ScrollContainer } from "@/components/ScrollContainer";
import { SecondLayerContent } from "@/components/SecondLayerContent";
import { ThirdLayerContent } from "@/components/ThirdLayerContent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <MainVid />
      <ScrollContainer>
        <FirstLayerContent />
        <SecondLayerContent />
        <ThirdLayerContent />
        <ForthLayerContent />
      </ScrollContainer>
    </div>
  );
}
