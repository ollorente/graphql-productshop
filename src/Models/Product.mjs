// @ts-check
import { model, Schema } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100
  },
  image: {
    type: String,
    default: ''
  },
  publicId: {
    type: String,
    default: ''
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  _images: [{
    type: Schema.Types.ObjectId,
    ref: "Image"
  }],
  _imagesCount: [{
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

export default model('Product', schema)