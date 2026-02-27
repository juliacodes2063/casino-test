import { useState } from "react";
import { Box } from "@mui/material";
import { HeroSection } from "./blocks/HeroSection";
import { FooterSection } from "./blocks/FooterSection";
import { Hero } from "./blocks/Hero";
import { GameModal } from "../GameModal/GameModal";
import { Footer } from "./blocks/Footer";

export function LandingPage() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeroSection>
        <Hero onOpenGame={() => setOpen(true)} />
      </HeroSection>

      <FooterSection>
        <Footer />
      </FooterSection>

      <GameModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}
