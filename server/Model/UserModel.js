import mongoose from "mongoose";

const { Schema } = mongoose;
const UserSchema = Schema({
    UserName: {
        type: String,
        required: [true, "UserName can't be blank"]
    },
    email: {
        type: String,
        required: [true, "Email can't be blank"],
    },
    password: {
        type: String,
        required: [true, "Password can't be blank"]
    },
    ProfileAvatar: {
        type: String,
        default: 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=   '
    }
}, { timestamps: true })



const UserSettings = mongoose.model('User', UserSchema)

export default UserSettings;