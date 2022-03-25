
import mongoose from "mongoose";

const signUpSchema =  new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: {
        type: String,
        required: true,
    },
    email: String,
    password: String,
});

const SignupModel = mongoose.model('Signupdetails', signUpSchema);

//module.exports = {SignupModel, validate};

export default SignupModel;