
import LoginModel from '../models/postMessage.js';
import SignupModel from '../models/signupmodel.js';


// export const loginUser = async (req, res)=>{
   
//     res.send("login API is working");

// };

export const SignupUsers = async (req, res) => {
  //  const {username, password} = req.body;
    const signup = req.body;

    const newuserData = new SignupModel(signup);

    try {
        
        await newuserData.save();
        res.status(201).json(newuserData);

    } catch (error) {
        res.status(409).json({message: error.message});
    }
};