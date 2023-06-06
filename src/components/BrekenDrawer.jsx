import MailIcon from "@mui/icons-material/Mail";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { styled } from "@mui/material/styles";
import * as React from "react";
import AVATAR_IMG from "../assets/avatar.png";
import LOGO_LARGE from "../assets/large_logo.png";

import LOGO_SMALL from "../assets/small_logo.png";
const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 75,
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%	",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  position: "relative", // posiciona el LogoCover correctamente
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const [clipPath, setClipPath] = React.useState("inset(0 12% 0 0)");
  const handleDrawerOpen = () => {
    setClipPath(`inset(0 0% 0 0)`);
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setClipPath(`inset(0 12% 0 0)`);
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#415364",
          boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.2)",
        },
      }}
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
      <div className="py-5 justify-between flex flex-col h-full w-full ">
        <div className="flex w-full pt-1 justify-center">
          {!open && <img src={LOGO_SMALL} className=" h-16 p-2" />}
          {open && (
            <img src={LOGO_LARGE} style={{ clipPath }} className=" h-16 p-2 " />
          )}
        </div>

        <List className="">
          <Divider color="#98989A" />
          {[
            "Comercial",
            "Administración",
            "Planeación",
            "Proveedores",
            "Cuenta",
            "Administrador",
          ].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{ display: "flex", justifyContent: "center", left: -7 }}
            >
              <ListItemButton>
                <ListItemIcon
                  color="#F8F8F9"
                  sx={{
                    mr: open ? 3 : "auto",

                    color: "#F8F8F9",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ opacity: open ? 1 : 0, color: "#F8F8F9", py: 2 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider color="#98989A" />
        </List>

        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: "initial",
              left: -7,
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={AVATAR_IMG}
              sx={{ width: 56, height: 56, mr: open ? 3 : "auto" }}
            />
            <ListItemText
              primary={"Rodrigo Alvarez"}
              sx={{ opacity: open ? 1 : 0, color: "#F8F8F9" }}
            />
          </ListItemButton>
        </ListItem>
      </div>
    </Drawer>
  );
}
