function BlackBird() {
  window.addEventListener("error", (error) => {
    console.log("*********************");
    console.log(error);
    //  console.log("this is error");
  });
  // function myFunction() {
  //   if (window.top != window.self) {
  //     document.getElementById("demo").innerHTML =
  //       "This window is NOT the topmost window!";
  //   } else {
  //     document.getElementById("demo").innerHTML =
  //       "This window is the topmost window!";
  //   }
  // }
  // myFunction();
}

module.exports.BlackBird = BlackBird;
