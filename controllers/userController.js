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
