var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm-password");
var form = document.querySelector("form");

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.add("error");
  small.innerText = message;
}

function showSuccess() {
  const smalls = document.querySelectorAll("small");
  smalls.forEach(
    (item) => (item.classList.remove("error"), (item.innerText = ""))
  );
}

function checkEmptyError(listInput) {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      isEmptyError = true;
      showError(input, "Không được để trống");
    }
  });
  return isEmptyError;
}

function checkEmail(input) {
  const regexEmail =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  input.value = input.value.trim();

  let isEmptyError = regexEmail.test(input.value);
  if (isEmptyError) {
    showError(input, "Email sai định dạng");
  }
  return isEmptyError;
}

function checkLengthError(input, min, max) {
  input.value = input.value.trim();

  if (input.value.length < min) {
    showError(input, `Phải có ít nhất ${min} ký tự`);
    return true;
  }

  if (input.value.length > max) {
    showError(input, `Không được dài quá ${max} ký tự`);
    return true;
  }

  return false;
}

function checkMatchPassword(passwordInput, cfPasswordInput) {
  if (passwordInput.value !== cfPasswordInput.value) {
    showError(input, "Mật khẩu không trùng khớp");
    return true;
  }
  return false;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  showSuccess();

  let isEmptyError = checkEmptyError([
    username,
    email,
    password,
    confirmPassword,
  ]);
  let isEmailError = checkEmail(email);
  let isUsernameLengthError = checkLengthError(username, 7, 10);
  let isPasswordLengthError = checkLengthError(password, 7, 10);
  let isMatchError = checkMatchPassword(password, confirmPassword);

  if (
    isEmptyError ||
    isEmailError ||
    isUsernameLengthError ||
    isPasswordLengthError ||
    isMatchError
  ) {
    // do somthing
  } else {
    // logic, call API
  }
});
