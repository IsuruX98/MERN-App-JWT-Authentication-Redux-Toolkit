import { Router } from "express";
const router = Router();

//import all controllers
import * as controllers from "../controllers/appController.js";

//POST methods
router.route("/register").post(controllers.register); //register user
//router.route("/registerMail").post(); //send the email
router.route("/authenticate").post((req, res) => res.end()); //authenticate user
router.route("/login").post(controllers.login); //login in app

//GET methods
router.route("/user/:username").get(controllers.getUser); //user with username
router.route("/generateOTP").get(controllers.generateOTP); //generate random OTP
router.route("/verifyOTP").get(controllers.verifyOTP); //verify generated OTP
router.route("/createResetSession").get(controllers.createResetSession); //reset all the variables

//PUT methods
router.route("/updateuser").put(controllers.updateUser); //in use of update the user profile
router.route("/resetPassword").put(controllers.resetPassword); //use to reset password

export default router;
