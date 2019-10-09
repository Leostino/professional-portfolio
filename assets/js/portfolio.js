
// console.log("connected");

// $("#contact-form").on("submit", function(event) {

//     let  name = $("#user-name").val();
//     let email = $("#user-email").val();
//     let message = $("#user-message").val();

//     // if((!$("#user-name").val()) || (!$("#user-email").val()) || (!$("#user-message").val())) {

//     //     alert("Please check your entries");

//     // }else{

       
        
//     // }

//     console.log(name, email, message);

//     event.preventDefault();
//     $(this).get(0).reset();
//     alert("Message Sent");
    

//     $.ajax({
//         url: "https://formspree.io/leonardezeudu@gmail.com",
//         type: "POST",
//         data: $(this).serialize(),
//         dataType: "json"
//       })
// })

// // https://formsubmit.co/leonardezeudu@gmail.com, https://formsubmit.co/form/submission

  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("contact-form");
    var button = document.getElementById("submit-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
    //   button.style = "display: none ";
      status.innerHTML = "Thanks! Message Sent";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }