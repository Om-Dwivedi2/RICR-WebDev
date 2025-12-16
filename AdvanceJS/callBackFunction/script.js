function backEnd(x, y, reference) {
  console.log("Entered backEnd function");
  data1 = x + 10;
  data2 = y + 20;
  call = reference(data1, data2);
  console.log(
    `frontEnd me data de diya hai aur frontEnd ne ye data return kiya hai ${call}`
  );
}

function frontEnd(a, b) {
  console.log("Entered frontEnd function");

  c = a + b;
  return c;
}

backEnd(1, 2, frontEnd);

// What is a callBack Function???

// A function which is called as an argument of another function is call back Function,
// in the above code frontEnd is the callBack function.