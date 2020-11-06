 function BlackBird() {
   window.addEventListener("error",(event) => {
     console.log(event)   
    console.log(event.type)
       console.log(event.error)
      console.log(event.message)
      console.log(event.timeStamp)
    }
  );
  // console.log(error.type)
  // console.log(error.error)
  // console.log(error.message)
  // console.log(error.timeStamp)  
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
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${data.coords.latitude}+${data.coords.longitude}&key=9a1d5767cc7e4121a80a08c39139ec44`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
  const reactData= {
    browser: window.navigator.appCodeName,
 type: "runtime error",
    "details":"variable t is not defined",
    "createdBy":"Tabi"
  
  }
  console.log()
//   var port = 3015
// const url = `localhost:${port}/api/logs/`;

// let sendData = () => {
// axios.post(url, reactData)
//    .then(res => console.log('Data send'))
//    .catch(err => console.log(err.data))
// }
  // /**
  //  * Capture error data for debugging in web console.
  //  */
  // (function () {
  //   var captures = [];

  //   /**
  //    * Wait until `window.onload`, so any external scripts
  //    * you might load have a chance to set their own error handlers,
  //    * which we don't want to override.
  //    */

  //   window.addEventListener("load", onload);

  //   /**
  //    * Custom global function to standardize
  //    * window.onerror so it works like you'd think.
  //    *
  //    * @see http://www.quirksmode.org/dom/events/error.html
  //    */

  //   window.onanyerror = window.onanyerror || onanyerrorx;

  //   /**
  //    * Hook up all error handlers after window loads.
  //    */

  //   function onload() {
  //     handleGlobal();
  //     handleXMLHttp();
  //     handleImage();
  //     handleScript();
  //     handleEvents();
  //   }

  //   /**
  //    * Handle global window events.
  //    */

  //   function handleGlobal() {
  //     var onerrorx = window.onerror;
  //     window.addEventListener("error", onerror);

  //     function onerror(msg, url, line, col, error) {
  //       window.onanyerror.apply(this, arguments);
  //       if (onerrorx) return onerrorx.apply(null, arguments);
  //     }
  //   }

  //   /**
  //    * Handle ajax request errors.
  //    */

  //   function handleXMLHttp() {
  //     var sendx = XMLHttpRequest.prototype.send;
  //     window.XMLHttpRequest.prototype.send = function () {
  //       handleAsync(this);
  //       return sendx.apply(this, arguments);
  //     };
  //   }

  //   /**
  //    * Handle image errors.
  //    */

  //   function handleImage() {
  //     var ImageOriginal = window.Image;
  //     window.Image = ImageOverride;

  //     /**
  //      * New `Image` constructor. Might cause some problems,
  //      * but not sure yet. This is at least a start, and works on chrome.
  //      */

  //     function ImageOverride() {
  //       var img = new ImageOriginal();
  //       onnext(function () {
  //         handleAsync(img);
  //       });
  //       return img;
  //     }
  //   }

  //   /**
  //    * Handle script errors.
  //    */

  //   function handleScript() {
  //     var HTMLScriptElementOriginal = window.HTMLScriptElement;
  //     window.HTMLScriptElement = HTMLScriptElementOverride;

  //     /**
  //      * New `HTMLScriptElement` constructor.
  //      *
  //      * Allows us to globally override onload.
  //      * Not ideal to override stuff, but it helps with debugging.
  //      */

  //     function HTMLScriptElementOverride() {
  //       var script = new HTMLScriptElement();
  //       onnext(function () {
  //         handleAsync(script);
  //       });
  //       return script;
  //     }
  //   }

  //   /**
  //    * Handle errors in events.
  //    *
  //    * @see http://stackoverflow.com/questions/951791/javascript-global-error-handling/31750604#31750604
  //    */

  //   function handleEvents() {
  //     var addEventListenerx = window.EventTarget.prototype.addEventListener;
  //     window.EventTarget.prototype.addEventListener = addEventListener;
  //     var removeEventListenerx =
  //       window.EventTarget.prototype.removeEventListener;
  //     window.EventTarget.prototype.removeEventListener = removeEventListener;

  //     function addEventListener(event, handler, bubble) {
  //       var handlerx = wrap(handler);
  //       return addEventListenerx.call(this, event, handlerx, bubble);
  //     }

  //     function removeEventListener(event, handler, bubble) {
  //       handler = handler._witherror || handler;
  //       removeEventListenerx.call(this, event, handler, bubble);
  //     }

  //     function wrap(fn) {
  //       fn._witherror = witherror;

  //       function witherror() {
  //         try {
  //           fn.apply(this, arguments);
  //         } catch (e) {
  //           window.onanyerror.apply(this, e);
  //           throw e;
  //         }
  //       }
  //       return fn;
  //     }
  //   }

  //   /**
  //    * Handle image/ajax request errors generically.
  //    */

  //   function handleAsync(obj) {
  //     var onerrorx = obj.onerror;
  //     obj.onerror = onerror;
  //     var onabortx = obj.onabort;
  //     obj.onabort = onabort;
  //     var onloadx = obj.onload;
  //     obj.onload = onload;

  //     /**
  //      * Handle `onerror`.
  //      */

  //     function onerror(error) {
  //       window.onanyerror.call(this, error);
  //       if (onerrorx) return onerrorx.apply(this, arguments);
  //     }

  //     /**
  //      * Handle `onabort`.
  //      */

  //     function onabort(error) {
  //       window.onanyerror.call(this, error);
  //       if (onabortx) return onabortx.apply(this, arguments);
  //     }

  //     /**
  //      * Handle `onload`.
  //      *
  //      * For images, you can get a 403 response error,
  //      * but this isn't triggered as a global on error.
  //      * This sort of standardizes it.
  //      *
  //      * "there is no way to get the HTTP status from a
  //      * request made by an img tag in JavaScript."
  //      * @see http://stackoverflow.com/questions/8108636/how-to-get-http-status-code-of-img-tags/8108646#8108646
  //      */

  //     function onload(request) {
  //       if (request.status && request.status >= 400) {
  //         window.onanyerror.call(this, request);
  //       }
  //       if (onloadx) return onloadx.apply(this, arguments);
  //     }
  //   }

  //   /**
  //    * Generic error handler.
  //    *
  //    * This shows the basic implementation,
  //    * which you could override in your app.
  //    */

  //   function onanyerrorx(entity) {
  //     var display = entity;

  //     // ajax request
  //     if (entity instanceof XMLHttpRequest) {
  //       // 400: http://example.com/image.png
  //       display = entity.status + " " + entity.responseURL;
  //     } else if (entity instanceof Event) {
  //       // global window events, or image events
  //       var target = entity.currentTarget;
  //       display = target;
  //     } else {
  //       // not sure if there are others
  //     }

  //     capture(entity);
  //     console.log("[onanyerror]", display, entity);
  //   }

  //   /**
  //    * Capture stuff for debugging purposes.
  //    *
  //    * Keep them in memory so you can reference them
  //    * in the chrome debugger as `onanyerror0` up to `onanyerror99`.
  //    */

  //   function capture(entity) {
  //     captures.push(entity);
  //     if (captures.length > 100) captures.unshift();

  //     // keep the last ones around
  //     var i = captures.length;
  //     while (--i) {
  //       var x = captures[i];
  //       window["onanyerror" + i] = x;
  //     }
  //   }

  //   /**
  //    * Wait til next code execution cycle as fast as possible.
  //    */

  //   function onnext(fn) {
  //     setTimeout(fn, 0);
  //   }

    // const successfulLookup = (position) => {
    //   const { latitude, longitude } = position.coords;
    //   console.log(latitude, longitude);
    // fetch(
    //   `https://api.opencagedata.com/geocode/v1/json?q=${data.coords.latitude}+${data.coords.longitude}&key=9a1d5767cc7e4121a80a08c39139ec44`
    // )
    //   .then((response = response.json()))
    //   .then(console.log(response));
    // };
  // })();
}

module.exports.BlackBird = BlackBird;
