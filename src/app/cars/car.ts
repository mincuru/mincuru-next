export class Car {
  constructor(
    public id: number,
    public modelName: string,
    public maker: Maker,
    public url: string,
    public imageUrl: string,
    public price: number,
    public body: Body,
    public powerTrain: PowerTrain,
    public driveSystem: DriveSystem,
    public fuelType: FuelType
  ) {}

  priceTenThousandYen(): string {
    return `${Math.floor(this.price / 10000)}万円`;
  }
}

export class Maker implements ILabeled {
  constructor(public value: string) {}
  toLabel(): string {
    return this.value;
  }
}

export class Body {
  constructor(
    public type: BodyType,
    public length: number,
    public width: number,
    public height: number
  ) {}
}

export class BodyType implements ILabeled {
  constructor(public value: string) {}
  toLabel(): string {
    switch (this.value) {
      case "SUV":
        return "SUV";
      case "SEDAN":
        return "セダン";
      case "HATCHBACK":
        return "ハッチバック";
      default:
        return "不明";
    }
  }
}

export class PowerTrain implements ILabeled {
  constructor(public value: string) {}
  toLabel(): string {
    switch (this.value) {
      case "ICE":
        return "エンジン";
      case "StrHV":
        return "ストロングHV";
      case "MldHV":
        return "マイルドHV";
      case "BEV":
        return "バッテリーEV";
      case "SerHV":
        return "シリーズHV";
      default:
        return "不明";
    }
  }
}

export class FuelType implements ILabeled {
  constructor(public value: string) {}
  toLabel(): string {
    switch (this.value) {
      case "REGULAR":
        return "レギュラー";
      case "PREMIUM":
        return "プレミアム";
      case "DIESEL":
        return "ディーゼル";
      default:
        return "不明";
    }
  }
}

export class DriveSystem implements ILabeled {
  constructor(public value: string) {}
  toLabel(): string {
    switch (this.value) {
      case "FF":
        return "FF";
      case "FR":
        return "FR";
      case "AWD":
        return "4WD";
      default:
        return "不明";
    }
  }
}
// type PowerTrainValue = "ICE" | "StrHV" | "MldHV" | "BEV" | "SerHV";
// type DriveSystem = "FF" | "FR" | "AWD" | "RR";
// type FuelType = "REGULAR" | "PREMIUM" | "DIESEL" | "";

export interface ILabeled {
  value: string;
  toLabel(): string;
}
