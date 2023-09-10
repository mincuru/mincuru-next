"use client";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import MincuruAppBar from "../components/MincuruAppBar";
import { HogeButton } from "../components/HogeButton";
import CarsDrawer from "./CarsDrawer";
import CarItem from "./CarItem";
import {
  BodyType,
  Car,
  Body,
  PowerTrain,
  FuelType,
  DriveSystem,
  Maker,
} from "./car";

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
const drawerWidth = 240;

export default function Page(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const unko = "Button3";

  const car = new Car(
    1,
    "CX-5",
    new Maker("マツダ"),
    "https://www.mazda.co.jp/cars/cx-5/",
    "https://upload.wikimedia.org/wikipedia/commons/8/85/2017_Mazda_CX-5_%28KF%29_Maxx_2WD_wagon_%282018-11-02%29_01.jpg",
    3200000,
    new Body(new BodyType("SUV"), 4747, 1850, 1690),
    new PowerTrain("ICE"),
    new DriveSystem("AWD"),
    new FuelType("REGULAR")
  );

  const cars: Car[] = [
    new Car(
      1,
      "CX-5",
      new Maker("マツダ"),
      "https://www.mazda.co.jp/cars/cx-5/",
      "https://upload.wikimedia.org/wikipedia/commons/8/85/2017_Mazda_CX-5_%28KF%29_Maxx_2WD_wagon_%282018-11-02%29_01.jpg",
      3200000,
      new Body(new BodyType("SUV"), 4747, 1850, 1690),
      new PowerTrain("ICE"),
      new DriveSystem("AWD"),
      new FuelType("REGULAR")
    ),
    new Car(
      2,
      "カローラツーリング",
      new Maker("トヨタ"),
      "https://toyota.jp/corollatouring/",
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Toyota_COROLLA_TOURING_HYBRID_W%C3%97B_2WD_%286AA-ZWE211W-AWXSB%29_front.jpg",
      2678500,
      new Body(new BodyType("STATION_WAGON"), 4495, 1745, 1460),
      new PowerTrain("StrHV"),
      new DriveSystem("AWD"),
      new FuelType("REGULAR")
    ),
    new Car(
      3,
      "NSX",
      new Maker("ホンダ"),
      "https://www.honda.co.jp/NSX/types/",
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/2019_Honda_NSX_3.5_CAA-NC1_%2820190722%29_01.jpg",
      27940000,
      new Body(new BodyType("COUPE"), 4535, 1940, 1215),
      new PowerTrain("MldHV"),
      new DriveSystem("AWD"),
      new FuelType("PREMIUM")
    ),
    new Car(
      4,
      "Honda e",
      new Maker("ホンダ"),
      "https://www.honda.co.jp/honda-e/",
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Honda_e_Advance_%28ZAA-ZC7%29_front.jpg",
      4950000,
      new Body(new BodyType("HATCHBACK"), 3895, 1750, 1510),
      new PowerTrain("BEV"),
      new DriveSystem("RR"),
      new FuelType("")
    ),
    new Car(
      5,
      "ノート",
      new Maker("日産"),
      "https://www3.nissan.co.jp/vehicles/new/note.html",
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Nissan_Note_e-POWER_%28E13%29%2C_2021%2C_front-left.jpg",
      2445300,
      new Body(new BodyType("HATCHBACK"), 4045, 1695, 1520),
      new PowerTrain("SerHV"),
      new DriveSystem("FF"),
      new FuelType("REGULAR")
    ),
    new Car(
      6,
      "3シリーズツーリング",
      new Maker("BMW"),
      "https://www.bmw.co.jp/ja/all-models/3-series/touring/2019/bmw-3-series-touring-inspire.html",
      "",
      6340000,
      new Body(new BodyType("STATION_WAGON"), 4715, 1825, 1475),
      new PowerTrain("ICE"),
      new DriveSystem("AWD"),
      new FuelType("DIESEL")
    ),
  ];

  const navDrawerData = {
    makers: [
      new Maker("マツダ"),
      new Maker("トヨタ"),
      new Maker("ホンダ"),
      new Maker("日産"),
    ],
    bodyTypes: [
      new BodyType("SUV"),
      new BodyType("HATCHBACK"),
      new BodyType("SEDAN"),
    ],
    powerTrains: [
      new PowerTrain("ICE"),
      new PowerTrain("StrHV"),
      new PowerTrain("MldHV"),
      new PowerTrain("BEV"),
      new PowerTrain("SerHV"),
    ],
    driveSystems: [
      new DriveSystem("FF"),
      new DriveSystem("FR"),
      new DriveSystem("AWD"),
    ],
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMakersSelect = (indecies: number[]) => {
    console.log(`handleMakersSelect: ${indecies}`);
  };

  const handleBodyTypesSelect = (indecies: number[]) => {
    console.log(`handleBodyTypesSelect: ${indecies}`);
  };

  const handlePowerTrainsSelect = (indecies: number[]) => {
    console.log(`handlePowerTrainsSelect: ${indecies}`);
  };

  const handleDriveSystemsSelect = (indecies: number[]) => {
    console.log(`handleDriveSystemsSelect: ${indecies}`);
  };

  return (
    <>
      <MincuruAppBar handleDrawerToggle={handleDrawerToggle} />
      <CarsDrawer
        handleDrawerToggle={handleDrawerToggle}
        handleMakersSelect={handleMakersSelect}
        handleBodyTypesSelect={handleBodyTypesSelect}
        handlePowerTrainsSelect={handlePowerTrainsSelect}
        handleDriveSystemsSelect={handleDriveSystemsSelect}
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        menus={navDrawerData}
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
