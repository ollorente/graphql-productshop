// @ts-check
import { model, Schema } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 60
  },
  _products: [{
    type: Schema.Types.ObjectId,
    ref: "Product"
  }],
  _productsCount: [{
    type: Number,
    default: 0
  }],
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
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

// @ts-ignore
schema.pre('save', async function (next) {

  next()
})

export default model('Category', schema)