try {
  self["workbox:core:7.2.0"] && _();
} catch (e) {
}
const fallback = (code, ...args) => {
  let msg = code;
  if (args.length > 0) {
    msg += ` :: ${JSON.stringify(args)}`;
  }
  return msg;
};
const messageGenerator = fallback;
class WorkboxError extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(errorCode, details) {
    const message = messageGenerator(errorCode, details);
    super(message);
    this.name = errorCode;
    this.details = details;
  }
}
const getFriendlyURL = (url) => {
  const urlObj = new URL(String(url), location.href);
  return urlObj.href.replace(new RegExp(`^${location.origin}`), "");
};
const logger = null;
try {
  self["workbox:cacheable-response:7.2.0"] && _();
} catch (e) {
}
class CacheableResponse {
  /**
   * To construct a new CacheableResponse instance you must provide at least
   * one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(config = {}) {
    this._statuses = config.statuses;
    this._headers = config.headers;
  }
  /**
   * Checks a response to see whether it's cacheable or not, based on this
   * object's configuration.
   *
   * @param {Response} response The response whose cacheability is being
   * checked.
   * @return {boolean} `true` if the `Response` is cacheable, and `false`
   * otherwise.
   */
  isResponseCacheable(response) {
    let cacheable = true;
    if (this._statuses) {
      cacheable = this._statuses.includes(response.status);
    }
    if (this._headers && cacheable) {
      cacheable = Object.keys(this._headers).some((headerName) => {
        return response.headers.get(headerName) === this._headers[headerName];
      });
    }
    return cacheable;
  }
}
class CacheableResponsePlugin {
  /**
   * To construct a new CacheableResponsePlugin instance you must provide at
   * least one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(config) {
    this.cacheWillUpdate = async ({ response }) => {
      if (this._cacheableResponse.isResponseCacheable(response)) {
        return response;
      }
      return null;
    };
    this._cacheableResponse = new CacheableResponse(config);
  }
}
function dontWaitFor(promise) {
  void promise.then(() => {
  });
}
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
let idbProxyableTypes;
let cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const cursorRequestMap = /* @__PURE__ */ new WeakMap();
const transactionDoneMap = /* @__PURE__ */ new WeakMap();
const transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
const transformCache = /* @__PURE__ */ new WeakMap();
const reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  promise.then((value) => {
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
  }).catch(() => {
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done")
        return transactionDoneMap.get(target);
      if (prop === "objectStoreNames") {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      }
      if (prop === "store") {
        return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
    return function(storeNames, ...args) {
      const tx = func.call(unwrap(this), storeNames, ...args);
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  }
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name, version);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
    });
  }
  if (blocked) {
    request.addEventListener("blocked", (event) => blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event.oldVersion,
      event.newVersion,
      event
    ));
  }
  openPromise.then((db) => {
    if (terminated)
      db.addEventListener("close", () => terminated());
    if (blocking) {
      db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
    }
  }).catch(() => {
  });
  return openPromise;
}
function deleteDB(name, { blocked } = {}) {
  const request = indexedDB.deleteDatabase(name);
  if (blocked) {
    request.addEventListener("blocked", (event) => blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event.oldVersion,
      event
    ));
  }
  return wrap(request).then(() => void 0);
}
const readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
const writeMethods = ["put", "add", "delete", "clear"];
const cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
  ) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));
