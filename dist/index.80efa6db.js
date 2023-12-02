// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dDYEE":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2201705b80efa6db";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jYSt7":[function(require,module,exports) {
var _router = require("./router");
(function() {
    0, _router.router;
})();

},{"./router":"lh0b7"}],"lh0b7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "router", ()=>router);
var _router = require("@vaadin/router");
var _welcome = require("./pages/welcome");
var _shareCode = require("./pages/share-code");
var _instructions = require("./pages/instructions");
var _play = require("./pages/play");
var _ganaste = require("./pages/result/ganaste");
var _perdiste = require("./pages/result/perdiste");
const router = new (0, _router.Router)(document.querySelector(".root"));
router.setRoutes([
    {
        path: "/",
        component: "welcome-page"
    },
    {
        path: "/share-code",
        component: "share-code"
    },
    {
        path: "/instructions",
        component: "instructions-page"
    },
    {
        path: "/play",
        component: "play-screen"
    },
    {
        path: "/ganaste",
        component: "win-el"
    },
    {
        path: "/perdiste",
        component: "lose-el"
    },
    // agregar los paths de ganaste / perdiste y ver como invocarlos desde la page de play
    {
        path: "(.*)",
        redirect: "/"
    }
]);

},{"@vaadin/router":"kVZrF","./pages/welcome":"SIkvo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./pages/share-code":"kXOFY","./pages/instructions":"6tSYd","./pages/play":"7u8WA","./pages/result/ganaste":"fIfZX","./pages/result/perdiste":"cNM2T"}],"kVZrF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Resolver", ()=>Resolver);
parcelHelpers.export(exports, "Router", ()=>Router);
function toArray(objectOrArray) {
    objectOrArray = objectOrArray || [];
    return Array.isArray(objectOrArray) ? objectOrArray : [
        objectOrArray
    ];
}
function log(msg) {
    return `[Vaadin.Router] ${msg}`;
}
function logValue(value) {
    if (typeof value !== "object") return String(value);
    const stringType = Object.prototype.toString.call(value).match(/ (.*)\]$/)[1];
    if (stringType === "Object" || stringType === "Array") return `${stringType} ${JSON.stringify(value)}`;
    else return stringType;
}
const MODULE = "module";
const NOMODULE = "nomodule";
const bundleKeys = [
    MODULE,
    NOMODULE
];
function ensureBundle(src) {
    if (!src.match(/.+\.[m]?js$/)) throw new Error(log(`Unsupported type for bundle "${src}": .js or .mjs expected.`));
}
function ensureRoute(route) {
    if (!route || !isString(route.path)) throw new Error(log(`Expected route config to be an object with a "path" string property, or an array of such objects`));
    const bundle = route.bundle;
    const stringKeys = [
        "component",
        "redirect",
        "bundle"
    ];
    if (!isFunction(route.action) && !Array.isArray(route.children) && !isFunction(route.children) && !isObject(bundle) && !stringKeys.some((key)=>isString(route[key]))) throw new Error(log(`Expected route config "${route.path}" to include either "${stringKeys.join('", "')}" ` + `or "action" function but none found.`));
    if (bundle) {
        if (isString(bundle)) ensureBundle(bundle);
        else if (!bundleKeys.some((key)=>key in bundle)) throw new Error(log('Expected route bundle to include either "' + NOMODULE + '" or "' + MODULE + '" keys, or both'));
        else bundleKeys.forEach((key)=>key in bundle && ensureBundle(bundle[key]));
    }
    if (route.redirect) [
        "bundle",
        "component"
    ].forEach((overriddenProp)=>{
        if (overriddenProp in route) console.warn(log(`Route config "${route.path}" has both "redirect" and "${overriddenProp}" properties, ` + `and "redirect" will always override the latter. Did you mean to only use "${overriddenProp}"?`));
    });
}
function ensureRoutes(routes) {
    toArray(routes).forEach((route)=>ensureRoute(route));
}
function loadScript(src, key) {
    let script = document.head.querySelector('script[src="' + src + '"][async]');
    if (!script) {
        script = document.createElement("script");
        script.setAttribute("src", src);
        if (key === MODULE) script.setAttribute("type", MODULE);
        else if (key === NOMODULE) script.setAttribute(NOMODULE, "");
        script.async = true;
    }
    return new Promise((resolve, reject)=>{
        script.onreadystatechange = script.onload = (e)=>{
            script.__dynamicImportLoaded = true;
            resolve(e);
        };
        script.onerror = (e)=>{
            if (script.parentNode) script.parentNode.removeChild(script);
            reject(e);
        };
        if (script.parentNode === null) document.head.appendChild(script);
        else if (script.__dynamicImportLoaded) resolve();
    });
}
function loadBundle(bundle) {
    if (isString(bundle)) return loadScript(bundle);
    else return Promise.race(bundleKeys.filter((key)=>key in bundle).map((key)=>loadScript(bundle[key], key)));
}
function fireRouterEvent(type, detail) {
    return !window.dispatchEvent(new CustomEvent(`vaadin-router-${type}`, {
        cancelable: type === "go",
        detail
    }));
}
function isObject(o) {
    // guard against null passing the typeof check
    return typeof o === "object" && !!o;
}
function isFunction(f) {
    return typeof f === "function";
}
function isString(s) {
    return typeof s === "string";
}
function getNotFoundError(context) {
    const error = new Error(log(`Page not found (${context.pathname})`));
    error.context = context;
    error.code = 404;
    return error;
}
const notFoundResult = new class NotFoundResult {
}();
/* istanbul ignore next: coverage is calculated in Chrome, this code is for IE */ function getAnchorOrigin(anchor) {
    // IE11: on HTTP and HTTPS the default port is not included into
    // window.location.origin, so won't include it here either.
    const port = anchor.port;
    const protocol = anchor.protocol;
    const defaultHttp = protocol === "http:" && port === "80";
    const defaultHttps = protocol === "https:" && port === "443";
    const host = defaultHttp || defaultHttps ? anchor.hostname // does not include the port number (e.g. www.example.org)
     : anchor.host; // does include the port number (e.g. www.example.org:80)
    return `${protocol}//${host}`;
}
// The list of checks is not complete:
//  - SVG support is missing
//  - the 'rel' attribute is not considered
function vaadinRouterGlobalClickHandler(event) {
    // ignore the click if the default action is prevented
    if (event.defaultPrevented) return;
    // ignore the click if not with the primary mouse button
    if (event.button !== 0) return;
    // ignore the click if a modifier key is pressed
    if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) return;
    // find the <a> element that the click is at (or within)
    let anchor = event.target;
    const path = event.composedPath ? event.composedPath() : event.path || [];
    // FIXME(web-padawan): `Symbol.iterator` used by webcomponentsjs is broken for arrays
    // example to check: `for...of` loop here throws the "Not yet implemented" error
    for(let i = 0; i < path.length; i++){
        const target = path[i];
        if (target.nodeName && target.nodeName.toLowerCase() === "a") {
            anchor = target;
            break;
        }
    }
    while(anchor && anchor.nodeName.toLowerCase() !== "a")anchor = anchor.parentNode;
    // ignore the click if not at an <a> element
    if (!anchor || anchor.nodeName.toLowerCase() !== "a") return;
    // ignore the click if the <a> element has a non-default target
    if (anchor.target && anchor.target.toLowerCase() !== "_self") return;
    // ignore the click if the <a> element has the 'download' attribute
    if (anchor.hasAttribute("download")) return;
    // ignore the click if the <a> element has the 'router-ignore' attribute
    if (anchor.hasAttribute("router-ignore")) return;
    // ignore the click if the target URL is a fragment on the current page
    if (anchor.pathname === window.location.pathname && anchor.hash !== "") return;
    // ignore the click if the target is external to the app
    // In IE11 HTMLAnchorElement does not have the `origin` property
    const origin = anchor.origin || getAnchorOrigin(anchor);
    if (origin !== window.location.origin) return;
    // if none of the above, convert the click into a navigation event
    const { pathname, search, hash } = anchor;
    if (fireRouterEvent("go", {
        pathname,
        search,
        hash
    })) {
        event.preventDefault();
        // for a click event, the scroll is reset to the top position.
        if (event && event.type === "click") window.scrollTo(0, 0);
    }
}
/**
 * A navigation trigger for Vaadin Router that translated clicks on `<a>` links
 * into Vaadin Router navigation events.
 *
 * Only regular clicks on in-app links are translated (primary mouse button, no
 * modifier keys, the target href is within the app's URL space).
 *
 * @memberOf Router.NavigationTrigger
 * @type {NavigationTrigger}
 */ const CLICK = {
    activate () {
        window.document.addEventListener("click", vaadinRouterGlobalClickHandler);
    },
    inactivate () {
        window.document.removeEventListener("click", vaadinRouterGlobalClickHandler);
    }
};
// PopStateEvent constructor shim
const isIE = /Trident/.test(navigator.userAgent);
/* istanbul ignore next: coverage is calculated in Chrome, this code is for IE */ if (isIE && !isFunction(window.PopStateEvent)) {
    window.PopStateEvent = function(inType, params) {
        params = params || {};
        var e = document.createEvent("Event");
        e.initEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable));
        e.state = params.state || null;
        return e;
    };
    window.PopStateEvent.prototype = window.Event.prototype;
}
function vaadinRouterGlobalPopstateHandler(event) {
    if (event.state === "vaadin-router-ignore") return;
    const { pathname, search, hash } = window.location;
    fireRouterEvent("go", {
        pathname,
        search,
        hash
    });
}
/**
 * A navigation trigger for Vaadin Router that translates popstate events into
 * Vaadin Router navigation events.
 *
 * @memberOf Router.NavigationTrigger
 * @type {NavigationTrigger}
 */ const POPSTATE = {
    activate () {
        window.addEventListener("popstate", vaadinRouterGlobalPopstateHandler);
    },
    inactivate () {
        window.removeEventListener("popstate", vaadinRouterGlobalPopstateHandler);
    }
};
/**
 * Expose `pathToRegexp`.
 */ var pathToRegexp_1 = pathToRegexp$1;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;
/**
 * Default configs.
 */ var DEFAULT_DELIMITER = "/";
