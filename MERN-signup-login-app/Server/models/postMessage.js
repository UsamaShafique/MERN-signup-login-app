import mongoose from 'mongoose';

const loginSchema = mongoose.Schema({
    username: String,
    password: String
});

//const PostMessage = mongoose.model('PostMessage', postSchema);
const LoginModel = mongoose.model('LoginModel', loginSchema);

export default LoginModel;