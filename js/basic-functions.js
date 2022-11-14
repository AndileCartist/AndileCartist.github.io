const htmlElement = {
  emailField: document.querySelector("#email"),
  messageField: document.querySelector("#message"),
  validationText: document.getElementsByClassName("validation-text")[0],
};

document.querySelector("#send").addEventListener("click", function (event) {
  event.preventDefault();
  const isValidEmail = /^\S+@\S+\.\S+$/.test(htmlElement.emailField.value);
  const isEnoughText =
    /[a-z]/gi.test(htmlElement.messageField.value) &&
    htmlElement.messageField.value.length > 9;
  if (!isValidEmail) {
    htmlElement.validationText.innerText = "Invalid Email";
    htmlElement.validationText.style.visibility = "visible";
    return;
  }
  if (!isEnoughText) {
    htmlElement.validationText.innerText = "10 characters required";
    htmlElement.validationText.style.visibility = "visible";
    return;
  }

  let notification = document.querySelector(".notification");
  htmlElement.emailField.value = "";
  htmlElement.messageField.value = "";
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2900);
});

htmlElement.emailField.addEventListener("focus", function () {
  htmlElement.validationText.style.visibility = "hidden";
});
htmlElement.messageField.addEventListener("focus", function () {
  htmlElement.validationText.style.visibility = "hidden"
})
