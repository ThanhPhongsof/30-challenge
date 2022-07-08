var upload = document.querySelector("#mypicture");
var preview = document.querySelector(".preview");
var error = document.querySelector(".error");

upload.addEventListener("change", function (e) {
  var file = upload.files[0];
  if (!file) return;

  if (!file.name.endsWith(".jpg")) {
    error.textContent = "Hinh anh phai thuoc dinh dang jpeg";
    return;
  } else {
    error.textContent = "";
  }

  if (file.size / (1024 * 1024) > 5) {
    error.textContent = "Chi duoc upload anh < 5MB";
    return;
  } else {
    error.textContent = "";
  }

  var img = document.createElement("img");

  var fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onloadend = function () {
    img.src = e.target.result;
  };
  preview.appendChild(img);
});
