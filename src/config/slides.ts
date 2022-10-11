import dragimate from "../assets/img/portfolio/dragimate.jpg";
import vonsawebsite from "../assets/img/portfolio/vonsawebsite.jpg";
import businesscards from "../assets/img/portfolio/businesscards.jpg";
import icons from "../assets/img/portfolio/icons.jpg";
import space from "../assets/img/portfolio/space.jpg";
import logo from "../assets/img/portfolio/logo.jpg";
import githubInsights from "../assets/img/portfolio/github-insights.png";
import { SliderInterface } from "../Components/Slider/Slider";

export const slides: SliderInterface = [
  {
    img: githubInsights,
    website: "https://github-insights.coendewaal.com",
    github: "https://github.com/vonsa/Github-insights",
    title: "Github insights",
    tags: ["Svelte", "GraphQL", "CI/CD", "Sentry", "Telemetry"],
    description:
      "Find users on Github and get an overview of their statistics and top contributions.",
    color: "#0000aa",
  },
  {
    img: dragimate,
    website: "https://dragimate.coendewaal.com",
    title: "Dragimate Library",
    tags: [
      "JavaScript library",
      "Landing page",
      "Performance",
      "Innovative user experiences",
      "CSS",
      "Design",
    ],
    description:
      "This is an easy to use library to utilize mouse drag events to generate CSS transforms on your website.",
    color: "#8802ad",
  },
  {
    img: vonsawebsite,
    website: "https://vonsa.nl",
    title: "WordPress website",
    tags: ["Design", "WordPress", "CSS"],
    description: "Web development & design agency website. Slightly dated.",
    color: "#0071bd",
  },
  {
    img: space,
    website: "https://jolt2.deviantart.com",
    title: "Digital paintings",
    tags: ["Art", "Photoshop", "Concept art"],
    description:
      "View digital paintings I've done as videogame related conceptual work.",
    color: "#00801c",
  },
  {
    img: businesscards,
    title: "Business card Design",
    tags: ["Design", "Business cards", "Vonsa"],
    description:
      "These business cards have been printed with foil printing technique, elements such as the logo are printed in silver.",
    color: "#8b00e8",
  },
  {
    img: icons,
    title: "Custom icons",
    tags: ["Design", "Icons", "Illustrator"],
    description:
      "Original icon set, suited for general appliance in most businesses.",
  },
  {
    img: logo,
    title: "Logo for a high end fencing smith",
    tags: ["Logo", "Design"],
    description:
      "This logo resembles some core elements in the smith's trade. It portrays class and the logo itself can be incorporated as a metal emblem into fence designs.",
    color: "#4200c7",
  },
];
