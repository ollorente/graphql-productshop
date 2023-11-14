// @ts-check
import { model, Schema } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    lowercase: true,
    trim: true,
    required: true
  },
  _products: [{
    type: Schema.Types.ObjectId,
    ref: "Product"
  }],
  _productsCount: [{
    type: Number,
    default: 0
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  isLock: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true,
  versionKey: false
})

export default model('Country', schema)