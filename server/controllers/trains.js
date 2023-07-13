export const getAllTrain = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  res.status(200).send(token);
};
