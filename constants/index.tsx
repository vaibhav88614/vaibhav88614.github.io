import type { IconType } from "react-icons";
import {
  RiCalendarLine,
  RiEarthLine,
  RiFacebookLine,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiMailLine,
  RiNpmjsLine,
  RiPhoneLine,
  RiTelegramLine,
  RiTwitterLine,
} from "react-icons/ri";
import { Social } from "@/types";

export const WEBSITE = {
  name: "Vaibhav R patil",
  author: "Vaibhav R patil",
  tagline: "Python Developer",
  description:
    "I am a Frontend Developer and Python Developer.",
  keywords: [""],
  about: "",
  color: "#f13024",
};

export const SOCIALS: Record<
  Social,
  { name: string; title: string; icon: IconType; link: string }
> = {
  [Social.Email]: {
    name: "Email",
    title: `Email ${WEBSITE.author}`,
    icon: RiMailLine,
    link: "mailto:vaibhavrp614@gmail.com",
  },
  [Social.Phone]: {
    name: "Phone",
    title: `Call ${WEBSITE.author}`,
    icon: RiPhoneLine,
    link: "",
  },
  [Social.Facebook]: {
    name: "Facebook",
    title: `${WEBSITE.author} on Facebook`,
    icon: RiFacebookLine,
    link: "",
  },
  [Social.Instagram]: {
    name: "Instagram",
    title: `${WEBSITE.author} on Instagram`,
    icon: RiInstagramLine,
    link: "",
  },
  [Social.Twitter]: {
    name: "Twitter",
    title: `${WEBSITE.author} on Twitter`,
    icon: RiTwitterLine,
    link: "",
  },
  [Social.LinkedIn]: {
    name: "LinkedIn",
    title: `${WEBSITE.author} on LinkedIn`,
    icon: RiLinkedinLine,
    link: "https://www.linkedin.com/in/vaibhavrp614/",
  },
  [Social.Telegram]: {
    name: "Telegram",
    title: `${WEBSITE.author} on Telegram`,
    icon: RiTelegramLine,
    link: "",
  },
  [Social.Npm]: {
    name: "NPM",
    title: `${WEBSITE.author} on NPM`,
    icon: RiNpmjsLine,
    link: "",
  },
  [Social.Website]: {
    name: "Website",
    title: `Visit ${WEBSITE.author}’s Website`,
    icon: RiEarthLine,
    link: "",
  },
  [Social.Calendly]: {
    name: "Calendly",
    title: `Schedule with ${WEBSITE.author} on Calendly`,
    icon: RiCalendarLine,
    link: "",
  },
  [Social.GitHub]: {
    name: "GitHub",
    title: `${WEBSITE.author} on GitHub`,
    icon: RiGithubLine,
    link: "https://github.com/vaibhav88614/",
  },
};

export * from "./competencies";
export * from "./rewards";
export * from "./variants";
