import * as React from "react";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";

export const items = [
  {
    icon: React.createElement(SettingsSuggestRoundedIcon, {
      sx: { color: "text.secondary" },
    }),
    title: "Adaptable performance",
    description:
      "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.",
  },
  {
    icon: React.createElement(ConstructionRoundedIcon, {
      sx: { color: "text.secondary" },
    }),
    title: "Built to last",
    description:
      "Experience unmatched durability that goes above and beyond with lasting investment.",
  },
  {
    icon: React.createElement(ThumbUpAltRoundedIcon, {
      sx: { color: "text.secondary" },
    }),
    title: "Great user experience",
    description:
      "Integrate our product into your routine with an intuitive and easy-to-use interface.",
  },
  {
    icon: React.createElement(AutoFixHighRoundedIcon, {
      sx: { color: "text.secondary" },
    }),
    title: "Innovative functionality",
    description:
      "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
  },
];
