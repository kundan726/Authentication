import jwt from "jsonwebtoken";
import authModel from "../models/authModel.js";

const authenticUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (token && token.startsWith("Bearer")) {
      const actualToken = token.split(" ")[1];
      const payloadUsedToMakeJWTToken = jwt.verify(
        actualToken,
        process.env.SECRET_KEY
      );
      const user = await authModel.findOne({
        _id: payloadUsedToMakeJWTToken.userID,
      });
      req.user = user;
      next();
    } else {
      res.status(400).send({
        status: "Failure",
        msg: "Token not found",
      });
    }
  } catch (error) {
    console.log("Error while changing password:", error);
  }
};

export default authenticUser;
