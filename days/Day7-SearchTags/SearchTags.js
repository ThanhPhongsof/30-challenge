var content = document.querySelector(".content");
var contents = document.querySelectorAll(".content li");
var input = document.querySelector(".content input");
var removeallBtn = document.querySelector(".remove-all");

var tags = ["Nodejs", "ReactJs"];
function loadTags() {
  content.innerHTML = ``;
  tags.forEach(
    (item) =>
      (content.innerHTML += `<li  onClick="removeTag('${item}')">${item}<i class="fas fa-times"></i></li>`)
  );
  content.appendChild(input);
  input.focus();
}

loadTags();

function removeTag(value) {
  tags = tags.filter((item) => item != value);
  loadTags();
}

input.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    tags.push(input.value.trim());
    input.value = "";
    loadTags();
  }
});

removeallBtn.addEventListener("click", (e) => {
  tags = [];
  loadTags();
});
