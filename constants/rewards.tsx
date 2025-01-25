import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

export const REWARDS = [
  {
    category: "skills",
    info: [
      {
        title: "Web Development",
        description: "Specialized in Frontend technologies.",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
        ],
        stage: "", // Empty as it's not relevant for skills
      },
      {
        title: "UI/UX Design",
        description: "Gaining Skills on ",
        icons: [FaFigma, SiAdobexd],
        stage: "",
      },
    ],
  },
];
