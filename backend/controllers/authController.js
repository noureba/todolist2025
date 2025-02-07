import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import createAppError from "../utils/appError.js";

//Resister user
export const register = async (req, res, next) => {
  try {
    //Check if user already exist
    const user = await userModel.findOne({ email: req.body.email });
    if (user) {
      return next(new createAppError("User already exist", 400));
    }
    //Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    //Create new user
    const newUser = new userModel({
      ...req.body,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    //JWT Token
    const token = jwt.sign({ _id: newUser._id }, "secretkey123", {
      expiresIn: "1h",
    });

    res.status(201).json({
      status: "success",
      message: "user register successfully",
      token: token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (err) {
    next(err);
  }
};

//Login user
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return next(new createAppError("User not found", 404));
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return next(new createAppError("Invalid password", 500));
    }

    //JWT Token
    const token = jwt.sign({ _id: user._id }, "secretkey123", {
      expiresIn: "1h",
    });

    res.status(200).json({
      status: "success",
      message: "User login successfully",
      token: token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    next(err);
  }
};
