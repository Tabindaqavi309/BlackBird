function BlackBird() {
  window.addEventListener("error", (error) => {
    console.log("*********************");
    console.log("error is");
    console.log(error);
  });
  console.log("Browser CodeName:" + window.navigator.appCodeName);
  console.log("Browser Name: " + window.navigator.appName);
  console.log("Browser Version: " + window.navigator.appVersion);
  console.log("Cookies Enabled: " + window.navigator.cookieEnabled);
  console.log("Browser Language: " + window.navigator.language);
  console.log("Platform:" + window.navigator.platform);
  console.log("User-agent header:" + window.navigator.userAgent);
}

module.exports.BlackBird = BlackBird;
