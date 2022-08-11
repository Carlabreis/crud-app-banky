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
      // res.send(data)
      res.redirect('/add-question')
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating a create operation."
      });
    });
}

// retrieve and return all questions / retrieve and return a single question
exports.find = (req,res) => {

  if(req.query.id){
    const id = req.query.id;

    Questiondb.findById(id)
      .then(data=>{
        if(!data){
          res.status(404).send({message:"Not found user with id=" + id})
        }else{
          res.send(data)
        }
      })
      .catch(err=>{
        res.status(500).send({message:"Error retrieving user with id=" + id})
      })

  }else{
    Questiondb.find()
    .then(question=>{
      res.send(question)
    })
    .catch(err=>{
      res.status(500).send({message: err.message || "Error occured while retriving question's information"})
    })
  }
}

// update a new identified by question id
exports.update = (req,res) => {
  if(!req.body){
    return res
      .status(400)
      .send({message:"Data to update can not be empty"})
  }

  const id = req.params.id;
  Questiondb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
    .then(data=>{
      if(!data){
        res.status(400).send({message:`Cannot update user with ${id}. Maybe user not found!`})
      }else{
        res.send(data)
      }
    })
    .catch(err=>{
      res.status(500).send({message:'Error update question information'})
    })
}

// delete a question with especified question id in the request
exports.delete = (req,res) => {
  const id = req.params.id;

  Questiondb.findByIdAndDelete(id)
    .then(data=>{
      if(!data){
        res.status(404).send({message:`Cannot delete with id ${id}. Maybe id is wrong.`})
      }else{
        res.send({
          message:"User was deleted successfully!"
        })
      }
    })
    .catch(err=>{
      res.status(500).send({
        message:"Could not delete question with id=" + id
      });
    });
}
