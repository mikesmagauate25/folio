import localFont from "next/font/local";

export const monument = localFont({
  src: [
    {
      path: "../assets/font/MonumentExtend/MonumentExtended-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/font/MonumentExtend/MonumentExtended-Ultrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-MonumentExtend",
});

export const machina = localFont({
  src: [
    {
      path: "../assets/font/NeueMachina/NeueMachina-Light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/font/NeueMachina/NeueMachina-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/font/NeueMachina/NeueMachina-Ultrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-neue-machina",
});
