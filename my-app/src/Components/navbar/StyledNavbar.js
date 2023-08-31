import React, { useDispatch } from "react-redux";

import PetsIcon from "@mui/icons-material/Pets";
import GroupIcon from "@mui/icons-material/Group";
import DescriptionIcon from "@mui/icons-material/Description";

export const navTabs = [
  {
    icon: <PetsIcon />,
    text: "Om Oss",
  },
  {
    icon: <GroupIcon />,
    text: "Kontakta Oss",
  },
  {
    icon: <DescriptionIcon />,
    text: "Nyheter",
  },
];