var DEFAULT_DELIMITERS = "./";
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */ var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    "(\\\\.)",
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
    // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
    "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"
].join("|"), "g");
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */ function parse(str, options) {
    var tokens = [];
    var key = 0;
    var index = 0;
    var path = "";
    var defaultDelimiter = options && options.delimiter || DEFAULT_DELIMITER;
    var delimiters = options && options.delimiters || DEFAULT_DELIMITERS;
    var pathEscaped = false;
    var res;
    while((res = PATH_REGEXP.exec(str)) !== null){
        var m = res[0];
        var escaped = res[1];
        var offset = res.index;
        path += str.slice(index, offset);
        index = offset + m.length;
        // Ignore already escaped sequences.
        if (escaped) {
            path += escaped[1];
            pathEscaped = true;
            continue;
        }
        var prev = "";
        var next = str[index];
        var name = res[2];
        var capture = res[3];
        var group = res[4];
        var modifier = res[5];
        if (!pathEscaped && path.length) {
            var k = path.length - 1;
            if (delimiters.indexOf(path[k]) > -1) {
                prev = path[k];
                path = path.slice(0, k);
            }
        }
        // Push the current path onto the tokens.
        if (path) {
            tokens.push(path);
            path = "";
            pathEscaped = false;
        }
        var partial = prev !== "" && next !== undefined && next !== prev;
        var repeat = modifier === "+" || modifier === "*";
        var optional = modifier === "?" || modifier === "*";
        var delimiter = prev || defaultDelimiter;
        var pattern = capture || group;
        tokens.push({
            name: name || key++,
            prefix: prev,
            delimiter: delimiter,
            optional: optional,
            repeat: repeat,
            partial: partial,
            pattern: pattern ? escapeGroup(pattern) : "[^" + escapeString(delimiter) + "]+?"
        });
    }
    // Push any remaining characters.
    if (path || index < str.length) tokens.push(path + str.substr(index));
    return tokens;
}
/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */ function compile(str, options) {
    return tokensToFunction(parse(str, options));
}
/**
 * Expose a method for transforming tokens into the path function.
 */ function tokensToFunction(tokens) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length);
    // Compile all the patterns before compilation.
    for(var i = 0; i < tokens.length; i++)if (typeof tokens[i] === "object") matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$");
    return function(data, options) {
        var path = "";
        var encode = options && options.encode || encodeURIComponent;
        for(var i = 0; i < tokens.length; i++){
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var segment;
            if (Array.isArray(value)) {
                if (!token.repeat) throw new TypeError('Expected "' + token.name + '" to not repeat, but got array');
                if (value.length === 0) {
                    if (token.optional) continue;
                    throw new TypeError('Expected "' + token.name + '" to not be empty');
                }
                for(var j = 0; j < value.length; j++){
                    segment = encode(value[j], token);
                    if (!matches[i].test(segment)) throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"');
                    path += (j === 0 ? token.prefix : token.delimiter) + segment;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
                segment = encode(String(value), token);
                if (!matches[i].test(segment)) throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
                path += token.prefix + segment;
                continue;
            }
            if (token.optional) {
                // Prepend partial segment prefixes.
                if (token.partial) path += token.prefix;
                continue;
            }
            throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? "an array" : "a string"));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */ function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */ function escapeGroup(group) {
    return group.replace(/([=!:$/()])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */ function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */ function regexpToRegexp(path, keys) {
    if (!keys) return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) for(var i = 0; i < groups.length; i++)keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        pattern: null
    });
    return path;
}
/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */ function arrayToRegexp(path, keys, options) {
    var parts = [];
    for(var i = 0; i < path.length; i++)parts.push(pathToRegexp$1(path[i], keys, options).source);
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */ function stringToRegexp(path, keys, options) {
    return tokensToRegExp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */ function tokensToRegExp(tokens, keys, options) {
    options = options || {};
    var strict = options.strict;
    var start = options.start !== false;
    var end = options.end !== false;
    var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
    var delimiters = options.delimiters || DEFAULT_DELIMITERS;
    var endsWith = [].concat(options.endsWith || []).map(escapeString).concat("$").join("|");
    var route = start ? "^" : "";
    var isEndDelimited = tokens.length === 0;
    // Iterate over the tokens and create our regexp string.
    for(var i = 0; i < tokens.length; i++){
        var token = tokens[i];
        if (typeof token === "string") {
            route += escapeString(token);
            isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
        } else {
            var capture = token.repeat ? "(?:" + token.pattern + ")(?:" + escapeString(token.delimiter) + "(?:" + token.pattern + "))*" : token.pattern;
            if (keys) keys.push(token);
            if (token.optional) {
                if (token.partial) route += escapeString(token.prefix) + "(" + capture + ")?";
                else route += "(?:" + escapeString(token.prefix) + "(" + capture + "))?";
            } else route += escapeString(token.prefix) + "(" + capture + ")";
        }
    }
    if (end) {
        if (!strict) route += "(?:" + delimiter + ")?";
        route += endsWith === "$" ? "$" : "(?=" + endsWith + ")";
    } else {
        if (!strict) route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        if (!isEndDelimited) route += "(?=" + delimiter + "|" + endsWith + ")";
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */ function pathToRegexp$1(path, keys, options) {
    if (path instanceof RegExp) return regexpToRegexp(path, keys);
    if (Array.isArray(path)) return arrayToRegexp(/** @type {!Array} */ path, keys, options);
    return stringToRegexp(/** @type {string} */ path, keys, options);
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ const { hasOwnProperty } = Object.prototype;
const cache$1 = new Map();
// see https://github.com/pillarjs/path-to-regexp/issues/148
cache$1.set("|false", {
    keys: [],
    pattern: /(?:)/
});
function decodeParam(val) {
    try {
        return decodeURIComponent(val);
    } catch (err) {
        return val;
    }
}
function matchPath(routepath, path, exact, parentKeys, parentParams) {
    exact = !!exact;
    const cacheKey = `${routepath}|${exact}`;
    let regexp = cache$1.get(cacheKey);
    if (!regexp) {
        const keys = [];
        regexp = {
            keys,
            pattern: pathToRegexp_1(routepath, keys, {
                end: exact,
                strict: routepath === ""
            })
        };
        cache$1.set(cacheKey, regexp);
    }
    const m = regexp.pattern.exec(path);
    if (!m) return null;
    const params = Object.assign({}, parentParams);
    for(let i = 1; i < m.length; i++){
        const key = regexp.keys[i - 1];
        const prop = key.name;
        const value = m[i];
        if (value !== undefined || !hasOwnProperty.call(params, prop)) {
            if (key.repeat) params[prop] = value ? value.split(key.delimiter).map(decodeParam) : [];
            else params[prop] = value ? decodeParam(value) : value;
        }
    }
    return {
        path: m[0],
        keys: (parentKeys || []).concat(regexp.keys),
        params
    };
}
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ /**
 * Traverses the routes tree and matches its nodes to the given pathname from
 * the root down to the leaves. Each match consumes a part of the pathname and
 * the matching process continues for as long as there is a matching child
 * route for the remaining part of the pathname.
 *
 * The returned value is a lazily evaluated iterator.
 *
 * The leading "/" in a route path matters only for the root of the routes
 * tree (or if all parent routes are ""). In all other cases a leading "/" in
 * a child route path has no significance.
 *
 * The trailing "/" in a _route path_ matters only for the leaves of the
 * routes tree. A leaf route with a trailing "/" matches only a pathname that
 * also has a trailing "/".
 *
 * The trailing "/" in a route path does not affect matching of child routes
 * in any way.
 *
 * The trailing "/" in a _pathname_ generally does not matter (except for
 * the case of leaf nodes described above).
 *
 * The "" and "/" routes have special treatment:
 *  1. as a single route
 *     the "" and "/" routes match only the "" and "/" pathnames respectively
 *  2. as a parent in the routes tree
 *     the "" route matches any pathname without consuming any part of it
 *     the "/" route matches any absolute pathname consuming its leading "/"
 *  3. as a leaf in the routes tree
 *     the "" and "/" routes match only if the entire pathname is consumed by
 *         the parent routes chain. In this case "" and "/" are equivalent.
 *  4. several directly nested "" or "/" routes
 *     - directly nested "" or "/" routes are 'squashed' (i.e. nesting two
 *       "/" routes does not require a double "/" in the pathname to match)
 *     - if there are only "" in the parent routes chain, no part of the
 *       pathname is consumed, and the leading "/" in the child routes' paths
 *       remains significant
 *
 * Side effect:
 *   - the routes tree { path: '' } matches only the '' pathname
 *   - the routes tree { path: '', children: [ { path: '' } ] } matches any
 *     pathname (for the tree root)
 *
 * Prefix matching can be enabled also by `children: true`.
 */ function matchRoute(route, pathname, ignoreLeadingSlash, parentKeys, parentParams) {
    let match;
    let childMatches;
    let childIndex = 0;
    let routepath = route.path || "";
    if (routepath.charAt(0) === "/") {
        if (ignoreLeadingSlash) routepath = routepath.substr(1);
        ignoreLeadingSlash = true;
    }
    return {
        next (routeToSkip) {
            if (route === routeToSkip) return {
                done: true
            };
            const children = route.__children = route.__children || route.children;
            if (!match) {
                match = matchPath(routepath, pathname, !children, parentKeys, parentParams);
                if (match) return {
                    done: false,
                    value: {
                        route,
                        keys: match.keys,
                        params: match.params,
                        path: match.path
                    }
                };
            }
            if (match && children) while(childIndex < children.length){
                if (!childMatches) {
                    const childRoute = children[childIndex];
                    childRoute.parent = route;
                    let matchedLength = match.path.length;
                    if (matchedLength > 0 && pathname.charAt(matchedLength) === "/") matchedLength += 1;
                    childMatches = matchRoute(childRoute, pathname.substr(matchedLength), ignoreLeadingSlash, match.keys, match.params);
                }
                const childMatch = childMatches.next(routeToSkip);
                if (!childMatch.done) return {
                    done: false,
                    value: childMatch.value
                };
                childMatches = null;
                childIndex++;
            }
            return {
                done: true
            };
        }
    };
}
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ function resolveRoute(context) {
    if (isFunction(context.route.action)) return context.route.action(context);
    return undefined;
}
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ function isChildRoute(parentRoute, childRoute) {
    let route = childRoute;
    while(route){
        route = route.parent;
        if (route === parentRoute) return true;
    }
    return false;
}
function generateErrorMessage(currentContext) {
    let errorMessage = `Path '${currentContext.pathname}' is not properly resolved due to an error.`;
    const routePath = (currentContext.route || {}).path;
    if (routePath) errorMessage += ` Resolution had failed on route: '${routePath}'`;
    return errorMessage;
}
function updateChainForRoute(context, match) {
    const { route, path } = match;
    if (route && !route.__synthetic) {
        const item = {
            path,
            route
        };
        if (!context.chain) context.chain = [];
        else // Discard old items
        if (route.parent) {
            let i = context.chain.length;
            while(i-- && context.chain[i].route && context.chain[i].route !== route.parent)context.chain.pop();
        }
        context.chain.push(item);
    }
}
/**
 */ class Resolver {
    constructor(routes, options = {}){
        if (Object(routes) !== routes) throw new TypeError("Invalid routes");
        this.baseUrl = options.baseUrl || "";
        this.errorHandler = options.errorHandler;
        this.resolveRoute = options.resolveRoute || resolveRoute;
        this.context = Object.assign({
            resolver: this
        }, options.context);
        this.root = Array.isArray(routes) ? {
            path: "",
            __children: routes,
            parent: null,
            __synthetic: true
        } : routes;
        this.root.parent = null;
    }
    /**
   * Returns the current list of routes (as a shallow copy). Adding / removing
   * routes to / from the returned array does not affect the routing config,
   * but modifying the route objects does.
   *
   * @return {!Array<!Router.Route>}
   */ getRoutes() {
        return [
            ...this.root.__children
        ];
    }
    /**
   * Sets the routing config (replacing the existing one).
   *
   * @param {!Array<!Router.Route>|!Router.Route} routes a single route or an array of those
   *    (the array is shallow copied)
   */ setRoutes(routes) {
        ensureRoutes(routes);
        const newRoutes = [
            ...toArray(routes)
        ];
        this.root.__children = newRoutes;
    }
    /**
   * Appends one or several routes to the routing config and returns the
   * effective routing config after the operation.
   *
   * @param {!Array<!Router.Route>|!Router.Route} routes a single route or an array of those
   *    (the array is shallow copied)
   * @return {!Array<!Router.Route>}
   * @protected
   */ addRoutes(routes) {
        ensureRoutes(routes);
        this.root.__children.push(...toArray(routes));
        return this.getRoutes();
    }
    /**
   * Removes all existing routes from the routing config.
   */ removeRoutes() {
        this.setRoutes([]);
    }
    /**
   * Asynchronously resolves the given pathname, i.e. finds all routes matching
   * the pathname and tries resolving them one after another in the order they
   * are listed in the routes config until the first non-null result.
   *
   * Returns a promise that is fulfilled with the return value of an object that consists of the first
   * route handler result that returns something other than `null` or `undefined` and context used to get this result.
   *
   * If no route handlers return a non-null result, or if no route matches the
   * given pathname the returned promise is rejected with a 'page not found'
   * `Error`.
   *
   * @param {!string|!{pathname: !string}} pathnameOrContext the pathname to
   *    resolve or a context object with a `pathname` property and other
   *    properties to pass to the route resolver functions.
   * @return {!Promise<any>}
   */ resolve(pathnameOrContext) {
        const context = Object.assign({}, this.context, isString(pathnameOrContext) ? {
            pathname: pathnameOrContext
        } : pathnameOrContext);
        const match = matchRoute(this.root, this.__normalizePathname(context.pathname), this.baseUrl);
        const resolve = this.resolveRoute;
        let matches = null;
        let nextMatches = null;
        let currentContext = context;
        function next(resume, parent = matches.value.route, prevResult) {
            const routeToSkip = prevResult === null && matches.value.route;
            matches = nextMatches || match.next(routeToSkip);
            nextMatches = null;
            if (!resume) {
                if (matches.done || !isChildRoute(parent, matches.value.route)) {
                    nextMatches = matches;
                    return Promise.resolve(notFoundResult);
                }
            }
            if (matches.done) return Promise.reject(getNotFoundError(context));
            currentContext = Object.assign(currentContext ? {
                chain: currentContext.chain ? currentContext.chain.slice(0) : []
            } : {}, context, matches.value);
            updateChainForRoute(currentContext, matches.value);
            return Promise.resolve(resolve(currentContext)).then((resolution)=>{
                if (resolution !== null && resolution !== undefined && resolution !== notFoundResult) {
                    currentContext.result = resolution.result || resolution;
                    return currentContext;
                }
                return next(resume, parent, resolution);
            });
        }
        context.next = next;
        return Promise.resolve().then(()=>next(true, this.root)).catch((error)=>{
            const errorMessage = generateErrorMessage(currentContext);
            if (!error) error = new Error(errorMessage);
            else console.warn(errorMessage);
            error.context = error.context || currentContext;
            // DOMException has its own code which is read-only
            if (!(error instanceof DOMException)) error.code = error.code || 500;
            if (this.errorHandler) {
                currentContext.result = this.errorHandler(error);
                return currentContext;
            }
            throw error;
        });
    }
    /**
   * URL constructor polyfill hook. Creates and returns an URL instance.
   */ static __createUrl(url, base) {
        return new URL(url, base);
    }
    /**
   * If the baseUrl property is set, transforms the baseUrl and returns the full
   * actual `base` string for using in the `new URL(path, base);` and for
   * prepernding the paths with. The returned base ends with a trailing slash.
   *
   * Otherwise, returns empty string.
   */ get __effectiveBaseUrl() {
        return this.baseUrl ? this.constructor.__createUrl(this.baseUrl, document.baseURI || document.URL).href.replace(/[^\/]*$/, "") : "";
    }
    /**
   * If the baseUrl is set, matches the pathname with the router’s baseUrl,
   * and returns the local pathname with the baseUrl stripped out.
   *
   * If the pathname does not match the baseUrl, returns undefined.
   *
   * If the `baseUrl` is not set, returns the unmodified pathname argument.
   */ __normalizePathname(pathname) {
        if (!this.baseUrl) // No base URL, no need to transform the pathname.
        return pathname;
        const base = this.__effectiveBaseUrl;
        const normalizedUrl = this.constructor.__createUrl(pathname, base).href;
        if (normalizedUrl.slice(0, base.length) === base) return normalizedUrl.slice(base.length);
    }
}
Resolver.pathToRegexp = pathToRegexp_1;
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ const { pathToRegexp } = Resolver;
const cache = new Map();
function cacheRoutes(routesByName, route, routes) {
    const name = route.name || route.component;
    if (name) {
        if (routesByName.has(name)) routesByName.get(name).push(route);
        else routesByName.set(name, [
            route
        ]);
    }
    if (Array.isArray(routes)) for(let i = 0; i < routes.length; i++){
        const childRoute = routes[i];
        childRoute.parent = route;
        cacheRoutes(routesByName, childRoute, childRoute.__children || childRoute.children);
    }
}
function getRouteByName(routesByName, routeName) {
    const routes = routesByName.get(routeName);
    if (routes && routes.length > 1) throw new Error(`Duplicate route with name "${routeName}".` + ` Try seting unique 'name' route properties.`);
    return routes && routes[0];
}
function getRoutePath(route) {
    let path = route.path;
    path = Array.isArray(path) ? path[0] : path;
    return path !== undefined ? path : "";
}
function generateUrls(router, options = {}) {
    if (!(router instanceof Resolver)) throw new TypeError("An instance of Resolver is expected");
    const routesByName = new Map();
    return (routeName, params)=>{
        let route = getRouteByName(routesByName, routeName);
        if (!route) {
            routesByName.clear(); // clear cache
            cacheRoutes(routesByName, router.root, router.root.__children);
            route = getRouteByName(routesByName, routeName);
            if (!route) throw new Error(`Route "${routeName}" not found`);
        }
        let regexp = cache.get(route.fullPath);
        if (!regexp) {
            let fullPath = getRoutePath(route);
            let rt = route.parent;
            while(rt){
                const path = getRoutePath(rt);
                if (path) fullPath = path.replace(/\/$/, "") + "/" + fullPath.replace(/^\//, "");
                rt = rt.parent;
            }
            const tokens = pathToRegexp.parse(fullPath);
            const toPath = pathToRegexp.tokensToFunction(tokens);
            const keys = Object.create(null);
            for(let i = 0; i < tokens.length; i++)if (!isString(tokens[i])) keys[tokens[i].name] = true;
            regexp = {
                toPath,
                keys
            };
            cache.set(fullPath, regexp);
            route.fullPath = fullPath;
        }
        let url = regexp.toPath(params, options) || "/";
        if (options.stringifyQueryParams && params) {
            const queryParams = {};
            const keys = Object.keys(params);
            for(let i = 0; i < keys.length; i++){
                const key = keys[i];
                if (!regexp.keys[key]) queryParams[key] = params[key];
            }
            const query = options.stringifyQueryParams(queryParams);
            if (query) url += query.charAt(0) === "?" ? query : `?${query}`;
        }
        return url;
    };
}
/**
 * @typedef NavigationTrigger
 * @type {object}
 * @property {function()} activate
 * @property {function()} inactivate
 */ /** @type {Array<NavigationTrigger>} */ let triggers = [];
function setNavigationTriggers(newTriggers) {
    triggers.forEach((trigger)=>trigger.inactivate());
    newTriggers.forEach((trigger)=>trigger.activate());
    triggers = newTriggers;
}
const willAnimate = (elem)=>{
    const name = getComputedStyle(elem).getPropertyValue("animation-name");
    return name && name !== "none";
};
const waitForAnimation = (elem, cb)=>{
    const listener = ()=>{
        elem.removeEventListener("animationend", listener);
        cb();
    };
    elem.addEventListener("animationend", listener);
};
function animate(elem, className) {
    elem.classList.add(className);
    return new Promise((resolve)=>{
        if (willAnimate(elem)) {
            const rect = elem.getBoundingClientRect();
            const size = `height: ${rect.bottom - rect.top}px; width: ${rect.right - rect.left}px`;
            elem.setAttribute("style", `position: absolute; ${size}`);
            waitForAnimation(elem, ()=>{
                elem.classList.remove(className);
                elem.removeAttribute("style");
                resolve();
            });
        } else {
            elem.classList.remove(className);
            resolve();
        }
    });
}
const MAX_REDIRECT_COUNT = 256;
function isResultNotEmpty(result) {
    return result !== null && result !== undefined;
}
function copyContextWithoutNext(context) {
    const copy = Object.assign({}, context);
    delete copy.next;
    return copy;
}
function createLocation({ pathname = "", search = "", hash = "", chain = [], params = {}, redirectFrom, resolver }, route) {
    const routes = chain.map((item)=>item.route);
    return {
        baseUrl: resolver && resolver.baseUrl || "",
        pathname,
        search,
        hash,
        routes,
        route: route || routes.length && routes[routes.length - 1] || null,
        params,
        redirectFrom,
        getUrl: (userParams = {})=>getPathnameForRouter(Router.pathToRegexp.compile(getMatchedPath(routes))(Object.assign({}, params, userParams)), resolver)
    };
}
function createRedirect(context, pathname) {
    const params = Object.assign({}, context.params);
    return {
        redirect: {
            pathname,
            from: context.pathname,
            params
        }
    };
}
function renderElement(context, element) {
    element.location = createLocation(context);
    const index = context.chain.map((item)=>item.route).indexOf(context.route);
    context.chain[index].element = element;
    return element;
}
function runCallbackIfPossible(callback, args, thisArg) {
    if (isFunction(callback)) return callback.apply(thisArg, args);
}
function amend(amendmentFunction, args, element) {
    return (amendmentResult)=>{
        if (amendmentResult && (amendmentResult.cancel || amendmentResult.redirect)) return amendmentResult;
        if (element) return runCallbackIfPossible(element[amendmentFunction], args, element);
    };
}
function processNewChildren(newChildren, route) {
    if (!Array.isArray(newChildren) && !isObject(newChildren)) throw new Error(log(`Incorrect "children" value for the route ${route.path}: expected array or object, but got ${newChildren}`));
    route.__children = [];
    const childRoutes = toArray(newChildren);
    for(let i = 0; i < childRoutes.length; i++){
        ensureRoute(childRoutes[i]);
        route.__children.push(childRoutes[i]);
    }
}
function removeDomNodes(nodes) {
    if (nodes && nodes.length) {
        const parent = nodes[0].parentNode;
        for(let i = 0; i < nodes.length; i++)parent.removeChild(nodes[i]);
    }
}
function getPathnameForRouter(pathname, router) {
    const base = router.__effectiveBaseUrl;
    return base ? router.constructor.__createUrl(pathname.replace(/^\//, ""), base).pathname : pathname;
}
function getMatchedPath(chain) {
    return chain.map((item)=>item.path).reduce((a, b)=>{
        if (b.length) return a.replace(/\/$/, "") + "/" + b.replace(/^\//, "");
        return a;
    }, "");
}
/**
 * A simple client-side router for single-page applications. It uses
 * express-style middleware and has a first-class support for Web Components and
 * lazy-loading. Works great in Polymer and non-Polymer apps.
 *
 * Use `new Router(outlet, options)` to create a new Router instance.
 *
 * * The `outlet` parameter is a reference to the DOM node to render
 *   the content into.
 *
 * * The `options` parameter is an optional object with options. The following
 *   keys are supported:
 *   * `baseUrl` — the initial value for [
 *     the `baseUrl` property
 *   ](#/classes/Router#property-baseUrl)
 *
 * The Router instance is automatically subscribed to navigation events
 * on `window`.
 *
 * See [Live Examples](#/classes/Router/demos/demo/index.html) for the detailed usage demo and code snippets.
 *
 * See also detailed API docs for the following methods, for the advanced usage:
 *
 * * [setOutlet](#/classes/Router#method-setOutlet) – should be used to configure the outlet.
 * * [setTriggers](#/classes/Router#method-setTriggers) – should be used to configure the navigation events.
 * * [setRoutes](#/classes/Router#method-setRoutes) – should be used to configure the routes.
 *
 * Only `setRoutes` has to be called manually, others are automatically invoked when creating a new instance.
 *
 * @extends Resolver
 * @demo demo/index.html
 * @summary JavaScript class that renders different DOM content depending on
 *    a given path. It can re-render when triggered or automatically on
 *    'popstate' and / or 'click' events.
 */ class Router extends Resolver {
    /**
   * Creates a new Router instance with a given outlet, and
   * automatically subscribes it to navigation events on the `window`.
   * Using a constructor argument or a setter for outlet is equivalent:
   *
   * ```
   * const router = new Router();
   * router.setOutlet(outlet);
   * ```
   * @param {?Node=} outlet
   * @param {?RouterOptions=} options
   */ constructor(outlet, options){
        const baseElement = document.head.querySelector("base");
        const baseHref = baseElement && baseElement.getAttribute("href");
        super([], Object.assign({
            // Default options
            baseUrl: baseHref && Resolver.__createUrl(baseHref, document.URL).pathname.replace(/[^\/]*$/, "")
        }, options));
        this.resolveRoute = (context)=>this.__resolveRoute(context);
        const triggers = Router.NavigationTrigger;
        Router.setTriggers.apply(Router, Object.keys(triggers).map((key)=>triggers[key]));
        /**
     * The base URL for all routes in the router instance. By default,
     * if the base element exists in the `<head>`, vaadin-router
     * takes the `<base href>` attribute value, resolves against current `document.URL`
     * and gets the `pathname` from the result.
     *
     * @public
     * @type {string}
     */ this.baseUrl;
        /**
     * A promise that is settled after the current render cycle completes. If
     * there is no render cycle in progress the promise is immediately settled
     * with the last render cycle result.
     *
     * @public
     * @type {!Promise<!RouterLocation>}
     */ this.ready;
        this.ready = Promise.resolve(outlet);
        /**
     * Contains read-only information about the current router location:
     * pathname, active routes, parameters. See the
     * [Location type declaration](#/classes/RouterLocation)
     * for more details.
     *
     * @public
     * @type {!RouterLocation}
     */ this.location;
        this.location = createLocation({
            resolver: this
        });
        this.__lastStartedRenderId = 0;
        this.__navigationEventHandler = this.__onNavigationEvent.bind(this);
        this.setOutlet(outlet);
        this.subscribe();
        // Using WeakMap instead of WeakSet because WeakSet is not supported by IE11
        this.__createdByRouter = new WeakMap();
        this.__addedByRouter = new WeakMap();
    }
    __resolveRoute(context) {
        const route = context.route;
        let callbacks = Promise.resolve();
        if (isFunction(route.children)) callbacks = callbacks.then(()=>route.children(copyContextWithoutNext(context))).then((children)=>{
            // The route.children() callback might have re-written the
            // route.children property instead of returning a value
            if (!isResultNotEmpty(children) && !isFunction(route.children)) children = route.children;
            processNewChildren(children, route);
        });
        const commands = {
            redirect: (path)=>createRedirect(context, path),
            component: (component)=>{
                const element = document.createElement(component);
                this.__createdByRouter.set(element, true);
                return element;
            }
        };
        return callbacks.then(()=>{
            if (this.__isLatestRender(context)) return runCallbackIfPossible(route.action, [
                context,
                commands
            ], route);
        }).then((result)=>{
            if (isResultNotEmpty(result)) {
                // Actions like `() => import('my-view.js')` are not expected to
                // end the resolution, despite the result is not empty. Checking
                // the result with a whitelist of values that end the resolution.
                if (result instanceof HTMLElement || result.redirect || result === notFoundResult) return result;
            }
            if (isString(route.redirect)) return commands.redirect(route.redirect);
            if (route.bundle) return loadBundle(route.bundle).then(()=>{}, ()=>{
                throw new Error(log(`Bundle not found: ${route.bundle}. Check if the file name is correct`));
            });
        }).then((result)=>{
            if (isResultNotEmpty(result)) return result;
            if (isString(route.component)) return commands.component(route.component);
        });
    }
    /**
   * Sets the router outlet (the DOM node where the content for the current
   * route is inserted). Any content pre-existing in the router outlet is
   * removed at the end of each render pass.
   *
   * NOTE: this method is automatically invoked first time when creating a new Router instance.
   *
   * @param {?Node} outlet the DOM node where the content for the current route
   *     is inserted.
   */ setOutlet(outlet) {
        if (outlet) this.__ensureOutlet(outlet);
        this.__outlet = outlet;
    }
    /**
   * Returns the current router outlet. The initial value is `undefined`.
   *
   * @return {?Node} the current router outlet (or `undefined`)
   */ getOutlet() {
        return this.__outlet;
    }
    /**
   * Sets the routing config (replacing the existing one) and triggers a
   * navigation event so that the router outlet is refreshed according to the
   * current `window.location` and the new routing config.
   *
   * Each route object may have the following properties, listed here in the processing order:
   * * `path` – the route path (relative to the parent route if any) in the
   * [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths").
   *
   * * `children` – an array of nested routes or a function that provides this
   * array at the render time. The function can be synchronous or asynchronous:
   * in the latter case the render is delayed until the returned promise is
   * resolved. The `children` function is executed every time when this route is
   * being rendered. This allows for dynamic route structures (e.g. backend-defined),
   * but it might have a performance impact as well. In order to avoid calling
   * the function on subsequent renders, you can override the `children` property
   * of the route object and save the calculated array there
   * (via `context.route.children = [ route1, route2, ...];`).
   * Parent routes are fully resolved before resolving the children. Children
   * 'path' values are relative to the parent ones.
   *
   * * `action` – the action that is executed before the route is resolved.
   * The value for this property should be a function, accepting `context`
   * and `commands` parameters described below. If present, this function is
   * always invoked first, disregarding of the other properties' presence.
   * The action can return a result directly or within a `Promise`, which
   * resolves to the result. If the action result is an `HTMLElement` instance,
   * a `commands.component(name)` result, a `commands.redirect(path)` result,
   * or a `context.next()` result, the current route resolution is finished,
   * and other route config properties are ignored.
   * See also **Route Actions** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `redirect` – other route's path to redirect to. Passes all route parameters to the redirect target.
   * The target route should also be defined.
   * See also **Redirects** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `bundle` – string containing the path to `.js` or `.mjs` bundle to load before resolving the route,
   * or the object with "module" and "nomodule" keys referring to different bundles.
   * Each bundle is only loaded once. If "module" and "nomodule" are set, only one bundle is loaded,
   * depending on whether the browser supports ES modules or not.
   * The property is ignored when either an `action` returns the result or `redirect` property is present.
   * Any error, e.g. 404 while loading bundle will cause route resolution to throw.
   * See also **Code Splitting** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `component` – the tag name of the Web Component to resolve the route to.
   * The property is ignored when either an `action` returns the result or `redirect` property is present.
   * If route contains the `component` property (or an action that return a component)
   * and its child route also contains the `component` property, child route's component
   * will be rendered as a light dom child of a parent component.
   *
   * * `name` – the string name of the route to use in the
   * [`router.urlForName(name, params)`](#/classes/Router#method-urlForName)
   * navigation helper method.
   *
   * For any route function (`action`, `children`) defined, the corresponding `route` object is available inside the callback
   * through the `this` reference. If you need to access it, make sure you define the callback as a non-arrow function
   * because arrow functions do not have their own `this` reference.
   *
   * `context` object that is passed to `action` function holds the following properties:
   * * `context.pathname` – string with the pathname being resolved
   *
   * * `context.search` – search query string
   *
   * * `context.hash` – hash string
   *
   * * `context.params` – object with route parameters
   *
   * * `context.route` – object that holds the route that is currently being rendered.
   *
   * * `context.next()` – function for asynchronously getting the next route
   * contents from the resolution chain (if any)
   *
   * `commands` object that is passed to `action` function has
   * the following methods:
   *
   * * `commands.redirect(path)` – function that creates a redirect data
   * for the path specified.
   *
   * * `commands.component(component)` – function that creates a new HTMLElement
   * with current context. Note: the component created by this function is reused if visiting the same path twice in row.
   *
   *
   * @param {!Array<!Route>|!Route} routes a single route or an array of those
   * @param {?boolean} skipRender configure the router but skip rendering the
   *     route corresponding to the current `window.location` values
   *
   * @return {!Promise<!Node>}
   */ setRoutes(routes, skipRender = false) {
        this.__previousContext = undefined;
        this.__urlForName = undefined;
        super.setRoutes(routes);
        if (!skipRender) this.__onNavigationEvent();
        return this.ready;
    }
    /**
   * Asynchronously resolves the given pathname and renders the resolved route
   * component into the router outlet. If no router outlet is set at the time of
   * calling this method, or at the time when the route resolution is completed,
   * a `TypeError` is thrown.
   *
   * Returns a promise that is fulfilled with the router outlet DOM Node after
   * the route component is created and inserted into the router outlet, or
   * rejected if no route matches the given path.
   *
   * If another render pass is started before the previous one is completed, the
   * result of the previous render pass is ignored.
   *
   * @param {!string|!{pathname: !string, search: ?string, hash: ?string}} pathnameOrContext
   *    the pathname to render or a context object with a `pathname` property,
   *    optional `search` and `hash` properties, and other properties
   *    to pass to the resolver.
   * @param {boolean=} shouldUpdateHistory
   *    update browser history with the rendered location
   * @return {!Promise<!Node>}
   */ render(pathnameOrContext, shouldUpdateHistory) {
        const renderId = ++this.__lastStartedRenderId;
        const context = Object.assign({
            search: "",
            hash: ""
        }, isString(pathnameOrContext) ? {
            pathname: pathnameOrContext
        } : pathnameOrContext, {
            __renderId: renderId
        });
        // Find the first route that resolves to a non-empty result
        this.ready = this.resolve(context)// Process the result of this.resolve() and handle all special commands:
        // (redirect / prevent / component). If the result is a 'component',
        // then go deeper and build the entire chain of nested components matching
        // the pathname. Also call all 'on before' callbacks along the way.
        .then((context)=>this.__fullyResolveChain(context)).then((context)=>{
            if (this.__isLatestRender(context)) {
                const previousContext = this.__previousContext;
                // Check if the render was prevented and make an early return in that case
                if (context === previousContext) {
                    // Replace the history with the previous context
                    // to make sure the URL stays the same.
                    this.__updateBrowserHistory(previousContext, true);
                    return this.location;
                }
                this.location = createLocation(context);
                if (shouldUpdateHistory) // Replace only if first render redirects, so that we don’t leave
                // the redirecting record in the history
                this.__updateBrowserHistory(context, renderId === 1);
                fireRouterEvent("location-changed", {
                    router: this,
                    location: this.location
                });
                // Skip detaching/re-attaching there are no render changes
                if (context.__skipAttach) {
                    this.__copyUnchangedElements(context, previousContext);
                    this.__previousContext = context;
                    return this.location;
                }
                this.__addAppearingContent(context, previousContext);
                const animationDone = this.__animateIfNeeded(context);
                this.__runOnAfterEnterCallbacks(context);
                this.__runOnAfterLeaveCallbacks(context, previousContext);
                return animationDone.then(()=>{
                    if (this.__isLatestRender(context)) {
                        // If there is another render pass started after this one,
                        // the 'disappearing content' would be removed when the other
                        // render pass calls `this.__addAppearingContent()`
                        this.__removeDisappearingContent();
                        this.__previousContext = context;
                        return this.location;
                    }
                });
            }
        }).catch((error)=>{
            if (renderId === this.__lastStartedRenderId) {
                if (shouldUpdateHistory) this.__updateBrowserHistory(context);
                removeDomNodes(this.__outlet && this.__outlet.children);
                this.location = createLocation(Object.assign(context, {
                    resolver: this
                }));
                fireRouterEvent("error", Object.assign({
                    router: this,
                    error
                }, context));
                throw error;
            }
        });
        return this.ready;
    }
    // `topOfTheChainContextBeforeRedirects` is a context coming from Resolver.resolve().
    // It would contain a 'redirect' route or the first 'component' route that
    // matched the pathname. There might be more child 'component' routes to be
    // resolved and added into the chain. This method would find and add them.
    // `contextBeforeRedirects` is the context containing such a child component
    // route. It's only necessary when this method is called recursively (otherwise
    // it's the same as the 'top of the chain' context).
    //
    // Apart from building the chain of child components, this method would also
    // handle 'redirect' routes, call 'onBefore' callbacks and handle 'prevent'
    // and 'redirect' callback results.
    __fullyResolveChain(topOfTheChainContextBeforeRedirects, contextBeforeRedirects = topOfTheChainContextBeforeRedirects) {
        return this.__findComponentContextAfterAllRedirects(contextBeforeRedirects)// `contextAfterRedirects` is always a context with an `HTMLElement` result
        // In other cases the promise gets rejected and .then() is not called
        .then((contextAfterRedirects)=>{
            const redirectsHappened = contextAfterRedirects !== contextBeforeRedirects;
            const topOfTheChainContextAfterRedirects = redirectsHappened ? contextAfterRedirects : topOfTheChainContextBeforeRedirects;
            const matchedPath = getPathnameForRouter(getMatchedPath(contextAfterRedirects.chain), contextAfterRedirects.resolver);
            const isFound = matchedPath === contextAfterRedirects.pathname;
            // Recursive method to try matching more child and sibling routes
            const findNextContextIfAny = (context, parent = context.route, prevResult)=>{
                return context.next(undefined, parent, prevResult).then((nextContext)=>{
                    if (nextContext === null || nextContext === notFoundResult) {
                        // Next context is not found in children, ...
                        if (isFound) // ...but original context is already fully matching - use it
                        return context;
                        else if (parent.parent !== null) // ...and there is no full match yet - step up to check siblings
                        return findNextContextIfAny(context, parent.parent, nextContext);
                        else return nextContext;
                    }
                    return nextContext;
                });
            };
            return findNextContextIfAny(contextAfterRedirects).then((nextContext)=>{
                if (nextContext === null || nextContext === notFoundResult) throw getNotFoundError(topOfTheChainContextAfterRedirects);
                return nextContext && nextContext !== notFoundResult && nextContext !== contextAfterRedirects ? this.__fullyResolveChain(topOfTheChainContextAfterRedirects, nextContext) : this.__amendWithOnBeforeCallbacks(contextAfterRedirects);
            });
        });
    }
    __findComponentContextAfterAllRedirects(context) {
        const result = context.result;
        if (result instanceof HTMLElement) {
            renderElement(context, result);
            return Promise.resolve(context);
        } else if (result.redirect) return this.__redirect(result.redirect, context.__redirectCount, context.__renderId).then((context)=>this.__findComponentContextAfterAllRedirects(context));
        else if (result instanceof Error) return Promise.reject(result);
        else return Promise.reject(new Error(log(`Invalid route resolution result for path "${context.pathname}". ` + `Expected redirect object or HTML element, but got: "${logValue(result)}". ` + `Double check the action return value for the route.`)));
    }
    __amendWithOnBeforeCallbacks(contextWithFullChain) {
        return this.__runOnBeforeCallbacks(contextWithFullChain).then((amendedContext)=>{
            if (amendedContext === this.__previousContext || amendedContext === contextWithFullChain) return amendedContext;
            return this.__fullyResolveChain(amendedContext);
        });
    }
    __runOnBeforeCallbacks(newContext) {
        const previousContext = this.__previousContext || {};
        const previousChain = previousContext.chain || [];
        const newChain = newContext.chain;
        let callbacks = Promise.resolve();
        const prevent = ()=>({
                cancel: true
            });
        const redirect = (pathname)=>createRedirect(newContext, pathname);
        newContext.__divergedChainIndex = 0;
        newContext.__skipAttach = false;
        if (previousChain.length) {
            for(let i = 0; i < Math.min(previousChain.length, newChain.length); i = ++newContext.__divergedChainIndex){
                if (previousChain[i].route !== newChain[i].route || previousChain[i].path !== newChain[i].path && previousChain[i].element !== newChain[i].element || !this.__isReusableElement(previousChain[i].element, newChain[i].element)) break;
            }
            // Skip re-attaching and notifications if element and chain do not change
            newContext.__skipAttach = // Same route chain
            newChain.length === previousChain.length && newContext.__divergedChainIndex == newChain.length && // Same element
            this.__isReusableElement(newContext.result, previousContext.result);
            if (newContext.__skipAttach) {
                // execute onBeforeLeave for changed segment element when skipping attach
                for(let i = newChain.length - 1; i >= 0; i--)callbacks = this.__runOnBeforeLeaveCallbacks(callbacks, newContext, {
                    prevent
                }, previousChain[i]);
                // execute onBeforeEnter for changed segment element when skipping attach
                for(let i = 0; i < newChain.length; i++){
                    callbacks = this.__runOnBeforeEnterCallbacks(callbacks, newContext, {
                        prevent,
                        redirect
                    }, newChain[i]);
                    previousChain[i].element.location = createLocation(newContext, previousChain[i].route);
                }
            } else // execute onBeforeLeave when NOT skipping attach
            for(let i = previousChain.length - 1; i >= newContext.__divergedChainIndex; i--)callbacks = this.__runOnBeforeLeaveCallbacks(callbacks, newContext, {
                prevent
            }, previousChain[i]);
        }
        // execute onBeforeEnter when NOT skipping attach
        if (!newContext.__skipAttach) for(let i = 0; i < newChain.length; i++){
            if (i < newContext.__divergedChainIndex) {
                if (i < previousChain.length && previousChain[i].element) previousChain[i].element.location = createLocation(newContext, previousChain[i].route);
            } else {
                callbacks = this.__runOnBeforeEnterCallbacks(callbacks, newContext, {
                    prevent,
                    redirect
                }, newChain[i]);
                if (newChain[i].element) newChain[i].element.location = createLocation(newContext, newChain[i].route);
            }
        }
        return callbacks.then((amendmentResult)=>{
            if (amendmentResult) {
                if (amendmentResult.cancel) {
                    this.__previousContext.__renderId = newContext.__renderId;
                    return this.__previousContext;
                }
                if (amendmentResult.redirect) return this.__redirect(amendmentResult.redirect, newContext.__redirectCount, newContext.__renderId);
            }
            return newContext;
        });
    }
    __runOnBeforeLeaveCallbacks(callbacks, newContext, commands, chainElement) {
        const location = createLocation(newContext);
        return callbacks.then((result)=>{
            if (this.__isLatestRender(newContext)) {
                const afterLeaveFunction = amend("onBeforeLeave", [
                    location,
                    commands,
                    this
                ], chainElement.element);
                return afterLeaveFunction(result);
            }
        }).then((result)=>{
            if (!(result || {}).redirect) return result;
        });
    }
    __runOnBeforeEnterCallbacks(callbacks, newContext, commands, chainElement) {
        const location = createLocation(newContext, chainElement.route);
        return callbacks.then((result)=>{
            if (this.__isLatestRender(newContext)) {
                const beforeEnterFunction = amend("onBeforeEnter", [
                    location,
                    commands,
                    this
                ], chainElement.element);
                return beforeEnterFunction(result);
            }
        });
    }
    __isReusableElement(element, otherElement) {
        if (element && otherElement) return this.__createdByRouter.get(element) && this.__createdByRouter.get(otherElement) ? element.localName === otherElement.localName : element === otherElement;
        return false;
    }
    __isLatestRender(context) {
        return context.__renderId === this.__lastStartedRenderId;
    }
    __redirect(redirectData, counter, renderId) {
        if (counter > MAX_REDIRECT_COUNT) throw new Error(log(`Too many redirects when rendering ${redirectData.from}`));
        return this.resolve({
            pathname: this.urlForPath(redirectData.pathname, redirectData.params),
            redirectFrom: redirectData.from,
            __redirectCount: (counter || 0) + 1,
            __renderId: renderId
        });
    }
    __ensureOutlet(outlet = this.__outlet) {
        if (!(outlet instanceof Node)) throw new TypeError(log(`Expected router outlet to be a valid DOM Node (but got ${outlet})`));
    }
    __updateBrowserHistory({ pathname, search = "", hash = "" }, replace) {
        if (window.location.pathname !== pathname || window.location.search !== search || window.location.hash !== hash) {
            const changeState = replace ? "replaceState" : "pushState";
            window.history[changeState](null, document.title, pathname + search + hash);
            window.dispatchEvent(new PopStateEvent("popstate", {
                state: "vaadin-router-ignore"
            }));
        }
    }
    __copyUnchangedElements(context, previousContext) {
        // Find the deepest common parent between the last and the new component
        // chains. Update references for the unchanged elements in the new chain
        let deepestCommonParent = this.__outlet;
        for(let i = 0; i < context.__divergedChainIndex; i++){
            const unchangedElement = previousContext && previousContext.chain[i].element;
            if (unchangedElement) {
                if (unchangedElement.parentNode === deepestCommonParent) {
                    context.chain[i].element = unchangedElement;
                    deepestCommonParent = unchangedElement;
                } else break;
            }
        }
        return deepestCommonParent;
    }
    __addAppearingContent(context, previousContext) {
        this.__ensureOutlet();
        // If the previous 'entering' animation has not completed yet,
        // stop it and remove that content from the DOM before adding new one.
        this.__removeAppearingContent();
        // Copy reusable elements from the previousContext to current
        const deepestCommonParent = this.__copyUnchangedElements(context, previousContext);
        // Keep two lists of DOM elements:
        //  - those that should be removed once the transition animation is over
        //  - and those that should remain
        this.__appearingContent = [];
        this.__disappearingContent = Array.from(deepestCommonParent.children).filter(// Only remove layout content that was added by router
        (e)=>this.__addedByRouter.get(e) && // Do not remove the result element to avoid flickering
            e !== context.result);
        // Add new elements (starting after the deepest common parent) to the DOM.
        // That way only the components that are actually different between the two
        // locations are added to the DOM (and those that are common remain in the
        // DOM without first removing and then adding them again).
        let parentElement = deepestCommonParent;
        for(let i = context.__divergedChainIndex; i < context.chain.length; i++){
            const elementToAdd = context.chain[i].element;
            if (elementToAdd) {
                parentElement.appendChild(elementToAdd);
                this.__addedByRouter.set(elementToAdd, true);
                if (parentElement === deepestCommonParent) this.__appearingContent.push(elementToAdd);
                parentElement = elementToAdd;
            }
        }
    }
    __removeDisappearingContent() {
        if (this.__disappearingContent) removeDomNodes(this.__disappearingContent);
        this.__disappearingContent = null;
        this.__appearingContent = null;
    }
    __removeAppearingContent() {
        if (this.__disappearingContent && this.__appearingContent) {
            removeDomNodes(this.__appearingContent);
            this.__disappearingContent = null;
            this.__appearingContent = null;
        }
    }
    __runOnAfterLeaveCallbacks(currentContext, targetContext) {
        if (!targetContext) return;
        // REVERSE iteration: from Z to A
        for(let i = targetContext.chain.length - 1; i >= currentContext.__divergedChainIndex; i--){
            if (!this.__isLatestRender(currentContext)) break;
            const currentComponent = targetContext.chain[i].element;
            if (!currentComponent) continue;
            try {
                const location = createLocation(currentContext);
                runCallbackIfPossible(currentComponent.onAfterLeave, [
                    location,
                    {},
                    targetContext.resolver
                ], currentComponent);
            } finally{
                if (this.__disappearingContent.indexOf(currentComponent) > -1) removeDomNodes(currentComponent.children);
            }
        }
    }
    __runOnAfterEnterCallbacks(currentContext) {
        // forward iteration: from A to Z
        for(let i = currentContext.__divergedChainIndex; i < currentContext.chain.length; i++){
            if (!this.__isLatestRender(currentContext)) break;
            const currentComponent = currentContext.chain[i].element || {};
            const location = createLocation(currentContext, currentContext.chain[i].route);
            runCallbackIfPossible(currentComponent.onAfterEnter, [
                location,
                {},
                currentContext.resolver
            ], currentComponent);
        }
    }
    __animateIfNeeded(context) {
        const from = (this.__disappearingContent || [])[0];
        const to = (this.__appearingContent || [])[0];
        const promises = [];
        const chain = context.chain;
        let config;
        for(let i = chain.length; i > 0; i--)if (chain[i - 1].route.animate) {
            config = chain[i - 1].route.animate;
            break;
        }
        if (from && to && config) {
            const leave = isObject(config) && config.leave || "leaving";
            const enter = isObject(config) && config.enter || "entering";
            promises.push(animate(from, leave));
            promises.push(animate(to, enter));
        }
        return Promise.all(promises).then(()=>context);
    }
    /**
   * Subscribes this instance to navigation events on the `window`.
   *
   * NOTE: beware of resource leaks. For as long as a router instance is
   * subscribed to navigation events, it won't be garbage collected.
   */ subscribe() {
        window.addEventListener("vaadin-router-go", this.__navigationEventHandler);
    }
    /**
   * Removes the subscription to navigation events created in the `subscribe()`
   * method.
   */ unsubscribe() {
        window.removeEventListener("vaadin-router-go", this.__navigationEventHandler);
    }
    __onNavigationEvent(event) {
        const { pathname, search, hash } = event ? event.detail : window.location;
        if (isString(this.__normalizePathname(pathname))) {
            if (event && event.preventDefault) event.preventDefault();
            this.render({
                pathname,
                search,
                hash
            }, true);
        }
    }
    /**
   * Configures what triggers Router navigation events:
   *  - `POPSTATE`: popstate events on the current `window`
   *  - `CLICK`: click events on `<a>` links leading to the current page
   *
   * This method is invoked with the pre-configured values when creating a new Router instance.
   * By default, both `POPSTATE` and `CLICK` are enabled. This setup is expected to cover most of the use cases.
   *
   * See the `router-config.js` for the default navigation triggers config. Based on it, you can
   * create the own one and only import the triggers you need, instead of pulling in all the code,
   * e.g. if you want to handle `click` differently.
   *
   * See also **Navigation Triggers** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * @param {...NavigationTrigger} triggers
   */ static setTriggers(...triggers) {
        setNavigationTriggers(triggers);
    }
    /**
   * Generates a URL for the route with the given name, optionally performing
   * substitution of parameters.
   *
   * The route is searched in all the Router instances subscribed to
   * navigation events.
   *
   * **Note:** For child route names, only array children are considered.
   * It is not possible to generate URLs using a name for routes set with
   * a children function.
   *
   * @function urlForName
   * @param {!string} name the route name or the route’s `component` name.
   * @param {Params=} params Optional object with route path parameters.
   * Named parameters are passed by name (`params[name] = value`), unnamed
   * parameters are passed by index (`params[index] = value`).
   *
   * @return {string}
   */ urlForName(name, params) {
        if (!this.__urlForName) this.__urlForName = generateUrls(this);
        return getPathnameForRouter(this.__urlForName(name, params), this);
    }
    /**
   * Generates a URL for the given route path, optionally performing
   * substitution of parameters.
   *
   * @param {!string} path string route path declared in [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths").
   * @param {Params=} params Optional object with route path parameters.
   * Named parameters are passed by name (`params[name] = value`), unnamed
   * parameters are passed by index (`params[index] = value`).
   *
   * @return {string}
   */ urlForPath(path, params) {
        return getPathnameForRouter(Router.pathToRegexp.compile(path)(params), this);
    }
    /**
   * Triggers navigation to a new path. Returns a boolean without waiting until
   * the navigation is complete. Returns `true` if at least one `Router`
   * has handled the navigation (was subscribed and had `baseUrl` matching
   * the `path` argument), otherwise returns `false`.
   *
   * @param {!string|!{pathname: !string, search: (string|undefined), hash: (string|undefined)}} path
   *   a new in-app path string, or an URL-like object with `pathname`
   *   string property, and optional `search` and `hash` string properties.
   * @return {boolean}
   */ static go(path) {
        const { pathname, search, hash } = isString(path) ? this.__createUrl(path, "http://a") // some base to omit origin
         : path;
        return fireRouterEvent("go", {
            pathname,
            search,
            hash
        });
    }
}
const DEV_MODE_CODE_REGEXP = /\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;
const FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;
function isMinified() {
    function test() {
        /** vaadin-dev-mode:start
    return false;
    vaadin-dev-mode:end **/ return true;
    }
    return uncommentAndRun(test);
}
function isDevelopmentMode() {
    try {
        if (isForcedDevelopmentMode()) return true;
        if (!isLocalhost()) return false;
        if (FlowClients) return !isFlowProductionMode();
        return !isMinified();
    } catch (e) {
        // Some error in this code, assume production so no further actions will be taken
        return false;
    }
}
function isForcedDevelopmentMode() {
    return localStorage.getItem("vaadin.developmentmode.force");
}
function isLocalhost() {
    return [
        "localhost",
        "127.0.0.1"
    ].indexOf(window.location.hostname) >= 0;
}
function isFlowProductionMode() {
    if (FlowClients) {
        const productionModeApps = Object.keys(FlowClients).map((key)=>FlowClients[key]).filter((client)=>client.productionMode);
        if (productionModeApps.length > 0) return true;
    }
    return false;
}
function uncommentAndRun(callback, args) {
    if (typeof callback !== "function") return;
    const match = DEV_MODE_CODE_REGEXP.exec(callback.toString());
    if (match) try {
        // requires CSP: script-src 'unsafe-eval'
        callback = new Function(match[1]);
    } catch (e) {
        // eat the exception
        console.log("vaadin-development-mode-detector: uncommentAndRun() failed", e);
    }
    return callback(args);
}
// A guard against polymer-modulizer removing the window.Vaadin
// initialization above.
window["Vaadin"] = window["Vaadin"] || {};
/**
 * Inspects the source code of the given `callback` function for
 * specially-marked _commented_ code. If such commented code is found in the
 * callback source, uncomments and runs that code instead of the callback
 * itself. Otherwise runs the callback as is.
 *
 * The optional arguments are passed into the callback / uncommented code,
 * the result is returned.
 *
 * See the `isMinified()` function source code in this file for an example.
 *
 */ const runIfDevelopmentMode = function(callback, args) {
    if (window.Vaadin.developmentMode) return uncommentAndRun(callback, args);
};
if (window.Vaadin.developmentMode === undefined) window.Vaadin.developmentMode = isDevelopmentMode();
/* This file is autogenerated from src/vaadin-usage-statistics.tpl.html */ function maybeGatherAndSendStats() {
/** vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/ }
const usageStatistics = function() {
    if (typeof runIfDevelopmentMode === "function") return runIfDevelopmentMode(maybeGatherAndSendStats);
};
window.Vaadin = window.Vaadin || {};
window.Vaadin.registrations = window.Vaadin.registrations || [];
window.Vaadin.registrations.push({
    is: "@vaadin/router",
    version: "1.7.4"
});
usageStatistics();
Router.NavigationTrigger = {
    POPSTATE,
    CLICK
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"SIkvo":[function(require,module,exports) {
var _button = require("../../components/button");
var _presentationText = require("../../components/presentation-text");
var _jugada = require("../../components/jugada");
var _input = require("../../components/input");
var _state = require("../../state");
customElements.define("welcome-page", class extends HTMLElement {
    constructor(){
        super();
        this.backgroundImgUrl = require("9705b3bd7b466441");
    }
    connectedCallback() {
        this.render();
        this.addStyle();
        this.manageOptions();
    }
    render() {
        this.innerHTML = `
        <pres-text>Piedra, Papel \xf3 Tijera</pres-text>
        <my-button class="btn" id="new-game">Nuevo juego</my-button>
        <my-input class="btn hidden" id="enter-room-input">c\xf3digo</my-input>
        <div id="my-name" class="my-name btn hidden">
            <label for="my-name" class="my-name">Tu Nombre</label>
            <my-input class="btn"  name="my-name"></my-input>
        </div>
        <my-button class="btn" id="enter-room-btn">Ingresar a una sala</my-button>
        <my-button class="btn hidden" id="enter-new-room">Empezar</my-button>
        <div class="jugadas-container">
            <move-jugada jugada="tijera" class="jugada"></move-jugada>
            <move-jugada jugada="piedra" class="jugada"></move-jugada>
            <move-jugada jugada="papel" class="jugada"></move-jugada>
        </div>`;
    }
    addStyle() {
        const style = document.createElement("style");
        style.innerHTML = `
            .container {
                padding: 115px 26px 26px 27px;
                display: flex;
                flex-direction: column;
                align-items: center;
                background: url(${this.backgroundImgUrl}), lightgray 0% 0% / 29.16666567325592px 29.16666567325592px;
                height: 85vh;
            }

            .btn {
                width: 100%;
                margin-bottom: 20px;
            }

            .jugadas-container {
                display: flex;
                gap: 46px;
                width: 100%;
                height: 20%;
                align-items: center;
                justify-content: space-evenly;
                position: fixed;
                bottom: -40px;
            }

            .my-name {
                color: #000;
                text-align: center;
                font-family: Odibee Sans;
                font-size: 45px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 2.25px;
            }

            .hidden {
                display: none;
            }
        `;
        this.appendChild(style);
        this.classList.add("container");
    }
    manageOptions() {
        const enterRoomBtnEl = this.querySelector("#enter-room-btn");
        const newGameBtnEl = this.querySelector("#new-game");
        enterRoomBtnEl.addEventListener("click", ()=>{
            const enterRoomCodeInputEl = document.querySelector("#enter-room-input");
            newGameBtnEl.classList.toggle("hidden");
            enterRoomCodeInputEl.classList.toggle("hidden");
        // si clickeamos este boton, el btn de nuevo juego debe desaparecer y, en su lugar, aparecer el input que permita colocar el ID de una room. Por otro lado, tambien debe desaparecer el btn de Ingresar a una sala y aparecer uno que permita ingresar a la sala cuyo ID se ingresó buscandolo en la db?
        });
        newGameBtnEl.addEventListener("click", ()=>{
            const inputNameEl = document.querySelector("#my-name");
            const beginNewGameBtnEl = document.querySelector("#enter-new-room");
            inputNameEl.classList.toggle("hidden");
            newGameBtnEl.classList.toggle("hidden");
            enterRoomBtnEl.classList.toggle("hidden");
            beginNewGameBtnEl.classList.toggle("hidden");
        // si clickeamos aqui, debe quitar los btns y colocar el input para el nombre y el boton para empezar, que debe registrar al user y crear la room en la db
        });
        const beginEl = this.querySelector("#enter-new-room");
        beginEl.addEventListener("click", ()=>{
            (0, _state.state).test("matute");
        });
    }
});

},{"../../components/button":"16XQA","../../components/presentation-text":"9Xx08","../../components/jugada":"apOUB","../../components/input":"e4GFa","9705b3bd7b466441":"fMKbc","../../state":"4zUkS"}],"16XQA":[function(require,module,exports) {
customElements.define("my-button", class extends HTMLElement {
    constructor(){
        super();
        this.text = this.innerText;
    }
    connectedCallback() {
        this.render();
        const style = document.createElement("style");
        style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
            .button {
                color: #D8FCFC;
                text-align: center;
                font-family: 'Odibee Sans', sans-serif;
                font-size: 45px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                letter-spacing: 2.25px;
                width: 100%;
                min-height: 87px;
                border-radius: 10px;
                background: #006CFC;
                border: 10px solid #001997;
            }

            .button:hover {
                cursor: pointer;
            }
        `;
        this.appendChild(style);
    }
    render() {
        this.innerHTML = `<button class="button">${this.innerText}</button>`;
    }
});

},{}],"9Xx08":[function(require,module,exports) {
customElements.define("pres-text", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        const style = document.createElement("style");
        style.innerHTML = `
            .title {
                width: 288px;
                color: #009048;
                font-family: American Typewriter;
                font-size: 80px;
                font-style: normal;
                font-weight: 700;
                line-height: 88.1%;
                padding-right: 24px;
            }

            .span {
                color: #91CCAF;
            }
        `;
        this.shadow.appendChild(style);
        this.render();
    }
    render() {
        const div = document.createElement("div");
        div.innerHTML = `
            <h1 class="title">Piedra Papel <span class="span">\xf3</span>
            Tijera
            </h1>
        `;
        this.shadow.appendChild(div);
    }
});

},{}],"apOUB":[function(require,module,exports) {
customElements.define("move-jugada", class extends HTMLElement {
    constructor(){
        super();
    // this.shadow = this.attachShadow({mode: "open"});   
    }
    connectedCallback() {
        this.jugada = this.getAttribute("jugada");
        const style = document.createElement("style");
        style.innerHTML = `
            .hand {
                width: 60px;
                height: 138px;
            }

            .hand:hover {
                cursor: pointer;
            }
        `;
        this.appendChild(style);
        this.render();
    }
    imgSelector(jugada) {
        if (jugada == "papel") return require("928fe814c7de3e4d");
        if (jugada == "piedra") return require("1301cd3caca152a6");
        if (jugada == "tijera") return require("8a37090177f9cf0f");
    }
    render() {
        const jugadaImg = this.imgSelector(this.jugada);
        const div = document.createElement("div");
        div.innerHTML = `
            <img class="hand" src="${jugadaImg}">
        `;
        this.appendChild(div);
    }
});

},{"928fe814c7de3e4d":"aFOsz","1301cd3caca152a6":"irt9c","8a37090177f9cf0f":"3cWVB"}],"aFOsz":[function(require,module,exports) {
module.exports = require("5f4d1eb116a29dc3").getBundleURL("2V0GK") + "papel.f2946da3.svg" + "?" + Date.now();

},{"5f4d1eb116a29dc3":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"irt9c":[function(require,module,exports) {
module.exports = require("566ce27a72493833").getBundleURL("2V0GK") + "piedra.5e3b639a.svg" + "?" + Date.now();

},{"566ce27a72493833":"lgJ39"}],"3cWVB":[function(require,module,exports) {
module.exports = require("aaa8a5af7b0495ff").getBundleURL("2V0GK") + "tijera.2e0acb16.svg" + "?" + Date.now();

},{"aaa8a5af7b0495ff":"lgJ39"}],"e4GFa":[function(require,module,exports) {
customElements.define("my-input", class extends HTMLElement {
    constructor(){
        super();
        this.text = this.innerText;
    }
    connectedCallback() {
        this.render();
        const style = document.createElement("style");
        style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
            .input {
                color: #D9D9D9;
                text-align: center;
                font-family: 'Odibee Sans', sans-serif;
                font-size: 45px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                letter-spacing: 2.25px;
                width: 353px;
                min-height: 65px;
                border-radius: 10px;
                background: #FFF;
                border: 10px solid #001997;
            }

            .button:hover {
                cursor: pointer;
            }
            
        `;
        this.appendChild(style);
    }
    render() {
        this.innerHTML = `<input type="text" class="input" placeholder="${this.innerText}"></input>`;
    }
});

},{}],"fMKbc":[function(require,module,exports) {
module.exports = require("6402a6d54bd18cf1").getBundleURL("2V0GK") + "fondo.e1e44fc4.jpg" + "?" + Date.now();

},{"6402a6d54bd18cf1":"lgJ39"}],"4zUkS":[function(require,module,exports) {
// guarda la info para compartir entre pages/componentes
// guardar en localStorage lo necesario
// interactuar con ls/API
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const API_BASE_URL = "http://localhost:3000";
const state = {
    data: {},
    listeners: [],
    test (name) {
        fetch(API_BASE_URL + "/pepe", {
            // recordar que get es el metodo default, no es necesario especificarlo
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name: name
            })
        }).then((data)=>{
            return data.json();
        }).then((data)=>{
            console.log(data);
        });
    },
    whoWin (myPlay, opponentPlay) {
        const ganeConTijera = myPlay == "tijera" && opponentPlay == "papel";
        const ganeConPiedra = myPlay == "piedra" && opponentPlay == "tijera";
        const ganeConPapel = myPlay == "papel" && opponentPlay == "piedra";
        const perdiContraTijera = myPlay == "papel" && opponentPlay == "tijera";
        const perdiContraPiedra = myPlay == "tijera" && opponentPlay == "piedra";
        const perdiContraPapel = myPlay == "piedra" && opponentPlay == "papel";
        const gane = [
            ganeConTijera,
            ganeConPapel,
            ganeConPiedra
        ].includes(true);
        const perdi = [
            perdiContraTijera,
            perdiContraPapel,
            perdiContraPiedra
        ].includes(true);
        if (gane) return "Gan\xe9";
        else if (perdi) return "Perd\xed";
        else return "Empat\xe9";
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kXOFY":[function(require,module,exports) {
var _paragraphText = require("../../components/paragraph-text");
customElements.define("share-code", class extends HTMLElement {
    constructor(){
        super();
        this.backgroundImgUrl = require("1e587c2cb0f6caf2");
        this.playerOneName = this.playerOneName;
        this.playerTwoName = this.playerTwoName;
        this.playerOneScore = this.playerOneScore;
        this.playerTwoScore = this.playerTwoScore;
        this.roomId = this.roomId;
    }
    connectedCallback() {
        this.render();
        this.addStyle();
    // ESTA PANTALLA TERMINA CUANDO EL STATE DETECTA QUE EN LA ROOM HAY DOS PERSONAS CONECTADAS, AHI YA PASA A LA PANTALLA DE PLAY
    }
    render() {
        this.innerHTML = `
            <div class="container">
                <div class="flex-container">
                    <div class="room-data">
                        <div class="players-names">
                            <div class="player-one">
                                ${this.playerOneName}:${this.playerOneScore}
                            </div>
                            <div class="player-two">
                                ${this.playerTwoName}:${this.playerTwoScore}
                            </div>
                        </div>
                        <div class="room-id">
                            Sala: ${this.roomId}
                        </div>
                    </div>
                    <div class="share-message">
                        <p-text>Compart\xed el c\xf3digo</p-text>
                        <p-text>${this.roomId}</p-text>
                        <p-text>Con tu contrincante</p-text>
                    </div>
                    <div class="jugadas-container">
                        <move-jugada jugada="tijera" class="jugada"></move-jugada>
                        <move-jugada jugada="piedra" class="jugada"></move-jugada>
                        <move-jugada jugada="papel" class="jugada"></move-jugada>
                    </div>
                </div>
            </div>
        `;
    }
    addStyle() {
        const style = document.createElement("style");
        style.innerHTML = `
            .container {
                background: url(${this.backgroundImgUrl}), lightgray 0% 0% / 29.16666567325592px 29.16666567325592px;
                width: 100%;
                height: 100vh;
            }

            .flex-container {
                padding: 20px 21px 0px 20px;
            }

            .room-data {
                display: flex;
                justify-content: space-between;
                color: #000;
                gap: 25px;
                font-family: American Typewriter;
                font-size: 24px;
                font-style: normal;
                font-weight: 600;
                line-height: 100%;
                margin-bottom: 130px;
            }

            .jugadas-container {
                display: flex;
                gap: 46px;
                width: 100%;
                height: 20%;
                align-items: center;
                justify-content: center;
                position: fixed;
                bottom: -50px;
            }

            .player-two {
                color: red;
            }
        `;
        this.appendChild(style);
    }
});

},{"1e587c2cb0f6caf2":"fMKbc","../../components/paragraph-text":"lcu7B"}],"lcu7B":[function(require,module,exports) {
customElements.define("p-text", class extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.render();
        const style = document.createElement("style");
        style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=American+Typewriter&display=swap');
            .paragraph {
                color: #000;
                text-align: center;
                font-family: American Typewriter;
                font-size: 35px;
                font-style: normal;
                font-weight: 600;
                line-height: 100%; /* 35px */
            }
        `;
        this.appendChild(style);
    }
    render() {
        this.innerHTML = `<p class="paragraph">${this.innerText}</p>`;
    }
});

},{}],"6tSYd":[function(require,module,exports) {
customElements.define("instructions-page", class extends HTMLElement {
    constructor(){
        super();
        this.backgroundImgUrl = require("8f408cd59e466e32");
        this.backgroundImgUrl = this.backgroundImgUrl;
        this.playerOneName = this.playerOneName;
        this.playerTwoName = this.playerTwoName;
        this.playerOneScore = this.playerOneScore;
        this.playerTwoScore = this.playerTwoScore;
        this.roomId = this.roomId;
    }
    connectedCallback() {
        this.render();
        this.addStyle();
        this.playAndCheck();
    }
    render() {
        this.innerHTML = `
            <div class="room-data">
                <div class="players-names">
                    <div class="player-one">
                        ${this.playerOneName}:${this.playerOneScore}
                    </div>
                    <div class="player-two">
                        ${this.playerTwoName}:${this.playerTwoScore}
                    </div>
                </div>
                <div class="room-id">
                    Sala: ${this.roomId}
                </div>
            </div>
            <p class="instructions">Presion\xe1 jugar
            y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</p>
            <my-button class="jugar">\xa1Jugar!</my-button>
            <p-text class="p-waiting hidden">Esperando a que ${this.playerTwoName} presione \xa1Jugar!...</p-text>
            <div class="plays-container">
                <move-jugada jugada="tijera"></move-jugada>
                <move-jugada jugada="piedra"></move-jugada>
                <move-jugada jugada="papel"></move-jugada>
            </div>
        `;
    }
    addStyle() {
        const style = document.createElement("style");
        style.innerHTML = `
        .container {
            padding: 20px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            justify-contnet: center;
            align-items: center;
            background: url(${this.backgroundImgUrl}), lightgray 0% 0% / 29.16666567325592px 29.16666567325592px;
            width: 85%;
            height: 97vh;
        }

        .instructions {
            width: 317px;
            color: #000;
            text-align: center;
            font-family: American Typewriter;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: 100%; /* 40px */
        }
        
        .jugar {
            width: 100%;
        }

        .p-waiting {
            margin-top: 197px;

        }

        .plays-container {
            display: flex;
            gap: 46px;
            width: 100%;
            height: 20%;
            align-items: center;
            justify-content: center;
            position: fixed;
            bottom: -40px;
        }

        .room-data {
            display: flex;
            justify-content: space-between;
            color: #000;
            gap: 25px;
            font-family: American Typewriter;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 100%;
            margin-bottom: 130px;
        }

        .player-two {
            color: red;
        }
        
        .hidden {
            display: none;
        }
        `;
        this.appendChild(style);
        this.classList.add("container");
    }
    playAndCheck() {
        const playBtnEl = document.querySelector(".jugar");
        playBtnEl.addEventListener("click", ()=>{
            const instructionsEl = document.querySelector(".instructions");
            const waitingEl = document.querySelector(".p-waiting");
            const elements = [
                instructionsEl,
                playBtnEl,
                waitingEl
            ];
            elements.forEach((el)=>{
                el.classList.toggle("hidden");
            // esto deberia estar suscripto al state y chequear de alguna manera cuando el otro player tambien haya apretado jugar, puede ser una propiedad tipo playPressed = t o f, cuando ambos son true se tiene que ir a la pantalla del countdown
            });
        });
    }
});

},{"8f408cd59e466e32":"fMKbc"}],"7u8WA":[function(require,module,exports) {
var _state = require("../../state");
var _countdown = require("../../components/countdown");
customElements.define("play-screen", class extends HTMLElement {
    constructor(params){
        super();
        this.backgroundImgUrl = require("af87829aed0ea8f0");
        this.myMove;
        this.params = params;
    }
    connectedCallback() {
        this.render();
        this.addStyle();
        this.myPlay();
        this.manageCountdown();
    }
    render() {
        this.innerHTML = `
            <my-countdown></my-countdown>
            <div class="plays-container">
                <move-jugada class="jugada" jugada="tijera"></move-jugada>
                <move-jugada class="jugada" jugada="piedra"></move-jugada>
                <move-jugada class="jugada" jugada="papel"></move-jugada>
            </div>
            <div class="play-screen hidden">
            </div>;
        `;
    }
    addStyle() {
        const style = document.createElement("style");
        style.innerHTML = `
        .container {
            padding: 129px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background: url(${this.backgroundImgUrl}), lightgray 0% 0% / 29.16666567325592px 29.16666567325592px;
            height: 90vh;
        }

        .plays-container {
            display: flex;
            gap: 46px;
            width: 100%;
            height: 15%;
            align-items: center;
            justify-content: center;
            position: fixed;
            bottom: -20px;

        }

        .play-screen {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100vh;
        }

        .jugada {
            opacity: 0.5;
        }

        .hand {
            width: 120px;
            height: 270px;
        }

        .jugada:hover {
            position: relative;
            bottom: 30px;
            opacity: 1;
        }

        .chosen-play {
            width: 159px;
            height: 356px
        }

        .hidden {
            display: none;
        }
    `;
        this.appendChild(style);
        this.classList.add("container");
    }
    myPlay() {
        var myMove;
        const playsContainerEl = this.querySelector(".plays-container");
        playsContainerEl.querySelectorAll(".jugada").forEach((play)=>{
            play.addEventListener("click", (e)=>{
                const target = e.target;
                myMove = target.closest("move-jugada").jugada;
                this.myMove = myMove;
            });
        });
    }
    // Esto en la version ppt online se omite ya que la jugada la hace el oponente
    // function computerPlay(){
    //     const moves = div.querySelectorAll("[jugada]");
    //     const jugadas: any[] = [];
    //     moves.forEach(move => {
    //         const jugada = move.getAttribute("jugada");
    //         jugadas.push(jugada);
    //     });
    //     const jugadaRandom = jugadas[Math.floor(Math.random() * jugadas.length)];
    //     return jugadaRandom;
    // };
    // VER ESTO
    showMoves(opponentMove, myMove) {
        const resultado = (0, _state.state).whoWin(myMove, opponentMove);
        const opponentPlayEl = document.createElement("move-jugada");
        const myPlay = document.createElement("move-jugada");
        const countdownEl = this.querySelector("my-countdown");
        const playsContainerEl = this.querySelector(".plays-container");
        const playScreenEl = this.querySelector(".play-screen");
        //  aca
        var containerEl = document.querySelector(".container");
        containerEl.style.padding = "0px";
        countdownEl?.classList.toggle("hidden");
        playsContainerEl?.classList.toggle("hidden");
        playScreenEl?.classList.toggle("hidden");
        opponentPlayEl.setAttribute("jugada", opponentMove);
        opponentPlayEl.style.transform = "rotate(180deg)";
        myPlay.setAttribute("jugada", myMove);
        playScreenEl?.append(opponentPlayEl, myPlay);
        let counter = 3;
        const intervalId = setInterval(()=>{
            counter--;
            if (counter == 0) {
                // ver bien las routes
                if (resultado === "Gan\xe9") this.params.goTo("/result/ganaste");
                if (resultado === "Perd\xed") this.params.goTo("/result/perdiste");
                if (resultado === "Empat\xe9") this.params.goTo("/instructions");
                clearInterval(intervalId);
            }
        }, 1000);
    }
    manageCountdown() {
        const countdownEl = this.querySelector("my-countdown");
        countdownEl?.addEventListener("countdownEnd", ()=>{
            // Ojo aca porque la function computerPlay() ya no se usaria en ppt online. Esto deberia ser una function que checkee si el oponente jugo o no y que, si jugo, que movimiento hizo
            // const opponentMove = computerPlay();
            if (this.myMove == undefined) this.params.goTo("/instructions");
        });
    }
});

},{"af87829aed0ea8f0":"fMKbc","../../components/countdown":"1vMDT","../../state":"4zUkS"}],"1vMDT":[function(require,module,exports) {
customElements.define("my-countdown", class extends HTMLElement {
    constructor(){
        super();
        this.countdownNumber = 3;
        this.fondoImg = require("bcd9dbdf7c65b50f");
        this.intervalId = setInterval(()=>{
            this.countdownNumber--;
            this.shadow.querySelector(".countdownNumber").innerHTML = `${this.countdownNumber}`;
            if (this.countdownNumber < 1) {
                const myEvent = new CustomEvent("countdownEnd", {});
                this.dispatchEvent(myEvent);
                clearInterval(this.intervalId);
            }
        }, 1000);
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.setAttribute("ready", "false");
    }
    connectedCallback() {
        const style = document.createElement("style");
        style.innerHTML = `
            .countdownCircle {
                width: 243px;
                height: 243px;  
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 135px;
                position: relative;
            }

            .countdownCircle:before {
                content: "";
                border: 20px solid black;
                position: absolute;
                height: 84%;
                width: 84%;
                border-radius: 50%;
            }

            .countdownNumber {
                width: 189px;
                color: #000;
                text-align: center;
                font-family: American Typewriter;
                font-size: 100px;
                font-style: normal;
                font-weight: 700;
                line-height: 100%;
                position: absolute;
            }

            .button:hover {
                cursor: pointer;
            }
        `;
        this.shadow.appendChild(style);
        this.render();
    }
    render() {
        const div = document.createElement("div");
        div.innerHTML = `
            <p class="countdownNumber">${this.countdownNumber}</p>
        `;
        div.classList.add("countdownCircle");
        this.shadow.appendChild(div);
    }
});

},{"bcd9dbdf7c65b50f":"fMKbc"}],"fIfZX":[function(require,module,exports) {
var _star = require("../../../components/star");
var _score = require("../../../components/score");
customElements.define("win-el", class extends HTMLElement {
    constructor(params){
        super();
        this.resultado = "ganaste";
    }
    connectedCallback() {
        this.render();
        const style = document.createElement("style");
        style.innerHTML = `
        .container {
            padding: 115px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #888949;
            opacity: 0.9;
            width: 100%;
            height: 100vh;
            gap: 25px;
        }
    `;
        this.appendChild(style);
        this.classList.add("container");
    }
    render() {
        this.innerHTML = `
            <star-result resultado="${this.resultado}"></star-result>
            <score-item></score-item>
            <my-button class="volver-welcome">Volver a jugar</my-button>
        `;
    }
});

},{"../../../components/star":"8Cnvm","../../../components/score":"1kike"}],"8Cnvm":[function(require,module,exports) {
customElements.define("star-result", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.resultado = this.getAttribute("resultado");
        const style = document.createElement("style");
        style.innerHTML = `
        `;
        this.shadow.appendChild(style);
        this.render();
    }
    imgSelector(resultado) {
        if (resultado == "ganaste") return require("e3ce51739c9e21e2");
        if (resultado == "perdiste") return require("3ece8a571c5b4f08");
    }
    render() {
        const div = document.createElement("div");
        const resultImgUrl = this.imgSelector(this.resultado);
        div.innerHTML = `
            <img src="${resultImgUrl}">
        `;
        this.shadow.appendChild(div);
    }
});

},{"e3ce51739c9e21e2":"h6TUa","3ece8a571c5b4f08":"4tCJQ"}],"h6TUa":[function(require,module,exports) {
module.exports = require("c6c387546c77ce2c").getBundleURL("2V0GK") + "ganaste.7bdb222d.png" + "?" + Date.now();

},{"c6c387546c77ce2c":"lgJ39"}],"4tCJQ":[function(require,module,exports) {
module.exports = require("bd241b7fdd6f64bf").getBundleURL("2V0GK") + "perdiste.622c5205.png" + "?" + Date.now();

},{"bd241b7fdd6f64bf":"lgJ39"}],"1kike":[function(require,module,exports) {
customElements.define("score-item", class extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        // const scores = state.scoreCalculator();
        // (this.myScore as any)  = scores?.myScore;
        // (this.computerScore as any) = scores?.computerScore;
        const style = document.createElement("style");
        style.innerHTML = `
            .container {
                height: 217px;
                border-radius: 10px;
                border: 10px solid #000000;
                background-color: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 30px;
            }

            .score-title {
                font-family: 'Odibee Sans', cursive;
                font-weight: 400;
                font-size: 55px;
                line-height: 60.94px;
                margin-top: 10px;
                margin-bottom: 0px;
            }

            .score-container {
                width: 100%;
                margin-right: 30px;
                display: flex;
                flex-direction: column;
                align-items: end;

            .score {
                
                font-family: 'Odibee Sans', cursive;
                font-size: 45px;
                margin: 0;
            }
        `;
        this.shadow.appendChild(style);
        this.render();
    }
    render() {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3 class="score-title">Score</h3>
            <div class="score-container">
                <p class="score myScore">Vos: ${this.myScore}</p>
                <p class="score computerScore">M\xe1quina: ${this.computerScore}</p>
            </div>
        `;
        div.classList.add("container");
        this.shadow.appendChild(div);
    }
});

},{}],"cNM2T":[function(require,module,exports) {
var _star = require("../../../components/star");
var _score = require("../../../components/score");
customElements.define("lose-el", class extends HTMLElement {
    constructor(params){
        super();
        this.resultado = "perdiste";
    }
    connectedCallback() {
        this.render();
        const style = document.createElement("style");
        style.innerHTML = `
        .container {
            padding: 115px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #888949;
            opacity: 0.9;
            width: 100%;
            height: 100vh;
            gap: 25px;
        }
    `;
        this.appendChild(style);
        this.classList.add("container");
    }
    render() {
        this.innerHTML = `
            <star-result resultado="${this.resultado}"></star-result>
            <score-item></score-item>
            <my-button class="volver-welcome">Volver a jugar</my-button>
        `;
    }
});

},{"../../../components/star":"8Cnvm","../../../components/score":"1kike"}]},["dDYEE","jYSt7"], "jYSt7", "parcelRequire94c2")

//# sourceMappingURL=index.80efa6db.js.map
