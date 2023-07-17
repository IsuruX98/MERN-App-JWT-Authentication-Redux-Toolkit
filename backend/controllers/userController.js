import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@desc     Auth user/set token
//route     POST /api/users/auth
//@access   Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  //checking the user email and password
  if (user && (await user.matchPassword(password))) {
    //creating the token
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//@desc     Register a new user
//route     POST /api/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  //destructuring the body data
  const { name, email, password } = req.body;

  //to check the user is already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //create user
  const user = await User.create({
    name,
    email,
    password,
  });

  //checking the user is created
  if (user) {
    //creating the token
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc     Logout user
//route     POST /api/users/logout
//@access   Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logged out" });
});

//@desc     Get user profile
//route     GET /api/users/profile
//@access   Private
const getUserProfile = asyncHandler(async (req, res) => {
  //console.log(req.user);

  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };

  res.status(200).json(user);
});

//@desc     Update user profile
//route     PUT /api/users/profile
//@access   Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update user profile" });
});

//@desc     Delete user profile
//route     DELETE /api/users/profile
//@access   Private
const deleteUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete user profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
