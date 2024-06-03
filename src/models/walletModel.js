import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
  totalAmount: {
    type: Number,
    required: true,
    default: 0
  },
  availableToWithdraw: {
    type: Number,
    required: true,
    default: 0
  },
  transactions: [{
    date: {
      type: Date,
      default: Date.now
    },
    type: {
      type: String,
      enum: ['credit', 'debit'],
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    description: {
      type: String
    }
  }]
});

export default Wallet = mongoose.models.Wallet || mongoose.model('Wallet' , walletSchema)