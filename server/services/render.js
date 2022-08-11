const axios = require('axios'); //allow us to make a request


exports.homeRoutes = (req, res) => {
  // make a get request to /api/questions
  axios.get('http://localhost:3000/api/questions')
    .then(function(response){
      res.render('index', {questions:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}

exports.add_question = (req, res) => {
  res.render('add_question');
}

exports.update_question = (req, res) => {
  axios.get('http://localhost:3000/api/questions', {params:{id:req.query.id}})
    .then(function(questiondata){
      res.render("update_question", {question:questiondata.data})
    })
    .catch(err=>{
      res.send(err);
    })
}
