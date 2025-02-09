import userModel from "../models/user.js";

// register controller
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check if name is have entered
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    // check if have password or password not god
    if (!password || password.length > 8) {
      return res.json({
        error: "password is not good",
      });
    }
    // check user if already exist
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({
        error: "email already exist",
      });
    }

    const user = await userModel.create({
      name,
      email,
      password,
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// sing in controller
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // check if user exiset
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        error: "email dosent exist",
      });
    }
    //check password
    if (user.password !== password) {
      return res.json({
        error: "password is not correct",
      });
    }
    res.json({
        message: "welocome",
        user
        
    })

  } catch (error) {
    console.log(error);
  }
};
