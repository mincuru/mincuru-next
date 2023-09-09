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

  const cars: Car[] = [
    new Car(
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
    ),
    new Car(
      2,
      "カローラツーリング",
      "トヨタ",
      "https://toyota.jp/corollatouring/",
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Toyota_COROLLA_TOURING_HYBRID_W%C3%97B_2WD_%286AA-ZWE211W-AWXSB%29_front.jpg",
      2678500,
      new CarBody("STATION_WAGON", 4495, 1745, 1460),
      "StrHV",
      "AWD",
      "REGULAR"
    ),
    new Car(
      3,
      "NSX",
      "ホンダ",
      "https://www.honda.co.jp/NSX/types/",
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/2019_Honda_NSX_3.5_CAA-NC1_%2820190722%29_01.jpg",
      27940000,
      new CarBody("COUPE", 4535, 1940, 1215),
      "MldHV",
      "AWD",
      "PREMIUM"
    ),
    new Car(
      4,
      "Honda e",
      "ホンダ",
      "https://www.honda.co.jp/honda-e/",
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Honda_e_Advance_%28ZAA-ZC7%29_front.jpg",
      4950000,
      new CarBody("HATCHBACK", 3895, 1750, 1510),
      "BEV",
      "RR",
      ""
    ),
    new Car(
      5,
      "ノート",
      "日産",
      "https://www3.nissan.co.jp/vehicles/new/note.html",
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Nissan_Note_e-POWER_%28E13%29%2C_2021%2C_front-left.jpg",
      2445300,
      new CarBody("HATCHBACK", 4045, 1695, 1520),
      "SerHV",
      "FF",
      "REGULAR"
    ),
    new Car(
      6,
      "3シリーズツーリング",
      "BMW",
      "https://www.bmw.co.jp/ja/all-models/3-series/touring/2019/bmw-3-series-touring-inspire.html",
      "",
      6340000,
      new CarBody("STATION_WAGON", 4715, 1825, 1475),
      "ICE",
      "AWD",
      "DIESEL"
    ),
  ];

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
          {cars.map((car, index) => (
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
