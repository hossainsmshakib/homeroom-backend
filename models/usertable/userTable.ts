// models/usertable/userTable.ts

import { Model, DataTypes } from "sequelize";
import sequelize from "../index"; // Adjust this path based on your structure
import bcrypt from "bcrypt";

interface UserAttributes {
  userId?: number; // This should be autogenerated, not provided during creation
  name: string;
  permanentAddress: string;
  email: string;
  password: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public userId!: number;
  public name!: string;
  public permanentAddress!: string;
  public email!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "userTable", // Define the model name here
    tableName: "userTable", // Optional: Explicitly define the table name
  }
);

// Hash password before saving
User.beforeCreate(async (user: User) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
});

export default User;
