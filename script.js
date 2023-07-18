const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent the form from being submitted and the page from being refreshed

  validateInputs();
});

const setError = (element, message) => {
  //element - input element for which the error message should be displayed, message - message to be displayed
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
/*const isValidPassword1 = (password1) => {
  const re = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*[!#$%&? "]).*$/;
  return re.test(String(phone));
};*/
const validateInputs = () => {
  const fullnameValue = fullname.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const password1Value = password1.value.trim();
  const password2Value = password2.value.trim();

  if (fullnameValue === "") {
    setError(fullname, "Username is required");
  } else if (fullnameValue.length < 5) {
    setError(fullname, "Name must not be less than 5 characters");
  } else {
    setSuccess(fullname);
  }
  if (phoneValue === "") {
    setError(phone, "Phone number is required");
  } else if (phoneValue.length < 10) {
    setError(phone, "Phone no. must be 10 digits");
  } else {
    setSuccess(phone);
  }
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (password1Value === "") {
    setError(password1, "Password is required");
  } else if (password1Value === fullnameValue) {
    setError(password1, "Password and Name entered can't be equal");
  } else if (password1Value === "password") {
    setError(password1, "Password can't be a 'password'");
  } else if (password1Value.length < 8) {
    setError(password1, "Password must be at least 8 characters ");
  } else {
    setSuccess(password1);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== password1Value) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }

  /*form.submit();

  setTimeout(() => {
    location.reload();
  }, 10000);*/
};
