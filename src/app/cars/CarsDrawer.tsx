"use client";
import { Box, Divider, Drawer } from "@mui/material";
import { BodyType as BodyType, DriveSystem, Maker, PowerTrain } from "./car";
import React from "react";
import CarsFilterList from "./CarsFilterList";

interface Props {
  handleDrawerToggle: Function;
  handleMakersSelect: Function;
  handleBodyTypesSelect: Function;
  handlePowerTrainsSelect: Function;
  handleDriveSystemsSelect: Function;
  drawerWidth: number;
  mobileOpen: boolean;
  menus: {
    makers: Maker[];
    bodyTypes: BodyType[];
    powerTrains: PowerTrain[];
    driveSystems: DriveSystem[];
  };
}

export default function CarsDrawer(props: Props) {
  const drawer = (
    <div>
      <CarsFilterList
        title="メーカー"
        items={props.menus.makers}
        handleSelect={props.handleMakersSelect}
      />
      <Divider />
      <CarsFilterList
        title="ボディタイプ"
        items={props.menus.bodyTypes}
        handleSelect={props.handleBodyTypesSelect}
      />
      <Divider />
      <CarsFilterList
        title="パワートレーン"
        items={props.menus.powerTrains}
        handleSelect={props.handlePowerTrainsSelect}
      />
      <Divider />
      <CarsFilterList
        title="駆動方式"
        items={props.menus.driveSystems}
        handleSelect={props.handlePowerTrainsSelect}
      />
    </div>
  );

  return (
    <Box
      component="nav"
      // position="fixed"
      sx={{ width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={props.mobileOpen}
        onClose={() => props.handleDrawerToggle()}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
            mt: 7,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="persistent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
            mt: 8,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
