import { Schema } from "mongoose";

const meetingSchema = new Schema({
    user_id: {
        type: String

    },
    meetingCode: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Meeting = mongoose.model('Meeting', meetingSchema)
export { Meeting }