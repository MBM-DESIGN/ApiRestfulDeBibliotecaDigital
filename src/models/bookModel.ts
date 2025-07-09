import { model, Schema } from "mongoose"

const bookSchema = new Schema({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  publishedYear: { type: Number }, // Opcional por defecto
  genre: { type: String }, // Opcional por defecto
  available: { type: Boolean, default: true }
}, {
  versionKey: false
})

const Book = model("Book", bookSchema)

export { Book }

