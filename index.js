function BlackBird() {
  window.addEventListener("error", (error) => {
    console.log("*********************");
    console.log("error is");
    console.log(error);
  });
  var navUserAgent = navigator.userAgent;
  var browserName = navigator.appName;
  var browserVersion = "" + parseFloat(navigator.appVersion);
  var majorVersion = parseInt(navigator.appVersion, 10);
  var tempNameOffset, tempVersionOffset, tempVersion;

  if ((tempVersionOffset = navUserAgent.indexOf("Opera")) != -1) {
    browserName = "Opera";
    browserVersion = navUserAgent.substring(tempVersionOffset + 6);
    if ((tempVersionOffset = navUserAgent.indexOf("Version")) != -1)
      browserVersion = navUserAgent.substring(tempVersionOffset + 8);
  } else if ((tempVersionOffset = navUserAgent.indexOf("MSIE")) != -1) {
    browserName = "Microsoft Internet Explorer";
    browserVersion = navUserAgent.substring(tempVersionOffset + 5);
  } else if ((tempVersionOffset = navUserAgent.indexOf("Chrome")) != -1) {
    browserName = "Chrome";
    browserVersion = navUserAgent.substring(tempVersionOffset + 7);
  } else if ((tempVersionOffset = navUserAgent.indexOf("Safari")) != -1) {
    browserName = "Safari";
    browserVersion = navUserAgent.substring(tempVersionOffset + 7);
    if ((tempVersionOffset = navUserAgent.indexOf("Version")) != -1)
      browserVersion = navUserAgent.substring(tempVersionOffset + 8);
  } else if ((tempVersionOffset = navUserAgent.indexOf("Firefox")) != -1) {
    browserName = "Firefox";
    browserVersion = navUserAgent.substring(tempVersionOffset + 8);
  } else if (
    (tempNameOffset = navUserAgent.lastIndexOf(" ") + 1) <
    (tempVersionOffset = navUserAgent.lastIndexOf("/"))
  ) {
    browserName = navUserAgent.substring(tempNameOffset, tempVersionOffset);
    browserVersion = navUserAgent.substring(tempVersionOffset + 1);
    if (browserName.toLowerCase() == browserName.toUpperCase()) {
      browserName = navigator.appName;
    }
  }

  // trim version
  if ((tempVersion = browserVersion.indexOf(";")) != -1)
    browserVersion = browserVersion.substring(0, tempVersion);
  if ((tempVersion = browserVersion.indexOf(" ")) != -1)
    browserVersion = browserVersion.substring(0, tempVersion);

  console.log(
    "BrowserName = " + browserName + "\n" + "Version = " + browserVersion
  );
  console.log("Browser CodeName:" + window.navigator.appCodeName);
  // console.log("Browser Name: " + window.navigator.appName);
  // console.log("Browser Version: " + window.navigator.appVersion);
  // console.log("Cookies Enabled: " + window.navigator.cookieEnabled);
  console.log("Browser Language: " + window.navigator.language);
  console.log("Platform:" + window.navigator.platform);
  console.log("User-agent header:" + window.navigator.userAgent);
  var data;
  window.navigator.geolocation.getCurrentPosition((geoloc) => {
    console.log(geoloc);
    data = geoloc;
  });
  console.log(data);
  console.log(data);
  console.log(data.coords.latitude);
  console.log(data.coords.longitude);

  // const successfulLookup = (position) => {
  //   const { latitude, longitude } = position.coords;
  //   console.log(latitude, longitude);
  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${data.coords.latitude}+${data.coords.longitude}&key=9a1d5767cc7e4121a80a08c39139ec44`
  )
    .then((response = response.json()))
    .then(console.log(response));
  // };
}

module.exports.BlackBird = BlackBird;