try {
  self["workbox:expiration:7.2.0"] && _();
} catch (e) {
}
const DB_NAME = "workbox-expiration";
const CACHE_OBJECT_STORE = "cache-entries";
const normalizeURL = (unNormalizedUrl) => {
  const url = new URL(unNormalizedUrl, location.href);
  url.hash = "";
  return url.href;
};
class CacheTimestampsModel {
  /**
   *
   * @param {string} cacheName
   *
   * @private
   */
  constructor(cacheName) {
    this._db = null;
    this._cacheName = cacheName;
  }
  /**
   * Performs an upgrade of indexedDB.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDb(db) {
    const objStore = db.createObjectStore(CACHE_OBJECT_STORE, { keyPath: "id" });
    objStore.createIndex("cacheName", "cacheName", { unique: false });
    objStore.createIndex("timestamp", "timestamp", { unique: false });
  }
  /**
   * Performs an upgrade of indexedDB and deletes deprecated DBs.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDbAndDeleteOldDbs(db) {
    this._upgradeDb(db);
    if (this._cacheName) {
      void deleteDB(this._cacheName);
    }
  }
  /**
   * @param {string} url
   * @param {number} timestamp
   *
   * @private
   */
  async setTimestamp(url, timestamp) {
    url = normalizeURL(url);
    const entry = {
      url,
      timestamp,
      cacheName: this._cacheName,
      // Creating an ID from the URL and cache name won't be necessary once
      // Edge switches to Chromium and all browsers we support work with
      // array keyPaths.
      id: this._getId(url)
    };
    const db = await this.getDb();
    const tx = db.transaction(CACHE_OBJECT_STORE, "readwrite", {
      durability: "relaxed"
    });
    await tx.store.put(entry);
    await tx.done;
  }
  /**
   * Returns the timestamp stored for a given URL.
   *
   * @param {string} url
   * @return {number | undefined}
   *
   * @private
   */
  async getTimestamp(url) {
    const db = await this.getDb();
    const entry = await db.get(CACHE_OBJECT_STORE, this._getId(url));
    return entry === null || entry === void 0 ? void 0 : entry.timestamp;
  }
  /**
   * Iterates through all the entries in the object store (from newest to
   * oldest) and removes entries once either `maxCount` is reached or the
   * entry's timestamp is less than `minTimestamp`.
   *
   * @param {number} minTimestamp
   * @param {number} maxCount
   * @return {Array<string>}
   *
   * @private
   */
  async expireEntries(minTimestamp, maxCount) {
    const db = await this.getDb();
    let cursor = await db.transaction(CACHE_OBJECT_STORE).store.index("timestamp").openCursor(null, "prev");
    const entriesToDelete = [];
    let entriesNotDeletedCount = 0;
    while (cursor) {
      const result = cursor.value;
      if (result.cacheName === this._cacheName) {
        if (minTimestamp && result.timestamp < minTimestamp || maxCount && entriesNotDeletedCount >= maxCount) {
          entriesToDelete.push(cursor.value);
        } else {
          entriesNotDeletedCount++;
        }
      }
      cursor = await cursor.continue();
    }
    const urlsDeleted = [];
    for (const entry of entriesToDelete) {
      await db.delete(CACHE_OBJECT_STORE, entry.id);
      urlsDeleted.push(entry.url);
    }
    return urlsDeleted;
  }
  /**
   * Takes a URL and returns an ID that will be unique in the object store.
   *
   * @param {string} url
   * @return {string}
   *
   * @private
   */
  _getId(url) {
    return this._cacheName + "|" + normalizeURL(url);
  }
  /**
   * Returns an open connection to the database.
   *
   * @private
   */
  async getDb() {
    if (!this._db) {
      this._db = await openDB(DB_NAME, 1, {
        upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
      });
    }
    return this._db;
  }
}
class CacheExpiration {
  /**
   * To construct a new CacheExpiration instance you must provide at least
   * one of the `config` properties.
   *
   * @param {string} cacheName Name of the cache to apply restrictions to.
   * @param {Object} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   */
  constructor(cacheName, config = {}) {
    this._isRunning = false;
    this._rerunRequested = false;
    this._maxEntries = config.maxEntries;
    this._maxAgeSeconds = config.maxAgeSeconds;
    this._matchOptions = config.matchOptions;
    this._cacheName = cacheName;
    this._timestampModel = new CacheTimestampsModel(cacheName);
  }
  /**
   * Expires entries for the given cache and given criteria.
   */
  async expireEntries() {
    if (this._isRunning) {
      this._rerunRequested = true;
      return;
    }
    this._isRunning = true;
    const minTimestamp = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0;
    const urlsExpired = await this._timestampModel.expireEntries(minTimestamp, this._maxEntries);
    const cache = await self.caches.open(this._cacheName);
    for (const url of urlsExpired) {
      await cache.delete(url, this._matchOptions);
    }
    this._isRunning = false;
    if (this._rerunRequested) {
      this._rerunRequested = false;
      dontWaitFor(this.expireEntries());
    }
  }
  /**
   * Update the timestamp for the given URL. This ensures the when
   * removing entries based on maximum entries, most recently used
   * is accurate or when expiring, the timestamp is up-to-date.
   *
   * @param {string} url
   */
  async updateTimestamp(url) {
    await this._timestampModel.setTimestamp(url, Date.now());
  }
  /**
   * Can be used to check if a URL has expired or not before it's used.
   *
   * This requires a look up from IndexedDB, so can be slow.
   *
   * Note: This method will not remove the cached entry, call
   * `expireEntries()` to remove indexedDB and Cache entries.
   *
   * @param {string} url
   * @return {boolean}
   */
  async isURLExpired(url) {
    if (!this._maxAgeSeconds) {
      return false;
    } else {
      const timestamp = await this._timestampModel.getTimestamp(url);
      const expireOlderThan = Date.now() - this._maxAgeSeconds * 1e3;
      return timestamp !== void 0 ? timestamp < expireOlderThan : true;
    }
  }
  /**
   * Removes the IndexedDB object store used to keep track of cache expiration
   * metadata.
   */
  async delete() {
    this._rerunRequested = false;
    await this._timestampModel.expireEntries(Infinity);
  }
}
const _cacheNameDetails = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration !== "undefined" ? registration.scope : ""
};
const _createCacheName = (cacheName) => {
  return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix].filter((value) => value && value.length > 0).join("-");
};
const eachCacheNameDetail = (fn) => {
  for (const key of Object.keys(_cacheNameDetails)) {
    fn(key);
  }
};
const cacheNames = {
  updateDetails: (details) => {
    eachCacheNameDetail((key) => {
      if (typeof details[key] === "string") {
        _cacheNameDetails[key] = details[key];
      }
    });
  },
  getGoogleAnalyticsName: (userCacheName) => {
    return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
  },
  getPrecacheName: (userCacheName) => {
    return userCacheName || _createCacheName(_cacheNameDetails.precache);
  },
  getPrefix: () => {
    return _cacheNameDetails.prefix;
  },
  getRuntimeName: (userCacheName) => {
    return userCacheName || _createCacheName(_cacheNameDetails.runtime);
  },
  getSuffix: () => {
    return _cacheNameDetails.suffix;
  }
};
const quotaErrorCallbacks = /* @__PURE__ */ new Set();
function registerQuotaErrorCallback(callback) {
  quotaErrorCallbacks.add(callback);
}
class ExpirationPlugin {
  /**
   * @param {ExpirationPluginOptions} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
   * automatic deletion if the available storage quota has been exceeded.
   */
  constructor(config = {}) {
    this.cachedResponseWillBeUsed = async ({ event, request, cacheName, cachedResponse }) => {
      if (!cachedResponse) {
        return null;
      }
      const isFresh = this._isResponseDateFresh(cachedResponse);
      const cacheExpiration = this._getCacheExpiration(cacheName);
      dontWaitFor(cacheExpiration.expireEntries());
      const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
      if (event) {
        try {
          event.waitUntil(updateTimestampDone);
        } catch (error) {
        }
      }
      return isFresh ? cachedResponse : null;
    };
    this.cacheDidUpdate = async ({ cacheName, request }) => {
      const cacheExpiration = this._getCacheExpiration(cacheName);
      await cacheExpiration.updateTimestamp(request.url);
      await cacheExpiration.expireEntries();
    };
    this._config = config;
    this._maxAgeSeconds = config.maxAgeSeconds;
    this._cacheExpirations = /* @__PURE__ */ new Map();
    if (config.purgeOnQuotaError) {
      registerQuotaErrorCallback(() => this.deleteCacheAndMetadata());
    }
  }
  /**
   * A simple helper method to return a CacheExpiration instance for a given
   * cache name.
   *
   * @param {string} cacheName
   * @return {CacheExpiration}
   *
   * @private
   */
  _getCacheExpiration(cacheName) {
    if (cacheName === cacheNames.getRuntimeName()) {
      throw new WorkboxError("expire-custom-caches-only");
    }
    let cacheExpiration = this._cacheExpirations.get(cacheName);
    if (!cacheExpiration) {
      cacheExpiration = new CacheExpiration(cacheName, this._config);
      this._cacheExpirations.set(cacheName, cacheExpiration);
    }
    return cacheExpiration;
  }
  /**
   * @param {Response} cachedResponse
   * @return {boolean}
   *
   * @private
   */
  _isResponseDateFresh(cachedResponse) {
    if (!this._maxAgeSeconds) {
      return true;
    }
    const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
    if (dateHeaderTimestamp === null) {
      return true;
    }
    const now = Date.now();
    return dateHeaderTimestamp >= now - this._maxAgeSeconds * 1e3;
  }
  /**
   * This method will extract the data header and parse it into a useful
   * value.
   *
   * @param {Response} cachedResponse
   * @return {number|null}
   *
   * @private
   */
  _getDateHeaderTimestamp(cachedResponse) {
    if (!cachedResponse.headers.has("date")) {
      return null;
    }
    const dateHeader = cachedResponse.headers.get("date");
    const parsedDate = new Date(dateHeader);
    const headerTime = parsedDate.getTime();
    if (isNaN(headerTime)) {
      return null;
    }
    return headerTime;
  }
  /**
   * This is a helper method that performs two operations:
   *
   * - Deletes *all* the underlying Cache instances associated with this plugin
   * instance, by calling caches.delete() on your behalf.
   * - Deletes the metadata from IndexedDB used to keep track of expiration
   * details for each Cache instance.
   *
   * When using cache expiration, calling this method is preferable to calling
   * `caches.delete()` directly, since this will ensure that the IndexedDB
   * metadata is also cleanly removed and open IndexedDB instances are deleted.
   *
   * Note that if you're *not* using cache expiration for a given cache, calling
   * `caches.delete()` and passing in the cache's name should be sufficient.
   * There is no Workbox-specific method needed for cleanup in that case.
   */
  async deleteCacheAndMetadata() {
    for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
      await self.caches.delete(cacheName);
      await cacheExpiration.delete();
    }
    this._cacheExpirations = /* @__PURE__ */ new Map();
  }
}
function waitUntil(event, asyncFn) {
  const returnPromise = asyncFn();
  event.waitUntil(returnPromise);
  return returnPromise;
}
try {
  self["workbox:precaching:7.2.0"] && _();
} catch (e) {
}
const REVISION_SEARCH_PARAM = "__WB_REVISION__";
function createCacheKey(entry) {
  if (!entry) {
    throw new WorkboxError("add-to-cache-list-unexpected-type", { entry });
  }
  if (typeof entry === "string") {
    const urlObject = new URL(entry, location.href);
    return {
      cacheKey: urlObject.href,
      url: urlObject.href
    };
  }
  const { revision, url } = entry;
  if (!url) {
    throw new WorkboxError("add-to-cache-list-unexpected-type", { entry });
  }
  if (!revision) {
    const urlObject = new URL(url, location.href);
    return {
      cacheKey: urlObject.href,
      url: urlObject.href
    };
  }
  const cacheKeyURL = new URL(url, location.href);
  const originalURL = new URL(url, location.href);
  cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
  return {
    cacheKey: cacheKeyURL.href,
    url: originalURL.href
  };
}
class PrecacheInstallReportPlugin {
  constructor() {
    this.updatedURLs = [];
    this.notUpdatedURLs = [];
    this.handlerWillStart = async ({ request, state }) => {
      if (state) {
        state.originalRequest = request;
      }
    };
    this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse }) => {
      if (event.type === "install") {
        if (state && state.originalRequest && state.originalRequest instanceof Request) {
          const url = state.originalRequest.url;
          if (cachedResponse) {
            this.notUpdatedURLs.push(url);
          } else {
            this.updatedURLs.push(url);
          }
        }
      }
      return cachedResponse;
    };
  }
}
class PrecacheCacheKeyPlugin {
  constructor({ precacheController: precacheController2 }) {
    this.cacheKeyWillBeUsed = async ({ request, params }) => {
      const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) || this._precacheController.getCacheKeyForURL(request.url);
      return cacheKey ? new Request(cacheKey, { headers: request.headers }) : request;
    };
    this._precacheController = precacheController2;
  }
}
let supportStatus;
function canConstructResponseFromBodyStream() {
  if (supportStatus === void 0) {
    const testResponse = new Response("");
    if ("body" in testResponse) {
      try {
        new Response(testResponse.body);
        supportStatus = true;
      } catch (error) {
        supportStatus = false;
      }
    }
    supportStatus = false;
  }
  return supportStatus;
}
async function copyResponse(response, modifier) {
  let origin = null;
  if (response.url) {
    const responseURL = new URL(response.url);
    origin = responseURL.origin;
  }
  if (origin !== self.location.origin) {
    throw new WorkboxError("cross-origin-copy-response", { origin });
  }
  const clonedResponse = response.clone();
  const responseInit = {
    headers: new Headers(clonedResponse.headers),
    status: clonedResponse.status,
    statusText: clonedResponse.statusText
  };
  const modifiedResponseInit = responseInit;
  const body = canConstructResponseFromBodyStream() ? clonedResponse.body : await clonedResponse.blob();
  return new Response(body, modifiedResponseInit);
}
function stripParams(fullURL, ignoreParams) {
  const strippedURL = new URL(fullURL);
  for (const param of ignoreParams) {
    strippedURL.searchParams.delete(param);
  }
  return strippedURL.href;
}
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
  const strippedRequestURL = stripParams(request.url, ignoreParams);
  if (request.url === strippedRequestURL) {
    return cache.match(request, matchOptions);
  }
  const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
  const cacheKeys = await cache.keys(request, keysOptions);
  for (const cacheKey of cacheKeys) {
    const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
    if (strippedRequestURL === strippedCacheKeyURL) {
      return cache.match(cacheKey, matchOptions);
    }
  }
  return;
}
class Deferred {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
async function executeQuotaErrorCallbacks() {
  for (const callback of quotaErrorCallbacks) {
    await callback();
  }
}
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
try {
  self["workbox:strategies:7.2.0"] && _();
} catch (e) {
}
function toRequest(input) {
  return typeof input === "string" ? new Request(input) : input;
}
class StrategyHandler {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params] The return value from the
   *     {@link workbox-routing~matchCallback} (if applicable).
   */
  constructor(strategy, options) {
    this._cacheKeys = {};
    Object.assign(this, options);
    this.event = options.event;
    this._strategy = strategy;
    this._handlerDeferred = new Deferred();
    this._extendLifetimePromises = [];
    this._plugins = [...strategy.plugins];
    this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const plugin of this._plugins) {
      this._pluginStateMap.set(plugin, {});
    }
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */
  async fetch(input) {
    const { event } = this;
    let request = toRequest(input);
    if (request.mode === "navigate" && event instanceof FetchEvent && event.preloadResponse) {
      const possiblePreloadResponse = await event.preloadResponse;
      if (possiblePreloadResponse) {
        return possiblePreloadResponse;
      }
    }
    const originalRequest = this.hasCallback("fetchDidFail") ? request.clone() : null;
    try {
      for (const cb of this.iterateCallbacks("requestWillFetch")) {
        request = await cb({ request: request.clone(), event });
      }
    } catch (err) {
      if (err instanceof Error) {
        throw new WorkboxError("plugin-error-request-will-fetch", {
          thrownErrorMessage: err.message
        });
      }
    }
    const pluginFilteredRequest = request.clone();
    try {
      let fetchResponse;
      fetchResponse = await fetch(request, request.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
      if (false) ;
      for (const callback of this.iterateCallbacks("fetchDidSucceed")) {
        fetchResponse = await callback({
          event,
          request: pluginFilteredRequest,
          response: fetchResponse
        });
      }
      return fetchResponse;
    } catch (error) {
      if (originalRequest) {
        await this.runCallbacks("fetchDidFail", {
          error,
          event,
          originalRequest: originalRequest.clone(),
          request: pluginFilteredRequest.clone()
        });
      }
      throw error;
    }
  }
  /**
   * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
   * the response generated by `this.fetch()`.
   *
   * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
   * so you do not have to manually call `waitUntil()` on the event.
   *
   * @param {Request|string} input The request or URL to fetch and cache.
   * @return {Promise<Response>}
   */
  async fetchAndCachePut(input) {
    const response = await this.fetch(input);
    const responseClone = response.clone();
    void this.waitUntil(this.cachePut(input, responseClone));
    return response;
  }
  /**
   * Matches a request from the cache (and invokes any applicable plugin
   * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
   * defined on the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillBeUsed()
   * - cachedResponseWillBeUsed()
   *
   * @param {Request|string} key The Request or URL to use as the cache key.
   * @return {Promise<Response|undefined>} A matching response, if found.
   */
  async cacheMatch(key) {
    const request = toRequest(key);
    let cachedResponse;
    const { cacheName, matchOptions } = this._strategy;
    const effectiveRequest = await this.getCacheKey(request, "read");
    const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
    cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
    for (const callback of this.iterateCallbacks("cachedResponseWillBeUsed")) {
      cachedResponse = await callback({
        cacheName,
        matchOptions,
        cachedResponse,
        request: effectiveRequest,
        event: this.event
      }) || void 0;
    }
    return cachedResponse;
  }
  /**
   * Puts a request/response pair in the cache (and invokes any applicable
   * plugin callback methods) using the `cacheName` and `plugins` defined on
   * the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillBeUsed()
   * - cacheWillUpdate()
   * - cacheDidUpdate()
   *
   * @param {Request|string} key The request or URL to use as the cache key.
   * @param {Response} response The response to cache.
   * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
   * not be cached, and `true` otherwise.
   */
  async cachePut(key, response) {
    const request = toRequest(key);
    await timeout(0);
    const effectiveRequest = await this.getCacheKey(request, "write");
    if (!response) {
      throw new WorkboxError("cache-put-with-no-response", {
        url: getFriendlyURL(effectiveRequest.url)
      });
    }
    const responseToCache = await this._ensureResponseSafeToCache(response);
    if (!responseToCache) {
      return false;
    }
    const { cacheName, matchOptions } = this._strategy;
    const cache = await self.caches.open(cacheName);
    const hasCacheUpdateCallback = this.hasCallback("cacheDidUpdate");
    const oldResponse = hasCacheUpdateCallback ? await cacheMatchIgnoreParams(
      // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
      // feature. Consider into ways to only add this behavior if using
      // precaching.
      cache,
      effectiveRequest.clone(),
      ["__WB_REVISION__"],
      matchOptions
    ) : null;
    try {
      await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "QuotaExceededError") {
          await executeQuotaErrorCallbacks();
        }
        throw error;
      }
    }
    for (const callback of this.iterateCallbacks("cacheDidUpdate")) {
      await callback({
        cacheName,
        oldResponse,
        newResponse: responseToCache.clone(),
        request: effectiveRequest,
        event: this.event
      });
    }
    return true;
  }
  /**
   * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
   * executes any of those callbacks found in sequence. The final `Request`
   * object returned by the last plugin is treated as the cache key for cache
   * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
   * been registered, the passed request is returned unmodified
   *
   * @param {Request} request
   * @param {string} mode
   * @return {Promise<Request>}
   */
  async getCacheKey(request, mode) {
    const key = `${request.url} | ${mode}`;
    if (!this._cacheKeys[key]) {
      let effectiveRequest = request;
      for (const callback of this.iterateCallbacks("cacheKeyWillBeUsed")) {
        effectiveRequest = toRequest(await callback({
          mode,
          request: effectiveRequest,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params
          // eslint-disable-line
        }));
      }
      this._cacheKeys[key] = effectiveRequest;
    }
    return this._cacheKeys[key];
  }
  /**
   * Returns true if the strategy has at least one plugin with the given
   * callback.
   *
   * @param {string} name The name of the callback to check for.
   * @return {boolean}
   */
  hasCallback(name) {
    for (const plugin of this._strategy.plugins) {
      if (name in plugin) {
        return true;
      }
    }
    return false;
  }
  /**
   * Runs all plugin callbacks matching the given name, in order, passing the
   * given param object (merged ith the current plugin state) as the only
   * argument.
   *
   * Note: since this method runs all plugins, it's not suitable for cases
   * where the return value of a callback needs to be applied prior to calling
   * the next callback. See
   * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
   * below for how to handle that case.
   *
   * @param {string} name The name of the callback to run within each plugin.
   * @param {Object} param The object to pass as the first (and only) param
   *     when executing each callback. This object will be merged with the
   *     current plugin state prior to callback execution.
   */
  async runCallbacks(name, param) {
    for (const callback of this.iterateCallbacks(name)) {
      await callback(param);
    }
  }
  /**
   * Accepts a callback and returns an iterable of matching plugin callbacks,
   * where each callback is wrapped with the current handler state (i.e. when
   * you call each callback, whatever object parameter you pass it will
   * be merged with the plugin's current state).
   *
   * @param {string} name The name fo the callback to run
   * @return {Array<Function>}
   */
  *iterateCallbacks(name) {
    for (const plugin of this._strategy.plugins) {
      if (typeof plugin[name] === "function") {
        const state = this._pluginStateMap.get(plugin);
        const statefulCallback = (param) => {
          const statefulParam = Object.assign(Object.assign({}, param), { state });
          return plugin[name](statefulParam);
        };
        yield statefulCallback;
      }
    }
  }
  /**
   * Adds a promise to the
   * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
   * of the event event associated with the request being handled (usually a
   * `FetchEvent`).
   *
   * Note: you can await
   * {@link workbox-strategies.StrategyHandler~doneWaiting}
   * to know when all added promises have settled.
   *
   * @param {Promise} promise A promise to add to the extend lifetime promises
   *     of the event that triggered the request.
   */
  waitUntil(promise) {
    this._extendLifetimePromises.push(promise);
    return promise;
  }
  /**
   * Returns a promise that resolves once all promises passed to
   * {@link workbox-strategies.StrategyHandler~waitUntil}
   * have settled.
   *
   * Note: any work done after `doneWaiting()` settles should be manually
   * passed to an event's `waitUntil()` method (not this handler's
   * `waitUntil()` method), otherwise the service worker thread my be killed
   * prior to your work completing.
   */
  async doneWaiting() {
    let promise;
    while (promise = this._extendLifetimePromises.shift()) {
      await promise;
    }
  }
  /**
   * Stops running the strategy and immediately resolves any pending
   * `waitUntil()` promises.
   */
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * status === 200) to determine if the Response is safe and valid to cache.
   *
   * @param {Request} options.request
   * @param {Response} options.response
   * @return {Promise<Response|undefined>}
   *
   * @private
   */
  async _ensureResponseSafeToCache(response) {
    let responseToCache = response;
    let pluginsUsed = false;
    for (const callback of this.iterateCallbacks("cacheWillUpdate")) {
      responseToCache = await callback({
        request: this.request,
        response: responseToCache,
        event: this.event
      }) || void 0;
      pluginsUsed = true;
      if (!responseToCache) {
        break;
      }
    }
    if (!pluginsUsed) {
      if (responseToCache && responseToCache.status !== 200) {
        responseToCache = void 0;
      }
    }
    return responseToCache;
  }
}
class Strategy {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  constructor(options = {}) {
    this.cacheName = cacheNames.getRuntimeName(options.cacheName);
    this.plugins = options.plugins || [];
    this.fetchOptions = options.fetchOptions;
    this.matchOptions = options.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * {@link workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */
  handle(options) {
    const [responseDone] = this.handleAll(options);
    return responseDone;
  }
  /**
   * Similar to {@link workbox-strategies.Strategy~handle}, but
   * instead of just returning a `Promise` that resolves to a `Response` it
   * it will return an tuple of `[response, done]` promises, where the former
   * (`response`) is equivalent to what `handle()` returns, and the latter is a
   * Promise that will resolve once any promises that were added to
   * `event.waitUntil()` as part of performing the strategy have completed.
   *
   * You can await the `done` promise to ensure any extra work performed by
   * the strategy (usually caching responses) completes successfully.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   * @return {Array<Promise>} A tuple of [response, done]
   *     promises that can be used to determine when the response resolves as
   *     well as when the handler has completed all its work.
   */
  handleAll(options) {
    if (options instanceof FetchEvent) {
      options = {
        event: options,
        request: options.request
      };
    }
    const event = options.event;
    const request = typeof options.request === "string" ? new Request(options.request) : options.request;
    const params = "params" in options ? options.params : void 0;
    const handler = new StrategyHandler(this, { event, request, params });
    const responseDone = this._getResponse(handler, request, event);
    const handlerDone = this._awaitComplete(responseDone, handler, request, event);
    return [responseDone, handlerDone];
  }
  async _getResponse(handler, request, event) {
    await handler.runCallbacks("handlerWillStart", { event, request });
    let response = void 0;
    try {
      response = await this._handle(request, handler);
      if (!response || response.type === "error") {
        throw new WorkboxError("no-response", { url: request.url });
      }
    } catch (error) {
      if (error instanceof Error) {
        for (const callback of handler.iterateCallbacks("handlerDidError")) {
          response = await callback({ error, event, request });
          if (response) {
            break;
          }
        }
      }
      if (!response) {
        throw error;
      }
    }
    for (const callback of handler.iterateCallbacks("handlerWillRespond")) {
      response = await callback({ event, request, response });
    }
    return response;
  }
  async _awaitComplete(responseDone, handler, request, event) {
    let response;
    let error;
    try {
      response = await responseDone;
    } catch (error2) {
    }
    try {
      await handler.runCallbacks("handlerDidRespond", {
        event,
        request,
        response
      });
      await handler.doneWaiting();
    } catch (waitUntilError) {
      if (waitUntilError instanceof Error) {
        error = waitUntilError;
      }
    }
    await handler.runCallbacks("handlerDidComplete", {
      event,
      request,
      response,
      error
    });
    handler.destroy();
    if (error) {
      throw error;
    }
  }
}
class PrecacheStrategy extends Strategy {
  /**
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
   * of all fetch() requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor(options = {}) {
    options.cacheName = cacheNames.getPrecacheName(options.cacheName);
    super(options);
    this._fallbackToNetwork = options.fallbackToNetwork === false ? false : true;
    this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const response = await handler.cacheMatch(request);
    if (response) {
      return response;
    }
    if (handler.event && handler.event.type === "install") {
      return await this._handleInstall(request, handler);
    }
    return await this._handleFetch(request, handler);
  }
  async _handleFetch(request, handler) {
    let response;
    const params = handler.params || {};
    if (this._fallbackToNetwork) {
      const integrityInManifest = params.integrity;
      const integrityInRequest = request.integrity;
      const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
      response = await handler.fetch(new Request(request, {
        integrity: request.mode !== "no-cors" ? integrityInRequest || integrityInManifest : void 0
      }));
      if (integrityInManifest && noIntegrityConflict && request.mode !== "no-cors") {
        this._useDefaultCacheabilityPluginIfNeeded();
        await handler.cachePut(request, response.clone());
      }
    } else {
      throw new WorkboxError("missing-precache-entry", {
        cacheName: this.cacheName,
        url: request.url
      });
    }
    return response;
  }
  async _handleInstall(request, handler) {
    this._useDefaultCacheabilityPluginIfNeeded();
    const response = await handler.fetch(request);
    const wasCached = await handler.cachePut(request, response.clone());
    if (!wasCached) {
      throw new WorkboxError("bad-precaching-response", {
        url: request.url,
        status: response.status
      });
    }
    return response;
  }
  /**
   * This method is complex, as there a number of things to account for:
   *
   * The `plugins` array can be set at construction, and/or it might be added to
   * to at any time before the strategy is used.
   *
   * At the time the strategy is used (i.e. during an `install` event), there
   * needs to be at least one plugin that implements `cacheWillUpdate` in the
   * array, other than `copyRedirectedCacheableResponsesPlugin`.
   *
   * - If this method is called and there are no suitable `cacheWillUpdate`
   * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
   *
   * - If this method is called and there is exactly one `cacheWillUpdate`, then
   * we don't have to do anything (this might be a previously added
   * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
   *
   * - If this method is called and there is more than one `cacheWillUpdate`,
   * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
   * we need to remove it. (This situation is unlikely, but it could happen if
   * the strategy is used multiple times, the first without a `cacheWillUpdate`,
   * and then later on after manually adding a custom `cacheWillUpdate`.)
   *
   * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
   *
   * @private
   */
  _useDefaultCacheabilityPluginIfNeeded() {
    let defaultPluginIndex = null;
    let cacheWillUpdatePluginCount = 0;
    for (const [index, plugin] of this.plugins.entries()) {
      if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
        continue;
      }
      if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
        defaultPluginIndex = index;
      }
      if (plugin.cacheWillUpdate) {
        cacheWillUpdatePluginCount++;
      }
    }
    if (cacheWillUpdatePluginCount === 0) {
      this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
    } else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
      this.plugins.splice(defaultPluginIndex, 1);
    }
  }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
  async cacheWillUpdate({ response }) {
    if (!response || response.status >= 400) {
      return null;
    }
    return response;
  }
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
  async cacheWillUpdate({ response }) {
    return response.redirected ? await copyResponse(response) : response;
  }
};
class PrecacheController {
  /**
   * Create a new PrecacheController.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] The cache to use for precaching.
   * @param {string} [options.plugins] Plugins to use when precaching as well
   * as responding to fetch events for precached assets.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor({ cacheName, plugins = [], fallbackToNetwork = true } = {}) {
    this._urlsToCacheKeys = /* @__PURE__ */ new Map();
    this._urlsToCacheModes = /* @__PURE__ */ new Map();
    this._cacheKeysToIntegrities = /* @__PURE__ */ new Map();
    this._strategy = new PrecacheStrategy({
      cacheName: cacheNames.getPrecacheName(cacheName),
      plugins: [
        ...plugins,
        new PrecacheCacheKeyPlugin({ precacheController: this })
      ],
      fallbackToNetwork
    });
    this.install = this.install.bind(this);
    this.activate = this.activate.bind(this);
  }
  /**
   * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
   * used to cache assets and respond to fetch events.
   */
  get strategy() {
    return this._strategy;
  }
  /**
   * Adds items to the precache list, removing any duplicates and
   * stores the files in the
   * {@link workbox-core.cacheNames|"precache cache"} when the service
   * worker installs.
   *
   * This method can be called multiple times.
   *
   * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
   */
  precache(entries2) {
    this.addToCacheList(entries2);
    if (!this._installAndActiveListenersAdded) {
      self.addEventListener("install", this.install);
      self.addEventListener("activate", this.activate);
      this._installAndActiveListenersAdded = true;
    }
  }
  /**
   * This method will add items to the precache list, removing duplicates
   * and ensuring the information is valid.
   *
   * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
   *     Array of entries to precache.
   */
  addToCacheList(entries2) {
    const urlsToWarnAbout = [];
    for (const entry of entries2) {
      if (typeof entry === "string") {
        urlsToWarnAbout.push(entry);
      } else if (entry && entry.revision === void 0) {
        urlsToWarnAbout.push(entry.url);
      }
      const { cacheKey, url } = createCacheKey(entry);
      const cacheMode = typeof entry !== "string" && entry.revision ? "reload" : "default";
      if (this._urlsToCacheKeys.has(url) && this._urlsToCacheKeys.get(url) !== cacheKey) {
        throw new WorkboxError("add-to-cache-list-conflicting-entries", {
          firstEntry: this._urlsToCacheKeys.get(url),
          secondEntry: cacheKey
        });
      }
      if (typeof entry !== "string" && entry.integrity) {
        if (this._cacheKeysToIntegrities.has(cacheKey) && this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
          throw new WorkboxError("add-to-cache-list-conflicting-integrities", {
            url
          });
        }
        this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
      }
      this._urlsToCacheKeys.set(url, cacheKey);
      this._urlsToCacheModes.set(url, cacheMode);
      if (urlsToWarnAbout.length > 0) {
        const warningMessage = `Workbox is precaching URLs without revision info: ${urlsToWarnAbout.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        {
          console.warn(warningMessage);
        }
      }
    }
  }
  /**
   * Precaches new and updated assets. Call this method from the service worker
   * install event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.InstallResult>}
   */
  install(event) {
    return waitUntil(event, async () => {
      const installReportPlugin = new PrecacheInstallReportPlugin();
      this.strategy.plugins.push(installReportPlugin);
      for (const [url, cacheKey] of this._urlsToCacheKeys) {
        const integrity = this._cacheKeysToIntegrities.get(cacheKey);
        const cacheMode = this._urlsToCacheModes.get(url);
        const request = new Request(url, {
          integrity,
          cache: cacheMode,
          credentials: "same-origin"
        });
        await Promise.all(this.strategy.handleAll({
          params: { cacheKey },
          request,
          event
        }));
      }
      const { updatedURLs, notUpdatedURLs } = installReportPlugin;
      return { updatedURLs, notUpdatedURLs };
    });
  }
  /**
   * Deletes assets that are no longer present in the current precache manifest.
   * Call this method from the service worker activate event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.CleanupResult>}
   */
  activate(event) {
    return waitUntil(event, async () => {
      const cache = await self.caches.open(this.strategy.cacheName);
      const currentlyCachedRequests = await cache.keys();
      const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
      const deletedURLs = [];
      for (const request of currentlyCachedRequests) {
        if (!expectedCacheKeys.has(request.url)) {
          await cache.delete(request);
          deletedURLs.push(request.url);
        }
      }
      return { deletedURLs };
    });
  }
  /**
   * Returns a mapping of a precached URL to the corresponding cache key, taking
   * into account the revision information for the URL.
   *
   * @return {Map<string, string>} A URL to cache key mapping.
   */
  getURLsToCacheKeys() {
    return this._urlsToCacheKeys;
  }
  /**
   * Returns a list of all the URLs that have been precached by the current
   * service worker.
   *
   * @return {Array<string>} The precached URLs.
   */
  getCachedURLs() {
    return [...this._urlsToCacheKeys.keys()];
  }
  /**
   * Returns the cache key used for storing a given URL. If that URL is
   * unversioned, like `/index.html', then the cache key will be the original
   * URL with a search parameter appended to it.
   *
   * @param {string} url A URL whose cache key you want to look up.
   * @return {string} The versioned URL that corresponds to a cache key
   * for the original URL, or undefined if that URL isn't precached.
   */
  getCacheKeyForURL(url) {
    const urlObject = new URL(url, location.href);
    return this._urlsToCacheKeys.get(urlObject.href);
  }
  /**
   * @param {string} url A cache key whose SRI you want to look up.
   * @return {string} The subresource integrity associated with the cache key,
   * or undefined if it's not set.
   */
  getIntegrityForCacheKey(cacheKey) {
    return this._cacheKeysToIntegrities.get(cacheKey);
  }
  /**
   * This acts as a drop-in replacement for
   * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
   * with the following differences:
   *
   * - It knows what the name of the precache is, and only checks in that cache.
   * - It allows you to pass in an "original" URL without versioning parameters,
   * and it will automatically look up the correct cache key for the currently
   * active revision of that URL.
   *
   * E.g., `matchPrecache('index.html')` will find the correct precached
   * response for the currently active service worker, even if the actual cache
   * key is `'/index.html?__WB_REVISION__=1234abcd'`.
   *
   * @param {string|Request} request The key (without revisioning parameters)
   * to look up in the precache.
   * @return {Promise<Response|undefined>}
   */
  async matchPrecache(request) {
    const url = request instanceof Request ? request.url : request;
    const cacheKey = this.getCacheKeyForURL(url);
    if (cacheKey) {
      const cache = await self.caches.open(this.strategy.cacheName);
      return cache.match(cacheKey);
    }
    return void 0;
  }
  /**
   * Returns a function that looks up `url` in the precache (taking into
   * account revision information), and returns the corresponding `Response`.
   *
   * @param {string} url The precached URL which will be used to lookup the
   * `Response`.
   * @return {workbox-routing~handlerCallback}
   */
  createHandlerBoundToURL(url) {
    const cacheKey = this.getCacheKeyForURL(url);
    if (!cacheKey) {
      throw new WorkboxError("non-precached-url", { url });
    }
    return (options) => {
      options.request = new Request(url);
      options.params = Object.assign({ cacheKey }, options.params);
      return this.strategy.handle(options);
    };
  }
}
let precacheController;
const getOrCreatePrecacheController = () => {
  if (!precacheController) {
    precacheController = new PrecacheController();
  }
  return precacheController;
};
try {
  self["workbox:routing:7.2.0"] && _();
} catch (e) {
}
const defaultMethod = "GET";
const normalizeHandler = (handler) => {
  if (handler && typeof handler === "object") {
    return handler;
  } else {
    return { handle: handler };
  }
};
class Route {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(match, handler, method = defaultMethod) {
    this.handler = normalizeHandler(handler);
    this.match = match;
    this.method = method;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(handler) {
    this.catchHandler = normalizeHandler(handler);
  }
}
class RegExpRoute extends Route {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(regExp, handler, method) {
    const match = ({ url }) => {
      const result = regExp.exec(url.href);
      if (!result) {
        return;
      }
      if (url.origin !== location.origin && result.index !== 0) {
        return;
      }
      return result.slice(1);
    };
    super(match, handler, method);
  }
}
class Router {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = /* @__PURE__ */ new Map();
    this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener("fetch", (event) => {
      const { request } = event;
      const responsePromise = this.handleRequest({ request, event });
      if (responsePromise) {
        event.respondWith(responsePromise);
      }
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    self.addEventListener("message", (event) => {
      if (event.data && event.data.type === "CACHE_URLS") {
        const { payload } = event.data;
        const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
          if (typeof entry === "string") {
            entry = [entry];
          }
          const request = new Request(...entry);
          return this.handleRequest({ request, event });
        }));
        event.waitUntil(requestPromises);
        if (event.ports && event.ports[0]) {
          void requestPromises.then(() => event.ports[0].postMessage(true));
        }
      }
    });
  }
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({ request, event }) {
    const url = new URL(request.url, location.href);
    if (!url.protocol.startsWith("http")) {
      return;
    }
    const sameOrigin = url.origin === location.origin;
    const { params, route } = this.findMatchingRoute({
      event,
      request,
      sameOrigin,
      url
    });
    let handler = route && route.handler;
    const method = request.method;
    if (!handler && this._defaultHandlerMap.has(method)) {
      handler = this._defaultHandlerMap.get(method);
    }
    if (!handler) {
      return;
    }
    let responsePromise;
    try {
      responsePromise = handler.handle({ url, request, event, params });
    } catch (err) {
      responsePromise = Promise.reject(err);
    }
    const catchHandler = route && route.catchHandler;
    if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
      responsePromise = responsePromise.catch(async (err) => {
        if (catchHandler) {
          try {
            return await catchHandler.handle({ url, request, event, params });
          } catch (catchErr) {
            if (catchErr instanceof Error) {
              err = catchErr;
            }
          }
        }
        if (this._catchHandler) {
          return this._catchHandler.handle({ url, request, event });
        }
        throw err;
      });
    }
    return responsePromise;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({ url, sameOrigin, request, event }) {
    const routes = this._routes.get(request.method) || [];
    for (const route of routes) {
      let params;
      const matchResult = route.match({ url, sameOrigin, request, event });
      if (matchResult) {
        params = matchResult;
        if (Array.isArray(params) && params.length === 0) {
          params = void 0;
        } else if (matchResult.constructor === Object && // eslint-disable-line
        Object.keys(matchResult).length === 0) {
          params = void 0;
        } else if (typeof matchResult === "boolean") {
          params = void 0;
        }
        return { route, params };
      }
    }
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(handler, method = defaultMethod) {
    this._defaultHandlerMap.set(method, normalizeHandler(handler));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(handler) {
    this._catchHandler = normalizeHandler(handler);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(route) {
    if (!this._routes.has(route.method)) {
      this._routes.set(route.method, []);
    }
    this._routes.get(route.method).push(route);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(route) {
    if (!this._routes.has(route.method)) {
      throw new WorkboxError("unregister-route-but-not-found-with-method", {
        method: route.method
      });
    }
    const routeIndex = this._routes.get(route.method).indexOf(route);
    if (routeIndex > -1) {
      this._routes.get(route.method).splice(routeIndex, 1);
    } else {
      throw new WorkboxError("unregister-route-route-not-registered");
    }
  }
}
let defaultRouter;
const getOrCreateDefaultRouter = () => {
  if (!defaultRouter) {
    defaultRouter = new Router();
    defaultRouter.addFetchListener();
    defaultRouter.addCacheListener();
  }
  return defaultRouter;
};
function registerRoute(capture, handler, method) {
  let route;
  if (typeof capture === "string") {
    const captureUrl = new URL(capture, location.href);
    const matchCallback = ({ url }) => {
      return url.href === captureUrl.href;
    };
    route = new Route(matchCallback, handler, method);
  } else if (capture instanceof RegExp) {
    route = new RegExpRoute(capture, handler, method);
  } else if (typeof capture === "function") {
    route = new Route(capture, handler, method);
  } else if (capture instanceof Route) {
    route = capture;
  } else {
    throw new WorkboxError("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  }
  const defaultRouter2 = getOrCreateDefaultRouter();
  defaultRouter2.registerRoute(route);
  return route;
}
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
  for (const paramName of [...urlObject.searchParams.keys()]) {
    if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
      urlObject.searchParams.delete(paramName);
    }
  }
  return urlObject;
}
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = "index.html", cleanURLs = true, urlManipulation } = {}) {
  const urlObject = new URL(url, location.href);
  urlObject.hash = "";
  yield urlObject.href;
  const urlWithoutIgnoredParams = removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching);
  yield urlWithoutIgnoredParams.href;
  if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith("/")) {
    const directoryURL = new URL(urlWithoutIgnoredParams.href);
    directoryURL.pathname += directoryIndex;
    yield directoryURL.href;
  }
  if (cleanURLs) {
    const cleanURL = new URL(urlWithoutIgnoredParams.href);
    cleanURL.pathname += ".html";
    yield cleanURL.href;
  }
  if (urlManipulation) {
    const additionalURLs = urlManipulation({ url: urlObject });
    for (const urlToAttempt of additionalURLs) {
      yield urlToAttempt.href;
    }
  }
}
class PrecacheRoute extends Route {
  /**
   * @param {PrecacheController} precacheController A `PrecacheController`
   * instance used to both match requests and respond to fetch events.
   * @param {Object} [options] Options to control how requests are matched
   * against the list of precached URLs.
   * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
   * check cache entries for a URLs ending with '/' to see if there is a hit when
   * appending the `directoryIndex` value.
   * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
   * array of regex's to remove search params when looking for a cache match.
   * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
   * check the cache for the URL with a `.html` added to the end of the end.
   * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
   * This is a function that should take a URL and return an array of
   * alternative URLs that should be checked for precache matches.
   */
  constructor(precacheController2, options) {
    const match = ({ request }) => {
      const urlsToCacheKeys = precacheController2.getURLsToCacheKeys();
      for (const possibleURL of generateURLVariations(request.url, options)) {
        const cacheKey = urlsToCacheKeys.get(possibleURL);
        if (cacheKey) {
          const integrity = precacheController2.getIntegrityForCacheKey(cacheKey);
          return { cacheKey, integrity };
        }
      }
      return;
    };
    super(match, precacheController2.strategy);
  }
}
function addRoute(options) {
  const precacheController2 = getOrCreatePrecacheController();
  const precacheRoute = new PrecacheRoute(precacheController2, options);
  registerRoute(precacheRoute);
}
const SUBSTRING_TO_FIND = "-precache-";
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
  const cacheNames2 = await self.caches.keys();
  const cacheNamesToDelete = cacheNames2.filter((cacheName) => {
    return cacheName.includes(substringToFind) && cacheName.includes(self.registration.scope) && cacheName !== currentPrecacheName;
  });
  await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
  return cacheNamesToDelete;
};
function cleanupOutdatedCaches() {
  self.addEventListener("activate", (event) => {
    const cacheName = cacheNames.getPrecacheName();
    event.waitUntil(deleteOutdatedCaches(cacheName).then((cachesDeleted) => {
    }));
  });
}
function createHandlerBoundToURL(url) {
  const precacheController2 = getOrCreatePrecacheController();
  return precacheController2.createHandlerBoundToURL(url);
}
function precache(entries2) {
  const precacheController2 = getOrCreatePrecacheController();
  precacheController2.precache(entries2);
}
function precacheAndRoute(entries2, options) {
  precache(entries2);
  addRoute(options);
}
class NavigationRoute extends Route {
  /**
   * If both `denylist` and `allowlist` are provided, the `denylist` will
   * take precedence and the request will not match this route.
   *
   * The regular expressions in `allowlist` and `denylist`
   * are matched against the concatenated
   * [`pathname`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname}
   * and [`search`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search}
   * portions of the requested URL.
   *
   * *Note*: These RegExps may be evaluated against every destination URL during
   * a navigation. Avoid using
   * [complex RegExps](https://github.com/GoogleChrome/workbox/issues/3077),
   * or else your users may see delays when navigating your site.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {Object} options
   * @param {Array<RegExp>} [options.denylist] If any of these patterns match,
   * the route will not handle the request (even if a allowlist RegExp matches).
   * @param {Array<RegExp>} [options.allowlist=[/./]] If any of these patterns
   * match the URL's pathname and search parameter, the route will handle the
   * request (assuming the denylist doesn't match).
   */
  constructor(handler, { allowlist: allowlist2 = [/./], denylist = [] } = {}) {
    super((options) => this._match(options), handler);
    this._allowlist = allowlist2;
    this._denylist = denylist;
  }
  /**
   * Routes match handler.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {Request} options.request
   * @return {boolean}
   *
   * @private
   */
  _match({ url, request }) {
    if (request && request.mode !== "navigate") {
      return false;
    }
    const pathnameAndSearch = url.pathname + url.search;
    for (const regExp of this._denylist) {
      if (regExp.test(pathnameAndSearch)) {
        return false;
      }
    }
    if (this._allowlist.some((regExp) => regExp.test(pathnameAndSearch))) {
      return true;
    }
    return false;
  }
}
const cacheOkAndOpaquePlugin = {
  /**
   * Returns a valid response (to allow caching) if the status is 200 (OK) or
   * 0 (opaque).
   *
   * @param {Object} options
   * @param {Response} options.response
   * @return {Response|null}
   *
   * @private
   */
  cacheWillUpdate: async ({ response }) => {
    if (response.status === 200 || response.status === 0) {
      return response;
    }
    return null;
  }
};
class NetworkFirst extends Strategy {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will fallback to the cache.
   *
   * This option can be used to combat
   * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
   * scenarios.
   */
  constructor(options = {}) {
    super(options);
    if (!this.plugins.some((p) => "cacheWillUpdate" in p)) {
      this.plugins.unshift(cacheOkAndOpaquePlugin);
    }
    this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const logs = [];
    const promises = [];
    let timeoutId;
    if (this._networkTimeoutSeconds) {
      const { id, promise } = this._getTimeoutPromise({ request, logs, handler });
      timeoutId = id;
      promises.push(promise);
    }
    const networkPromise = this._getNetworkPromise({
      timeoutId,
      request,
      logs,
      handler
    });
    promises.push(networkPromise);
    const response = await handler.waitUntil((async () => {
      return await handler.waitUntil(Promise.race(promises)) || // If Promise.race() resolved with null, it might be due to a network
      // timeout + a cache miss. If that were to happen, we'd rather wait until
      // the networkPromise resolves instead of returning null.
      // Note that it's fine to await an already-resolved promise, so we don't
      // have to check to see if it's still "in flight".
      await networkPromise;
    })());
    if (!response) {
      throw new WorkboxError("no-response", { url: request.url });
    }
    return response;
  }
  /**
   * @param {Object} options
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs array
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  _getTimeoutPromise({ request, logs, handler }) {
    let timeoutId;
    const timeoutPromise = new Promise((resolve) => {
      const onNetworkTimeout = async () => {
        resolve(await handler.cacheMatch(request));
      };
      timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1e3);
    });
    return {
      promise: timeoutPromise,
      id: timeoutId
    };
  }
  /**
   * @param {Object} options
   * @param {number|undefined} options.timeoutId
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs Array.
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  async _getNetworkPromise({ timeoutId, request, logs, handler }) {
    let error;
    let response;
    try {
      response = await handler.fetchAndCachePut(request);
    } catch (fetchError) {
      if (fetchError instanceof Error) {
        error = fetchError;
      }
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (error || !response) {
      response = await handler.cacheMatch(request);
    }
    return response;
  }
}
class NetworkOnly extends Strategy {
  /**
   * @param {Object} [options]
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will result in a network error.
   */
  constructor(options = {}) {
    super(options);
    this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    let error = void 0;
    let response;
    try {
      const promises = [
        handler.fetch(request)
      ];
      if (this._networkTimeoutSeconds) {
        const timeoutPromise = timeout(this._networkTimeoutSeconds * 1e3);
        promises.push(timeoutPromise);
      }
      response = await Promise.race(promises);
      if (!response) {
        throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`);
      }
    } catch (err) {
      if (err instanceof Error) {
        error = err;
      }
    }
    if (!response) {
      throw new WorkboxError("no-response", { url: request.url, error });
    }
    return response;
  }
}
class StaleWhileRevalidate extends Strategy {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   */
  constructor(options = {}) {
    super(options);
    if (!this.plugins.some((p) => "cacheWillUpdate" in p)) {
      this.plugins.unshift(cacheOkAndOpaquePlugin);
    }
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const fetchAndCachePromise = handler.fetchAndCachePut(request).catch(() => {
    });
    void handler.waitUntil(fetchAndCachePromise);
    let response = await handler.cacheMatch(request);
    let error;
    if (response) ;
    else {
      try {
        response = await fetchAndCachePromise;
      } catch (err) {
        if (err instanceof Error) {
          error = err;
        }
      }
    }
    if (!response) {
      throw new WorkboxError("no-response", { url: request.url, error });
    }
    return response;
  }
}
const entries = [{"revision":"e14f217a6c54bbc247caa9c9475502c3","url":"404.html"},{"revision":"e11f32bb27d82f8e24fda52a1488ee5c","url":"add-ons.html"},{"revision":"92fcd6e3fad3355cdca56cd66f106831","url":"apple-touch-icon.png"},{"revision":null,"url":"assets/add-ons.md.By1xlpMS.js"},{"revision":null,"url":"assets/add-ons.md.By1xlpMS.lean.js"},{"revision":null,"url":"assets/app.DPujDe4m.js"},{"revision":null,"url":"assets/chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.BPrTPWVy.js"},{"revision":null,"url":"assets/chunks/CodeToggle.vue_vue_type_style_index_0_lang.BlH9g4EA.js"},{"revision":null,"url":"assets/chunks/commonjsHelpers.CqkleIqs.js"},{"revision":null,"url":"assets/chunks/CourseLink.vue_vue_type_script_setup_true_lang.BJWEYLdd.js"},{"revision":null,"url":"assets/chunks/demo.client.BdSpEZRd.js"},{"revision":null,"url":"assets/chunks/demo.client.BUjVCHLg.js"},{"revision":null,"url":"assets/chunks/demo.client.C4NDkVFp.js"},{"revision":null,"url":"assets/chunks/demo.client.DS3hcwOy.js"},{"revision":null,"url":"assets/chunks/DemoContainer.vue_vue_type_script_setup_true_lang.DxNSmAoY.js"},{"revision":null,"url":"assets/chunks/filters.BhzE80JT.js"},{"revision":null,"url":"assets/chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.DyMTqidA.js"},{"revision":null,"url":"assets/chunks/fuse.Ch1WBRTM.js"},{"revision":null,"url":"assets/chunks/general.CGRH32nb.js"},{"revision":null,"url":"assets/chunks/HomeSection.vue_vue_type_script_setup_true_lang.pHGAv03t.js"},{"revision":null,"url":"assets/chunks/index._HNhcM3-.js"},{"revision":null,"url":"assets/chunks/index.1QUgKiV0.js"},{"revision":null,"url":"assets/chunks/index.4HKJCw8N.js"},{"revision":null,"url":"assets/chunks/index.5XtVlstM.js"},{"revision":null,"url":"assets/chunks/index.9F-3qKgU.js"},{"revision":null,"url":"assets/chunks/index.9w_wE969.js"},{"revision":null,"url":"assets/chunks/index.B87-HA_g.js"},{"revision":null,"url":"assets/chunks/index.Bai2bqJG.js"},{"revision":null,"url":"assets/chunks/index.BEcLakdG.js"},{"revision":null,"url":"assets/chunks/index.BfFpeNfQ.js"},{"revision":null,"url":"assets/chunks/index.BGHk4tkf.js"},{"revision":null,"url":"assets/chunks/index.Bl74gDhZ.js"},{"revision":null,"url":"assets/chunks/index.Bm51v8Fe.js"},{"revision":null,"url":"assets/chunks/index.BmCUI2bu.js"},{"revision":null,"url":"assets/chunks/index.bNJAVuG7.js"},{"revision":null,"url":"assets/chunks/index.BP7PwJJ3.js"},{"revision":null,"url":"assets/chunks/index.BPSPhI-u.js"},{"revision":null,"url":"assets/chunks/index.BrGVEQ8n.js"},{"revision":null,"url":"assets/chunks/index.BsQWzc1D.js"},{"revision":null,"url":"assets/chunks/index.BT3uaeP2.js"},{"revision":null,"url":"assets/chunks/index.BvQdImI4.js"},{"revision":null,"url":"assets/chunks/index.BxHykXlP.js"},{"revision":null,"url":"assets/chunks/index.CAJXdS5v.js"},{"revision":null,"url":"assets/chunks/index.CB1qKd9y.js"},{"revision":null,"url":"assets/chunks/index.CDGlpsRM.js"},{"revision":null,"url":"assets/chunks/index.CeaPEOC8.js"},{"revision":null,"url":"assets/chunks/index.CECeAqpN.js"},{"revision":null,"url":"assets/chunks/index.CePaUmG6.js"},{"revision":null,"url":"assets/chunks/index.ChIAw1Ez.js"},{"revision":null,"url":"assets/chunks/index.CjTQOuj7.js"},{"revision":null,"url":"assets/chunks/index.CNq88Uqw.js"},{"revision":null,"url":"assets/chunks/index.CUhH6BN9.js"},{"revision":null,"url":"assets/chunks/index.CUJ7-v7m.js"},{"revision":null,"url":"assets/chunks/index.CwoAc2Nq.js"},{"revision":null,"url":"assets/chunks/index.CZkCzpWG.js"},{"revision":null,"url":"assets/chunks/index.D0ezlgoj.js"},{"revision":null,"url":"assets/chunks/index.D0q45cq_.js"},{"revision":null,"url":"assets/chunks/index.D1OSy3Nc.js"},{"revision":null,"url":"assets/chunks/index.DdrW3HGD.js"},{"revision":null,"url":"assets/chunks/index.DfAUkXFk.js"},{"revision":null,"url":"assets/chunks/index.DFBK12yr.js"},{"revision":null,"url":"assets/chunks/index.DHr9lByg.js"},{"revision":null,"url":"assets/chunks/index.di5MF5BS.js"},{"revision":null,"url":"assets/chunks/index.DiZgXWdy.js"},{"revision":null,"url":"assets/chunks/index.DpE935Va.js"},{"revision":null,"url":"assets/chunks/index.DpEQK84r.js"},{"revision":null,"url":"assets/chunks/index.DPZw0Ct0.js"},{"revision":null,"url":"assets/chunks/index.DQIFa1Gi.js"},{"revision":null,"url":"assets/chunks/index.DSKVHuyu.js"},{"revision":null,"url":"assets/chunks/index.DvNofzTs.js"},{"revision":null,"url":"assets/chunks/index.DWXAlzj-.js"},{"revision":null,"url":"assets/chunks/index.DxGGAn3V.js"},{"revision":null,"url":"assets/chunks/index.eSyERAIX.js"},{"revision":null,"url":"assets/chunks/index.HxcXkbHd.js"},{"revision":null,"url":"assets/chunks/index.iWCUOZt7.js"},{"revision":null,"url":"assets/chunks/index.KwSmr2jE.js"},{"revision":null,"url":"assets/chunks/index.oqMf4-M6.js"},{"revision":null,"url":"assets/chunks/index.RyJqOWz2.js"},{"revision":null,"url":"assets/chunks/index.ScCq4d4y.js"},{"revision":null,"url":"assets/chunks/index.wvdOX9-i.js"},{"revision":null,"url":"assets/chunks/index.xAcUqA8Y.js"},{"revision":null,"url":"assets/chunks/index.XZN99ZcR.js"},{"revision":null,"url":"assets/chunks/Key.vue_vue_type_script_setup_true_lang.BdMcJk9O.js"},{"revision":null,"url":"assets/chunks/LearnMoreComponents.BqHEJfBH.js"},{"revision":null,"url":"assets/chunks/LearnMoreDirectives.TPyIOoKm.js"},{"revision":null,"url":"assets/chunks/metadata.DZbmnv7Q.js"},{"revision":null,"url":"assets/chunks/Note.BxwPGH_D.js"},{"revision":null,"url":"assets/chunks/plugin-vue_export-helper.DlAUqK2U.js"},{"revision":null,"url":"assets/chunks/preload-helper.DaAahlbe.js"},{"revision":null,"url":"assets/chunks/resolve-element.CjOR-mWi.js"},{"revision":null,"url":"assets/chunks/Scrubber.vue_vue_type_script_setup_true_lang.B1blGc61.js"},{"revision":null,"url":"assets/chunks/utils.B5e_uQLX.js"},{"revision":null,"url":"assets/chunks/utils.DQ_X3vVv.js"},{"revision":null,"url":"assets/chunks/VPAlgoliaSearchBox.CPjn-OAy.js"},{"revision":null,"url":"assets/chunks/vue.CKrRORKQ.js"},{"revision":null,"url":"assets/chunks/wechat.BZl3fukl.js"},{"revision":null,"url":"assets/components_README.md.DsA2IAm1.js"},{"revision":null,"url":"assets/components_README.md.DsA2IAm1.lean.js"},{"revision":null,"url":"assets/contributing.md.DA4FKEwp.js"},{"revision":null,"url":"assets/contributing.md.DA4FKEwp.lean.js"},{"revision":null,"url":"assets/core__template_index.md.D2s4MtY2.js"},{"revision":null,"url":"assets/core__template_index.md.D2s4MtY2.lean.js"},{"revision":null,"url":"assets/core_computedAsync_index.md.BMIiO_yK.js"},{"revision":null,"url":"assets/core_computedAsync_index.md.BMIiO_yK.lean.js"},{"revision":null,"url":"assets/core_computedInject_index.md.BL8Xsrmr.js"},{"revision":null,"url":"assets/core_computedInject_index.md.BL8Xsrmr.lean.js"},{"revision":null,"url":"assets/core_createReusableTemplate_index.md.BOA40OyF.js"},{"revision":null,"url":"assets/core_createReusableTemplate_index.md.BOA40OyF.lean.js"},{"revision":null,"url":"assets/core_createTemplatePromise_index.md.JyccyXq-.js"},{"revision":null,"url":"assets/core_createTemplatePromise_index.md.JyccyXq-.lean.js"},{"revision":null,"url":"assets/core_createUnrefFn_index.md.C2aItmUh.js"},{"revision":null,"url":"assets/core_createUnrefFn_index.md.C2aItmUh.lean.js"},{"revision":null,"url":"assets/core_onClickOutside_index.md.Dl-DEN_6.js"},{"revision":null,"url":"assets/core_onClickOutside_index.md.Dl-DEN_6.lean.js"},{"revision":null,"url":"assets/core_onElementRemoval_index.md.C6lPhBnc.js"},{"revision":null,"url":"assets/core_onElementRemoval_index.md.C6lPhBnc.lean.js"},{"revision":null,"url":"assets/core_onKeyStroke_index.md.C0VPH-pS.js"},{"revision":null,"url":"assets/core_onKeyStroke_index.md.C0VPH-pS.lean.js"},{"revision":null,"url":"assets/core_onLongPress_index.md.20pdXskb.js"},{"revision":null,"url":"assets/core_onLongPress_index.md.20pdXskb.lean.js"},{"revision":null,"url":"assets/core_onStartTyping_index.md.C9XnLu2O.js"},{"revision":null,"url":"assets/core_onStartTyping_index.md.C9XnLu2O.lean.js"},{"revision":null,"url":"assets/core_README.md.DnJBYHy6.js"},{"revision":null,"url":"assets/core_README.md.DnJBYHy6.lean.js"},{"revision":null,"url":"assets/core_templateRef_index.md.vy_6-oDL.js"},{"revision":null,"url":"assets/core_templateRef_index.md.vy_6-oDL.lean.js"},{"revision":null,"url":"assets/core_unrefElement_index.md.CkNfZfeG.js"},{"revision":null,"url":"assets/core_unrefElement_index.md.CkNfZfeG.lean.js"},{"revision":null,"url":"assets/core_useActiveElement_index.md.BJBBbiDn.js"},{"revision":null,"url":"assets/core_useActiveElement_index.md.BJBBbiDn.lean.js"},{"revision":null,"url":"assets/core_useAnimate_index.md.CCb60eLG.js"},{"revision":null,"url":"assets/core_useAnimate_index.md.CCb60eLG.lean.js"},{"revision":null,"url":"assets/core_useAsyncQueue_index.md.sWvS_xKb.js"},{"revision":null,"url":"assets/core_useAsyncQueue_index.md.sWvS_xKb.lean.js"},{"revision":null,"url":"assets/core_useAsyncState_index.md.DOoa4JfJ.js"},{"revision":null,"url":"assets/core_useAsyncState_index.md.DOoa4JfJ.lean.js"},{"revision":null,"url":"assets/core_useBase64_index.md.CTThyn5C.js"},{"revision":null,"url":"assets/core_useBase64_index.md.CTThyn5C.lean.js"},{"revision":null,"url":"assets/core_useBattery_index.md.DPBrLz5S.js"},{"revision":null,"url":"assets/core_useBattery_index.md.DPBrLz5S.lean.js"},{"revision":null,"url":"assets/core_useBluetooth_index.md.BviiEi1D.js"},{"revision":null,"url":"assets/core_useBluetooth_index.md.BviiEi1D.lean.js"},{"revision":null,"url":"assets/core_useBreakpoints_index.md.BaXAbfQ9.js"},{"revision":null,"url":"assets/core_useBreakpoints_index.md.BaXAbfQ9.lean.js"},{"revision":null,"url":"assets/core_useBroadcastChannel_index.md.C5XTAdkQ.js"},{"revision":null,"url":"assets/core_useBroadcastChannel_index.md.C5XTAdkQ.lean.js"},{"revision":null,"url":"assets/core_useBrowserLocation_index.md.BfSZLR2E.js"},{"revision":null,"url":"assets/core_useBrowserLocation_index.md.BfSZLR2E.lean.js"},{"revision":null,"url":"assets/core_useCached_index.md.CJ8cQthi.js"},{"revision":null,"url":"assets/core_useCached_index.md.CJ8cQthi.lean.js"},{"revision":null,"url":"assets/core_useClipboard_index.md.kl_3TWeT.js"},{"revision":null,"url":"assets/core_useClipboard_index.md.kl_3TWeT.lean.js"},{"revision":null,"url":"assets/core_useClipboardItems_index.md.Ds1Hy6rp.js"},{"revision":null,"url":"assets/core_useClipboardItems_index.md.Ds1Hy6rp.lean.js"},{"revision":null,"url":"assets/core_useCloned_index.md.Bh42Pu4i.js"},{"revision":null,"url":"assets/core_useCloned_index.md.Bh42Pu4i.lean.js"},{"revision":null,"url":"assets/core_useColorMode_index.md.DSGrh4sG.js"},{"revision":null,"url":"assets/core_useColorMode_index.md.DSGrh4sG.lean.js"},{"revision":null,"url":"assets/core_useConfirmDialog_index.md.DnhrEIJI.js"},{"revision":null,"url":"assets/core_useConfirmDialog_index.md.DnhrEIJI.lean.js"},{"revision":null,"url":"assets/core_useCountdown_index.md.Bqt4tlsA.js"},{"revision":null,"url":"assets/core_useCountdown_index.md.Bqt4tlsA.lean.js"},{"revision":null,"url":"assets/core_useCssVar_index.md.C0LDzOqw.js"},{"revision":null,"url":"assets/core_useCssVar_index.md.C0LDzOqw.lean.js"},{"revision":null,"url":"assets/core_useCurrentElement_index.md.4273oSL9.js"},{"revision":null,"url":"assets/core_useCurrentElement_index.md.4273oSL9.lean.js"},{"revision":null,"url":"assets/core_useCycleList_index.md.Dq7ov0qa.js"},{"revision":null,"url":"assets/core_useCycleList_index.md.Dq7ov0qa.lean.js"},{"revision":null,"url":"assets/core_useDark_index.md.CsxoDcqO.js"},{"revision":null,"url":"assets/core_useDark_index.md.CsxoDcqO.lean.js"},{"revision":null,"url":"assets/core_useDebouncedRefHistory_index.md.DoA-vhSI.js"},{"revision":null,"url":"assets/core_useDebouncedRefHistory_index.md.DoA-vhSI.lean.js"},{"revision":null,"url":"assets/core_useDeviceMotion_index.md.AH_cnFU6.js"},{"revision":null,"url":"assets/core_useDeviceMotion_index.md.AH_cnFU6.lean.js"},{"revision":null,"url":"assets/core_useDeviceOrientation_index.md.BXemEDWa.js"},{"revision":null,"url":"assets/core_useDeviceOrientation_index.md.BXemEDWa.lean.js"},{"revision":null,"url":"assets/core_useDevicePixelRatio_index.md.B67JPZmm.js"},{"revision":null,"url":"assets/core_useDevicePixelRatio_index.md.B67JPZmm.lean.js"},{"revision":null,"url":"assets/core_useDevicesList_index.md.BADXsbV8.js"},{"revision":null,"url":"assets/core_useDevicesList_index.md.BADXsbV8.lean.js"},{"revision":null,"url":"assets/core_useDisplayMedia_index.md.nI_WTJgS.js"},{"revision":null,"url":"assets/core_useDisplayMedia_index.md.nI_WTJgS.lean.js"},{"revision":null,"url":"assets/core_useDocumentVisibility_index.md.8MNETJ4z.js"},{"revision":null,"url":"assets/core_useDocumentVisibility_index.md.8MNETJ4z.lean.js"},{"revision":null,"url":"assets/core_useDraggable_index.md.flWGhzdK.js"},{"revision":null,"url":"assets/core_useDraggable_index.md.flWGhzdK.lean.js"},{"revision":null,"url":"assets/core_useDropZone_index.md.d4_ffEXo.js"},{"revision":null,"url":"assets/core_useDropZone_index.md.d4_ffEXo.lean.js"},{"revision":null,"url":"assets/core_useElementBounding_index.md.Z9UGtSrm.js"},{"revision":null,"url":"assets/core_useElementBounding_index.md.Z9UGtSrm.lean.js"},{"revision":null,"url":"assets/core_useElementByPoint_index.md.DzJ2Vbd7.js"},{"revision":null,"url":"assets/core_useElementByPoint_index.md.DzJ2Vbd7.lean.js"},{"revision":null,"url":"assets/core_useElementHover_index.md.Be3dcJ0A.js"},{"revision":null,"url":"assets/core_useElementHover_index.md.Be3dcJ0A.lean.js"},{"revision":null,"url":"assets/core_useElementSize_index.md.D_nlrFpu.js"},{"revision":null,"url":"assets/core_useElementSize_index.md.D_nlrFpu.lean.js"},{"revision":null,"url":"assets/core_useElementVisibility_index.md.CXdECOHW.js"},{"revision":null,"url":"assets/core_useElementVisibility_index.md.CXdECOHW.lean.js"},{"revision":null,"url":"assets/core_useEventBus_index.md.3ZEzjXXw.js"},{"revision":null,"url":"assets/core_useEventBus_index.md.3ZEzjXXw.lean.js"},{"revision":null,"url":"assets/core_useEventListener_index.md.ogWYVyyZ.js"},{"revision":null,"url":"assets/core_useEventListener_index.md.ogWYVyyZ.lean.js"},{"revision":null,"url":"assets/core_useEventSource_index.md.BTa7ed2p.js"},{"revision":null,"url":"assets/core_useEventSource_index.md.BTa7ed2p.lean.js"},{"revision":null,"url":"assets/core_useEyeDropper_index.md.B_tUgiRn.js"},{"revision":null,"url":"assets/core_useEyeDropper_index.md.B_tUgiRn.lean.js"},{"revision":null,"url":"assets/core_useFavicon_index.md.CwY4q6br.js"},{"revision":null,"url":"assets/core_useFavicon_index.md.CwY4q6br.lean.js"},{"revision":null,"url":"assets/core_useFetch_index.md.D5cWntFQ.js"},{"revision":null,"url":"assets/core_useFetch_index.md.D5cWntFQ.lean.js"},{"revision":null,"url":"assets/core_useFileDialog_index.md.BPiPvKRk.js"},{"revision":null,"url":"assets/core_useFileDialog_index.md.BPiPvKRk.lean.js"},{"revision":null,"url":"assets/core_useFileSystemAccess_index.md.DgF0L2RP.js"},{"revision":null,"url":"assets/core_useFileSystemAccess_index.md.DgF0L2RP.lean.js"},{"revision":null,"url":"assets/core_useFocus_index.md.BOefKS6t.js"},{"revision":null,"url":"assets/core_useFocus_index.md.BOefKS6t.lean.js"},{"revision":null,"url":"assets/core_useFocusWithin_index.md.DMoVHym1.js"},{"revision":null,"url":"assets/core_useFocusWithin_index.md.DMoVHym1.lean.js"},{"revision":null,"url":"assets/core_useFps_index.md.yn1P7nrO.js"},{"revision":null,"url":"assets/core_useFps_index.md.yn1P7nrO.lean.js"},{"revision":null,"url":"assets/core_useFullscreen_index.md.ILg1WBoO.js"},{"revision":null,"url":"assets/core_useFullscreen_index.md.ILg1WBoO.lean.js"},{"revision":null,"url":"assets/core_useGamepad_index.md.dQkAJRhp.js"},{"revision":null,"url":"assets/core_useGamepad_index.md.dQkAJRhp.lean.js"},{"revision":null,"url":"assets/core_useGeolocation_index.md.FyYaOYAm.js"},{"revision":null,"url":"assets/core_useGeolocation_index.md.FyYaOYAm.lean.js"},{"revision":null,"url":"assets/core_useIdle_index.md.DYm68xPR.js"},{"revision":null,"url":"assets/core_useIdle_index.md.DYm68xPR.lean.js"},{"revision":null,"url":"assets/core_useImage_index.md.60wQJ-fo.js"},{"revision":null,"url":"assets/core_useImage_index.md.60wQJ-fo.lean.js"},{"revision":null,"url":"assets/core_useInfiniteScroll_index.md.BJhhsSlS.js"},{"revision":null,"url":"assets/core_useInfiniteScroll_index.md.BJhhsSlS.lean.js"},{"revision":null,"url":"assets/core_useIntersectionObserver_index.md.I9JjA4kv.js"},{"revision":null,"url":"assets/core_useIntersectionObserver_index.md.I9JjA4kv.lean.js"},{"revision":null,"url":"assets/core_useKeyModifier_index.md.BnRg5Dv_.js"},{"revision":null,"url":"assets/core_useKeyModifier_index.md.BnRg5Dv_.lean.js"},{"revision":null,"url":"assets/core_useLocalStorage_index.md.BlkYjcSZ.js"},{"revision":null,"url":"assets/core_useLocalStorage_index.md.BlkYjcSZ.lean.js"},{"revision":null,"url":"assets/core_useMagicKeys_index.md.DtLl1BTa.js"},{"revision":null,"url":"assets/core_useMagicKeys_index.md.DtLl1BTa.lean.js"},{"revision":null,"url":"assets/core_useManualRefHistory_index.md.CoPSBBep.js"},{"revision":null,"url":"assets/core_useManualRefHistory_index.md.CoPSBBep.lean.js"},{"revision":null,"url":"assets/core_useMediaControls_index.md.DpkDqp0l.js"},{"revision":null,"url":"assets/core_useMediaControls_index.md.DpkDqp0l.lean.js"},{"revision":null,"url":"assets/core_useMediaQuery_index.md.dekrzvfg.js"},{"revision":null,"url":"assets/core_useMediaQuery_index.md.dekrzvfg.lean.js"},{"revision":null,"url":"assets/core_useMemoize_index.md.BtoBXJ5t.js"},{"revision":null,"url":"assets/core_useMemoize_index.md.BtoBXJ5t.lean.js"},{"revision":null,"url":"assets/core_useMemory_index.md.CLJ8BEzL.js"},{"revision":null,"url":"assets/core_useMemory_index.md.CLJ8BEzL.lean.js"},{"revision":null,"url":"assets/core_useMounted_index.md.CRIXavxj.js"},{"revision":null,"url":"assets/core_useMounted_index.md.CRIXavxj.lean.js"},{"revision":null,"url":"assets/core_useMouse_index.md.D0p7XfsR.js"},{"revision":null,"url":"assets/core_useMouse_index.md.D0p7XfsR.lean.js"},{"revision":null,"url":"assets/core_useMouseInElement_index.md.cc4b8oJ3.js"},{"revision":null,"url":"assets/core_useMouseInElement_index.md.cc4b8oJ3.lean.js"},{"revision":null,"url":"assets/core_useMousePressed_index.md.BPk4zKMn.js"},{"revision":null,"url":"assets/core_useMousePressed_index.md.BPk4zKMn.lean.js"},{"revision":null,"url":"assets/core_useMutationObserver_index.md.Djtu145w.js"},{"revision":null,"url":"assets/core_useMutationObserver_index.md.Djtu145w.lean.js"},{"revision":null,"url":"assets/core_useNavigatorLanguage_index.md.CbLra-93.js"},{"revision":null,"url":"assets/core_useNavigatorLanguage_index.md.CbLra-93.lean.js"},{"revision":null,"url":"assets/core_useNetwork_index.md.Dhjdk_WD.js"},{"revision":null,"url":"assets/core_useNetwork_index.md.Dhjdk_WD.lean.js"},{"revision":null,"url":"assets/core_useNow_index.md.C8PPZSqf.js"},{"revision":null,"url":"assets/core_useNow_index.md.C8PPZSqf.lean.js"},{"revision":null,"url":"assets/core_useObjectUrl_index.md.B6mFtIDc.js"},{"revision":null,"url":"assets/core_useObjectUrl_index.md.B6mFtIDc.lean.js"},{"revision":null,"url":"assets/core_useOffsetPagination_index.md.DZgpHMEo.js"},{"revision":null,"url":"assets/core_useOffsetPagination_index.md.DZgpHMEo.lean.js"},{"revision":null,"url":"assets/core_useOnline_index.md.B0z35747.js"},{"revision":null,"url":"assets/core_useOnline_index.md.B0z35747.lean.js"},{"revision":null,"url":"assets/core_usePageLeave_index.md.C5QaLXA1.js"},{"revision":null,"url":"assets/core_usePageLeave_index.md.C5QaLXA1.lean.js"},{"revision":null,"url":"assets/core_useParallax_index.md.gD9F_viD.js"},{"revision":null,"url":"assets/core_useParallax_index.md.gD9F_viD.lean.js"},{"revision":null,"url":"assets/core_useParentElement_index.md.CQAI9lcx.js"},{"revision":null,"url":"assets/core_useParentElement_index.md.CQAI9lcx.lean.js"},{"revision":null,"url":"assets/core_usePerformanceObserver_index.md._S-iOljJ.js"},{"revision":null,"url":"assets/core_usePerformanceObserver_index.md._S-iOljJ.lean.js"},{"revision":null,"url":"assets/core_usePermission_index.md.CUImCs8C.js"},{"revision":null,"url":"assets/core_usePermission_index.md.CUImCs8C.lean.js"},{"revision":null,"url":"assets/core_usePointer_index.md.Ta5wN-2X.js"},{"revision":null,"url":"assets/core_usePointer_index.md.Ta5wN-2X.lean.js"},{"revision":null,"url":"assets/core_usePointerLock_index.md.CmIz2lb5.js"},{"revision":null,"url":"assets/core_usePointerLock_index.md.CmIz2lb5.lean.js"},{"revision":null,"url":"assets/core_usePointerSwipe_index.md.kw1j4oN2.js"},{"revision":null,"url":"assets/core_usePointerSwipe_index.md.kw1j4oN2.lean.js"},{"revision":null,"url":"assets/core_usePreferredColorScheme_index.md.LD2X0l5w.js"},{"revision":null,"url":"assets/core_usePreferredColorScheme_index.md.LD2X0l5w.lean.js"},{"revision":null,"url":"assets/core_usePreferredContrast_index.md.BRUu2Yvk.js"},{"revision":null,"url":"assets/core_usePreferredContrast_index.md.BRUu2Yvk.lean.js"},{"revision":null,"url":"assets/core_usePreferredDark_index.md.BRMsqtyx.js"},{"revision":null,"url":"assets/core_usePreferredDark_index.md.BRMsqtyx.lean.js"},{"revision":null,"url":"assets/core_usePreferredLanguages_index.md.EwbLLCAA.js"},{"revision":null,"url":"assets/core_usePreferredLanguages_index.md.EwbLLCAA.lean.js"},{"revision":null,"url":"assets/core_usePreferredReducedMotion_index.md.5kEi_Vjp.js"},{"revision":null,"url":"assets/core_usePreferredReducedMotion_index.md.5kEi_Vjp.lean.js"},{"revision":null,"url":"assets/core_usePreferredReducedTransparency_index.md.CtDRlUku.js"},{"revision":null,"url":"assets/core_usePreferredReducedTransparency_index.md.CtDRlUku.lean.js"},{"revision":null,"url":"assets/core_usePrevious_index.md.CauMExGy.js"},{"revision":null,"url":"assets/core_usePrevious_index.md.CauMExGy.lean.js"},{"revision":null,"url":"assets/core_useRafFn_index.md.ZJyw2h8H.js"},{"revision":null,"url":"assets/core_useRafFn_index.md.ZJyw2h8H.lean.js"},{"revision":null,"url":"assets/core_useRefHistory_index.md.CAL7RTnk.js"},{"revision":null,"url":"assets/core_useRefHistory_index.md.CAL7RTnk.lean.js"},{"revision":null,"url":"assets/core_useResizeObserver_index.md.CdW6b2Gq.js"},{"revision":null,"url":"assets/core_useResizeObserver_index.md.CdW6b2Gq.lean.js"},{"revision":null,"url":"assets/core_useScreenOrientation_index.md.DSVpMXUr.js"},{"revision":null,"url":"assets/core_useScreenOrientation_index.md.DSVpMXUr.lean.js"},{"revision":null,"url":"assets/core_useScreenSafeArea_index.md.9lMzFX8D.js"},{"revision":null,"url":"assets/core_useScreenSafeArea_index.md.9lMzFX8D.lean.js"},{"revision":null,"url":"assets/core_useScriptTag_index.md.DygYgsrV.js"},{"revision":null,"url":"assets/core_useScriptTag_index.md.DygYgsrV.lean.js"},{"revision":null,"url":"assets/core_useScroll_index.md.Bd__TIBF.js"},{"revision":null,"url":"assets/core_useScroll_index.md.Bd__TIBF.lean.js"},{"revision":null,"url":"assets/core_useScrollLock_index.md.1jP5xHOE.js"},{"revision":null,"url":"assets/core_useScrollLock_index.md.1jP5xHOE.lean.js"},{"revision":null,"url":"assets/core_useSessionStorage_index.md.YdBi56_K.js"},{"revision":null,"url":"assets/core_useSessionStorage_index.md.YdBi56_K.lean.js"},{"revision":null,"url":"assets/core_useShare_index.md.moxm9e-N.js"},{"revision":null,"url":"assets/core_useShare_index.md.moxm9e-N.lean.js"},{"revision":null,"url":"assets/core_useSorted_index.md.bdzrbtWk.js"},{"revision":null,"url":"assets/core_useSorted_index.md.bdzrbtWk.lean.js"},{"revision":null,"url":"assets/core_useSpeechRecognition_index.md.CzTdV8pQ.js"},{"revision":null,"url":"assets/core_useSpeechRecognition_index.md.CzTdV8pQ.lean.js"},{"revision":null,"url":"assets/core_useSpeechSynthesis_index.md.DaAaSqa1.js"},{"revision":null,"url":"assets/core_useSpeechSynthesis_index.md.DaAaSqa1.lean.js"},{"revision":null,"url":"assets/core_useSSRWidth_index.md.C6i8AvvV.js"},{"revision":null,"url":"assets/core_useSSRWidth_index.md.C6i8AvvV.lean.js"},{"revision":null,"url":"assets/core_useStepper_index.md.BLXY68xa.js"},{"revision":null,"url":"assets/core_useStepper_index.md.BLXY68xa.lean.js"},{"revision":null,"url":"assets/core_useStorage_index.md.BLarHf-m.js"},{"revision":null,"url":"assets/core_useStorage_index.md.BLarHf-m.lean.js"},{"revision":null,"url":"assets/core_useStorageAsync_index.md.BDdY3cUp.js"},{"revision":null,"url":"assets/core_useStorageAsync_index.md.BDdY3cUp.lean.js"},{"revision":null,"url":"assets/core_useStyleTag_index.md.C8VOGeH3.js"},{"revision":null,"url":"assets/core_useStyleTag_index.md.C8VOGeH3.lean.js"},{"revision":null,"url":"assets/core_useSupported_index.md.DqA1DYxs.js"},{"revision":null,"url":"assets/core_useSupported_index.md.DqA1DYxs.lean.js"},{"revision":null,"url":"assets/core_useSwipe_index.md.C4QUY9rp.js"},{"revision":null,"url":"assets/core_useSwipe_index.md.C4QUY9rp.lean.js"},{"revision":null,"url":"assets/core_useTemplateRefsList_index.md.BEITWryQ.js"},{"revision":null,"url":"assets/core_useTemplateRefsList_index.md.BEITWryQ.lean.js"},{"revision":null,"url":"assets/core_useTextareaAutosize_index.md.Vc019FA1.js"},{"revision":null,"url":"assets/core_useTextareaAutosize_index.md.Vc019FA1.lean.js"},{"revision":null,"url":"assets/core_useTextDirection_index.md.B_tI_vd6.js"},{"revision":null,"url":"assets/core_useTextDirection_index.md.B_tI_vd6.lean.js"},{"revision":null,"url":"assets/core_useTextSelection_index.md.D5iirpJ7.js"},{"revision":null,"url":"assets/core_useTextSelection_index.md.D5iirpJ7.lean.js"},{"revision":null,"url":"assets/core_useThrottledRefHistory_index.md.BbHEYabd.js"},{"revision":null,"url":"assets/core_useThrottledRefHistory_index.md.BbHEYabd.lean.js"},{"revision":null,"url":"assets/core_useTimeAgo_index.md.BViyGpXQ.js"},{"revision":null,"url":"assets/core_useTimeAgo_index.md.BViyGpXQ.lean.js"},{"revision":null,"url":"assets/core_useTimeoutPoll_index.md.H9rD25w_.js"},{"revision":null,"url":"assets/core_useTimeoutPoll_index.md.H9rD25w_.lean.js"},{"revision":null,"url":"assets/core_useTimestamp_index.md.DIl452nL.js"},{"revision":null,"url":"assets/core_useTimestamp_index.md.DIl452nL.lean.js"},{"revision":null,"url":"assets/core_useTitle_index.md.DWyCARwF.js"},{"revision":null,"url":"assets/core_useTitle_index.md.DWyCARwF.lean.js"},{"revision":null,"url":"assets/core_useTransition_index.md.De0dbUSz.js"},{"revision":null,"url":"assets/core_useTransition_index.md.De0dbUSz.lean.js"},{"revision":null,"url":"assets/core_useUrlSearchParams_index.md.CFjkKBk8.js"},{"revision":null,"url":"assets/core_useUrlSearchParams_index.md.CFjkKBk8.lean.js"},{"revision":null,"url":"assets/core_useUserMedia_index.md.CflO7jKk.js"},{"revision":null,"url":"assets/core_useUserMedia_index.md.CflO7jKk.lean.js"},{"revision":null,"url":"assets/core_useVibrate_index.md.KONSyIAe.js"},{"revision":null,"url":"assets/core_useVibrate_index.md.KONSyIAe.lean.js"},{"revision":null,"url":"assets/core_useVirtualList_index.md.Bxa_7bLD.js"},{"revision":null,"url":"assets/core_useVirtualList_index.md.Bxa_7bLD.lean.js"},{"revision":null,"url":"assets/core_useVModel_index.md.Bo7uBT88.js"},{"revision":null,"url":"assets/core_useVModel_index.md.Bo7uBT88.lean.js"},{"revision":null,"url":"assets/core_useVModels_index.md.CWeVUxiO.js"},{"revision":null,"url":"assets/core_useVModels_index.md.CWeVUxiO.lean.js"},{"revision":null,"url":"assets/core_useWakeLock_index.md.YbjvaiyV.js"},{"revision":null,"url":"assets/core_useWakeLock_index.md.YbjvaiyV.lean.js"},{"revision":null,"url":"assets/core_useWebNotification_index.md.BlxtURl3.js"},{"revision":null,"url":"assets/core_useWebNotification_index.md.BlxtURl3.lean.js"},{"revision":null,"url":"assets/core_useWebSocket_index.md.BT_ZQtst.js"},{"revision":null,"url":"assets/core_useWebSocket_index.md.BT_ZQtst.lean.js"},{"revision":null,"url":"assets/core_useWebWorker_index.md.eWYnph8V.js"},{"revision":null,"url":"assets/core_useWebWorker_index.md.eWYnph8V.lean.js"},{"revision":null,"url":"assets/core_useWebWorkerFn_index.md.qclKd-qc.js"},{"revision":null,"url":"assets/core_useWebWorkerFn_index.md.qclKd-qc.lean.js"},{"revision":null,"url":"assets/core_useWindowFocus_index.md.BAteh3XZ.js"},{"revision":null,"url":"assets/core_useWindowFocus_index.md.BAteh3XZ.lean.js"},{"revision":null,"url":"assets/core_useWindowScroll_index.md.CdlvZkd0.js"},{"revision":null,"url":"assets/core_useWindowScroll_index.md.CdlvZkd0.lean.js"},{"revision":null,"url":"assets/core_useWindowSize_index.md.CFsxs8kS.js"},{"revision":null,"url":"assets/core_useWindowSize_index.md.CFsxs8kS.lean.js"},{"revision":null,"url":"assets/ecosystem.md.CD2-u4D1.js"},{"revision":null,"url":"assets/ecosystem.md.CD2-u4D1.lean.js"},{"revision":null,"url":"assets/electron_README.md.DK-NC64s.js"},{"revision":null,"url":"assets/electron_README.md.DK-NC64s.lean.js"},{"revision":null,"url":"assets/electron_useIpcRenderer_index.md.CwU8tfPy.js"},{"revision":null,"url":"assets/electron_useIpcRenderer_index.md.CwU8tfPy.lean.js"},{"revision":null,"url":"assets/electron_useIpcRendererInvoke_index.md.CoUOtXH7.js"},{"revision":null,"url":"assets/electron_useIpcRendererInvoke_index.md.CoUOtXH7.lean.js"},{"revision":null,"url":"assets/electron_useIpcRendererOn_index.md.xRCRG0lR.js"},{"revision":null,"url":"assets/electron_useIpcRendererOn_index.md.xRCRG0lR.lean.js"},{"revision":null,"url":"assets/electron_useZoomFactor_index.md.DekR0Lpk.js"},{"revision":null,"url":"assets/electron_useZoomFactor_index.md.DekR0Lpk.lean.js"},{"revision":null,"url":"assets/electron_useZoomLevel_index.md.Ce6oTeHj.js"},{"revision":null,"url":"assets/electron_useZoomLevel_index.md.Ce6oTeHj.lean.js"},{"revision":null,"url":"assets/export-size.md.KLOQp3sW.js"},{"revision":null,"url":"assets/export-size.md.KLOQp3sW.lean.js"},{"revision":null,"url":"assets/firebase_README.md.BIXj52V7.js"},{"revision":null,"url":"assets/firebase_README.md.BIXj52V7.lean.js"},{"revision":null,"url":"assets/firebase_useAuth_index.md.C-DWCjIH.js"},{"revision":null,"url":"assets/firebase_useAuth_index.md.C-DWCjIH.lean.js"},{"revision":null,"url":"assets/firebase_useFirestore_index.md.fziLpO-j.js"},{"revision":null,"url":"assets/firebase_useFirestore_index.md.fziLpO-j.lean.js"},{"revision":null,"url":"assets/firebase_useRTDB_index.md.DkPRVLB_.js"},{"revision":null,"url":"assets/firebase_useRTDB_index.md.DkPRVLB_.lean.js"},{"revision":null,"url":"assets/functions.md.D7C6Rnp1.js"},{"revision":null,"url":"assets/functions.md.D7C6Rnp1.lean.js"},{"revision":null,"url":"assets/guide_about.md.CYxGqaGC.js"},{"revision":null,"url":"assets/guide_about.md.CYxGqaGC.lean.js"},{"revision":null,"url":"assets/guide_best-practice.md.CQTdNgF7.js"},{"revision":null,"url":"assets/guide_best-practice.md.CQTdNgF7.lean.js"},{"revision":null,"url":"assets/guide_components.md.DhE24Eso.js"},{"revision":null,"url":"assets/guide_components.md.DhE24Eso.lean.js"},{"revision":null,"url":"assets/guide_config.md.wXZvrIJW.js"},{"revision":null,"url":"assets/guide_config.md.wXZvrIJW.lean.js"},{"revision":null,"url":"assets/guide_index.md.DaEGo9gh.js"},{"revision":null,"url":"assets/guide_index.md.DaEGo9gh.lean.js"},{"revision":null,"url":"assets/guidelines.md.O-dT4hJe.js"},{"revision":null,"url":"assets/guidelines.md.O-dT4hJe.lean.js"},{"revision":null,"url":"assets/index.md.QzAO2zFz.js"},{"revision":null,"url":"assets/index.md.QzAO2zFz.lean.js"},{"revision":null,"url":"assets/integrations_README.md.D7zfBzp1.js"},{"revision":null,"url":"assets/integrations_README.md.D7zfBzp1.lean.js"},{"revision":null,"url":"assets/integrations_useAsyncValidator_index.md.DvTSK0Xi.js"},{"revision":null,"url":"assets/integrations_useAsyncValidator_index.md.DvTSK0Xi.lean.js"},{"revision":null,"url":"assets/integrations_useAxios_index.md.CiV6kZ79.js"},{"revision":null,"url":"assets/integrations_useAxios_index.md.CiV6kZ79.lean.js"},{"revision":null,"url":"assets/integrations_useChangeCase_index.md.D74RHy-B.js"},{"revision":null,"url":"assets/integrations_useChangeCase_index.md.D74RHy-B.lean.js"},{"revision":null,"url":"assets/integrations_useCookies_index.md.CvGiYKX9.js"},{"revision":null,"url":"assets/integrations_useCookies_index.md.CvGiYKX9.lean.js"},{"revision":null,"url":"assets/integrations_useDrauu_index.md.D_dRCJpf.js"},{"revision":null,"url":"assets/integrations_useDrauu_index.md.D_dRCJpf.lean.js"},{"revision":null,"url":"assets/integrations_useFocusTrap_index.md.XTGeewok.js"},{"revision":null,"url":"assets/integrations_useFocusTrap_index.md.XTGeewok.lean.js"},{"revision":null,"url":"assets/integrations_useFuse_index.md.hI3GaV9f.js"},{"revision":null,"url":"assets/integrations_useFuse_index.md.hI3GaV9f.lean.js"},{"revision":null,"url":"assets/integrations_useIDBKeyval_index.md.DlUucYIk.js"},{"revision":null,"url":"assets/integrations_useIDBKeyval_index.md.DlUucYIk.lean.js"},{"revision":null,"url":"assets/integrations_useJwt_index.md.CU8_Iro0.js"},{"revision":null,"url":"assets/integrations_useJwt_index.md.CU8_Iro0.lean.js"},{"revision":null,"url":"assets/integrations_useNProgress_index.md.DGtKIBAB.js"},{"revision":null,"url":"assets/integrations_useNProgress_index.md.DGtKIBAB.lean.js"},{"revision":null,"url":"assets/integrations_useQRCode_index.md.BBgX2fvZ.js"},{"revision":null,"url":"assets/integrations_useQRCode_index.md.BBgX2fvZ.lean.js"},{"revision":null,"url":"assets/integrations_useSortable_index.md.CrJTzfp4.js"},{"revision":null,"url":"assets/integrations_useSortable_index.md.CrJTzfp4.lean.js"},{"revision":null,"url":"assets/inter-italic-cyrillic-ext.r48I6akx.woff2"},{"revision":null,"url":"assets/inter-italic-cyrillic.By2_1cv3.woff2"},{"revision":null,"url":"assets/inter-italic-greek-ext.1u6EdAuj.woff2"},{"revision":null,"url":"assets/inter-italic-greek.DJ8dCoTZ.woff2"},{"revision":null,"url":"assets/inter-italic-latin-ext.CN1xVJS-.woff2"},{"revision":null,"url":"assets/inter-italic-latin.C2AdPX0b.woff2"},{"revision":null,"url":"assets/inter-italic-vietnamese.BSbpV94h.woff2"},{"revision":null,"url":"assets/inter-roman-cyrillic-ext.BBPuwvHQ.woff2"},{"revision":null,"url":"assets/inter-roman-cyrillic.C5lxZ8CY.woff2"},{"revision":null,"url":"assets/inter-roman-greek-ext.CqjqNYQ-.woff2"},{"revision":null,"url":"assets/inter-roman-greek.BBVDIX6e.woff2"},{"revision":null,"url":"assets/inter-roman-latin-ext.4ZJIpNVo.woff2"},{"revision":null,"url":"assets/inter-roman-latin.Di8DUHzh.woff2"},{"revision":null,"url":"assets/inter-roman-vietnamese.BjW4sHH5.woff2"},{"revision":null,"url":"assets/math_createGenericProjection_index.md.CmwAxZzf.js"},{"revision":null,"url":"assets/math_createGenericProjection_index.md.CmwAxZzf.lean.js"},{"revision":null,"url":"assets/math_createProjection_index.md.meas5w-1.js"},{"revision":null,"url":"assets/math_createProjection_index.md.meas5w-1.lean.js"},{"revision":null,"url":"assets/math_logicAnd_index.md.Ckl_jRjO.js"},{"revision":null,"url":"assets/math_logicAnd_index.md.Ckl_jRjO.lean.js"},{"revision":null,"url":"assets/math_logicNot_index.md.Bv9Hlh3U.js"},{"revision":null,"url":"assets/math_logicNot_index.md.Bv9Hlh3U.lean.js"},{"revision":null,"url":"assets/math_logicOr_index.md.bmF7w3XB.js"},{"revision":null,"url":"assets/math_logicOr_index.md.bmF7w3XB.lean.js"},{"revision":null,"url":"assets/math_README.md.D8gTNLgN.js"},{"revision":null,"url":"assets/math_README.md.D8gTNLgN.lean.js"},{"revision":null,"url":"assets/math_useAbs_index.md.BCZ5bCYt.js"},{"revision":null,"url":"assets/math_useAbs_index.md.BCZ5bCYt.lean.js"},{"revision":null,"url":"assets/math_useAverage_index.md.xNKoncxt.js"},{"revision":null,"url":"assets/math_useAverage_index.md.xNKoncxt.lean.js"},{"revision":null,"url":"assets/math_useCeil_index.md.8QnqF___.js"},{"revision":null,"url":"assets/math_useCeil_index.md.8QnqF___.lean.js"},{"revision":null,"url":"assets/math_useClamp_index.md.DpSBOqRJ.js"},{"revision":null,"url":"assets/math_useClamp_index.md.DpSBOqRJ.lean.js"},{"revision":null,"url":"assets/math_useFloor_index.md.vz5AehnG.js"},{"revision":null,"url":"assets/math_useFloor_index.md.vz5AehnG.lean.js"},{"revision":null,"url":"assets/math_useMath_index.md.BS8LpLPv.js"},{"revision":null,"url":"assets/math_useMath_index.md.BS8LpLPv.lean.js"},{"revision":null,"url":"assets/math_useMax_index.md.P9TBR3m2.js"},{"revision":null,"url":"assets/math_useMax_index.md.P9TBR3m2.lean.js"},{"revision":null,"url":"assets/math_useMin_index.md.DkuJUBr2.js"},{"revision":null,"url":"assets/math_useMin_index.md.DkuJUBr2.lean.js"},{"revision":null,"url":"assets/math_usePrecision_index.md.ClwjzN_W.js"},{"revision":null,"url":"assets/math_usePrecision_index.md.ClwjzN_W.lean.js"},{"revision":null,"url":"assets/math_useProjection_index.md.BmP1HQZX.js"},{"revision":null,"url":"assets/math_useProjection_index.md.BmP1HQZX.lean.js"},{"revision":null,"url":"assets/math_useRound_index.md.CWk98rc8.js"},{"revision":null,"url":"assets/math_useRound_index.md.CWk98rc8.lean.js"},{"revision":null,"url":"assets/math_useSum_index.md.DGb5Mune.js"},{"revision":null,"url":"assets/math_useSum_index.md.DGb5Mune.lean.js"},{"revision":null,"url":"assets/math_useTrunc_index.md.BtxCcdbp.js"},{"revision":null,"url":"assets/math_useTrunc_index.md.BtxCcdbp.lean.js"},{"revision":null,"url":"assets/nuxt_README.md.C14_M1WZ.js"},{"revision":null,"url":"assets/nuxt_README.md.C14_M1WZ.lean.js"},{"revision":null,"url":"assets/router_README.md.BUiSb5jN.js"},{"revision":null,"url":"assets/router_README.md.BUiSb5jN.lean.js"},{"revision":null,"url":"assets/router_useRouteHash_index.md.Gn7e05lJ.js"},{"revision":null,"url":"assets/router_useRouteHash_index.md.Gn7e05lJ.lean.js"},{"revision":null,"url":"assets/router_useRouteParams_index.md.DDBaR8eU.js"},{"revision":null,"url":"assets/router_useRouteParams_index.md.DDBaR8eU.lean.js"},{"revision":null,"url":"assets/router_useRouteQuery_index.md.orrXkZTT.js"},{"revision":null,"url":"assets/router_useRouteQuery_index.md.orrXkZTT.lean.js"},{"revision":null,"url":"assets/rxjs_from_index.md.U2eMk7AW.js"},{"revision":null,"url":"assets/rxjs_from_index.md.U2eMk7AW.lean.js"},{"revision":null,"url":"assets/rxjs_README.md.BwCwMBOo.js"},{"revision":null,"url":"assets/rxjs_README.md.BwCwMBOo.lean.js"},{"revision":null,"url":"assets/rxjs_toObserver_index.md.vC3McFFP.js"},{"revision":null,"url":"assets/rxjs_toObserver_index.md.vC3McFFP.lean.js"},{"revision":null,"url":"assets/rxjs_useExtractedObservable_index.md.D3ORxB-l.js"},{"revision":null,"url":"assets/rxjs_useExtractedObservable_index.md.D3ORxB-l.lean.js"},{"revision":null,"url":"assets/rxjs_useObservable_index.md.C_Obq0jO.js"},{"revision":null,"url":"assets/rxjs_useObservable_index.md.C_Obq0jO.lean.js"},{"revision":null,"url":"assets/rxjs_useSubject_index.md.-0hf0YU8.js"},{"revision":null,"url":"assets/rxjs_useSubject_index.md.-0hf0YU8.lean.js"},{"revision":null,"url":"assets/rxjs_useSubscription_index.md.BUR2FSxm.js"},{"revision":null,"url":"assets/rxjs_useSubscription_index.md.BUR2FSxm.lean.js"},{"revision":null,"url":"assets/rxjs_watchExtractedObservable_index.md.BAgpcHwU.js"},{"revision":null,"url":"assets/rxjs_watchExtractedObservable_index.md.BAgpcHwU.lean.js"},{"revision":null,"url":"assets/shared_computedEager_index.md.Ber1GIZe.js"},{"revision":null,"url":"assets/shared_computedEager_index.md.Ber1GIZe.lean.js"},{"revision":null,"url":"assets/shared_computedWithControl_index.md.DvzA3JJL.js"},{"revision":null,"url":"assets/shared_computedWithControl_index.md.DvzA3JJL.lean.js"},{"revision":null,"url":"assets/shared_createEventHook_index.md.DRxPpKdT.js"},{"revision":null,"url":"assets/shared_createEventHook_index.md.DRxPpKdT.lean.js"},{"revision":null,"url":"assets/shared_createGlobalState_index.md.Yj-GZilT.js"},{"revision":null,"url":"assets/shared_createGlobalState_index.md.Yj-GZilT.lean.js"},{"revision":null,"url":"assets/shared_createInjectionState_index.md.Cx1tj3XX.js"},{"revision":null,"url":"assets/shared_createInjectionState_index.md.Cx1tj3XX.lean.js"},{"revision":null,"url":"assets/shared_createRef_index.md.GoF7vaTq.js"},{"revision":null,"url":"assets/shared_createRef_index.md.GoF7vaTq.lean.js"},{"revision":null,"url":"assets/shared_createSharedComposable_index.md.C0uPbBJb.js"},{"revision":null,"url":"assets/shared_createSharedComposable_index.md.C0uPbBJb.lean.js"},{"revision":null,"url":"assets/shared_extendRef_index.md.Ex-2Akhu.js"},{"revision":null,"url":"assets/shared_extendRef_index.md.Ex-2Akhu.lean.js"},{"revision":null,"url":"assets/shared_get_index.md.DF1IEvTI.js"},{"revision":null,"url":"assets/shared_get_index.md.DF1IEvTI.lean.js"},{"revision":null,"url":"assets/shared_injectLocal_index.md.Yw_yoYc-.js"},{"revision":null,"url":"assets/shared_injectLocal_index.md.Yw_yoYc-.lean.js"},{"revision":null,"url":"assets/shared_isDefined_index.md.D0ihiZH4.js"},{"revision":null,"url":"assets/shared_isDefined_index.md.D0ihiZH4.lean.js"},{"revision":null,"url":"assets/shared_makeDestructurable_index.md.BRQuIaVZ.js"},{"revision":null,"url":"assets/shared_makeDestructurable_index.md.BRQuIaVZ.lean.js"},{"revision":null,"url":"assets/shared_provideLocal_index.md.DS2YnKy0.js"},{"revision":null,"url":"assets/shared_provideLocal_index.md.DS2YnKy0.lean.js"},{"revision":null,"url":"assets/shared_reactify_index.md.D4cgsp3Y.js"},{"revision":null,"url":"assets/shared_reactify_index.md.D4cgsp3Y.lean.js"},{"revision":null,"url":"assets/shared_reactifyObject_index.md.BP9BtKPf.js"},{"revision":null,"url":"assets/shared_reactifyObject_index.md.BP9BtKPf.lean.js"},{"revision":null,"url":"assets/shared_reactiveComputed_index.md.gz-Ala-q.js"},{"revision":null,"url":"assets/shared_reactiveComputed_index.md.gz-Ala-q.lean.js"},{"revision":null,"url":"assets/shared_reactiveOmit_index.md.Dm_z-LQz.js"},{"revision":null,"url":"assets/shared_reactiveOmit_index.md.Dm_z-LQz.lean.js"},{"revision":null,"url":"assets/shared_reactivePick_index.md.tIXOujMA.js"},{"revision":null,"url":"assets/shared_reactivePick_index.md.tIXOujMA.lean.js"},{"revision":null,"url":"assets/shared_refAutoReset_index.md.BeaNdNZw.js"},{"revision":null,"url":"assets/shared_refAutoReset_index.md.BeaNdNZw.lean.js"},{"revision":null,"url":"assets/shared_refDebounced_index.md.rmp-9l7X.js"},{"revision":null,"url":"assets/shared_refDebounced_index.md.rmp-9l7X.lean.js"},{"revision":null,"url":"assets/shared_refDefault_index.md.CV_qsqtq.js"},{"revision":null,"url":"assets/shared_refDefault_index.md.CV_qsqtq.lean.js"},{"revision":null,"url":"assets/shared_refThrottled_index.md.Cum4ZMK2.js"},{"revision":null,"url":"assets/shared_refThrottled_index.md.Cum4ZMK2.lean.js"},{"revision":null,"url":"assets/shared_refWithControl_index.md.Cqnj-Cmz.js"},{"revision":null,"url":"assets/shared_refWithControl_index.md.Cqnj-Cmz.lean.js"},{"revision":null,"url":"assets/shared_set_index.md.BbGHtVWG.js"},{"revision":null,"url":"assets/shared_set_index.md.BbGHtVWG.lean.js"},{"revision":null,"url":"assets/shared_syncRef_index.md.BD_As5nJ.js"},{"revision":null,"url":"assets/shared_syncRef_index.md.BD_As5nJ.lean.js"},{"revision":null,"url":"assets/shared_syncRefs_index.md.ePlMW28L.js"},{"revision":null,"url":"assets/shared_syncRefs_index.md.ePlMW28L.lean.js"},{"revision":null,"url":"assets/shared_toReactive_index.md.BxRr6GKo.js"},{"revision":null,"url":"assets/shared_toReactive_index.md.BxRr6GKo.lean.js"},{"revision":null,"url":"assets/shared_toRef_index.md.D45lC0Wt.js"},{"revision":null,"url":"assets/shared_toRef_index.md.D45lC0Wt.lean.js"},{"revision":null,"url":"assets/shared_toRefs_index.md.BrBQe23a.js"},{"revision":null,"url":"assets/shared_toRefs_index.md.BrBQe23a.lean.js"},{"revision":null,"url":"assets/shared_toValue_index.md.B6TNj7zU.js"},{"revision":null,"url":"assets/shared_toValue_index.md.B6TNj7zU.lean.js"},{"revision":null,"url":"assets/shared_tryOnBeforeMount_index.md.BB-9324N.js"},{"revision":null,"url":"assets/shared_tryOnBeforeMount_index.md.BB-9324N.lean.js"},{"revision":null,"url":"assets/shared_tryOnBeforeUnmount_index.md.BkZy0zf8.js"},{"revision":null,"url":"assets/shared_tryOnBeforeUnmount_index.md.BkZy0zf8.lean.js"},{"revision":null,"url":"assets/shared_tryOnMounted_index.md.DVgebXUM.js"},{"revision":null,"url":"assets/shared_tryOnMounted_index.md.DVgebXUM.lean.js"},{"revision":null,"url":"assets/shared_tryOnScopeDispose_index.md.CCcnrPEX.js"},{"revision":null,"url":"assets/shared_tryOnScopeDispose_index.md.CCcnrPEX.lean.js"},{"revision":null,"url":"assets/shared_tryOnUnmounted_index.md.Bzz062MK.js"},{"revision":null,"url":"assets/shared_tryOnUnmounted_index.md.Bzz062MK.lean.js"},{"revision":null,"url":"assets/shared_until_index.md.cSx6MsuQ.js"},{"revision":null,"url":"assets/shared_until_index.md.cSx6MsuQ.lean.js"},{"revision":null,"url":"assets/shared_useArrayDifference_index.md.wKkbZoCQ.js"},{"revision":null,"url":"assets/shared_useArrayDifference_index.md.wKkbZoCQ.lean.js"},{"revision":null,"url":"assets/shared_useArrayEvery_index.md.DWTGBAJQ.js"},{"revision":null,"url":"assets/shared_useArrayEvery_index.md.DWTGBAJQ.lean.js"},{"revision":null,"url":"assets/shared_useArrayFilter_index.md.1HNbTIUb.js"},{"revision":null,"url":"assets/shared_useArrayFilter_index.md.1HNbTIUb.lean.js"},{"revision":null,"url":"assets/shared_useArrayFind_index.md.BfvXFTD9.js"},{"revision":null,"url":"assets/shared_useArrayFind_index.md.BfvXFTD9.lean.js"},{"revision":null,"url":"assets/shared_useArrayFindIndex_index.md.BcBQ6A0S.js"},{"revision":null,"url":"assets/shared_useArrayFindIndex_index.md.BcBQ6A0S.lean.js"},{"revision":null,"url":"assets/shared_useArrayFindLast_index.md.Cvyi-il-.js"},{"revision":null,"url":"assets/shared_useArrayFindLast_index.md.Cvyi-il-.lean.js"},{"revision":null,"url":"assets/shared_useArrayIncludes_index.md.Imt9mKKN.js"},{"revision":null,"url":"assets/shared_useArrayIncludes_index.md.Imt9mKKN.lean.js"},{"revision":null,"url":"assets/shared_useArrayJoin_index.md.B1UfNg41.js"},{"revision":null,"url":"assets/shared_useArrayJoin_index.md.B1UfNg41.lean.js"},{"revision":null,"url":"assets/shared_useArrayMap_index.md.D2SY6RwJ.js"},{"revision":null,"url":"assets/shared_useArrayMap_index.md.D2SY6RwJ.lean.js"},{"revision":null,"url":"assets/shared_useArrayReduce_index.md.CtVWbrn5.js"},{"revision":null,"url":"assets/shared_useArrayReduce_index.md.CtVWbrn5.lean.js"},{"revision":null,"url":"assets/shared_useArraySome_index.md.y5QmewkC.js"},{"revision":null,"url":"assets/shared_useArraySome_index.md.y5QmewkC.lean.js"},{"revision":null,"url":"assets/shared_useArrayUnique_index.md.BTIA5XgV.js"},{"revision":null,"url":"assets/shared_useArrayUnique_index.md.BTIA5XgV.lean.js"},{"revision":null,"url":"assets/shared_useCounter_index.md.yaRoIThr.js"},{"revision":null,"url":"assets/shared_useCounter_index.md.yaRoIThr.lean.js"},{"revision":null,"url":"assets/shared_useDateFormat_index.md.DySYdeUI.js"},{"revision":null,"url":"assets/shared_useDateFormat_index.md.DySYdeUI.lean.js"},{"revision":null,"url":"assets/shared_useDebounceFn_index.md.DJXoa-Rp.js"},{"revision":null,"url":"assets/shared_useDebounceFn_index.md.DJXoa-Rp.lean.js"},{"revision":null,"url":"assets/shared_useInterval_index.md.BOe91Qso.js"},{"revision":null,"url":"assets/shared_useInterval_index.md.BOe91Qso.lean.js"},{"revision":null,"url":"assets/shared_useIntervalFn_index.md.SfhETflB.js"},{"revision":null,"url":"assets/shared_useIntervalFn_index.md.SfhETflB.lean.js"},{"revision":null,"url":"assets/shared_useLastChanged_index.md.CnKYHloG.js"},{"revision":null,"url":"assets/shared_useLastChanged_index.md.CnKYHloG.lean.js"},{"revision":null,"url":"assets/shared_useThrottleFn_index.md.C_WqddVv.js"},{"revision":null,"url":"assets/shared_useThrottleFn_index.md.C_WqddVv.lean.js"},{"revision":null,"url":"assets/shared_useTimeout_index.md.C2sW8Ij6.js"},{"revision":null,"url":"assets/shared_useTimeout_index.md.C2sW8Ij6.lean.js"},{"revision":null,"url":"assets/shared_useTimeoutFn_index.md.B6U35UJS.js"},{"revision":null,"url":"assets/shared_useTimeoutFn_index.md.B6U35UJS.lean.js"},{"revision":null,"url":"assets/shared_useToggle_index.md.Dy6jCoTY.js"},{"revision":null,"url":"assets/shared_useToggle_index.md.Dy6jCoTY.lean.js"},{"revision":null,"url":"assets/shared_useToNumber_index.md.Bf5nMhVT.js"},{"revision":null,"url":"assets/shared_useToNumber_index.md.Bf5nMhVT.lean.js"},{"revision":null,"url":"assets/shared_useToString_index.md.B0cOil_O.js"},{"revision":null,"url":"assets/shared_useToString_index.md.B0cOil_O.lean.js"},{"revision":null,"url":"assets/shared_watchArray_index.md.Ct5eedDE.js"},{"revision":null,"url":"assets/shared_watchArray_index.md.Ct5eedDE.lean.js"},{"revision":null,"url":"assets/shared_watchAtMost_index.md.DKdPnqhJ.js"},{"revision":null,"url":"assets/shared_watchAtMost_index.md.DKdPnqhJ.lean.js"},{"revision":null,"url":"assets/shared_watchDebounced_index.md.CaUwJegh.js"},{"revision":null,"url":"assets/shared_watchDebounced_index.md.CaUwJegh.lean.js"},{"revision":null,"url":"assets/shared_watchDeep_index.md.BNveORN9.js"},{"revision":null,"url":"assets/shared_watchDeep_index.md.BNveORN9.lean.js"},{"revision":null,"url":"assets/shared_watchIgnorable_index.md.UAicjVP5.js"},{"revision":null,"url":"assets/shared_watchIgnorable_index.md.UAicjVP5.lean.js"},{"revision":null,"url":"assets/shared_watchImmediate_index.md.9TysMorz.js"},{"revision":null,"url":"assets/shared_watchImmediate_index.md.9TysMorz.lean.js"},{"revision":null,"url":"assets/shared_watchOnce_index.md.CqtZ0GLd.js"},{"revision":null,"url":"assets/shared_watchOnce_index.md.CqtZ0GLd.lean.js"},{"revision":null,"url":"assets/shared_watchPausable_index.md.pZQeahtv.js"},{"revision":null,"url":"assets/shared_watchPausable_index.md.pZQeahtv.lean.js"},{"revision":null,"url":"assets/shared_watchThrottled_index.md.DfxbH0x0.js"},{"revision":null,"url":"assets/shared_watchThrottled_index.md.DfxbH0x0.lean.js"},{"revision":null,"url":"assets/shared_watchTriggerable_index.md.BCwxFSUg.js"},{"revision":null,"url":"assets/shared_watchTriggerable_index.md.BCwxFSUg.lean.js"},{"revision":null,"url":"assets/shared_watchWithFilter_index.md.CEXX27Xm.js"},{"revision":null,"url":"assets/shared_watchWithFilter_index.md.CEXX27Xm.lean.js"},{"revision":null,"url":"assets/shared_whenever_index.md.D10NHUw2.js"},{"revision":null,"url":"assets/shared_whenever_index.md.D10NHUw2.lean.js"},{"revision":null,"url":"assets/style.DnHu9Lpb.css"},{"revision":null,"url":"assets/team.md.BgjfJ5pg.js"},{"revision":null,"url":"assets/team.md.BgjfJ5pg.lean.js"},{"revision":null,"url":"assets/vueer.md.BDNKXoyn.js"},{"revision":null,"url":"assets/vueer.md.BDNKXoyn.lean.js"},{"revision":null,"url":"assets/why-no-translations.md.DYXbpni6.js"},{"revision":null,"url":"assets/why-no-translations.md.DYXbpni6.lean.js"},{"revision":"1f787dece86a2d31a7c76bf10d5ca756","url":"badge-function-count.svg"},{"revision":"1ca92edca3ef75311222baeca43be318","url":"components/README.html"},{"revision":"368bce6272bda5fd054d67ff1fca40b4","url":"contributing.html"},{"revision":"70a1fb37ddc0ec28ff6f48e8f0d6d133","url":"core/_template/index.html"},{"revision":"84671876669c7da425993c2161200177","url":"core/computedAsync/index.html"},{"revision":"883988003d29c23126d2bf8dd658c931","url":"core/computedInject/index.html"},{"revision":"9a398f772569a67419c22c92267b3dcb","url":"core/createReusableTemplate/index.html"},{"revision":"2b120e960ddfe06ecbfc0c49e25ea0d2","url":"core/createTemplatePromise/index.html"},{"revision":"b58f7ec0be41cfab924714bf5bee2a14","url":"core/createUnrefFn/index.html"},{"revision":"5c459343d665c7f24b001eb047e87f9c","url":"core/onClickOutside/index.html"},{"revision":"50fffb0c429c2d20972f7e97af8a106f","url":"core/onElementRemoval/index.html"},{"revision":"0f1a1d294cb58b6fbe15f9608339c7d0","url":"core/onKeyStroke/index.html"},{"revision":"5e8c29c7a69c0e2647144662e168b6e6","url":"core/onLongPress/index.html"},{"revision":"648a183fb848ee1ca519c8c1cd7c4c80","url":"core/onStartTyping/index.html"},{"revision":"b220f2e7affe128cdb717788a726af3e","url":"core/README.html"},{"revision":"d97018bad71c54c5c4b251c2f8db40e2","url":"core/templateRef/index.html"},{"revision":"cf890afb074edd44c8474c09becadae2","url":"core/unrefElement/index.html"},{"revision":"cdaaf7feec64dbb1f26df4e9eeb33bb0","url":"core/useActiveElement/index.html"},{"revision":"2d8697c83ad5814810501d962d06bc38","url":"core/useAnimate/index.html"},{"revision":"6b9623e72070d42838623f059e001eb7","url":"core/useAsyncQueue/index.html"},{"revision":"aada06b514c8caba53e96253db6ae76b","url":"core/useAsyncState/index.html"},{"revision":"a4942c5fb38757333476be8347b62ef1","url":"core/useBase64/index.html"},{"revision":"3ea7d5fc2ed40b8ccff3c6d8a7a88ad4","url":"core/useBattery/index.html"},{"revision":"03be7d70c618e27a8c933bd1b1c98c46","url":"core/useBluetooth/index.html"},{"revision":"de22cd9083cf224075ecb47957c6de00","url":"core/useBreakpoints/index.html"},{"revision":"d56e004493ef38781c9ef7d888c06dde","url":"core/useBroadcastChannel/index.html"},{"revision":"33072e2e7b294e9764c963eda1aeeae7","url":"core/useBrowserLocation/index.html"},{"revision":"fe25a3fe9d40880c93e55a877c6a00cf","url":"core/useCached/index.html"},{"revision":"359f480ac9434388fee9902ea4b0bdab","url":"core/useClipboard/index.html"},{"revision":"528796cd879519d196b82d705b95e777","url":"core/useClipboardItems/index.html"},{"revision":"09aac9082902cc5a3ed62565f94632d3","url":"core/useCloned/index.html"},{"revision":"986155fb0eb7f5670570dda3461f5cde","url":"core/useColorMode/index.html"},{"revision":"580b477dbcbce62b55939e8dcd949507","url":"core/useConfirmDialog/index.html"},{"revision":"75396197c07ba79319cd1833c2122058","url":"core/useCountdown/index.html"},{"revision":"3e30952483d07e40e099e32cc9111c36","url":"core/useCssVar/index.html"},{"revision":"a6987d46c5ecdde76e5b424048783746","url":"core/useCurrentElement/index.html"},{"revision":"65609821bf5b6912e6cb8660fc452a01","url":"core/useCycleList/index.html"},{"revision":"293aa71eb5e21d2caba98df4904ff2f4","url":"core/useDark/index.html"},{"revision":"854874cc961ba9b4c3d85cca586bef17","url":"core/useDebouncedRefHistory/index.html"},{"revision":"b4ba5d1b3090b8968f3bc505b9dcdf3d","url":"core/useDeviceMotion/index.html"},{"revision":"549084e1556d4cab3b61595888a5d10d","url":"core/useDeviceOrientation/index.html"},{"revision":"35b5b906b9116d603e1a48f039ef2af5","url":"core/useDevicePixelRatio/index.html"},{"revision":"2df8fa7607fe2dc328f87bc28771aa23","url":"core/useDevicesList/index.html"},{"revision":"d7463d1822ca84fbf223355ec19247f1","url":"core/useDisplayMedia/index.html"},{"revision":"fb9e891ac5764c40df5332a8fce91fe3","url":"core/useDocumentVisibility/index.html"},{"revision":"5b020d4b5bda42029f238a64e4844dd5","url":"core/useDraggable/index.html"},{"revision":"2e9202311000ee4b9bdbf91c7ffe1420","url":"core/useDropZone/index.html"},{"revision":"c3d50c373160d5a36c2cc1b07060acd8","url":"core/useElementBounding/index.html"},{"revision":"e2f6176d85440b7181fc6eae07a4f404","url":"core/useElementByPoint/index.html"},{"revision":"042469836e267d2a1351662ea547f95e","url":"core/useElementHover/index.html"},{"revision":"88404ccbb953eeafb2ac152971e09289","url":"core/useElementSize/index.html"},{"revision":"b4008f3c3920ffcf7e53214964dc4c32","url":"core/useElementVisibility/index.html"},{"revision":"4c1c56fc3867fab2af99661b791ee4f3","url":"core/useEventBus/index.html"},{"revision":"f73b9f9277b6dd0cb6b0bff1bfb8b8f8","url":"core/useEventListener/index.html"},{"revision":"10739edc271262d422253750e2d1bf50","url":"core/useEventSource/index.html"},{"revision":"26ca152c5850c1f05dad277bf28a63e9","url":"core/useEyeDropper/index.html"},{"revision":"7c6c012023bf2e0a626b5cb1fe003f87","url":"core/useFavicon/index.html"},{"revision":"31e21198b81ac60db1d23edc8012d1e6","url":"core/useFetch/index.html"},{"revision":"8de93eebda820ea53e89c8ae18383eb1","url":"core/useFileDialog/index.html"},{"revision":"19c83aaf2f7bdece353a02ca45638c62","url":"core/useFileSystemAccess/index.html"},{"revision":"fc806434aa213101dde8773fd5fc0f79","url":"core/useFocus/index.html"},{"revision":"192cac41700e72c09f634db54052c812","url":"core/useFocusWithin/index.html"},{"revision":"29beeab9b77648c85e8fef40c66dedc0","url":"core/useFps/index.html"},{"revision":"284a34a07853b7b58558918fb112ca87","url":"core/useFullscreen/index.html"},{"revision":"0ab0e6c2451dd01aadc14b004f6f4a0a","url":"core/useGamepad/index.html"},{"revision":"deb7b16381f5eab2ce413ca256b31451","url":"core/useGeolocation/index.html"},{"revision":"29e3e5418296ecf2df3234d4856db025","url":"core/useIdle/index.html"},{"revision":"98e494832d965ed098acd503a29c68d9","url":"core/useImage/index.html"},{"revision":"83c39797846ce48d506cbeea4875d9e5","url":"core/useInfiniteScroll/index.html"},{"revision":"965c4b13cc266fc03a793f2a2c973e75","url":"core/useIntersectionObserver/index.html"},{"revision":"10fc7ff4a306eeb12d2d5ce05b7f65c6","url":"core/useKeyModifier/index.html"},{"revision":"0b76d7b53aaf2ceeb02f8718cdd8bde5","url":"core/useLocalStorage/index.html"},{"revision":"54915bf5cf34d10ff0fadc82a079672f","url":"core/useMagicKeys/index.html"},{"revision":"5be6f80d933b7b486cdce8646443dbe7","url":"core/useManualRefHistory/index.html"},{"revision":"d6b9c2b52f233b84d2b3276ae0ef9a90","url":"core/useMediaControls/index.html"},{"revision":"b715222a11a9b627c0c05b4717bb40fd","url":"core/useMediaQuery/index.html"},{"revision":"5976d6628aad8c3849b042c2f3f4cda8","url":"core/useMemoize/index.html"},{"revision":"bff21e0b0616475d711abe3ec952c816","url":"core/useMemory/index.html"},{"revision":"d9c8319946f280ecba0e5ecb18d6a1d0","url":"core/useMounted/index.html"},{"revision":"c67fdeb8d578c942392cd34c684da7a2","url":"core/useMouse/index.html"},{"revision":"b114d2a09ac507ff280e54846fb1cafd","url":"core/useMouseInElement/index.html"},{"revision":"7ecd5e90cc7049182b635570eab90b9e","url":"core/useMousePressed/index.html"},{"revision":"05e715dbdd04f942fe389832cf11fe26","url":"core/useMutationObserver/index.html"},{"revision":"e01f4d8a9be2ae08ade543ea353a7f63","url":"core/useNavigatorLanguage/index.html"},{"revision":"90390cd81b6480d3b66300c12b298249","url":"core/useNetwork/index.html"},{"revision":"121f7f7528f8e915b628a60dfe92f33c","url":"core/useNow/index.html"},{"revision":"a13a69d5f455986ef42b33b38bc0ef27","url":"core/useObjectUrl/index.html"},{"revision":"f7d74897714bfa9698656096722c48a1","url":"core/useOffsetPagination/index.html"},{"revision":"5e4ee17a196cf8d1b288442ae8b7c061","url":"core/useOnline/index.html"},{"revision":"789fa3977ee3be808cfc60423fe2c826","url":"core/usePageLeave/index.html"},{"revision":"01f67a478580ee4ebd21b3fbc1a4fc0d","url":"core/useParallax/index.html"},{"revision":"57a96ab66caa696b8a93c64d18cd7824","url":"core/useParentElement/index.html"},{"revision":"5ab481ed2b83694e5fb371cb05ce8f57","url":"core/usePerformanceObserver/index.html"},{"revision":"66ba7e83e1a6c16090dda78e8e72a4df","url":"core/usePermission/index.html"},{"revision":"47c573ae31587844c0713c89ebc1dd61","url":"core/usePointer/index.html"},{"revision":"ca8317025336f3628e8c9e5c1eb08892","url":"core/usePointerLock/index.html"},{"revision":"894e8ab40ddc0cf3729bdf49c6b6515b","url":"core/usePointerSwipe/index.html"},{"revision":"78e6df09b49e8e2185a1312fcd29a149","url":"core/usePreferredColorScheme/index.html"},{"revision":"dbf95e0849b8ef99a934fb86584cd37b","url":"core/usePreferredContrast/index.html"},{"revision":"478b09d0d4c22adb8e1d30eda21940a4","url":"core/usePreferredDark/index.html"},{"revision":"b953d99d62a27a3a93e56d4afc9ce965","url":"core/usePreferredLanguages/index.html"},{"revision":"c5e30b04f0e41450e038df3e3629acd3","url":"core/usePreferredReducedMotion/index.html"},{"revision":"d95cac85ae4d01eeea8d24cda6fb86e3","url":"core/usePreferredReducedTransparency/index.html"},{"revision":"c9015c77aed487623ee9213f6b4147ac","url":"core/usePrevious/index.html"},{"revision":"136c24ab99b42fc4945906a684643139","url":"core/useRafFn/index.html"},{"revision":"6748650cb900c758340c42a58e409c9e","url":"core/useRefHistory/index.html"},{"revision":"c3455fd8269e1cfeb786122bb2128bbf","url":"core/useResizeObserver/index.html"},{"revision":"028fb72bdaf7cb39c1ee6d1996ff456f","url":"core/useScreenOrientation/index.html"},{"revision":"d6f0e1f015d301a24b954e26cb1cafd8","url":"core/useScreenSafeArea/index.html"},{"revision":"82f59bb4526c5ee96fe50be26ce67e22","url":"core/useScriptTag/index.html"},{"revision":"d4c3e4f376cf771d95832fd21a65163d","url":"core/useScroll/index.html"},{"revision":"9c2da65172cafa938e52f2d7f854d371","url":"core/useScrollLock/index.html"},{"revision":"e86c9a48eb0765998494efccb6b49db1","url":"core/useSessionStorage/index.html"},{"revision":"8d9a468351ab5172e4126632296281e4","url":"core/useShare/index.html"},{"revision":"ebe7634673345c80dbba6f9f56e0e731","url":"core/useSorted/index.html"},{"revision":"dc8e2c2b7df90d07a5ffb345bf7b328a","url":"core/useSpeechRecognition/index.html"},{"revision":"e9f3c0741dd72a7438b5e20284634d7e","url":"core/useSpeechSynthesis/index.html"},{"revision":"491a7e8523047a6bb78abbf8ddc91cd6","url":"core/useSSRWidth/index.html"},{"revision":"d41ef368a8f174b23ebe641cc33b8510","url":"core/useStepper/index.html"},{"revision":"82b88287bf4e69104285e60a1c1a6967","url":"core/useStorage/index.html"},{"revision":"6b33bb23bdb66823f0ed6fa66560472e","url":"core/useStorageAsync/index.html"},{"revision":"048594f3c31f91d795f61806fee8c1ca","url":"core/useStyleTag/index.html"},{"revision":"4061b1740776dce4e6a0dbddbb50b94d","url":"core/useSupported/index.html"},{"revision":"41e96e27cc5c1e5ca04d0b9629196c55","url":"core/useSwipe/index.html"},{"revision":"db71cab9ba26d019a9acf49007843a6a","url":"core/useTemplateRefsList/index.html"},{"revision":"be1a3c1933106681be9eaa0713e3db9c","url":"core/useTextareaAutosize/index.html"},{"revision":"7501d34479e4b55fbede7f308d262288","url":"core/useTextDirection/index.html"},{"revision":"86eb49c0a71bea32fa08ef59fc7eccb2","url":"core/useTextSelection/index.html"},{"revision":"147aa7739c7b59b411dd2206ad1dd9f7","url":"core/useThrottledRefHistory/index.html"},{"revision":"93899fb0dbb191c5f15e793d89392829","url":"core/useTimeAgo/index.html"},{"revision":"89c82c265a61576a044bdfc1c780fc4a","url":"core/useTimeoutPoll/index.html"},{"revision":"2655c78567caa3237949a3042f99fa31","url":"core/useTimestamp/index.html"},{"revision":"09105f2c02fcfc5eb1585d9a9e290aea","url":"core/useTitle/index.html"},{"revision":"678e31c7295771a0a917132314d4e23c","url":"core/useTransition/index.html"},{"revision":"50457258a7fd4bdf834271205915ae62","url":"core/useUrlSearchParams/index.html"},{"revision":"b7af34277691449331022819687741a0","url":"core/useUserMedia/index.html"},{"revision":"bc8b48063ec2ba647d32f68dcef5bec7","url":"core/useVibrate/index.html"},{"revision":"13378f42b8f14703aece33fc28999391","url":"core/useVirtualList/index.html"},{"revision":"d3ee573913f7dcf7ca67741a87582cc0","url":"core/useVModel/index.html"},{"revision":"2d53eccfa86baabdef80b035798b750a","url":"core/useVModels/index.html"},{"revision":"78b58854beba2e17b9bae3b59ce9e1d7","url":"core/useWakeLock/index.html"},{"revision":"02a4141a843743777126ccc876078a74","url":"core/useWebNotification/index.html"},{"revision":"85df15fcdb500dd4afea092dfc75dbe4","url":"core/useWebSocket/index.html"},{"revision":"3236b402f270a42a0f3e211a318f068c","url":"core/useWebWorker/index.html"},{"revision":"87a4bfa4d0142319278e713592e2d194","url":"core/useWebWorkerFn/index.html"},{"revision":"a517cb589925fd2d4081700fdf7dead3","url":"core/useWindowFocus/index.html"},{"revision":"e9f3a807e96e73c5c302f65317adf4e0","url":"core/useWindowScroll/index.html"},{"revision":"d0a20d39a3fb522df8134fc370d83def","url":"core/useWindowSize/index.html"},{"revision":"a4a2ebe8acfed6582e4f62e4de0b99d8","url":"ecosystem.html"},{"revision":"342f80217f75a756395d479b208ac9d0","url":"electron/README.html"},{"revision":"261f9eff5a919d896dba3003dba9f0a6","url":"electron/useIpcRenderer/index.html"},{"revision":"5dc35e296230b6d5f9425c96870410cf","url":"electron/useIpcRendererInvoke/index.html"},{"revision":"0c924998fed69f965d0c3bd26ad3c72c","url":"electron/useIpcRendererOn/index.html"},{"revision":"b44adf13a6226f21b9632a3d31a9e36d","url":"electron/useZoomFactor/index.html"},{"revision":"6df31c0fba3b77a1ac6e23aceb4364f7","url":"electron/useZoomLevel/index.html"},{"revision":"2aa596cdb2654bb64f6f8314cf39f937","url":"export-size.html"},{"revision":"985261a9cd1ce4b1fdea403faac1e119","url":"favicon-16x16.png"},{"revision":"8556a0b6568697f1c8d76df245d676b9","url":"favicon-32x32.png"},{"revision":"fba46f9c76ff8cfb8c7e88710cab4892","url":"favicon.ico"},{"revision":"0f8c1cea3c233be4fb6ddfe3dd8f919b","url":"favicon.svg"},{"revision":"7a0aff616f95979daa1659d88c50d7c7","url":"firebase/README.html"},{"revision":"53f3b21b0526e2d851224b18e43c96d9","url":"firebase/useAuth/index.html"},{"revision":"f08529c439d34af562ef82fcd95863fd","url":"firebase/useFirestore/index.html"},{"revision":"d645d228400ff7f50f3df3abaec55427","url":"firebase/useRTDB/index.html"},{"revision":"1fd7fa237554c8abec6556bc85354dee","url":"functions.html"},{"revision":"e0498c4bc3a7798a94890eff8c0fd032","url":"google5e5d9f9fc6107357.html"},{"revision":"b958c535afb79a1e90363b6a7bb5686c","url":"guide/about.html"},{"revision":"a6e40bf6db3e1ec69661f9810c592641","url":"guide/best-practice.html"},{"revision":"1b8e1638f2865663a08ed48670a760ea","url":"guide/components.html"},{"revision":"9aab5184339797c07c87a76a03624a52","url":"guide/config.html"},{"revision":"f0ed6618083e8c7552a4203246208c05","url":"guide/index.html"},{"revision":"a9ae8c288e67f9201d06cb15afacde6a","url":"guidelines.html"},{"revision":"a9cf80d9fd869733d0ba3674314e0f68","url":"index.html"},{"revision":"a28b30d77f37c4850cc45f24718065c8","url":"integrations/README.html"},{"revision":"52d9fed9095845471e2ca8b90edfba65","url":"integrations/useAsyncValidator/index.html"},{"revision":"04f32aa01f5a59df8bdd2cdf64852e02","url":"integrations/useAxios/index.html"},{"revision":"fc00bf7cac2553e349541bdef9a0e1d3","url":"integrations/useChangeCase/index.html"},{"revision":"a58bd0522691ba476d330e95b79ef77a","url":"integrations/useCookies/index.html"},{"revision":"2d259afc1b44f01af55289bbe8fa26e3","url":"integrations/useDrauu/index.html"},{"revision":"00615483e1aaae3e6f13e3345df591f4","url":"integrations/useFocusTrap/index.html"},{"revision":"6edf2f05c7bbfe3168ac5df05a21e3e3","url":"integrations/useFuse/index.html"},{"revision":"d705b788bca092217407a52f0e821d70","url":"integrations/useIDBKeyval/index.html"},{"revision":"a711573a03bcf13de0eaec2ffa3711d9","url":"integrations/useJwt/index.html"},{"revision":"061f03ad09795655639f6a168874a4bf","url":"integrations/useNProgress/index.html"},{"revision":"bed7c614ffcbc3e0199a2094bda0bbfb","url":"integrations/useQRCode/index.html"},{"revision":"3c3e280205ed48c80e23ac4df6bf6a80","url":"integrations/useSortable/index.html"},{"revision":"593a7e67c051b2ea0b109724fe2904c7","url":"logo-horizontal-dark.png"},{"revision":"9b3d7c4f6167d5ba8336961b9ed9f1cf","url":"logo-horizontal.png"},{"revision":"9816609c9d426f02bf6e87689108bcc2","url":"logo-vertical-dark.png"},{"revision":"ca8a4a4f2f6c8da2b3c8dc91c588f01c","url":"logo-vertical.png"},{"revision":"795dd8766cdee862b1f8b2a1b861ac89","url":"maskable-icon.png"},{"revision":"f6fb7f1e3d3990f795bbb918d6a6f5f0","url":"math/createGenericProjection/index.html"},{"revision":"b30537cf364bb8157940b83990b3fe6d","url":"math/createProjection/index.html"},{"revision":"7dd0ab640df2f743b2cd83770e0e8627","url":"math/logicAnd/index.html"},{"revision":"ba3d3fe348de885413adc7a9d2e17feb","url":"math/logicNot/index.html"},{"revision":"b45db295e0efcdd309b60207d370176c","url":"math/logicOr/index.html"},{"revision":"9b4bce1a9663737208a6d4fc96dba2ea","url":"math/README.html"},{"revision":"b9e7df3543906c2e7c1055cd5149a524","url":"math/useAbs/index.html"},{"revision":"55aee868502dc5de5f9e8e222f4fe86c","url":"math/useAverage/index.html"},{"revision":"1bbdf8a84f0e6ff4c22971f9c8fc405d","url":"math/useCeil/index.html"},{"revision":"61bb69b27b8e4549e3557afccf0ab723","url":"math/useClamp/index.html"},{"revision":"e75df975de84772fc7f0648654f7e9cc","url":"math/useFloor/index.html"},{"revision":"b70a965fa4eb0b9cf9529b6fd4361735","url":"math/useMath/index.html"},{"revision":"40c45ecfb4a8a9b155393169d92a9c32","url":"math/useMax/index.html"},{"revision":"65ddf5047c371062f79431494fa19924","url":"math/useMin/index.html"},{"revision":"bc18c71bc55817828b96d71c2319f5ff","url":"math/usePrecision/index.html"},{"revision":"aa8d18b0f2d72c1178762462bc40f8f1","url":"math/useProjection/index.html"},{"revision":"5f7d46d86185754c8e15c8c30ea6b37c","url":"math/useRound/index.html"},{"revision":"54953b9f6566dc3739deb9eb3364e38a","url":"math/useSum/index.html"},{"revision":"6d8ebc060257268523a515d1c079dc43","url":"math/useTrunc/index.html"},{"revision":"33af3b5f156956e8772b0acaace1452f","url":"netlify.svg"},{"revision":"c5a20a52f9d075ed720b0332e65eafd2","url":"nuxt/README.html"},{"revision":"c0048fd2f2c0fc2668f411b5061a9864","url":"og.png"},{"revision":"3d946139dd7335cd95bad54f54fb5e3e","url":"pwa-192x192.png"},{"revision":"044d2455c529e3d1872d7c2dcc0835cf","url":"pwa-512x512.png"},{"revision":"e9f21b945a4d1b3ce239cefd5a579bf3","url":"pwa-64x64.png"},{"revision":"6b70d97f3ec7e8702a7c808aa68a1404","url":"router/README.html"},{"revision":"836cdeee38400de6295c1df8fbed684d","url":"router/useRouteHash/index.html"},{"revision":"7aa596086a8bd0b7f94d6f77d8f7f067","url":"router/useRouteParams/index.html"},{"revision":"c85036639b62d6e8c2f07b1a4f3c48a6","url":"router/useRouteQuery/index.html"},{"revision":"a915d63ae63b73c9f80b85b5efa39048","url":"rxjs/from/index.html"},{"revision":"7b9262fc582fcba8661cc957a2b83f2c","url":"rxjs/README.html"},{"revision":"2ba75e91d89e92ed9cd6073a39bec074","url":"rxjs/toObserver/index.html"},{"revision":"6c42ff1497eb6680a264cb56a1e98d4f","url":"rxjs/useExtractedObservable/index.html"},{"revision":"009fdc292305410583ec4201c3fb9800","url":"rxjs/useObservable/index.html"},{"revision":"2ab0da422505c3fa1854d566e53daee3","url":"rxjs/useSubject/index.html"},{"revision":"a552e1d398c8eeedb6f547dd8f8e7d54","url":"rxjs/useSubscription/index.html"},{"revision":"079e9888d08d952b6b07ff91528d3760","url":"rxjs/watchExtractedObservable/index.html"},{"revision":"49852984b29fb60ee6610752b78e9a70","url":"shared/computedEager/index.html"},{"revision":"bf3450ff6850e0d078985d26502a25ec","url":"shared/computedWithControl/index.html"},{"revision":"e470dce49dbfd26357b59e38cc64108d","url":"shared/createEventHook/index.html"},{"revision":"5ab699b6d3a1335b90f67a1597805cbb","url":"shared/createGlobalState/index.html"},{"revision":"fdc9374d4d857a6d021494ed11932d98","url":"shared/createInjectionState/index.html"},{"revision":"c4043671e02628430bb75357cd188857","url":"shared/createRef/index.html"},{"revision":"c7cef20d22968b81d5a32525c1554c2a","url":"shared/createSharedComposable/index.html"},{"revision":"15430fba0fecdfe5ad220df603bf58ff","url":"shared/extendRef/index.html"},{"revision":"6b637edadc6c47fd23cfe61b609db282","url":"shared/get/index.html"},{"revision":"0a2035bca5ac88afbf922bfdcc9260f7","url":"shared/injectLocal/index.html"},{"revision":"4b8defd1b6859f99393aabc425982236","url":"shared/isDefined/index.html"},{"revision":"dbd23b0e0900383646f46467c9155350","url":"shared/makeDestructurable/index.html"},{"revision":"b9c1e8793e654d575f9825d100ec1458","url":"shared/provideLocal/index.html"},{"revision":"64f28d81c9c1b4d8323297cedeb1f406","url":"shared/reactify/index.html"},{"revision":"f0a17a364697684d5a99e292f28e3f86","url":"shared/reactifyObject/index.html"},{"revision":"002d58908163d112a12ddb1b76c6e302","url":"shared/reactiveComputed/index.html"},{"revision":"c970ffe211610a2ae2901d690666d0c4","url":"shared/reactiveOmit/index.html"},{"revision":"ae524a63f7a1b77c255e8abbd0555c2c","url":"shared/reactivePick/index.html"},{"revision":"52e893aff63ce6711516d46ac42f717d","url":"shared/refAutoReset/index.html"},{"revision":"34cc22e0d3a6690670ae5d4e939bdaa9","url":"shared/refDebounced/index.html"},{"revision":"7837a908e95ccabe395f2ffcf12bf702","url":"shared/refDefault/index.html"},{"revision":"4db1d1c136ba5a59144f697a58899232","url":"shared/refThrottled/index.html"},{"revision":"9065829aa8320e07f7a9ab5115dfaab5","url":"shared/refWithControl/index.html"},{"revision":"310d1b097930fc584746fbec3db84ca7","url":"shared/set/index.html"},{"revision":"143c94670557cdeca819d15450d137a7","url":"shared/syncRef/index.html"},{"revision":"b543aa8be675c010c5388d6f095e6ca6","url":"shared/syncRefs/index.html"},{"revision":"f5b638a573a5e22a9a6f9c08c17954be","url":"shared/toReactive/index.html"},{"revision":"42e08d82f90e0497853c15acab8a0ff0","url":"shared/toRef/index.html"},{"revision":"a4de503c8eb1971c0dab7795a17a203b","url":"shared/toRefs/index.html"},{"revision":"345345703e2861e10c7ace119d9eca8f","url":"shared/toValue/index.html"},{"revision":"8a950656e46baf80b795a79ce9f31bc9","url":"shared/tryOnBeforeMount/index.html"},{"revision":"4e7b41d1f97e5937bed9d48c1a04936d","url":"shared/tryOnBeforeUnmount/index.html"},{"revision":"990586f9d3abaa74929e1b677d2cbcff","url":"shared/tryOnMounted/index.html"},{"revision":"800d000d68aeb139081bd241384d488a","url":"shared/tryOnScopeDispose/index.html"},{"revision":"3f26a08d49afbc136a13b1ba6cecadcc","url":"shared/tryOnUnmounted/index.html"},{"revision":"877dc0d6ebcf1bc3328a04c9dcb4ab2c","url":"shared/until/index.html"},{"revision":"5afa0b64d486f0a148f8333d349d06f9","url":"shared/useArrayDifference/index.html"},{"revision":"40cf18c2f14e1f45fc2f24ae1aa1190e","url":"shared/useArrayEvery/index.html"},{"revision":"88dd7dce78b6c0a1213bff542fac4c49","url":"shared/useArrayFilter/index.html"},{"revision":"e0d9bf60f159b1d0989a389344290bc6","url":"shared/useArrayFind/index.html"},{"revision":"4673b78ebbfb432ffab0bce31764c67e","url":"shared/useArrayFindIndex/index.html"},{"revision":"970108f444cd94a7a80305c693b9ae55","url":"shared/useArrayFindLast/index.html"},{"revision":"7ce8ec89c23344f127b5b0411dd80dd5","url":"shared/useArrayIncludes/index.html"},{"revision":"a690ba37689a178ee2eb6dcf33a3ff9c","url":"shared/useArrayJoin/index.html"},{"revision":"88bdc2e33c06d31dacaae78a24733edb","url":"shared/useArrayMap/index.html"},{"revision":"febf9b0084656f3c0aa3dda948dbb8d1","url":"shared/useArrayReduce/index.html"},{"revision":"c90293513b2f3d3fbb3f505e9caf7a1b","url":"shared/useArraySome/index.html"},{"revision":"19d5f0478fb8f0b5c5e006f8f7fcb6bb","url":"shared/useArrayUnique/index.html"},{"revision":"d50224fd5894ef35ce9b865456687602","url":"shared/useCounter/index.html"},{"revision":"ec789c70748132c0951f79836a154cdc","url":"shared/useDateFormat/index.html"},{"revision":"d6fbcae600dc458838694d1286365c93","url":"shared/useDebounceFn/index.html"},{"revision":"c4e4a359e6c6df593bdbf4b1a8300cac","url":"shared/useInterval/index.html"},{"revision":"e3e2b5be1965dc0542b3cfd881a79c9d","url":"shared/useIntervalFn/index.html"},{"revision":"e34094dcc99ce3d3f3ae34480b6c42f5","url":"shared/useLastChanged/index.html"},{"revision":"67c71c9071a71f4c369aa111badea561","url":"shared/useThrottleFn/index.html"},{"revision":"0f6fa35fa3fae5c6b6a413e016194ba6","url":"shared/useTimeout/index.html"},{"revision":"8733f4e8748fecd28f957bfb0710466a","url":"shared/useTimeoutFn/index.html"},{"revision":"297f6d47a583b826788fc3a5f06af356","url":"shared/useToggle/index.html"},{"revision":"e4cd9372d811ad52195e062d37da2db4","url":"shared/useToNumber/index.html"},{"revision":"9bf3dcea6645c4658851f3244b51cffa","url":"shared/useToString/index.html"},{"revision":"6e5fa1c4204c4fb0a7894cd17fac1a68","url":"shared/watchArray/index.html"},{"revision":"4698d48e36445f10099b8d282cab5105","url":"shared/watchAtMost/index.html"},{"revision":"aa5a5c60a64821d028a20ebb455d9cd6","url":"shared/watchDebounced/index.html"},{"revision":"9f18f667f0cf29740f9d2e70d08fb210","url":"shared/watchDeep/index.html"},{"revision":"c065694b6e800da4ed14e6ca50bce351","url":"shared/watchIgnorable/index.html"},{"revision":"7c8f5706e60726024d4a2dda3d75e9e1","url":"shared/watchImmediate/index.html"},{"revision":"d24bba00c53d8b1fbee7de7c2cda649f","url":"shared/watchOnce/index.html"},{"revision":"957b415c408c448699f7043908ee2b72","url":"shared/watchPausable/index.html"},{"revision":"991e320c505cd27fd999e76a35ddde10","url":"shared/watchThrottled/index.html"},{"revision":"d9aaa01b8a65efcc59772fdf973b6b8b","url":"shared/watchTriggerable/index.html"},{"revision":"fbcc964fb5405eda313257fbc1158d1a","url":"shared/watchWithFilter/index.html"},{"revision":"e19a6b0bdbc74a056e3a67258fa96824","url":"shared/whenever/index.html"},{"revision":"756cc243fcc776c82e5b91832de2a35e","url":"team.html"},{"revision":"ace7ab6bc932be145115857c39f7d63a","url":"vp-icons.css"},{"revision":"3d60db0d77303b2414ddd50cf2472bf7","url":"vue.png"},{"revision":"69cedcf3d2b148bdce953a480caa57b1","url":"vue.svg"},{"revision":"0874de4cef775f347c08654e279070cf","url":"vueer.html"},{"revision":"5f147b20aa8a8f13ccede4a027d14cc2","url":"wechat.png"},{"revision":"355ed58991a2fe20698c82a5812e3f93","url":"why-no-translations.html"},{"revision":"d3cdd1c97c1f28f19e4dff128c97b918","url":"hashmap.json"},{"revision":"795dd8766cdee862b1f8b2a1b861ac89","url":"maskable-icon.png"},{"revision":"3d946139dd7335cd95bad54f54fb5e3e","url":"pwa-192x192.png"},{"revision":"044d2455c529e3d1872d7c2dcc0835cf","url":"pwa-512x512.png"},{"revision":"e9f21b945a4d1b3ce239cefd5a579bf3","url":"pwa-64x64.png"},{"revision":"ec938966afbe5df0d83b55a2a0c25397","url":"manifest.webmanifest"}];
precacheAndRoute(entries);
cleanupOutdatedCaches();
let allowlist;
{
  let escapeStringRegexp = function(value) {
    return value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  };
  const swPath = self.location.pathname.lastIndexOf("/");
  const base = swPath === 0 ? "/" : self.location.pathname.slice(0, swPath + 1);
  allowlist = entries.filter((page) => {
    return typeof page === "string" ? page.endsWith(".html") : page.url.endsWith(".html");
  }).map((page) => {
    const url = typeof page === "string" ? page : page.url;
    const regex = url === "index.html" ? escapeStringRegexp(base) : escapeStringRegexp(`${base}${url.replace(/\.html$/, "")}`);
    return new RegExp(`^${regex}(\\.html)?$`);
  });
  registerRoute(
    ({ request, sameOrigin }) => {
      return sameOrigin && request.mode === "navigate";
    },
    new NetworkOnly({
      plugins: [{
        /* this callback will be called when the fetch call fails */
        handlerDidError: async () => Response.redirect("404", 302),
        /* this callback will prevent caching the response */
        cacheWillUpdate: async () => null
      }]
    }),
    "GET"
  );
  registerRoute(
    /^https:\/\/fonts\.googleapis\.com\/.*/i,
    new NetworkFirst({
      cacheName: "google-fonts-cache",
      plugins: [
        new CacheableResponsePlugin({ statuses: [0, 200] }),
        // we only need a few entries
        new ExpirationPlugin({
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 365
          // <== 365 days
        })
      ]
    })
  );
  registerRoute(
    /^https:\/\/fonts\.gstatic\.com\/.*/i,
    new StaleWhileRevalidate({
      cacheName: "google-fonts-cache",
      plugins: [
        new CacheableResponsePlugin({ statuses: [0, 200] }),
        // we only need a few entries
        new ExpirationPlugin({
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 365
          // <== 365 days
        })
      ]
    })
  );
  registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
    new NetworkFirst({
      cacheName: "jsdelivr-images-cache",
      plugins: [
        new CacheableResponsePlugin({ statuses: [0, 200] }),
        // we only need a few entries
        new ExpirationPlugin({
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 7
          // <== 7 days
        })
      ]
    })
  );
}
registerRoute(new NavigationRoute(
  createHandlerBoundToURL("index.html"),
  { allowlist }
));
self.addEventListener("activate", async () => {
  const clients = await self.clients.matchAll({ type: "window" });
  clients.forEach((client) => {
    client.navigate(client.url);
  });
});
self.skipWaiting();
