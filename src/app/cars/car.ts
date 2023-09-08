export class Car {
  constructor(
    public id: number,
    public modelName: string,
    public makerName: string,
    public url: string,
    public imageUrl: string,
    public price: number,
    public body: CarBody,
    public powerTrain: PowerTrain,
    public driveSystem: DriveSystem,
    public fuelType: FuelType
  ) {}

  priceTenThousandYen(): string {
    return `${Math.floor(this.price / 10000)}万円`;
  }

  driveSystemLabel(): string {
    switch (this.driveSystem) {
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

  powerTrainLabel(): string {
    switch (this.powerTrain) {
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

  fuelTypeLabel(): string {
    switch (this.fuelType) {
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

export class CarBody {
  constructor(
    public type: string,
    public length: number,
    public width: number,
    public height: number
  ) {}

  typeLabel(): string {
    switch (this.type) {
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

type PowerTrain = "ICE" | "StrHV" | "MldHV" | "BEV" | "SerHV";
type DriveSystem = "FF" | "FR" | "AWD";
type FuelType = "REGULAR" | "PREMIUM" | "DIESEL";
