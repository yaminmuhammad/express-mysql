const getAllUsers = (req, res) => {
  res.json({
    message: "GET users suksess!",
  });
};

const createUser = (req, res) => {
  res.json({
    message: "CREATE new users suksess!",
  });
};

module.exports = {
  getAllUsers,
  createUser,
};
