const getAllUsers = (req, res) => {
  const data = {
    id: "1",
    name: "John Doe",
    email: "JohnDoe3@gmail.com",
    address: "Jl. Jalan",
  };

  res.json({
    message: "GET users suksess!",
    data: data,
  });
};

const createUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "CREATE new users suksess!",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  console.log("idUser:", id);

  res.json({
    message: "UPDATE users suksess!",
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  console.log("idUser:", id);

  res.json({
    message: "DELETE users suksess!",
    data: {
      id: id,
      email: "JohnDoe3@gmail.com",
      address: "Jl. Jalan",
    },
  });
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
