const logRequest = (req, res, next) => {
  console.log("terjadi log request ke path:", req.path);
  next();
};

module.exports = logRequest;
