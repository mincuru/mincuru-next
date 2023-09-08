"use client";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box, Card, Checkbox, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Car } from "./car";

interface Props {
  car: Car;
}

export default function CarItem(props: Props) {
  return (
    <Card sx={{ width: 340 }}>
      <Box
        display="flex"
        flexDirection="column"
        width={4}
        height={8}
        sx={{ width: 340, height: 340 }}
      >
        <Image
          src={props.car.imageUrl}
          alt={props.car.modelName}
          width={340}
          height={180}
        />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ backgroundColor: "#00ff0060" }}
        >
          <Typography variant="h5" sx={{ mx: 1 }}>
            {props.car.modelName}
          </Typography>
          <Checkbox
            // {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
        </Stack>
        <Typography variant="body1" sx={{ mx: 1 }}>
          {props.car.priceTenThousandYen()}
        </Typography>
        <Typography variant="body1" sx={{ mx: 1 }}>
          全長 {props.car.body.length.toLocaleString()}mm, 全幅
          {props.car.body.width.toLocaleString()}mm, 全高
          {props.car.body.height.toLocaleString()}mm
        </Typography>
        <Typography variant="body1" sx={{ mx: 1 }}>
          {props.car.body.typeLabel()}
          {", "}
          {props.car.driveSystemLabel()}
          {", "}
          {props.car.powerTrainLabel()}
          {", "}
          {props.car.fuelTypeLabel()}
        </Typography>
      </Box>
    </Card>
  );
}
