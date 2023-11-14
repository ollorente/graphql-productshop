// @ts-check
import bcrypt from 'bcryptjs'
import md5 from 'md5'
import { model, Schema } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 60
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 12,
    maxLength: 80
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 20
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    minLength: 10,
    maxLength: 10
  },
  image: {
    type: String,
    default: ''
  },
  publicId: {
    type: String,
    default: ''
  },
  gravatar: {
    type: String,
    default: ''
  },
  provider: {
    type: String,
    default: 'local',
    lowercase: true,
    trim: true
  },
  _categories: [{
    type: Schema.Types.ObjectId,
    ref: "Category"
  }],
  _categoriesCount: [{
    type: Number,
    default: 0
  }],
  _images: [{
    type: Schema.Types.ObjectId,
    ref: "Image"
  }],
  _imagesCount: [{
    type: Number,
    default: 0
  }],
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

// @ts-ignore
schema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 12)
  this.password = hash

  this.gravatar = md5(this.email)

  next()
})

export default model('User', schema)
