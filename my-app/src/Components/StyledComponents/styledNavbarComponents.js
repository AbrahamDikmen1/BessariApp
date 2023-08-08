import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
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

export const settings = [
  {
    icon: <HomeIcon />,
    text: "Profil",
  },

  { icon: <LogoutIcon />, text: "Logout" },
];
