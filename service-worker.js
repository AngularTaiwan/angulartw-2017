/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/0.aee479165d4714d6a18d.chunk.js","ff178ec7ca04930219c1aaa8ee86eadd"],["/1.9c6c3f76717ed2eaf7db.chunk.js","a22417e20f4cc39402461b58ccd1f8de"],["/2.5c2314a000ae1efe01c3.chunk.js","55c8536ba7d9a3c35e18455c8465b2b5"],["/3.bdebb92db677af6a57c1.chunk.js","5f35e6a59ef782ae0c9aec05dcdfee81"],["/4.ccc395463ce06d2231fb.chunk.js","32f11e182f2f4ef716a6c698a0210c5a"],["/5.60e3ac3eb39ce7a5dcf0.chunk.js","e07b8e85fc2074f04e7d97a869569331"],["/assets/css/all.css","614844e7e824fbb5cb9020eb281e751f"],["/assets/css/all.min.css","77b9ba08b9a916fab518f1621c3c0297"],["/assets/css/bootstrap.min.css","55ffe5b08d79c3d5eebc6d5d0adcc810"],["/assets/css/style.min.css","685561e0b1c8e54eef8be04a39496ad5"],["/assets/img/banner-o.jpg","ac8d9c744dede1db09e49daa854cd0ea"],["/assets/img/banner.jpg","1f7783ae3ce3ae94ffab50f648a8e418"],["/assets/img/boat.jpg","983a5d0e27fad027aacc70c9bbb39018"],["/assets/img/burger.svg","36bd697165f5f5d2093130b7230ced0f"],["/assets/img/close.svg","6ad4b026bc7941f0f03dba2e83530b15"],["/assets/img/events/2017/haru.jpg","d1dfffd2b58b90573ca5f83514d8ca3b"],["/assets/img/events/2017/jeff.jpg","78789f4b180dbd4b9d7edd9b50611ae6"],["/assets/img/events/2017/jerryHong.jpg","f9ed7be9042be8ba7e47d12f6646b3cf"],["/assets/img/events/2017/jimmy.jpg","d98574d2eb074a7d3a66604c98d3dab6"],["/assets/img/events/2017/lala.jpg","16ee23f96b308dd7f3f559d45f008639"],["/assets/img/events/2017/sam.jpg","8494eefbc3684adcdf4cafbfec860bf3"],["/assets/img/events/2017/will.jpg","154c0fac6ca8e319470ae005c7f9345a"],["/assets/img/facebook-h.svg","d739930d7ee60916d36db9c7e2df1e9c"],["/assets/img/facebook.svg","548fbaafe92cd2699e87f8c3d4723f0b"],["/assets/img/github-h.svg","04f669e66adbe0e3294231e89880d095"],["/assets/img/github.svg","fc6e9064da94fed59fa1c8e7da4d3671"],["/assets/img/gotop.svg","1ff4e56c1bc07d088edd425a4123b677"],["/assets/img/img1.jpg","8c646224ce7d1289d27742be551bb075"],["/assets/img/img2.jpg","3b2994eb901304fb581ace38d6117dcb"],["/assets/img/img3.jpg","c8316402af3c1767f94f5f2165716cbf"],["/assets/img/jeff.jpg","78789f4b180dbd4b9d7edd9b50611ae6"],["/assets/img/kevin.jpg","4c2a79c564c64e44a48f22fdf9e2d0f1"],["/assets/img/logo.svg","36feec4816e3b06e32ad24950b5cf2f3"],["/assets/img/photos.jpg","0d0d560677fec7468684fa2982be63c6"],["/assets/img/telegram-h.svg","6042114d603104311c3b6fa0dccd9a19"],["/assets/img/telegram.svg","6367ab1c59851887b1a77f8bbe656ce3"],["/assets/img/will.jpg","c7e152b2c7795539b6f35e76524114a0"],["/assets/img/youtube-h.svg","f865c165156e067633e0000c480abe72"],["/assets/img/youtube.svg","c27fcb1914e4b64ef84f42ff34f9549f"],["/assets/js/all.js","e071cc713bc2111e5682f1b7e7fb2a66"],["/assets/js/all.min.js","51c2124a402b1fb2fba7727a3d0c27a9"],["/assets/js/bootstrap.min.js","fb0e635db142b1b9fce20fe2370ec6cc"],["/banner-o.ac8d9c744dede1db09e4.jpg","ac8d9c744dede1db09e49daa854cd0ea"],["/burger.36bd697165f5f5d20931.svg","36bd697165f5f5d2093130b7230ced0f"],["/close.6ad4b026bc7941f0f03d.svg","6ad4b026bc7941f0f03dba2e83530b15"],["/facebook-h.d739930d7ee60916d36d.svg","d739930d7ee60916d36db9c7e2df1e9c"],["/facebook.548fbaafe92cd2699e87.svg","548fbaafe92cd2699e87f8c3d4723f0b"],["/github-h.04f669e66adbe0e32942.svg","04f669e66adbe0e3294231e89880d095"],["/github.fc6e9064da94fed59fa1.svg","fc6e9064da94fed59fa1c8e7da4d3671"],["/gotop.1ff4e56c1bc07d088edd.svg","1ff4e56c1bc07d088edd425a4123b677"],["/index.html","2e148d6eb4d20b247b65987d31f7ce7d"],["/inline.3aa26b6c1c33d163cd06.bundle.js","0152dbdacddf95b2f588f0e9f66bf624"],["/logo.36feec4816e3b06e32ad.svg","36feec4816e3b06e32ad24950b5cf2f3"],["/main.520f89a4bbba899e7d78.bundle.js","be75dbb20acd2baa32d27270e1440f4f"],["/photos.0d0d560677fec7468684.jpg","0d0d560677fec7468684fa2982be63c6"],["/polyfills.7399dd0555f8752a722d.bundle.js","95671866de4837cd782f869707948fbb"],["/scripts.ffae86470b6722cc54e2.bundle.js","f5724933f49cbb8957f8806026837689"],["/styles.e718e587e5582375b318.bundle.css","e718e587e5582375b318b0507ca2c3d3"],["/telegram-h.6042114d603104311c3b.svg","6042114d603104311c3b6fa0dccd9a19"],["/telegram.6367ab1c59851887b1a7.svg","6367ab1c59851887b1a77f8bbe656ce3"],["/vendor.0ab0585419779e228852.bundle.js","89882f5a0a54bb9ed9af3b9b2206bbd0"],["/will.c7e152b2c7795539b6f3.jpg","c7e152b2c7795539b6f35e76524114a0"],["/youtube-h.f865c165156e067633e0.svg","f865c165156e067633e0000c480abe72"],["/youtube.c27fcb1914e4b64ef84f.svg","c27fcb1914e4b64ef84f42ff34f9549f"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







