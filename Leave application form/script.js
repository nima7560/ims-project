/** @format */
const usernameE1 = document.querySelector("#username");
const emailE1 = document.querySelector("#email");
const phonenumberE1 = document.querySelector("#phonenumber");
const form = document.querySelector("#signup");

form.addEventListener("Submit", function (e) {
  e.preventDefault();

  let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPhoneNumberValid = checkPhoneNumber();

  let isFormValid = isUsernameValid && isEmailValid && isPhoneNumberValid;

  if (isFormValid) {
  }
});

const checkUsername = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const user_name = usernameE1.value.trim();
  if (!isRequired(user_name)) {
    showError(usernameE1, "Username cannot be blank.");
  } else if (!isBetween(user_name.length, min, max)) {
    showError(
      usernameY1,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(usernameE1, "");
    valid = true;
  }
  return valid;
};

const isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const showError = (input, message) => {
  const formField = input.parentElement;

  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input, message) => {
  const formField = input.parentElement;

  formField.classList.remove("error");
  formField.classList.add("success");

  const success = formField.querySelector("small");
  success.textContent = message;
};

const checkEmail = () => {
  let valid = false;
  const email = emailE1.value.trim();
  if (!isRequired(email)) {
    showError(emailE1, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailE1, "Email is not valid.");
  } else {
    showSuccess(emailE1);
    valid = true;
  }
  return valid;
};

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
  return re.test(email);
};
const checkPhoneNumber = () => {
  let valid = false;
  const phonenumber = phonenumberE1.value.trim();
  if (!isRequired(phonenumber)) {
    showError(phonenumberE1, "Phone number cannot be blank.");
  } else if (!isPhoneNumberValid(phonenumber)) {
    showError(phonenumberE1, "Phone number not valid");
  } else {
    showSuccess(phonenumberE1);
    valid = true;
  }
  return valid;
};
const isPhoneNumberValid = (phonenumber) => {
  const re = /^ \d{17}(\d{6})$/;
  return re.test(phonenumber);
};
function f1() {
  if (document.getElementById("username").value === "") {
    alert("Please enter your name");
    return false;
  } else if (document.getElementById("email").value === "") {
    alert("Please enter your email");
    return false;
  } else if (document.getElementById("phonenumber").value === "") {
    alert("Please enter your phone number");
    return false;
  } else if (document.getElementById("address").value === "") {
    alert("Please enter your address");
    return false;
  } else if (document.getElementById("leave").value === "") {
    alert("Please select a leave reason");
    return false;
  } else if (document.getElementById("start").value === "") {
    alert("Please enter your leave start date");
    return false;
  } else if (document.getElementById("end").value === "") {
    alert("Please enter your leave end date");
    return false;
  } else if (document.getElementById("reason").value === "") {
    alert("Please enter your leave reason briefly");
    return false;
  } else if (document.getElementById("declare").checked == false) {
    alert("Please check the declaration box");
    return false;
  } else {
    alert("Form is filled up successfully... Thank you!!!!!!");
  }
}
