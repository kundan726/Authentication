import authModel from "../models/authModel.js";
import bcrypt, { genSalt } from "bcrypt";
import jwt from "jsonwebtoken";
import userRegRoute from "../routes/userRoutes.js";

class userController {
  static userRegistration = async (req, res) => {
    console.log("111111111");
    const { name, email, password, confirm_password, tc } = req.body;
    const user = await authModel.findOne({ email });
    if (user) {
      res.status(400).send({
        status: "Failure",
        msg: "Email Already Exist",
      });
    } else {
      try {
        if (name && email && password && confirm_password) {
          if (password === confirm_password) {
            const salt = await bcrypt.genSalt(12);
            const hashPassword = await bcrypt.hash(password, salt);
            const userData = {
              name: name,
              email: email,
              password: hashPassword,
              tc: tc,
            };
            await authModel.create(userData);
            res.status(200).send({
              status: "Success",
              msg: "Data Saved Successfully",
            });
          } else {
            res.status(400).send({
              status: "Failure",
              msg: "Password and confirm password doesn't match.",
            });
          }
        } else {
          res.status(400).send({
            status: "Failure",
            msg: "Please fill all the details",
          });
        }
      } catch (error) {
        console.log("Error in saving data in DB", error);
      }
    }
  };
}

export default userController;
