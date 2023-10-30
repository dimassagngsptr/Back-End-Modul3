const { body, validationResult } = require("express-validator");

module.exports = {
   checkRegister: async (req, res, next) => {
      try {
         await body("username").notEmpty().withMessage("harus diisi").run(req);
         await body("email")
            .notEmpty()
            .withMessage("email harus diisi")
            .isEmail()
            .withMessage("invalid email format")
            .run(req);
         await body("password")
            .notEmpty()
            .withMessage("password is required")
            .isStrongPassword({
               minLength: 6,
               minLowercase: 1,
               minUppercase: 1,
               minNumbers: 1,
               minSymbols: 1,
            })
            .run(req);
         const validation = validationResult(req);
         validation.isEmpty()
            ? next()
            : res.status(400).send({
                 message: "validation failed",
                 error: validation.array(),
              });
      } catch (error) {
         console.log(error);
         res.status(400).send(error);
      }
   },
};
