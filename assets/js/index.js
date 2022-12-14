
$('#add_question').submit(function(event){
  alert("Data Inserted Successfully!");
})

$('#update_question').submit(function(event){
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {}

  $.map(unindexed_array, function(n, i){
    data[n['name']] = n['value'] //name of the variable (id, question, answer...) assigned to its value
  })
  console.log(data);

  var request = {
    "url":  `http://localhost:3000/api/questions/${data.id}`,
    "method": "PUT",
    "data": data
  }

  $.ajax(request).done(function(response){
    alert("Data Updated Successfully!")
  })
})


if(window.location.pathname == "/"){
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function(){
    var id = $(this).attr("data-id")

    var request = {
      "url":  `http://localhost:3000/api/questions/${id}`,
      "method": "DELETE"
    }

    if(confirm("Do you really want to delete this record?")){
      $.ajax(request).done(function(response){
        alert("Data Deleted Successfully!");
        location.reload();
      })
    }
  })
}
