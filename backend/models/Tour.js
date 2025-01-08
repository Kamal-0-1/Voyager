import mongoose from "mongoose";

const itineraryShema = new mongoose.Schema(
  {
    day:{
      type:Number,
      required:true,
    },
    activities:{
      type:String,
      required:true,
    }
  }
);

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    lat:{
      type:mongoose.Types.Decimal128,
      required:true,
    },
    lon:{
      type:mongoose.Types.Decimal128,
      required:true,
    },
    address: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    itinerary:[itineraryShema],
    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxGroupSize: {
      type: Number,
      required: true,
    },

    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],

    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);
