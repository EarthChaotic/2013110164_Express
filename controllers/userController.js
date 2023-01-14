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
  const {name , email , password} = req.body
  let user = new User()
  user.name = name
  user.email = email
  user.password = await user.encryptpassword(password)

  await user.save()

  res.status(201).json({
    message:"Register Sed Laew :)"
  })
}
