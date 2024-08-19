import { FirstLayerContent } from "@/components/FirstLayerContent";
import { MainVid } from "@/components/MainVid";
import { NavBar } from "@/components/NavBar";
import { ScrollContainer } from "@/components/ScrollContainer";
import { SecondLayerContent } from "@/components/SecondLayerContent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <MainVid />
      <ScrollContainer>
        <FirstLayerContent />
        <SecondLayerContent />
      </ScrollContainer>
    </div>
  );
}
