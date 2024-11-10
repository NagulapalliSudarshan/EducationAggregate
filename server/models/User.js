import { Schema,model }from 'mongoose';

const UserSchema = Schema({
    userName : String,
    userEmail : String,
    password : String,
    userCourse : String,
})

export default model('User', UserSchema);