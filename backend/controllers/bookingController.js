import Booking from '../models/Booking.js'
import Stripe from "stripe"

// create new booking
export const createBooking = async (req,res)=>{
    const newBooking = new Booking(req.body)
    
    try {
        const savedBooking = await newBooking.save()
        res.status(200).json({success:true ,message:'your tour is booked',data:savedBooking})
    } catch (err) {
        res.status(500).json({success:false ,message:'internal server error'})
    }
};

// get single booking
export const getBooking = async(req,res)=>{
    const id = req.params.id
    try {
        const book = await Booking.findById(id)
        res
        .status(200)
        .json({
            success:true,
            message:'booking found',data:book})
    } catch (err) {
        res
        .status(404)
        .json({success:false,message:'booking not found'})
    }
}

// get all booking
export const getAllBooking = async(req,res)=>{
    
    try {
        const books = await Booking.find(id)
        res
        .status(200)
        .json({
            success:true,
            message:'booking found',
            data:books,})
    } catch (err) {
        res
        .status(500)
        .json({success:false,message:'internal server errr'})
    }
}

export const payment = async(req,res)=>{
    try{
        const stripe=new Stripe(process.env.PAYMENT_API_KEY);
        const session=await stripe.checkout.sessions.create({
            line_items: [
                {
                  price_data: {
                    currency: 'inr',
                    product_data: {
                      name: req.body.tourName,
                    },
                    unit_amount: req.body.price*100,
                  },
                  quantity: 1,
                },
              ],
              mode: 'payment',
              success_url: `http://localhost:3000/thank-you?userID=${req.body.userID}&userEmail=${req.body.userEmail}&tourName=${req.body.tourName}&fullName=${req.body.fullName}&phone=${req.body.phone}&guestSize=${req.body.guestSize}&bookAt=${req.body.bookAt}&price=${req.body.price}`,
              cancel_url: 'http://localhost:3000',
        });
        // console.log(req.body);
        res.status(200).json({success:true ,message:'getting you to the payment',data:session.url})
    }
    catch(err){
        console.log(err);
    }
}