const fn = async (req, res) => {
  console.log('body', req.body)
  res.send({ ok: true });
};

export default fn;
