function BlackBird() {
  window.addEventListener("error", (error) => {
    console.log("*********************");
    console.log(error);
  });
  console.log(window.navigator.appCodeName);
  console.log(window.navigator.appName);
  console.log(window.navigator.appVersion);
  console.log(window.navigator.cookieEnabled);
  console.log(window.navigator.language);
  console.log(window.navigator.platform);
  console.log(window.navigator.userAgent);
}

module.exports.BlackBird = BlackBird;
