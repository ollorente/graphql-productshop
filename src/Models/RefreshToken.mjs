import { model, Schema } from 'mongoose'

const schema = new Schema({
  token: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('RefreshToken', schema)