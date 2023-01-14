const User = require("../models/user")

exports.index = function (req, res, next) {
  res.status(200).json({
    fullname: "Jirapon Tresup",
  });
};

exports.bio = function (req, res, next) {
  res.status(200).json({
    fullname: "Jirapon Tresup",
    Nickname: "Earth",
    hobby: "Gaming",
    gitusername: "EarthChaotic",
  });
};

exports.register = async(req,res,next) =>{
try {
  const {name , email , password} = req.body

  const existEmail = await User.findOne({ email:email })
  if(existEmail){
    const error = new Error("อีเมลถูกใช้แล้ว")
    error.statusCode = 400
    throw error;
  }

  let user = new User()
  user.name = name
  user.email = email
  user.password = await user.encryptpassword(password)

  await user.save()

  res.status(201).json({
    message:"Register done"
  })
}
catch(error){
  next(error)
}
}
