import User from "../../models/User.js"
import bcrypt from "bcryptjs"

export const  registerUser = async(req,res) => {
    const {userName,userEmail,password,userCourse} = req.body;
    
    const exsistingUser = await User.findOne({
        $or : [{ userEmail },{ userName }]
    })

    if(exsistingUser){
        return res.status(400).json({
            success : false,
            message : "Username or email already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User ({userName, userEmail, userCourse, password : hashedPassword})

    await newUser.save()

    return res.status(201).json({
        success : true,
        message : "User created successfully"
    })
}