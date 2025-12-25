async function getProducts() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");

    let data = await response.json();
    let baap = document.getElementById("baap");

    data.forEach((element) => {
      let beta = document.createElement("div");
      beta.classList.add("row", "my-4");
      beta.innerHTML = `<div class="col-3">
          <div
            class="card"
            style="height: fit-content"
          >
            <img
              src=${element.image}
              style = "height: 200px";
              class="object-fit-contain rounded-3"
              alt=""
            />
          </div>
        </div>
        <div class="col-9">
          <div
            class=""
            style="height: fit-content"
          >
            <div class="fw-semibold fs-4">${element.title.slice(0, 50)}...</div>
            <div class="fw-semibold">${element.rating.rate}/5 (${
        element.rating.count
      })</div>
            <div class="fw-semibold fs-5">$${element.price}</div>
            <div class="mb-2">
              ${element.description.slice(0, 150)}...
            </div>
            <div class="d-flex gap-3">
              <button class="btn btn-outline-primary">Add To Cart</button>
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>`;

      baap.appendChild(beta);
    });
  } catch (error) {
    console.log(error.message);
  }
}

getProducts();
