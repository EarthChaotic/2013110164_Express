const Company = require("../models/companys");

exports.index = async (req, res, next) => {
  const company = await Company.find();
  res.status(200).json({
    data: company,
  });
};

exports.insert = async (req, res, next) => {
  const {
    name,
    address: { province },
  } = req.body;

  let company = new Company({
    name: name,
    address: {
      province: province,
    },
  });
  await company.save();
  console.log(company);
  res.status(200).json({
    message: "เพิ่มข้อมูลเรียบร้อยแล้ว",
  });
};

exports.show = async (req, res, next) => {
  try {
    const { id } = req.params;

    const company = await Company.findOne({
      _id: id,
    });

    if (!company) {
      throw new Error("ไม่พบข้อมูล");
    } else {
      res.status(200).json({
        data: company,
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
    const company = await Company.deleteOne({
      _id: id,
    });
    if (company.deletedCount === 0) {
      throw new Error("ไม่สามารถลบข้อมูลได้ / ไม่พบข้อมูล");
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
      address: { province },
    } = req.body;

    //Find By ID
    // const company = await Company.findById(id);
    // company.name = name
    // company.salary = salary
    // await company.save()

    //Find by ID and Update
    // const company = await Company.findByIdAndUpdate(id, {
    //     name: name,
    //     salary: salary,
    //     });

    const company = await Company.updateOne(
      { _id: id },
      {
        name: name,
        address: { province: province },
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
