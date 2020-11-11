const axios = require('axios')

async function BlackBird() {
  let errorObj = {}
  // console.log(error.type)
  // console.log(error.error)
  // console.log(error.message)
  // console.log(error.timeStamp)  
  let navUserAgent = navigator.userAgent;
  let browserName = navigator.appName;
  let browserVersion = "" + parseFloat(navigator.appVersion);
  let majorVersion = parseInt(navigator.appVersion, 10);
  let tempNameOffset, tempVersionOffset, tempVersion;

  if ((tempVersionOffset = navUserAgent.indexOf("Opera")) !== -1) {
    browserName = "Opera";
    browserVersion = navUserAgent.substring(tempVersionOffset + 6);
    if ((tempVersionOffset = navUserAgent.indexOf("Version")) !== -1)
      browserVersion = navUserAgent.substring(tempVersionOffset + 8);
  } else if ((tempVersionOffset = navUserAgent.indexOf("MSIE")) !== -1) {
    browserName = "Microsoft Internet Explorer";
    browserVersion = navUserAgent.substring(tempVersionOffset + 5);
  } else if ((tempVersionOffset = navUserAgent.indexOf("Chrome")) !== -1) {
    browserName = "Chrome";
    browserVersion = navUserAgent.substring(tempVersionOffset + 7);
  } else if ((tempVersionOffset = navUserAgent.indexOf("Safari")) !== -1) {
    browserName = "Safari";
    browserVersion = navUserAgent.substring(tempVersionOffset + 7);
    if ((tempVersionOffset = navUserAgent.indexOf("Version")) !== -1)
      browserVersion = navUserAgent.substring(tempVersionOffset + 8);
  } else if ((tempVersionOffset = navUserAgent.indexOf("Firefox")) !== -1) {
    browserName = "Firefox";
    browserVersion = navUserAgent.substring(tempVersionOffset + 8);
  } else if (
    (tempNameOffset = navUserAgent.lastIndexOf(" ") + 1) <
    (tempVersionOffset = navUserAgent.lastIndexOf("/"))
  ) {
    browserName = navUserAgent.substring(tempNameOffset, tempVersionOffset);
    browserVersion = navUserAgent.substring(tempVersionOffset + 1);
    if (browserName.toLowerCase() === browserName.toUpperCase()) {
      browserName = navigator.appName;
    }
  }

  // trim version
  if ((tempVersion = browserVersion.indexOf(";")) !== -1)
    browserVersion = browserVersion.substring(0, tempVersion);
  if ((tempVersion = browserVersion.indexOf(" ")) !== -1)
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

  getLocation();

  window.addEventListener("error", (event) => {
    errorObj = {
      ...errorObj,
      event,
      type: event.type,
      error: String(event.error.stack),
      message: event.message
    }

    console.log("errorObj", errorObj);

    const reactData = {
      browserName,
      browserVersion,
      browserCodeName: window.navigator.appCodeName,
      browserLanguageType: window.navigator.language,
      Platform: window.navigator.platform,
      userAgent: window.navigator.userAgent,
      errorType: errorObj.type, errorMessage: errorObj.message,
      errorDetails: errorObj.error,
      createdBy: "ABC",
      userLocation: errorObj.location
    }

    console.log("reactData", reactData);

    sendDataToElastic(reactData);
  });
}

const sendDataToElastic = async (params) => {
  const url = `http://localhost:3015/api/logs`;
  const headers = {'Content-Type': 'application/json'};

  return await axios.post(url, params, {headers}).then(response => response).catch(error => error)
}

const getLocation = () => {
  window.navigator.geolocation.getCurrentPosition((geoLocation) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${geoLocation.coords.latitude}+${geoLocation.coords.longitude}&key=9a1d5767cc7e4121a80a08c39139ec44`;
    const headers = {'Content-Type': 'application/json'};

    axios.get(url, {headers}).then(response => {
      console.log("Response", response);
    }).catch(error => error);

  });



  // var data;
  // window.navigator.geolocation.getCurrentPosition((geoloc) => {
  //   console.log(geoloc);
  //   data = geoloc;
  //   fetch(
  //     `https://api.opencagedata.com/geocode/v1/json?q=${data.coords.latitude}+${data.coords.longitude}&key=9a1d5767cc7e4121a80a08c39139ec44`
  //   )
  //     .then((response) => {
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then((data) => {
  //       debugger;
  //       console.log("Response", data);
  //       console.log(data.results[0].formatted);
  //       errorObj.location = data.results[0].formatted;
  //     })
  //   // let location =  await axios.get(
  //   //    `https://api.opencagedata.com/geocode/v1/json?q=${data.coords.latitude}+${data.coords.longitude}&key=9a1d5767cc7e4121a80a08c39139ec44`
  //   //  )
  //   //  location = location.json();
  //   //  console.log(location)
  //   //  return location.results[0].formatted;
  // });

}

module.exports.BlackBird = BlackBird;
