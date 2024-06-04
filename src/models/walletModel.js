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
  }],
  partner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PartnerApplication',
    required: true
  }
});

export default mongoose.models.Wallet || mongoose.model('Wallet', walletSchema);
