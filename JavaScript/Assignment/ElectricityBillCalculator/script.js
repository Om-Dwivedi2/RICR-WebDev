function refresh() {
  console.log("hello");
  window.location.reload();
}

function om() {
  console.log("hello");
  document.getElementById("bill").classList.remove("d-none");
  let unit = document.getElementById("unit").value;

  if (Number(unit) <= 50) {
    document.getElementById("bill").innerHTML = `
        <div>First 50 units: <span class="float-end"> ${
          Number(unit) * 0.5
        }</span></div>
        <div>Next 150 units: <span class="float-end"> 0</span></div>
        <div>Next 250 units: <span class="float-end"> 0</span></div>
        <div>Above 450 units: <span class="float-end"> 0</span></div>

        <div>Subtotal: <span class="float-end"> ${Number(unit) * 0.5}</div>
        <div>Surcharge Amount: <span class="float-end"> ${(
          Number(unit) *
          0.5 *
          0.2
        ).toFixed(2)}</div>
        <div>Grand Total: <span class="float-end"> ${(
          Number(unit) * 0.5 +
          Number(unit) * 0.5 * 0.2
        ).toFixed(2)}</div>`;
  } else if (Number(unit) > 50 && Number(unit) <= 200) {
    document.getElementById(
      "bill"
    ).innerHTML = `<div>First 50 units: <span class="float-end"> ${
      50 * 0.5
    }</span></div>
        <div>Next 150 units: <span class="float-end"> ${
          (Number(unit) - 50) * 0.75
        }</span></div>
        <div>Next 250 units: <span class="float-end"> 0</span></div>
        <div>Above 450 units: <span class="float-end"> 0</span></div>

        <div>Subtotal: <span class="float-end"> ${
          (Number(unit) - 50) * 0.75 + 25
        }</div>
        <div>Surcharge Amount: <span class="float-end"> ${(
          ((Number(unit) - 50) * 0.75 + 25) *
          0.2
        ).toFixed(2)}</div>
        <div>Grand Total: <span class="float-end"> ${(
          (Number(unit) - 50) * 0.75 +
          25 +
          ((Number(unit) - 50) * 0.75 + 25) * 0.2
        ).toFixed(2)}</div>`;
  } else if (Number(unit) > 200 && Number(unit) <= 450) {
    document.getElementById(
      "bill"
    ).innerHTML = `<div>First 50 units: <span class="float-end"> ${
      50 * 0.5
    }</span></div>
        <div>Next 150 units: <span class="float-end"> ${150 * 0.75}</span></div>
        <div>Next 250 units: <span class="float-end"> ${
          (Number(unit) - 200) * 1.2
        }</span></div>
        <div>Above 450 units: <span class="float-end"> 0</span></div>

        <div>Subtotal: <span class="float-end"> ${(
          (Number(unit) - 200) * 1.2 +
          150 * 0.75 +
          25
        ).toFixed(2)}</div>
        <div>Surcharge Amount: <span class="float-end"> ${(
          ((Number(unit) - 200) * 1.2 + 150 * 0.75 + 25) *
          0.2
        ).toFixed(2)}</div>
        <div>Grand Total: <span class="float-end"> ${(
          (Number(unit) - 200) * 1.2 +
          150 * 0.75 +
          25 +
          ((Number(unit) - 200) * 1.2 + 150 * 0.75 + 25) * 0.2
        ).toFixed(2)}</div>`;
  } else if (Number(unit) > 450) {
    document.getElementById(
      "bill"
    ).innerHTML = `<div>First 50 units: <span class="float-end"> ${
      50 * 0.5
    }</span></div>
        <div>Next 150 units: <span class="float-end"> ${150 * 0.75}</span></div>
        <div>Next 250 units: <span class="float-end"> ${250 * 1.2}</span></div>
        <div>Above 450 units: <span class="float-end"> ${
          (Number(unit) - 450) * 1.5
        }</span></div>

        <div>Subtotal: <span class="float-end"> ${(
          50 * 0.5 +
          150 * 0.75 +
          250 * 1.2 +
          (Number(unit) - 450) * 1.5
        ).toFixed(2)}</div>
        <div>Surcharge Amount: <span class="float-end"> ${(
          (50 * 0.5 + 150 * 0.75 + 250 * 1.2 + (Number(unit) - 450) * 1.5) *
          0.2
        ).toFixed(2)}</div>
        <div>Grand Total: <span class="float-end"> ${(
          50 * 0.5 +
          150 * 0.75 +
          250 * 1.2 +
          (Number(unit) - 450) * 1.5 +
          (50 * 0.5 + 150 * 0.75 + 250 * 1.2 + (Number(unit) - 450) * 1.5) * 0.2
        ).toFixed(2)}</div>`;
  }
}
