import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../index";

interface UserAttribute {
  userId: number;
  name: string;
  permanentAddress: string;
  email: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttribute, "userId"> {}

interface UserInstance
  extends Model<UserAttribute, UserCreationAttributes>,
    UserAttribute {
  createdAt?: Date;
  updatedAt?: Date;
}

const User = sequelize.define<UserInstance>("userTable", {
  userId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  permanentAddress: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default User;
