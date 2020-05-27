export default (req, res) => {
  console.log('req', req)
  console.log('res', res)
  res.status(200).json({ name: "John Doe" });
};
