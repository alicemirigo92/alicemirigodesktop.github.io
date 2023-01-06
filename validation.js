const form = document.querySelector('form');

function validate() {
  const emailInputValue = document.getElementById('email').value;
  const emailTest = /^[a-z0-9_!#$%&'*+=?`{|}~^.-]+@[a-z0-9.-]+$/gm;

  document.forms[0].onsubmit = function submitForm(e) {
    if (emailInputValue.match(emailTest)) {
      document.getElementById('emailMsg').innerHTML = 'Hurray';
      document.getElementById('emailMsg').style.visibility = 'visible';
      document.getElementById('emailMsg').style.color = 'yellow';
      form.submit();
    } else {
      document.getElementById('emailMsg').innerHTML = 'Emails are case sensitive! please enter the email in lowercase';
      document.getElementById('emailMsg').style.visibility = 'visible';
      document.getElementById('emailMsg').style.color = 'red';
      e.preventDefault();
    }
  };
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validate();
});