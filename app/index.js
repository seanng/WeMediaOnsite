$(document).ready(function() {
  var url = '/register';

  function checkboxHandler (e) {
    if (document.getElementById('checkbox').checked) {
      $('#submit').removeAttr('disabled')
    } else {
      $('#submit').attr('disabled', 'true')
    }
  }

  function submitHandler (e) {
    e.preventDefault();
    var data = {
      email: $('#email').val(),
      password: $('#password').val(),
    }

    axios.post(url, data)
    .then(function(response) {
      console.log('response from post:', response);
    })
    .catch(function(error) {
      console.log('error from post:', error);
    })
  };

  $('#checkbox').on('click', checkboxHandler);
  $('#submit').on('click', submitHandler);

}())