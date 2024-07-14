// models/roomspectable/roomSpecTable.ts
import { Model, DataTypes } from "sequelize";
import sequelize from "../index";

interface RoomSpecAttributes {
  roomId: number;
  description: string;
  location: string;
  roomType: string;
  bathroomType: string;
  rent: number;
  pic: string;
  video: string;
  amenities: string;
  availability: string;
  userId: number; // Foreign key
}

class RoomSpec extends Model<RoomSpecAttributes> implements RoomSpecAttributes {
  public roomId!: number;
  public description!: string;
  public location!: string;
  public roomType!: string;
  public bathroomType!: string;
  public rent!: number;
  public pic!: string;
  public video!: string;
  public amenities!: string;
  public availability!: string;
  public userId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

RoomSpec.init(
  {
    roomId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roomType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bathroomType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rent: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    video: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amenities: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    availability: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // Reference to the Users table
        key: 'id', // Primary key of the Users table
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize,
    modelName: "roomSpecTable",
  }
);

export default RoomSpec;
