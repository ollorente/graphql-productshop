// @ts-check
import { model, Schema } from 'mongoose'

const schema = new Schema({
  url: {
    type: String,
    required: true
  },
  publicId: {
    type: String,
    default: ''
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product"
  },
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

export default model('Image', schema)