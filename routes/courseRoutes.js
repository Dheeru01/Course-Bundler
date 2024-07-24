import express from "express";
import {getAllCourses, createCourse, getCourseLectures, addLecture, deleteCourse, deleteLecture} from "../controllers/courseController.js"
import singleUpload from "../middlewares/multer.js";
import { authorizeAdmin, isAuthenticated,authorizeSubscribers } from "../middlewares/auth.js";

const router = express.Router()

//Get All Courses without Lectures
router.route("/courses").get(getAllCourses)
//Create  new course - only admin
router.route("/createcourse").post(isAuthenticated,authorizeAdmin,singleUpload,createCourse) 
//Add Lecture, Delete Course, Get Course Details
router.route("/course/:id").get(isAuthenticated,authorizeSubscribers,getCourseLectures).post(isAuthenticated,authorizeAdmin,singleUpload,addLecture).delete(isAuthenticated, authorizeAdmin, deleteCourse)
//Delete Lectures
router.route("/deletelecture").delete(isAuthenticated,authorizeAdmin,singleUpload,deleteLecture) 


export default router;