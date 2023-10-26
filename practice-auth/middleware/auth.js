const jwt = require("jsonwebtoken");

module.exports = {
   verifyToken: (req, res, next) => {
      try {
         let token = req.headers.authorization;
         if (!token) {
            return res.status(401).send({ message: "Token empty" });
         }
         token = token.split(" ")[1];
         let verifyUser = jwt.verify(token, "JCWD0208");
         req.user = verifyUser;
         next();
      } catch (error) {
         console.log(error);
         res.status(400).send({ message: error.message });
      }
   },
   checkRole: (req, res, next) => {
      //   if (req.user.isAdmin) {
      //      return next();
      //   }
      req.user.isAdmin
         ? next()
         : res
              .status(401)
              .send({ message: "You do not have permission to admin" });
   },
};
