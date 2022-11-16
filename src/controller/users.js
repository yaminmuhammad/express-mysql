const getAllUsers = (req, res) => {
  res.json({
    message: "GET users suksess!",
  });
};

const createUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "CREATE new users suksess!",
    data: req.body,
  });
};

module.exports = {
  getAllUsers,
  createUser,
};
