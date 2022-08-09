var Questiondb = require('../model/model');

// create and save new question
exports.create = (req,res) => {
  // validate request
  if(!req.body){
    res.status(400).send({ message: "Content can not be empty!"});
    return;
  }

  //new question
  const question = new Questiondb({
    question: req.body.question,
    answer: req.body.answer,
    topic: req.body.topic,
    status: req.body.status
  })

  // save question in the database
  question
    .save(question)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating a create operation."
      });
    });
}

// retrieve and return all questions / retrieve and return a single question
exports.find = (req,res) => {

}

// update a new identified by question id
exports.update = (req,res) => {

}

// delete a question with especified question id in the request
exports.delete = (req,res) => {

}
