import mongoose, { Schema } from 'mongoose'

const CourseSchema = new Schema({
  name: {},
  description: {},
  value: {},
  cover: {}
})

export default mongoose.model('Course', CourseSchema)
