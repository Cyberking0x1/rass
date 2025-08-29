// components

import { Navbar, Footer } from "@/components";
import {
  RassHero,
  RassAbout,
  RassVisionMission,
  RassFounders,
  RassServices,
  RassEducation,
  RassGallery,
  RassContact
} from "@/components/rass-landing";

export default function RassLandingPage() {
  return (
    <>
      <Navbar />
      <RassHero />
      <RassAbout />
      <RassVisionMission />
      <RassFounders />
      <RassServices />
      <RassEducation />
      <RassGallery />
      <RassContact />
      <Footer />
    </>
  );
}

