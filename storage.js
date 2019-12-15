export function getCookie(cookie, cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return false;
}

export function setCookie(name, value, expiredDays) {
  const d = new Date();
  d.setTime(d.getTime() + expiredDays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export const removeCookie = (key, options) => {
  this.setCookie(key, undefined, options);
};

export const clearPWACache = () => {
  self.addEventListener("activate", function (e) {
    // eslint-disable-next-line no-console
    console.log("[ServiceWorker] Activate");

    e.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(
          keyList.map(function (key) {
            if (key !== "cdn") {
              // eslint-disable-next-line no-console
              console.log("[ServiceWorker] Removing old cache", key);
              return caches.delete(key);
            }
          })
        );
      })
    );

    return self.clients.claim();
  });
};
