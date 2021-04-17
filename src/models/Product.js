import mongoose, { Schema } from 'mongoose'

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 256,
    min: 4
  },
  description: {},
  value: {},
  qtd: {},
  cover: {}
})

export default mongoose.model('Product', ProductSchema)
