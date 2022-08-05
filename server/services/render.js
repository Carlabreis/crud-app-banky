exports.homeRoutes = (req, res) => {
  res.render('index');
}

exports.add_question = (req, res) => {
  res.render('add_question');
}

exports.update_question = (req, res) => {
  res.render('update_question');
}
