/** Get browser cookie
 * @param {string} cname Name of cookie to get
 */
export function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
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

/** Set browser cookie
 * @param {string} key Name key of cookie to set
 * @param {string} value Value to set
 * @param {number} expiredDays Number of days for cookie to expire
 */
export function setCookie(key: string, value: any, expiredDays: number) {
  const d = new Date();
  d.setTime(d.getTime() + expiredDays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = key + "=" + value + ";" + expires + ";path=/";
}

/** Remove browser cookie
 * @param {string} key Name of cookie to delete
 */
export const removeCookie = (key: string) => {
  setCookie(key, undefined, 0);
};

/** Clear Service Worker Cache
 *
 * * Get all service worker name
 * * Delete cache (with filter param)
 * * Claim uncontroled service worker
 */
export const clearPWACache = () => {
  // self means serviceWorker instance
  self.addEventListener("activate", function (event) {
    // @ts-ignore
    event.waitUntil(
      caches.keys().then(function (cacheNames) {
        return Promise.all(
          cacheNames
            .filter(function (cacheName) {
              // Return true if you want to remove this cache,
              // but remember that caches are shared in the browser
              console.log("[SW name]", cacheName);
              // return true
            })
            .map(function (cacheName) {
              return caches.delete(cacheName);
            })
        );
      })
    );

    // You can take control of uncontrolled clients by calling
    // clients.claim() within your service worker once it's activated.
    //
    // If you use your service worker to load pages differently than they'd
    // load via the network, clients.claim() can be troublesome, as your
    // service worker ends up controlling some clients that loaded without it.
    // @ts-ignore
    return self.clients.claim();
  });
};
