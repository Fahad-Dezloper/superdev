import LandingPage from "./components/LandingPage";
import SideBar from "./components/SideBar";
import Topbar from "./components/Topbar";
import AboutProgram from "./components/AboutProgram";
import WhatYouWillLearn from "./components/WhatYouWillLearn";
import Timeline from "./components/Timeline";
import GraduationRequirements from "./components/GraduationRequirements";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex h-screen gap-8 overflow-x-hidden max-h-screen">
      <SideBar />
      <div className="flex flex-col w-full gap-6 pt-4 px-6 scrollY">
        <Topbar />
      <div className="flex flex-col w-full gap-12">
        <LandingPage />
        <AboutProgram />
        <WhatYouWillLearn />
        <Timeline />
        <GraduationRequirements />
        <Footer />
      </div>
      </div>
    </div>
  );
}
