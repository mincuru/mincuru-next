// "use client";
import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { ILabeled } from "./car";
import React from "react";

interface Props {
  title: string;
  items: ILabeled[];
  handleSelect: Function;
}

export default function CarItem(props: Props) {
  const [checked, setChecked] = React.useState(new Array<number>());
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    props.handleSelect(newChecked);
  };

  return (
    <List
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {props.title}
        </ListSubheader>
      }
      dense
    >
      {props.items.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton onClick={handleToggle(index)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(index) !== -1}
                // tabIndex={-1}
                disableRipple
                // inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText secondary={item.toLabel()} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
