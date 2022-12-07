//Date picker function
$(function() {
    $("#datepicker").datepicker();
});


  const title = $("#title");
  const description = $("#description")
  const date = $("#datepicker")





  $("#button").click(function(){
    console.log(title, description, date)
  })


  /*   function logRequest(event) {
    console.log(title, description, date)
  } */

  /*   const title = document.querySelector("#title")
  const description = document.querySelector("#description")
  const date = document.querySelector("#datepicker")

  const button = document.querySelector("#button") */
