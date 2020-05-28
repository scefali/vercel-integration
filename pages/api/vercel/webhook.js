const fn = async (req, res) => {
  console.log('webhook body', JSON.stringify(req.body))
  res.send({ ok: true });
};

export default fn;
