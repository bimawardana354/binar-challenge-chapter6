module.exports = (req, res, next) => {
  const { role } = req.session.User;

  if (role != 'superuser') {
    return res.redirect('/login');
  }
  return next();
};
