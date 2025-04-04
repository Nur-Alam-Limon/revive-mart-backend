import mongoose, { Schema, Document } from 'mongoose';

interface ITransaction extends Document {
  buyerID: mongoose.Types.ObjectId;
  sellerID: mongoose.Types.ObjectId;
  itemID: mongoose.Types.ObjectId;
  tran_id: string;
  status: 'pending' | 'completed' | 'cancelled' | 'failed';
  timestamp: Date;
}

const transactionSchema = new Schema<ITransaction>({
  buyerID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  sellerID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  itemID: { type: Schema.Types.ObjectId, ref: 'Listing', required: true },
  tran_id: { type: String, required: true },
  status: { type: String, enum: ['pending' , 'completed' , 'cancelled' , 'failed'], default: 'pending' },
  timestamp: { type: Date, default: Date.now }
});

const Transaction = mongoose.model<ITransaction>('Transaction', transactionSchema);

export { Transaction, ITransaction };
