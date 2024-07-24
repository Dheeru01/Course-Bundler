import express from "express";
import {register, login, logout, getMyProfile, changePassword, updateProfile,updateProfilePicture, forgetPassword, resetPassword, addToPlaylist, removeFromPlaylist, getAllUsers, updateUserRole, deleteUser, deleteMyProfile} from "../controllers/userController.js"
import { isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";
import { authorizeAdmin } from "../middlewares/auth.js";


const router = express.Router()

//To register a new user 
router.route("/register").post(singleUpload,register)

//Login
router.route("/login").post(login)
//Logout
router.route("/logout").get(logout)
//Get my profile Delete My Profile
router.route("/me").get(isAuthenticated,getMyProfile).delete(isAuthenticated,deleteMyProfile)
//Change Password
router.route("/changepassword").put(isAuthenticated,changePassword)
//Update Profile
router.route("/updateprofile").put(isAuthenticated,updateProfile)
//Update Profile Pic
router.route("/updateprofilepicture").put(isAuthenticated,singleUpload,updateProfilePicture)

//Forget Password
router.route("/forgetpassword").post(forgetPassword)
//Reset Password
router.route("/resetpassword/:token").put(resetPassword)

//Add to Playlist
router.route("/addtoplaylist").post(isAuthenticated,addToPlaylist)
//Remove from playist
router.route("/removefromplaylist").delete(isAuthenticated,removeFromPlaylist)

//Admin Routes
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers)

router.route("/admin/user/:id").put(isAuthenticated, authorizeAdmin, updateUserRole).delete(isAuthenticated, authorizeAdmin, deleteUser)



export default router;