/*
Post
*/

const mongoose = require("mongoose")
const sequence = require("mongoose-sequence")(mongoose)
const Schema = mongoose.Schema

// -----------------------------------------------------------------------------
// PRECONFIGURATION

const modelName = "Post"

// -----------------------------------------------------------------------------
// SCHEMA

const schema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: "Account"
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    image_name: {
      type: String
    },
    image_url: {
      type: String
    },
    slug: {
      type: String
    },
    read_time: {
      type: Number
    }
  },
  { timestamps: true }
)

// -----------------------------------------------------------------------------
// GENERATED FIELDS

// Auto increment accountId
schema.plugin(sequence, { id: "post_counter", inc_field: "id" })

// -----------------------------------------------------------------------------
// DATA POPULATION

schema.pre("find", function(next) {
  this.select({
    __v: false
  })
  // this.populate([{ path: "creator", select: "name" }])
  next()
})

schema.pre("findOne", function(next) {
  this.select({
    __v: false
  })
  // this.populate([{ path: "creator", select: "name username url" }])
  next()
})

// Set updatedAt timestamp
// schema.pre("update", function() {
//   this.update(
//     {},
//     {
//       $set: { updatedAt: new Date() }
//     }
//   )
// })

// -----------------------------------------------------------------------------
// FINALLY REGISTER THE SCHEMA INTO MODEL

module.exports = mongoose.model(modelName, schema)