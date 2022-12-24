const Shop = require("../models/shop");

exports.index = async (req, res, next) => {
  const shop = await Shop.find().sort({ _id: -1 });
  res.status(200).json({
    data: shop,
  });
};
exports.insert = async (req, res, next) => {
  const {
    name,
    photo,
    location: { lat, lgn },
  } = req.body;

  let shop = new Shop({
    name: name,
    photo: photo,
    location: {
      lat: lat,
      lgn: lgn,
    },
  });
  await shop.save();

  res.status(200).json({
    message: "เพิ่มข้อมูลเรียบร้อยแล้ว",
  });
};

exports.show = async (req, res, next) => {
  try {
    const { id } = req.params;

    const shop = await Shop.findOne({
      _id: id,
    });

    if (!shop) {
      throw new Error("ไม่พบข้อมูล");
    } else {
      res.status(200).json({
        data: shop,
      });
    }
  } catch (Error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด " + Error.message,
      },
    });
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const shop = await Shop.deleteOne({
      _id: id,
    });
    if (shop.deletedCount === 0) {
      throw new Error("ไม่สามารถลบข้อมูลได้ / ไม่พบผู้ใช้งาน");
    } else {
      res.status(200).json({
        message: "ลบข้อมูลเรียบร้อยแล้ว",
      });
    }
  } catch (Error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด " + Error.message,
      },
    });
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      photo,
      location: { lat, lgn },
    } = req.body;
    const shop = await Shop.updateOne(
      { _id: id },
      {
        name: name,
        photo: photo,
        location: {
          lat: lat,
          lgn: lgn,
        },
      }
    );
    res.status(200).json({
      message: "แก้ไขข้อมูลเรียบร้อยแล้ว",
    });
  } catch (Error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด " + Error.message,
      },
    });
  }
};
