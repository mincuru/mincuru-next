"use client";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import MincuruAppBar from "../components/MincuruAppBar";
import { HogeButton } from "../components/HogeButton";
import CarsDrawer from "./CarsDrawer";
import CarItem from "./CarItem";
import { Car, CarBody } from "./car";

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

  const car = new Car(
    1,
    "CX-5",
    "マツダ",
    "https://www.mazda.co.jp/cars/cx-5/",
    "https://upload.wikimedia.org/wikipedia/commons/8/85/2017_Mazda_CX-5_%28KF%29_Maxx_2WD_wagon_%282018-11-02%29_01.jpg",
    3200000,
    new CarBody("SUV", 4747, 1850, 1690),
    "ICE",
    "AWD",
    "REGULAR"
  );

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
        <Grid container columnSpacing={2} rowSpacing={2} columns={4}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid key={index}>
              <CarItem car={car} />
            </Grid>
          ))}
        </Grid>
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
