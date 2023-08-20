"use client";
import { Button } from "@mui/material";

interface Props {
  handleDrawerToggle: Function;
  value: string;
}

export const HogeButton = (props: Props) => {
  return (
    <Button onClick={() => props.handleDrawerToggle()}>{props.value}</Button>
  );
};
