document.querySelector("#send").addEventListener("click", function (event) {
  event.preventDefault();
  let notification = document.querySelector(".notification");
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
  }, 2900);
});
