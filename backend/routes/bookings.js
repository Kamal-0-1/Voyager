import express from 'express'
import { createBooking, getAllBooking, getBooking,payment } from '../controllers/bookingController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'
// import { verifyUser } from '../utils/verifyToken.js'



const router = express.Router()

router.post('/',verifyUser,payment)
router.post('/save',verifyUser,createBooking);  
router.get('/:id',verifyUser,getBooking)
router.get('/',verifyAdmin,getAllBooking)


export default router