//Date picker function
$( function() {
    $( "#datepicker" ).datepicker();
  } );

  const title = document.querySelector("#title")
  const description = document.querySelector("#description")
  const date = document.querySelector("#datepicker")

  const button = document.querySelector("#button")

  function logRequest(event) {
    console.log(title)
  }

  button.addEventListener('click', logRequest);