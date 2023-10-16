// ciri middleware adalah memiliki parameter next

module.exports = {
   getTime: (req, res, next) => {
      console.log("Time :", Date.now());

    // next dipasang diujung function
      next();
   },
};
