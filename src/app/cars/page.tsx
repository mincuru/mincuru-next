"use client";
import Link from "next/link";
import HelloWorld from "../HelloWorld";
import User from "../components/User";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MincuruAppBar from "../components/MincuruAppBar";
import { HogeButton } from "../components/HogeButton";
import CarsDrawer from "./CarsDrawer";

type Props = {
  data: {
    hoge: String;
  };
  window?: () => Window;
};

type Repo = {
  name: String;
  stargazers_count: number;
};

// バックエンドからデータ取得
const navDrawerData = {
  makerNames: ["マツダ", "トヨタ", "ホンダ", "日産"],
  bodyTypes: ["SUV", "セダン", "ステーションワゴン"],
  powerTrains: ["エンジン", "ストロングハイブリッド", "マイルドハイブリッド"],
  driveSystems: ["FF", "FR", "AWD"],
  fuelTypes: ["レギュラーガソリン", "ハイオク", "軽油"],
};

const drawerWidth = 240;

export default function Page(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const unko = "Button3";

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <MincuruAppBar handleDrawerToggle={handleDrawerToggle} />
      <CarsDrawer
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
      />
      <Box
        component="main"
        position="static"
        sx={{
          flexGrow: 1,
          py: 2,
          pl: { xs: 2, sm: `calc(16px + ${drawerWidth}px)` },
          pr: 2,
        }}
      >
        {/* <Toolbar /> */}
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <HogeButton handleDrawerToggle={handleDrawerToggle} value={unko} />
      </Box>
    </>
    // <div>
    //   <h1>Hello, Next.js!</h1>
    //   {/* <WithApollo> */}
    //   <User />
    //   {/* </WithApollo> */}
    //   <ul>
    //     <li>
    //       <Link href="/cars/1">cars/1</Link>
    //     </li>
    //     <li>
    //       <Link href="/cars/2">cars/2</Link>
    //     </li>
    //     <li>
    //       <Link href="/cars/3">cars/3</Link>
    //     </li>
    //   </ul>
    // </div>
  );
}

// export const getStaticProps: GetStaticProps<{ repo: Repo }> = async () => {
//   const data = { hoge: "fuga" };
//   return {
//     props: data,
//   };
// };

// export const getStaticProps: GetStaticProps<{
//   repo: Repo;
// }> = async () => {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const repo = await res.json();
//   return { props: { repo } };
// };
