import mongoose from 'mongoose'

// Schema for Customer
const customerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    created: {
        type: Date,
        default: Date.now
    }
})

const Customer = mongoose.model('Customer', customerSchema)

export default Customer