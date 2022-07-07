var btnSuccess = document.querySelector(".control .success");
var btnWarning = document.querySelector(".control .warning");
var btnError = document.querySelector(".control .error");

{
  /* <div class="toast success">
<i class="fa-solid fa-circle-check"></i>
<span class="message">This is a success message</span>
<span class="countdown"></span>
</div>
<div class="toast error">
<i class="fa-solid fa-triangle-exclamation"></i>
<span class="message">This is a success message</span>
<span class="countdown"></span>
</div>
<div class="toast warning">
<i class="fa-solid fa-circle-exclamation"></i>
<span class="message">This is a success message</span>
<span class="countdown"></span>
</div> */
}

const createToast = (status) => {
  var toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(status);

  let template = "";
  if (status === "success") {
    template = `
  <i class="fa-solid fa-circle-check"></i>
  <span class="message">This is a success message</span>
  <span class="countdown"></span>`;
  } else if (status === "warning") {
    template = `
  <i class="fa-solid fa-circle-exclamation"></i>
  <span class="message">This is a warning message</span>
  <span class="countdown"></span>  
  `;
  } else if (status === "error") {
    template = `
    <i class="fa-solid fa-triangle-exclamation"></i>
    <span class="message">This is a error message</span>
    <span class="countdown"></span>
  `;
  }
  toast.innerHTML = template;

  var toastList = document.getElementById("toasts");
  toastList.appendChild(toast);

  setTimeout(function () {
    toast.style.animation = "slideHide 3s ease forwards";
  }, 4000);
  setTimeout(function () {
    toast.remove();
  }, 6000);
};

btnSuccess.addEventListener("click", (e) => {
  createToast("success");
});

btnWarning.addEventListener("click", (e) => {
  createToast("warning");
});

btnError.addEventListener("click", (e) => {
  createToast("error");
});
