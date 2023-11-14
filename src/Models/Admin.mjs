import { model, Schema } from 'mongoose'

const schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  isLock: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('Admin', schema)