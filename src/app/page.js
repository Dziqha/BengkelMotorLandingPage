"use client";
import HeaderPage from "@/app/components/navigations/header";
import HeroPage from "@/app/components/hero";
import AboutPage from "@/app/components/about";
import GaleryPage from "@/app/components/galery";
import SubscribePage from "@/app/components/subscribe";
import ContactPage from "@/app/components/contact";
import IconWa from "@/app/components/navigations/whatsapp-icon";
import MapPage from "@/app/components/map";
import FotterPage from "@/app/components/navigations/footer";
import BackHomePage from "@/app/components/navigations/back-home";

export default function Home() {
  return (
    <main className="overflow-y-auto h-screen scrollbar-hidden">
      <HeaderPage />
      <HeroPage />
      <AboutPage />
      <GaleryPage />
      <SubscribePage />
      <ContactPage />
      <IconWa />
      <MapPage />
      <FotterPage />
      <BackHomePage />
    </main>
  );
}
