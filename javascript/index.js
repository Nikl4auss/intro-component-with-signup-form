const inputs = document.querySelectorAll(".main-product__input");
const sendButton = document.querySelector(".main-product__button");

const warningMessages = [
  {
    id: "firstName",
    message: "First Name cannot be empty",
  },
  {
    id: "lastName",
    message: "Last Name cannot be empty",
  },
  {
    id: "email",
    message: "Looks like this is not an email",
  },
  {
    id: "password",
    message: "Password cannot be empty",
  },
];

sendButton.onclick = () => {
  inputs.forEach((input) => {
    input.type === "email" ? validateEmail(input) : isEmpty(input);
  });
};

let isEmpty = (input) => {
  let test = input.value.length === 0;
  toggleWarning(input, test);
  return test;
};

let validateEmail = (email) => {
  console.log(email.value);
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let test = regex.test(email.value);
  toggleWarning(email, !test);
  return test;
};

let toggleWarning = (input, condition) => {
  let warningIcon = input.parentNode.querySelector(".warning-icon");
  let warningText = input.parentNode.querySelector(".warning-text");
  let message = warningMessages.find((element) => element.id === input.id);
  warningText.textContent = message.message;
  if (condition) {
    input.classList.add("main-product__input--warning");
    warningIcon.classList.add("display");
    warningText.classList.add("display");
  } else {
    if (
      warningIcon.classList.contains("display") ||
      warningText.classList.contains("display") ||
      input.classList.contains("main-product__input--warning")
    ) {
      input.classList.remove("main-product__input--warning");
      warningIcon.classList.remove("display");
      warningText.classList.remove("display");
    }
  }
};
