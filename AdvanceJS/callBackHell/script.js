function Dev(x, y, reference) {
  console.log("Entered Dev function");
  data1 = x + 10;
  data2 = y + 20;
  call = reference(data1, data2);
  console.log(
    `Om me data de diya hai aur Om ne ye data return kiya hai ${call}`
  );
}

function Om(a, b) {
  console.log("Entered Om function");

  c = a + b;
  return c;
}

Dev(1, 2, Om);


// What is a callBack Function???

// A function which is called as an argument of another function is call back Function,
// in the above code Om is the callBack function.
