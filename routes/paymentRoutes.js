import express from "express"
import { isAuthenticated } from "../middlewares/auth.js"
import { buySubcription, cancelSubscription, getRazorPayKey, paymentVerification } from "../controllers/paymentController.js"

const router = express.Router()

//Buy Subscription
router.route("/subscribe").get(isAuthenticated,buySubcription)

//Verify,Payment and save reference in database
router.route("/paymentverification").post(isAuthenticated,paymentVerification)

//Get Razorpay Key
router.route("/razorpaykey").get(getRazorPayKey)

//Cancel subscription
router.route("/subscribe/cancel").delete(isAuthenticated,cancelSubscription)

export default router
