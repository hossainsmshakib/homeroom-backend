// models/roomspectable/roomSpecTable.ts

import { DataTypes, Model } from "sequelize";
import sequelize from "../index";

interface RoomSpecAttributes {
  roomId: number;
  description: string;
  location: string;
  latitude: number;
  longitude: number;
  roomType: string;
  bathroomType: string;
  rent: number;
  pictures: string[]; // Assuming pictures is an array of string paths
  video: string | null; // Make video optional with null type
  amenities: string;
  availability: string;
}

class RoomSpec extends Model<RoomSpecAttributes> implements RoomSpecAttributes {
  public roomId!: number;
  public description!: string;
  public location!: string;
  public latitude!: number;
  public longitude!: number;
  public roomType!: string;
  public bathroomType!: string;
  public rent!: number;
  public pictures!: string[];
  public video!: string | null;
  public amenities!: string;
  public availability!: string;
}

RoomSpec.init(
  {
    roomId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
      // allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      // allowNull: false,
    },
    roomType: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    bathroomType: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    rent: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    pictures: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      //allowNull: false,
    },
    video: {
      type: DataTypes.STRING,
      // allowNull: true,
    },
    amenities: {
      type: DataTypes.STRING,
      //  allowNull: false,
    },
    availability: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "RoomSpec",
    tableName: "roomSpecTables",
  }
);

export default RoomSpec;
