import express from "express"
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js"
import { contact, getDashboardStats, courseRequest } from "../controllers/otherControllers.js";

const router = express.Router();

//contact from
router.route("/contact").post(contact)

//Request from
router.route("/courserequest").post(courseRequest)

router.route("/admin/stats").get(isAuthenticated, authorizeAdmin, getDashboardStats)


export default router
