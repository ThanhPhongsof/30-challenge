var mockData = fetch("http://fakestoreapi.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    var products = document.querySelector(".products");

    products.innerHTML = "";
    data.forEach((item) => {
      const templateItem = `
      <img src="${item.image}" alt="" lazy/>
      <div class="info">
        <div class="name">${item.title}</div>
        <div class="price">${item.price}</div>
      </div>`;

      var newProduct = document.createElement("div");
      newProduct.classList.add("product");
      newProduct.setAttribute("data-id", item.id);
      newProduct.innerHTML = templateItem;
      products.appendChild(newProduct);
    });
  });

var searchInput = document.querySelector(".search input");
searchInput.addEventListener("input", function (e) {
  let keyword = e.target.value.trim().toLowerCase();
  let listProductDOM = document.querySelectorAll(".product");
  listProductDOM.forEach((item) => {
    if (item.innerText.toLowerCase().includes(keyword)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
});
