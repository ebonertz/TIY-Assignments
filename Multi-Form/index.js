/*  function myFunction() {
        var x  = document.getElementById("frm1");
        var text = "";
        var i;
      for (i=0; i < x.length ; i++) {
        text += x.elements[i].value + ""<br>"" ;
      } */



var fname = document.querySelector("#first-name");
var lname = document.querySelector("#last-name");
var email = document.querySelector("#email-address");
var member = document.querySelector("#idmember");


  var formSubmit = document.querySelector("button");
  formSubmit.addEventListener("click", function(event) {
        console.log(fname.value);
        fname.value ="";
        console.log(lname.value);
        lname.value ="";
        console.log(email.value);
        email.value ="";
        event.preventDefault();
      });



        //var submit= document.getElementById("first-name")
      //  submit.addEventListener()


      /*


      onClick.addEventListener("click", function( )    {
              console.log();
            });


      var myForm= ["#firstName", "#lastName", "#emailAddress"];

            for (var i=0; i<=myForm.length; i++) {
              console.log(myForm[i])
            } **/
