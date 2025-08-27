(function () {
  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmultikart_backend"] = self["webpackChunkmultikart_backend"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _shared_routes_content_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared/routes/content-routes */
      54989);
      /* harmony import */


      var _shared_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/layout/content-layout/content-layout.component */
      89207);
      /* harmony import */


      var _lib_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lib/guards/auth.guard */
      44297);
      /* harmony import */


      var _lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lib/helpers */
      7018);
      /* harmony import */


      var _components_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/auth/auth.module */
      12767);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        redirectTo: 'profiles/profile-settings',
        pathMatch: 'full'
      }, {
        path: '',
        component: _shared_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_1__.ContentLayoutComponent,
        children: _shared_routes_content_routes__WEBPACK_IMPORTED_MODULE_0__.content,
        canActivate: [_lib_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuardsAdminService]
      }, {
        path: '**',
        redirectTo: '/error'
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [_lib_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuardsAdminService, _lib_helpers__WEBPACK_IMPORTED_MODULE_3__.RouterHelperService],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
          scrollPositionRestoration: 'enabled',
          relativeLinkResolution: 'legacy'
        }), _components_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__.AuthModule], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _components_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__.AuthModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var ng_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-http-loader */
      85945);

      var _AppComponent = /*#__PURE__*/_createClass(function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = 'multikart-backend';
      });

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ng-http-loader");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, ng_http_loader__WEBPACK_IMPORTED_MODULE_2__.NgHttpLoaderComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/shared.module */
      44466);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _lib_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lib/environments/environment */
      91477);
      /* harmony import */


      var _lib_environments_config_appConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lib/environments/config/appConfig */
      63249);
      /* harmony import */


      var _components_files_files_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/files/files.module */
      17879);
      /* harmony import */


      var ng_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-http-loader */
      85945);
      /* harmony import */


      var _lib_data_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lib/data/services */
      19764);

      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [{
          provide: 'BASE_URL',
          useValue: _lib_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.host
        }, _lib_environments_config_appConfig__WEBPACK_IMPORTED_MODULE_4__.AppConfig, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_7__.APP_INITIALIZER,
          multi: true,
          deps: [_lib_environments_config_appConfig__WEBPACK_IMPORTED_MODULE_4__.AppConfig],
          useFactory: function useFactory(appConfigService) {
            return function () {
              return appConfigService.load();
            };
          }
        }, _lib_data_services__WEBPACK_IMPORTED_MODULE_6__.AuthService],
        imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule.withServerTransition({
          appId: 'serverApp'
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _components_files_files_module__WEBPACK_IMPORTED_MODULE_5__.FilesModule, ng_http_loader__WEBPACK_IMPORTED_MODULE_11__.NgHttpLoaderModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
          imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _components_files_files_module__WEBPACK_IMPORTED_MODULE_5__.FilesModule, ng_http_loader__WEBPACK_IMPORTED_MODULE_11__.NgHttpLoaderModule]
        });
      })();
      /***/

    },

    /***/
    2474:
    /*!********************************************************!*\
      !*** ./src/app/components/auth/auth-routing.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthRoutingModule": function AuthRoutingModule() {
          return (
            /* binding */
            _AuthRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login/login.component */
      43502);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
      }];

      var _AuthRoutingModule = /*#__PURE__*/_createClass(function _AuthRoutingModule() {
        _classCallCheck(this, _AuthRoutingModule);
      });

      _AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
        return new (t || _AuthRoutingModule)();
      };

      _AuthRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AuthRoutingModule
      });
      _AuthRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    12767:
    /*!************************************************!*\
      !*** ./src/app/components/auth/auth.module.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthModule": function AuthModule() {
          return (
            /* binding */
            _AuthModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth-routing.module */
      2474);
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login/login.component */
      43502);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      67844);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/shared.module */
      44466);
      /* harmony import */


      var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/lib/http/http-client */
      8403);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AuthModule = /*#__PURE__*/_createClass(function _AuthModule() {
        _classCallCheck(this, _AuthModule);
      });

      _AuthModule.ɵfac = function AuthModule_Factory(t) {
        return new (t || _AuthModule)();
      };

      _AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _AuthModule
      });
      _AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_3__.HttpClientService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_AuthModule, {
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
        });
      })();
      /***/

    },

    /***/
    43502:
    /*!**********************************************************!*\
      !*** ./src/app/components/auth/login/login.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/data/models */
      82409);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/lib/data/services */
      19764);
      /* harmony import */


      var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/lib/data/services/messages/message.service */
      20985);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function LoginComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Login");
        }
      }

      function LoginComponent_ng_template_13_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Username is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_ng_template_13_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginComponent_ng_template_13_div_4_div_1_Template, 2, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.username.errors.required);
        }
      }

      function LoginComponent_ng_template_13_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_ng_template_13_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginComponent_ng_template_13_div_7_div_1_Template, 2, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.f.password.errors.required);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      function LoginComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, LoginComponent_ng_template_13_div_4_Template, 2, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, LoginComponent_ng_template_13_div_7_Template, 2, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Remember me");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_ng_template_13_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r6.onLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r1.submitted && ctx_r1.f.username.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ctx_r1.f.username.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, ctx_r1.submitted && ctx_r1.f.password.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ctx_r1.f.password.errors);
        }
      }

      var _LoginComponent = /*#__PURE__*/function () {
        function _LoginComponent(formBuilder, activedRoute, router, authService, messageService) {
          _classCallCheck(this, _LoginComponent);

          this.formBuilder = formBuilder;
          this.activedRoute = activedRoute;
          this.router = router;
          this.authService = authService;
          this.messageService = messageService;
          this.submitted = false;
          this.owlcarousel = [{
            title: 'Welcome to Clothing Store'
          }, {
            title: 'This is the management page'
          }];
          this.owlcarouselOptions = {
            loop: true,
            items: 1,
            dots: true
          };
          this.createLoginForm();
          this.createRegisterForm();

          if (localStorage.getItem('token')) {
            this.backUrl();
          }
        }

        _createClass(_LoginComponent, [{
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }, {
          key: "createLoginForm",
          value: function createLoginForm() {
            this.loginForm = this.formBuilder.group({
              username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
            });
          }
        }, {
          key: "createRegisterForm",
          value: function createRegisterForm() {
            this.registerForm = this.formBuilder.group({
              username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              confirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onLogin",
          value: function onLogin() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this = this;

              var data;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    this.submitted = true;

                    if (this.loginForm.valid) {
                      _context.next = 3;
                      break;
                    }

                    return _context.abrupt("return");

                  case 3:
                    data = this.loginForm.value;
                    _context.next = 6;
                    return this.authService.login(data).then(function (data) {
                      localStorage.setItem('token', data.data.token);
                      localStorage.setItem('user', JSON.stringify(data.data));

                      _this.backUrl();
                    })["catch"](function (er) {
                      var _a, _b;

                      _this.messageService.alert('Login Fail', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR, (_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : "Server Disconnected");
                    });

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "backUrl",
          value: function backUrl() {
            var returnUrl = this.activedRoute.snapshot.queryParams['returnUrl'] || '/';
            this.router.navigateByUrl(returnUrl);
          }
        }]);

        return _LoginComponent;
      }();

      _LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService));
      };

      _LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _LoginComponent,
        selectors: [["app-login"]],
        decls: 14,
        vars: 0,
        consts: [[1, "page-wrapper"], [1, "authentication-box"], [1, "container"], [1, "row"], [1, "col-md-5", "p-0", "card-left"], [1, "card", "bg-primary"], ["src", "assets/images/logo.png", 1, "svg"], [1, "col-md-7", "p-0", "card-right"], [1, "card", "tab2-card"], [1, "card-body"], [1, "tab-coupon", "mb-0"], ["ngbTabTitle", ""], ["ngbTabContent", ""], [1, "icon-user", "mr-2"], ["id", "account", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "active", "show"], ["novalidate", "", 1, "form-horizontal", "auth-form", 3, "formGroup"], [1, "form-group"], ["required", "", "name", "login[username]", "type", "email", "autocomplete", "username", "placeholder", "Username", "id", "exampleInputEmail1", "formControlName", "username", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["required", "", "name", "login[password]", "type", "password", "autocomplete", "new-password", "placeholder", "Password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "form-terms"], [1, "custom-control", "custom-checkbox", "mr-sm-2"], ["type", "checkbox", "id", "customControlAutosizing", 1, "custom-control-input"], ["for", "customControlAutosizing", 1, "custom-control-label"], [1, "form-button"], [1, "btn", "btn-primary", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ngb-tabset", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, LoginComponent_ng_template_12_Template, 2, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, LoginComponent_ng_template_13_Template, 16, 9, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTabset, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTab, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTabTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTabContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    61055:
    /*!*************************************************************************!*\
      !*** ./src/app/components/files/create-image/create-image.component.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CreateImageComponent": function CreateImageComponent() {
          return (
            /* binding */
            _CreateImageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/components/modals/models/modal.model */
      5383);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/components/modals/modal-header/modal-header.component */
      71279);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/upload-file/upload-file.component */
      75288);
      /* harmony import */


      var _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/modals/modal-footer/modal-footer.component */
      36711);

      function CreateImageComponent_select_6_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", item_r2.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r2.value, " ");
        }
      }

      function CreateImageComponent_select_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CreateImageComponent_select_6_Template_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r3.modalImage.enityType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateImageComponent_select_6_option_1_Template, 2, 2, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.modalImage.enityType);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.select);
        }
      }

      var _CreateImageComponent = /*#__PURE__*/function () {
        function _CreateImageComponent(ngbActiveModal) {
          _classCallCheck(this, _CreateImageComponent);

          this.ngbActiveModal = ngbActiveModal;
        }

        _createClass(_CreateImageComponent, [{
          key: "install",
          value: function install() {
            this.modalHeader = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModel();
            this.modalHeader.title = this.item ? "[Update] ".concat(this.item.id) : "[Add]";
            this.modalFooter = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_0__.ModalFooterModel();
            this.modalFooter.title = 'Save';
            this.modalImage = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_0__.ModalFile();

            if (this.typeMulti == 1 || this.typeMulti == 2) {
              this.modalImage.typeFile = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_0__.TypeFile.IMAGE;
            }

            if (this.typeMulti == 3 || this.typeMulti == 4) {
              this.modalImage.typeFile = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_0__.TypeFile.FILE;
            }

            if (this.typeMulti == 1 || this.typeMulti == 3) {
              this.modalImage.multiBoolen = false;
            }

            if (this.typeMulti == 2 || this.typeMulti == 4) {
              this.modalImage.multiBoolen = true;
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {// console.log(this.item);
          }
        }, {
          key: "onChangeData",
          value: function onChangeData(event) {
            var _this2 = this;

            if (event == null) {
              return;
            }

            if (!this.fileURL) {
              this.fileURL = [];
            }

            if (event.add) {
              this.fileURL = [].concat(_toConsumableArray(this.fileURL), _toConsumableArray(event.add));
            }

            if (event.remove) {
              this.fileURL.forEach(function (e, i) {
                if (e == event.remove) {
                  _this2.fileURL.splice(i, 1);
                }
              });
            }

            if (event.removeAll) {
              this.fileURL = [];
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.install();
          }
        }, {
          key: "close",
          value: function close(event) {
            // console.log(event);
            this.ngbActiveModal.close();
          }
        }, {
          key: "save",
          value: function save(event) {
            // console.log(event);
            this.ngbActiveModal.close();
          }
        }]);

        return _CreateImageComponent;
      }();

      _CreateImageComponent.ɵfac = function CreateImageComponent_Factory(t) {
        return new (t || _CreateImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal));
      };

      _CreateImageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _CreateImageComponent,
        selectors: [["app-create-image"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        decls: 10,
        vars: 6,
        consts: [[3, "data", "onAction"], [1, "card-body", 2, "margin", "auto", "width", "50%"], ["type", "text", "placeholder", "ID", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange", 4, "ngIf"], ["styleFile", "width: 200px; height: auto;", 3, "data", "fileURL", "onChange"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function CreateImageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-modal-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onAction", function CreateImageComponent_Template_app_modal_header_onAction_0_listener($event) {
              return ctx.close($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " EnityID: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CreateImageComponent_Template_input_ngModelChange_3_listener($event) {
              return ctx.modalImage.enityId = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " EnityType: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CreateImageComponent_select_6_Template, 2, 2, "select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "app-upload-file", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onChange", function CreateImageComponent_Template_app_upload_file_onChange_8_listener($event) {
              return ctx.onChangeData($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "app-modal-footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onAction", function CreateImageComponent_Template_app_modal_footer_onAction_9_listener($event) {
              return ctx.save($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.modalHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.modalImage.enityId);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.select);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.modalImage)("fileURL", ctx.fileURL);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.modalFooter);
          }
        },
        directives: [_shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_1__.ModalHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_2__.UploadFileComponent, _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_3__.ModalFooterComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtaW1hZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    94369:
    /*!**********************************************************!*\
      !*** ./src/app/components/files/files-routing.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FilesRoutingModule": function FilesRoutingModule() {
          return (
            /* binding */
            _FilesRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _list_files_list_files_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./list-files/list-files.component */
      68691);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        children: [{
          path: 'list-files',
          component: _list_files_list_files_component__WEBPACK_IMPORTED_MODULE_0__.ListFilesComponent,
          data: {
            title: "File List",
            breadcrumb: "File List"
          }
        }]
      }];

      var _FilesRoutingModule = /*#__PURE__*/_createClass(function _FilesRoutingModule() {
        _classCallCheck(this, _FilesRoutingModule);
      });

      _FilesRoutingModule.ɵfac = function FilesRoutingModule_Factory(t) {
        return new (t || _FilesRoutingModule)();
      };

      _FilesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _FilesRoutingModule
      });
      _FilesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_FilesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    17879:
    /*!**************************************************!*\
      !*** ./src/app/components/files/files.module.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FilesModule": function FilesModule() {
          return (
            /* binding */
            _FilesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng2-smart-table */
      98391);
      /* harmony import */


      var src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/data/services */
      19764);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);
      /* harmony import */


      var _create_image_create_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./create-image/create-image.component */
      61055);
      /* harmony import */


      var _files_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./files-routing.module */
      94369);
      /* harmony import */


      var _list_files_list_files_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./list-files/list-files.component */
      68691);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FilesModule = /*#__PURE__*/_createClass(function _FilesModule() {
        _classCallCheck(this, _FilesModule);
      });

      _FilesModule.ɵfac = function FilesModule_Factory(t) {
        return new (t || _FilesModule)();
      };

      _FilesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _FilesModule
      });
      _FilesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_0__.FileService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _files_routing_module__WEBPACK_IMPORTED_MODULE_3__.FilesRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_FilesModule, {
          declarations: [_list_files_list_files_component__WEBPACK_IMPORTED_MODULE_4__.ListFilesComponent, _create_image_create_image_component__WEBPACK_IMPORTED_MODULE_2__.CreateImageComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _files_routing_module__WEBPACK_IMPORTED_MODULE_3__.FilesRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
        });
      })();
      /***/

    },

    /***/
    68691:
    /*!*********************************************************************!*\
      !*** ./src/app/components/files/list-files/list-files.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ListFilesComponent": function ListFilesComponent() {
          return (
            /* binding */
            _ListFilesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/data/services */
      19764);
      /* harmony import */


      var _create_image_create_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../create-image/create-image.component */
      61055);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-smart-table */
      98391);

      var _ListFilesComponent = /*#__PURE__*/function () {
        function _ListFilesComponent(fileService, modalService) {
          _classCallCheck(this, _ListFilesComponent);

          this.fileService = fileService;
          this.modalService = modalService;
          this.settings = {
            hideSubHeader: true,
            mode: 'external',
            actions: {
              position: 'right',
              add: false
            },
            columns: {
              id: {
                title: 'ID'
              },
              name: {
                title: 'Name'
              },
              url: {
                title: 'URL',
                type: 'html',
                valuePrepareFunction: function valuePrepareFunction(file) {
                  var fileExt = file.split('.').pop();

                  if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'icon') {
                    return "<a href=\"".concat(src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_0__.FileService.getLinkFile(file), "\"><img appUiImageLoader width=\"75px\" height=\"75px\" src=\"").concat(src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_0__.FileService.getLinkFile(file), "\"/></a>");
                  }

                  return "<a href=\"".concat(src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_0__.FileService.getLinkFile(file), "\">").concat(src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_0__.FileService.getLinkFile(file), "</a>");
                }
              },
              fileExt: {
                title: 'FileExt'
              },
              entityType: {
                title: 'EnityType'
              },
              entityId: {
                title: 'EntityID'
              }
            }
          };
          this.params = {
            pageIndex: 0
          };
          this.getFiles();
          this.getType();
        }

        _createClass(_ListFilesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getFiles",
          value: function getFiles() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this3 = this;

              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.fileService.getFile({
                      params: this.params
                    }).then(function (res) {
                      return _this3.media = res.data.results;
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getType",
          value: function getType() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this4 = this;

              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.fileService.getType().then(function (res) {
                      // console.log(res.data);
                      _this4.type = res.data;
                    });

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "open",
          value: function open(item, typeMulti) {
            var _this5 = this;

            // console.log(item);
            var modalRef = this.modalService.open(_create_image_create_image_component__WEBPACK_IMPORTED_MODULE_1__.CreateImageComponent, {
              ariaLabelledBy: 'modal-basic-title'
            });
            modalRef.componentInstance.select = this.type;
            modalRef.componentInstance.typeMulti = typeMulti;
            modalRef.result.then(function (result) {
              _this5.getFiles();
            }, function (reason) {
              _this5.closeResult = "Dismissed ".concat(_this5.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }]);

        return _ListFilesComponent;
      }();

      _ListFilesComponent.ɵfac = function ListFilesComponent_Factory(t) {
        return new (t || _ListFilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_0__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal));
      };

      _ListFilesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _ListFilesComponent,
        selectors: [["app-list-files"]],
        decls: 17,
        vars: 2,
        consts: [[1, "container-fluid", "bulk-cate"], [1, "card"], [1, "card-header"], [1, "card-body"], ["type", "button", 1, "btn", 2, "background-color", "blue", "color", "white", 3, "click"], ["type", "button", 1, "btn", 2, "background-color", "darkcyan", "color", "white", 3, "click"], ["type", "button", 1, "btn", 2, "background-color", "rgb(76, 0, 139)", "color", "white", 3, "click"], ["type", "button", 1, "btn", 2, "background-color", "rgb(139, 0, 120)", "color", "white", 3, "click"], ["id", "batchDelete", 1, "category-table", "custom-datatable", "media-datatable"], [1, "table-responsive"], [3, "settings", "source"]],
        template: function ListFilesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Media File List");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListFilesComponent_Template_button_click_6_listener() {
              return ctx.open(null, 1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Add Single Image ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListFilesComponent_Template_button_click_8_listener() {
              return ctx.open(null, 2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Add Multi Image ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListFilesComponent_Template_button_click_10_listener() {
              return ctx.open(null, 3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Add Single File ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListFilesComponent_Template_button_click_12_listener() {
              return ctx.open(null, 4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Add Multi File ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "ng2-smart-table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.media);
          }
        },
        directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__.Ng2SmartTableComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWZpbGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    6802:
    /*!*************************************************************************!*\
      !*** ./src/app/lib/data/models/auth/auth.informationreturndto.model.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    32329:
    /*!**********************************************************!*\
      !*** ./src/app/lib/data/models/auth/auth.login.model.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    45694:
    /*!*********************************************************!*\
      !*** ./src/app/lib/data/models/banners/banner.model.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    17170:
    /*!**************************************************************!*\
      !*** ./src/app/lib/data/models/categories/category.model.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    86606:
    /*!******************************************************!*\
      !*** ./src/app/lib/data/models/common/base.model.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BaseModel": function BaseModel() {
          return (
            /* binding */
            _BaseModel
          );
        }
        /* harmony export */

      });

      var _BaseModel = /*#__PURE__*/_createClass(function _BaseModel() {
        _classCallCheck(this, _BaseModel);
      });
      /***/

    },

    /***/
    89483:
    /*!*************************************************!*\
      !*** ./src/app/lib/data/models/common/index.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageModel": function PageModel() {
          return (
            /* reexport safe */
            _page_model__WEBPACK_IMPORTED_MODULE_0__.PageModel
          );
        },

        /* harmony export */
        "SearchPaganationDTO": function SearchPaganationDTO() {
          return (
            /* reexport safe */
            _page_model__WEBPACK_IMPORTED_MODULE_0__.SearchPaganationDTO
          );
        },

        /* harmony export */
        "BaseModel": function BaseModel() {
          return (
            /* reexport safe */
            _base_model__WEBPACK_IMPORTED_MODULE_2__.BaseModel
          );
        },

        /* harmony export */
        "RouterInfoModel": function RouterInfoModel() {
          return (
            /* reexport safe */
            _router_info_model__WEBPACK_IMPORTED_MODULE_3__.RouterInfoModel
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _page_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./page.model */
      80625);
      /* harmony import */


      var _return_message_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./return-message.model */
      5089);
      /* harmony import */


      var _base_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./base.model */
      86606);
      /* harmony import */


      var _router_info_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./router-info.model */
      51547);
      /***/

    },

    /***/
    80625:
    /*!******************************************************!*\
      !*** ./src/app/lib/data/models/common/page.model.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageModel": function PageModel() {
          return (
            /* binding */
            _PageModel
          );
        },

        /* harmony export */
        "SearchPaganationDTO": function SearchPaganationDTO() {
          return (
            /* binding */
            _SearchPaganationDTO
          );
        }
        /* harmony export */

      });

      var _PageModel = /*#__PURE__*/_createClass(function _PageModel() {
        _classCallCheck(this, _PageModel);
      });

      var _SearchPaganationDTO = /*#__PURE__*/_createClass(function _SearchPaganationDTO() {
        _classCallCheck(this, _SearchPaganationDTO);
      });
      /***/

    },

    /***/
    5089:
    /*!****************************************************************!*\
      !*** ./src/app/lib/data/models/common/return-message.model.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    51547:
    /*!*************************************************************!*\
      !*** ./src/app/lib/data/models/common/router-info.model.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RouterInfoModel": function RouterInfoModel() {
          return (
            /* binding */
            _RouterInfoModel
          );
        }
        /* harmony export */

      });

      var _RouterInfoModel = /*#__PURE__*/_createClass(function _RouterInfoModel() {
        _classCallCheck(this, _RouterInfoModel);
      });
      /***/

    },

    /***/
    28343:
    /*!*********************************************************!*\
      !*** ./src/app/lib/data/models/coupons/coupon.model.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    87607:
    /*!*************************************************************!*\
      !*** ./src/app/lib/data/models/customers/customer.model.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    82446:
    /*!*****************************************************!*\
      !*** ./src/app/lib/data/models/files/file.model.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    82409:
    /*!******************************************!*\
      !*** ./src/app/lib/data/models/index.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BaseModel": function BaseModel() {
          return (
            /* reexport safe */
            _common__WEBPACK_IMPORTED_MODULE_0__.BaseModel
          );
        },

        /* harmony export */
        "PageModel": function PageModel() {
          return (
            /* reexport safe */
            _common__WEBPACK_IMPORTED_MODULE_0__.PageModel
          );
        },

        /* harmony export */
        "RouterInfoModel": function RouterInfoModel() {
          return (
            /* reexport safe */
            _common__WEBPACK_IMPORTED_MODULE_0__.RouterInfoModel
          );
        },

        /* harmony export */
        "SearchPaganationDTO": function SearchPaganationDTO() {
          return (
            /* reexport safe */
            _common__WEBPACK_IMPORTED_MODULE_0__.SearchPaganationDTO
          );
        },

        /* harmony export */
        "TypeSweetAlertIcon": function TypeSweetAlertIcon() {
          return (
            /* reexport safe */
            _sweetalert_sweetalert_model__WEBPACK_IMPORTED_MODULE_13__.TypeSweetAlertIcon
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./common */
      89483);
      /* harmony import */


      var _suppliers_supplier_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./suppliers/supplier.model */
      1136);
      /* harmony import */


      var _banners_banner_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./banners/banner.model */
      45694);
      /* harmony import */


      var _auth_auth_login_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth/auth.login.model */
      32329);
      /* harmony import */


      var _social_medias_social_media_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./social-medias/social-media.model */
      15338);
      /* harmony import */


      var _coupons_coupon_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./coupons/coupon.model */
      28343);
      /* harmony import */


      var _profile_profile_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile/profile.model */
      91238);
      /* harmony import */


      var _auth_auth_informationreturndto_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./auth/auth.informationreturndto.model */
      6802);
      /* harmony import */


      var _files_file_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./files/file.model */
      82446);
      /* harmony import */


      var _customers_customer_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./customers/customer.model */
      87607);
      /* harmony import */


      var _information_website_info_web_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./information-website/info-web.model */
      68571);
      /* harmony import */


      var _products_product_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./products/product.model */
      99272);
      /* harmony import */


      var _categories_category_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./categories/category.model */
      17170);
      /* harmony import */


      var _sweetalert_sweetalert_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./sweetalert/sweetalert.model */
      98616);
      /***/

    },

    /***/
    68571:
    /*!***********************************************************************!*\
      !*** ./src/app/lib/data/models/information-website/info-web.model.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    99272:
    /*!***********************************************************!*\
      !*** ./src/app/lib/data/models/products/product.model.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    91238:
    /*!**********************************************************!*\
      !*** ./src/app/lib/data/models/profile/profile.model.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    15338:
    /*!*********************************************************************!*\
      !*** ./src/app/lib/data/models/social-medias/social-media.model.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    1136:
    /*!*************************************************************!*\
      !*** ./src/app/lib/data/models/suppliers/supplier.model.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    98616:
    /*!****************************************************************!*\
      !*** ./src/app/lib/data/models/sweetalert/sweetalert.model.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TypeSweetAlertIcon": function TypeSweetAlertIcon() {
          return (
            /* binding */
            _TypeSweetAlertIcon
          );
        }
        /* harmony export */

      });

      var _TypeSweetAlertIcon;

      (function (TypeSweetAlertIcon) {
        TypeSweetAlertIcon["SUCCESS"] = "success";
        TypeSweetAlertIcon["ERROR"] = "error";
        TypeSweetAlertIcon["WARNING"] = "warning";
        TypeSweetAlertIcon["INFO"] = "info";
        TypeSweetAlertIcon["QUESTION"] = "question";
      })(_TypeSweetAlertIcon || (_TypeSweetAlertIcon = {}));
      /***/

    },

    /***/
    16543:
    /*!********************************************************!*\
      !*** ./src/app/lib/data/services/auth/auth.service.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/http/http-client */
      8403);

      var _AuthService = /*#__PURE__*/function () {
        function _AuthService(http) {
          _classCallCheck(this, _AuthService);

          this.http = http;
          this.url = '/api/auth';
          this.callUserInfo = _AuthService.userInfo.asObservable();
        }

        _createClass(_AuthService, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login(body) {
            return this.http.postObservable("".concat(this.url, "/login"), body).toPromise();
          }
        }, {
          key: "getInformationUser",
          value: function getInformationUser() {
            return this.http.getObservable(this.url).toPromise();
          }
        }, {
          key: "changeUserInfo",
          value: function changeUserInfo(userInfo) {
            localStorage['user'] = JSON.stringify(userInfo);

            _AuthService.userInfo.next(userInfo);
          }
        }]);

        return _AuthService;
      }();

      _AuthService.userInfo = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(JSON.parse(localStorage['user'] || 'null'));

      _AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || _AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__.HttpClientService));
      };

      _AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _AuthService,
        factory: _AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    41374:
    /*!**************************************************************!*\
      !*** ./src/app/lib/data/services/banners/banners.service.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BannersService": function BannersService() {
          return (
            /* binding */
            _BannersService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/http/http-client */
      8403);

      var _BannersService = /*#__PURE__*/function () {
        function _BannersService(httpClient) {
          _classCallCheck(this, _BannersService);

          this.httpClient = httpClient;
          this.url = '/api/banner';
        }

        _createClass(_BannersService, [{
          key: "get",
          value: function get(request) {
            return this.httpClient.getObservable(this.url, request).toPromise();
          }
        }, {
          key: "create",
          value: function create(model) {
            return this.httpClient.postObservable(this.url, model).toPromise();
          }
        }, {
          key: "update",
          value: function update(model) {
            return this.httpClient.putObservable(this.url, model).toPromise();
          }
        }, {
          key: "delete",
          value: function _delete(model) {
            var url = "".concat(this.url, "?id=").concat(model === null || model === void 0 ? void 0 : model.id);
            return this.httpClient.deleteObservable(url).toPromise();
          }
        }, {
          key: "save",
          value: function save(model) {
            if (model.id) {
              return this.update(model);
            }

            return this.create(model);
          }
        }]);

        return _BannersService;
      }();

      _BannersService.ɵfac = function BannersService_Factory(t) {
        return new (t || _BannersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__.HttpClientService));
      };

      _BannersService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _BannersService,
        factory: _BannersService.ɵfac
      });
      /***/
    },

    /***/
    19865:
    /*!******************************************************************!*\
      !*** ./src/app/lib/data/services/categories/category.service.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoryService": function CategoryService() {
          return (
            /* binding */
            _CategoryService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/http/http-client */
      8403);

      var _CategoryService = /*#__PURE__*/function () {
        function _CategoryService(httpClient) {
          _classCallCheck(this, _CategoryService);

          this.httpClient = httpClient;
          this.url = '/api/category';
        }

        _createClass(_CategoryService, [{
          key: "get",
          value: function get(request) {
            return this.httpClient.getObservable(this.url, request).toPromise();
          }
        }, {
          key: "create",
          value: function create(model) {
            return this.httpClient.postObservable(this.url, model).toPromise();
          }
        }, {
          key: "update",
          value: function update(model) {
            return this.httpClient.putObservable(this.url, model).toPromise();
          }
        }, {
          key: "delete",
          value: function _delete(model) {
            var url = "".concat(this.url, "/?Id=").concat(model === null || model === void 0 ? void 0 : model.id);
            return this.httpClient.deleteObservable(url).toPromise();
          }
        }, {
          key: "save",
          value: function save(model) {
            if (model.id) {
              return this.update(model);
            }

            return this.create(model);
          }
        }]);

        return _CategoryService;
      }();

      _CategoryService.ɵfac = function CategoryService_Factory(t) {
        return new (t || _CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__.HttpClientService));
      };

      _CategoryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CategoryService,
        factory: _CategoryService.ɵfac
      });
      /***/
    },

    /***/
    59498:
    /*!*************************************************************!*\
      !*** ./src/app/lib/data/services/coupons/coupon.service.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CouponService": function CouponService() {
          return (
            /* binding */
            _CouponService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/http/http-client */
      8403);

      var _CouponService = /*#__PURE__*/function () {
        function _CouponService(httpClient) {
          _classCallCheck(this, _CouponService);

          this.httpClient = httpClient;
          this.url = '/api/coupon';
        }

        _createClass(_CouponService, [{
          key: "get",
          value: function get(request) {
            return this.httpClient.getObservable(this.url, request).toPromise();
          }
        }, {
          key: "create",
          value: function create(model) {
            return this.httpClient.postObservable(this.url, model).toPromise();
          }
        }, {
          key: "update",
          value: function update(model) {
            return this.httpClient.putObservable(this.url, model).toPromise();
          }
        }, {
          key: "delete",
          value: function _delete(model) {
            var url = "".concat(this.url, "/?id=").concat(model === null || model === void 0 ? void 0 : model.id);
            return this.httpClient.deleteObservable(url).toPromise();
          }
        }, {
          key: "save",
          value: function save(model) {
            if (model.id) {
              return this.update(model);
            }

            return this.create(model);
          }
        }]);

        return _CouponService;
      }();

      _CouponService.ɵfac = function CouponService_Factory(t) {
        return new (t || _CouponService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__.HttpClientService));
      };

      _CouponService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CouponService,
        factory: _CouponService.ɵfac
      });
      /***/
    },

    /***/
    54914:
    /*!*****************************************************************!*\
      !*** ./src/app/lib/data/services/customers/customer.service.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomerService": function CustomerService() {
          return (
            /* binding */
            _CustomerService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/http/http-client */
      8403);

      var _CustomerService = /*#__PURE__*/function () {
        function _CustomerService(httpClient) {
          _classCallCheck(this, _CustomerService);

          this.httpClient = httpClient;
          this.url = '/api/customer';
        }

        _createClass(_CustomerService, [{
          key: "get",
          value: function get(request) {
            return this.httpClient.getObservable(this.url, request).toPromise();
          }
        }, {
          key: "create",
          value: function create(model) {
            return this.httpClient.postObservable(this.url, model).toPromise();
          }
        }, {
          key: "update",
          value: function update(model) {
            return this.httpClient.putObservable(this.url, model).toPromise();
          }
        }, {
          key: "delete",
          value: function _delete(model) {
            var url = "".concat(this.url, "/?id=").concat(model === null || model === void 0 ? void 0 : model.id);
            return this.httpClient.deleteObservable(url).toPromise();
          }
        }, {
          key: "save",
          value: function save(model) {
            if (model.id) {
              return this.update(model);
            }

            return this.create(model);
          }
        }]);

        return _CustomerService;
      }();

      _CustomerService.ɵfac = function CustomerService_Factory(t) {
        return new (t || _CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__.HttpClientService));
      };

      _CustomerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _CustomerService,
        factory: _CustomerService.ɵfac
      });
      /***/
    },

    /***/
    39665:
    /*!*********************************************************!*\
      !*** ./src/app/lib/data/services/files/file.service.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FileService": function FileService() {
          return (
            /* binding */
            _FileService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_lib_environments_config_appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/environments/config/appConfig */
      63249);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/lib/http/http-client */
      8403);

      var _FileService = /*#__PURE__*/function () {
        function _FileService(httpClient) {
          _classCallCheck(this, _FileService);

          this.httpClient = httpClient;
          this.url = '/api/file';
          this.urlDownload = this.url + '/download';
          this.urlGetType = this.url + '/type';
        }

        _createClass(_FileService, [{
          key: "getFile",
          value: function getFile(request) {
            return this.httpClient.getObservable(this.url, request).toPromise();
          }
        }, {
          key: "getType",
          value: function getType() {
            return this.httpClient.getObservable(this.urlGetType).toPromise();
          }
        }, {
          key: "saveFile",
          value: function saveFile(model) {
            return this.httpClient.postObservable(this.url, model).toPromise();
          }
        }, {
          key: "downloadFile",
          value: function downloadFile(request) {
            return this.httpClient.getObservable(this.urlDownload, request).toPromise();
          }
        }, {
          key: "getLinkDownloadFile",
          value: function getLinkDownloadFile(url) {
            return "".concat(src_app_lib_environments_config_appConfig__WEBPACK_IMPORTED_MODULE_0__.AppConfig.settings.API_URL).concat(this.urlDownload, "?url=").concat(url);
          }
        }], [{
          key: "getLinkFile",
          value: function getLinkFile(fileName) {
            if (fileName.trim()) {
              var result = fileName.includes('http') ? fileName : "".concat(src_app_lib_environments_config_appConfig__WEBPACK_IMPORTED_MODULE_0__.AppConfig.settings.API_URL, "/Files/").concat(fileName);
              return result.toString();
            }

            return '';
          }
        }]);

        return _FileService;
      }();

      _FileService.ɵfac = function FileService_Factory(t) {
        return new (t || _FileService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClientService));
      };

      _FileService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _FileService,
        factory: _FileService.ɵfac
      });
      /***/
    },

    /***/
    19764:
    /*!********************************************!*\
      !*** ./src/app/lib/data/services/index.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BannersService": function BannersService() {
          return (
            /* reexport safe */
            _banners_banners_service__WEBPACK_IMPORTED_MODULE_1__.BannersService
          );
        },

        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* reexport safe */
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
          );
        },

        /* harmony export */
        "CouponService": function CouponService() {
          return (
            /* reexport safe */
            _coupons_coupon_service__WEBPACK_IMPORTED_MODULE_3__.CouponService
          );
        },

        /* harmony export */
        "SocialMediaService": function SocialMediaService() {
          return (
            /* reexport safe */
            _social_media_social_media_service__WEBPACK_IMPORTED_MODULE_4__.SocialMediaService
          );
        },

        /* harmony export */
        "FileService": function FileService() {
          return (
            /* reexport safe */
            _files_file_service__WEBPACK_IMPORTED_MODULE_5__.FileService
          );
        },

        /* harmony export */
        "ProfileService": function ProfileService() {
          return (
            /* reexport safe */
            _profiles_profile_service__WEBPACK_IMPORTED_MODULE_6__.ProfileService
          );
        },

        /* harmony export */
        "CustomerService": function CustomerService() {
          return (
            /* reexport safe */
            _customers_customer_service__WEBPACK_IMPORTED_MODULE_7__.CustomerService
          );
        },

        /* harmony export */
        "CategoryService": function CategoryService() {
          return (
            /* reexport safe */
            _categories_category_service__WEBPACK_IMPORTED_MODULE_8__.CategoryService
          );
        },

        /* harmony export */
        "ProductService": function ProductService() {
          return (
            /* reexport safe */
            _products_product_service__WEBPACK_IMPORTED_MODULE_9__.ProductService
          );
        },

        /* harmony export */
        "InformationWebsiteService": function InformationWebsiteService() {
          return (
            /* reexport safe */
            _information_website_infoWeb_service__WEBPACK_IMPORTED_MODULE_10__.InformationWebsiteService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _suppliers_supplier_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./suppliers/supplier.service */
      85738);
      /* harmony import */


      var _banners_banners_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./banners/banners.service */
      41374);
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth/auth.service */
      16543);
      /* harmony import */


      var _coupons_coupon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./coupons/coupon.service */
      59498);
      /* harmony import */


      var _social_media_social_media_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./social-media/social-media.service */
      49493);
      /* harmony import */


      var _files_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./files/file.service */
      39665);
      /* harmony import */


      var _profiles_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profiles/profile.service */
      47133);
      /* harmony import */


      var _customers_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./customers/customer.service */
      54914);
      /* harmony import */


      var _categories_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./categories/category.service */
      19865);
      /* harmony import */


      var _products_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./products/product.service */
      22197);
      /* harmony import */


      var _information_website_infoWeb_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./information-website/infoWeb.service */
      73046);
      /***/

    },

    /***/
    73046:
    /*!**************************************************************************!*\
      !*** ./src/app/lib/data/services/information-website/infoWeb.service.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InformationWebsiteService": function InformationWebsiteService() {
          return (
            /* binding */
            _InformationWebsiteService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/http/http-client */
      8403);

      var _InformationWebsiteService = /*#__PURE__*/function () {
        function _InformationWebsiteService(httpClient) {
          _classCallCheck(this, _InformationWebsiteService);

          this.httpClient = httpClient;
          this.url = '/api/info-website';
        }

        _createClass(_InformationWebsiteService, [{
          key: "get",
          value: function get(request) {
            return this.httpClient.getObservable(this.url, request).toPromise();
          }
        }, {
          key: "update",
          value: function update(model) {
            return this.httpClient.putObservable(this.url, model).toPromise();
          }
        }]);

        return _InformationWebsiteService;
      }();

      _InformationWebsiteService.ɵfac = function InformationWebsiteService_Factory(t) {
        return new (t || _InformationWebsiteService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__.HttpClientService));
      };

      _InformationWebsiteService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _InformationWebsiteService,
        factory: _InformationWebsiteService.ɵfac
      });
      /***/
    },

    /***/
    20985:
    /*!***************************************************************!*\
      !*** ./src/app/lib/data/services/messages/message.service.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessageService": function MessageService() {
          return (
            /* binding */
            _MessageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _MessageService = /*#__PURE__*/function () {
        function _MessageService() {
          _classCallCheck(this, _MessageService);
        }

        _createClass(_MessageService, [{
          key: "alert",
          value: function alert(title) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              title: title,
              html: detail,
              icon: type
            });
          }
        }, {
          key: "confirm",
          value: function confirm(title) {
            var confirmButtonText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Yes';
            var denyButtonText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'No';
            var isCancelButton = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              title: title,
              showDenyButton: denyButtonText ? true : false,
              showCancelButton: isCancelButton,
              confirmButtonText: confirmButtonText,
              denyButtonText: denyButtonText
            });
          }
        }, {
          key: "notification",
          value: function notification(title) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              icon: type,
              title: title,
              html: detail,
              showConfirmButton: false,
              timer: 1500
            });
          }
        }]);

        return _MessageService;
      }();

      _MessageService.ɵfac = function MessageService_Factory(t) {
        return new (t || _MessageService)();
      };

      _MessageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _MessageService,
        factory: _MessageService.ɵfac
      });
      /***/
    },

    /***/
    96190:
    /*!***********************************************************!*\
      !*** ./src/app/lib/data/services/pipe/vnd-format.pipe.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VndFormatPipe": function VndFormatPipe() {
          return (
            /* binding */
            _VndFormatPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _VndFormatPipe = /*#__PURE__*/function () {
        function _VndFormatPipe() {
          _classCallCheck(this, _VndFormatPipe);
        }

        _createClass(_VndFormatPipe, [{
          key: "transform",
          value: function transform(value) {
            return value === null || value === undefined || !this.isNumeric(value) ? '' : this.numberWithCommas(value.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND'
            }));
          }
        }, {
          key: "isNumeric",
          value: function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
          }
        }, {
          key: "numberWithCommas",
          value: function numberWithCommas(n) {
            var val = n;
            var correctFormat = val.toString().replace(/\./g, ',');
            return correctFormat;
          }
        }]);

        return _VndFormatPipe;
      }();

      _VndFormatPipe.ɵfac = function VndFormatPipe_Factory(t) {
        return new (t || _VndFormatPipe)();
      };

      _VndFormatPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "vndFormat",
        type: _VndFormatPipe,
        pure: true
      });
      /***/
    },

    /***/
    22197:
    /*!***************************************************************!*\
      !*** ./src/app/lib/data/services/products/product.service.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductService": function ProductService() {
          return (
            /* binding */
            _ProductService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/http/http-client */
      8403);

      var _ProductService = /*#__PURE__*/function () {
        function _ProductService(httpClient) {
          _classCallCheck(this, _ProductService);

          this.httpClient = httpClient;
          this.url = '/api/product';
        }

        _createClass(_ProductService, [{
          key: "get",
          value: function get(request) {
            return this.httpClient.getObservable(this.url, request).toPromise();
          }
        }, {
          key: "create",
          value: function create(model) {
            return this.httpClient.postObservable(this.url, model).toPromise();
          }
        }, {
          key: "update",
          value: function update(model) {
            return this.httpClient.putObservable(this.url, model).toPromise();
          }
        }, {
          key: "delete",
          value: function _delete(model) {
            var url = "".concat(this.url, "?Id=").concat(model === null || model === void 0 ? void 0 : model.id);
            return this.httpClient.deleteObservable(url).toPromise();
          }
        }, {
          key: "save",
          value: function save(model) {
            // console.log(model)
            if (model.id) {
              return this.update(model);
            }

            return this.create(model);
          }
        }]);

        return _ProductService;
      }();

      _ProductService.ɵfac = function ProductService_Factory(t) {
        return new (t || _ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__.HttpClientService));
      };

      _ProductService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ProductService,
        factory: _ProductService.ɵfac
      });
      /***/
    },

    /***/
    47133:
    /*!***************************************************************!*\
      !*** ./src/app/lib/data/services/profiles/profile.service.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileService": function ProfileService() {
          return (
            /* binding */
            _ProfileService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/http/http-client */
      8403);

      var _ProfileService = /*#__PURE__*/function () {
        function _ProfileService(httpClient) {
          _classCallCheck(this, _ProfileService);

          this.httpClient = httpClient;
          this.url = '/api/profile';
        }

        _createClass(_ProfileService, [{
          key: "update",
          value: function update(model) {
            return this.httpClient.putSync(this.url, model);
          }
        }, {
          key: "changePassword",
          value: function changePassword(model) {
            return this.httpClient.putSync(this.url + "/password", model);
          }
        }]);

        return _ProfileService;
      }();

      _ProfileService.ɵfac = function ProfileService_Factory(t) {
        return new (t || _ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__.HttpClientService));
      };

      _ProfileService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ProfileService,
        factory: _ProfileService.ɵfac
      });
      /***/
    },

    /***/
    49493:
    /*!************************************************************************!*\
      !*** ./src/app/lib/data/services/social-media/social-media.service.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SocialMediaService": function SocialMediaService() {
          return (
            /* binding */
            _SocialMediaService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/http/http-client */
      8403);

      var _SocialMediaService = /*#__PURE__*/function () {
        function _SocialMediaService(httpClient) {
          _classCallCheck(this, _SocialMediaService);

          this.httpClient = httpClient;
          this.url = '/api/social-media';
        }

        _createClass(_SocialMediaService, [{
          key: "get",
          value: function get(request) {
            return this.httpClient.getObservable(this.url, request).toPromise();
          }
        }, {
          key: "create",
          value: function create(model) {
            return this.httpClient.postObservable(this.url, model).toPromise();
          }
        }, {
          key: "update",
          value: function update(model) {
            return this.httpClient.putObservable(this.url, model).toPromise();
          }
        }, {
          key: "delete",
          value: function _delete(model) {
            var url = "".concat(this.url, "/?id=").concat(model === null || model === void 0 ? void 0 : model.id);
            return this.httpClient.deleteObservable(url).toPromise();
          }
        }, {
          key: "save",
          value: function save(model) {
            if (model.id) {
              return this.update(model);
            }

            return this.create(model);
          }
        }]);

        return _SocialMediaService;
      }();

      _SocialMediaService.ɵfac = function SocialMediaService_Factory(t) {
        return new (t || _SocialMediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__.HttpClientService));
      };

      _SocialMediaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _SocialMediaService,
        factory: _SocialMediaService.ɵfac
      });
      /***/
    },

    /***/
    85738:
    /*!*****************************************************************!*\
      !*** ./src/app/lib/data/services/suppliers/supplier.service.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      var SuppliersService = /*#__PURE__*/function () {
        function SuppliersService(httpClient) {
          _classCallCheck(this, SuppliersService);

          this.httpClient = httpClient;
          this.url = '/api/supplier';
        }

        _createClass(SuppliersService, [{
          key: "get",
          value: function get(request) {
            return this.httpClient.getObservable(this.url, request).toPromise();
          }
        }, {
          key: "create",
          value: function create(model) {
            return this.httpClient.postObservable(this.url, model).toPromise();
          }
        }, {
          key: "update",
          value: function update(model) {
            return this.httpClient.putObservable(this.url, model).toPromise();
          }
        }, {
          key: "delete",
          value: function _delete(model) {
            var url = "".concat(this.url, "/").concat(model === null || model === void 0 ? void 0 : model.id);
            return this.httpClient.deleteObservable(url).toPromise();
          }
        }]);

        return SuppliersService;
      }();
      /***/

    },

    /***/
    63249:
    /*!******************************************************!*\
      !*** ./src/app/lib/environments/config/appConfig.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppConfig": function AppConfig() {
          return (
            /* binding */
            _AppConfig
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../environment */
      91477);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _AppConfig = /*#__PURE__*/function () {
        function _AppConfig(http) {
          _classCallCheck(this, _AppConfig);

          this.http = http;
        }

        _createClass(_AppConfig, [{
          key: "load",
          value: function load() {
            var _this6 = this;

            var jsonFile = "assets/env/config.".concat(_environment__WEBPACK_IMPORTED_MODULE_0__.environment.name, ".json");
            return new Promise(function (resolve, reject) {
              _this6.http.get(jsonFile).toPromise().then(function (response) {
                if (response.Data) {
                  response = JSON.parse(response);
                }

                _AppConfig.settings = response;
                resolve();
              })["catch"](function (response) {
                reject("Could not load file '".concat(jsonFile, "': ").concat(JSON.stringify(response)));
              });
            });
          }
        }]);

        return _AppConfig;
      }();

      _AppConfig.ɵfac = function AppConfig_Factory(t) {
        return new (t || _AppConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _AppConfig.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AppConfig,
        factory: _AppConfig.ɵfac
      });
      /***/
    },

    /***/
    91477:
    /*!*************************************************!*\
      !*** ./src/app/lib/environments/environment.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        name: 'dev',
        production: false,
        iswithCredentials: true,
        host: 'https://localhost:44309',
        client: 'https://localhost:44309'
      };
      /***/
    },

    /***/
    44297:
    /*!******************************************!*\
      !*** ./src/app/lib/guards/auth.guard.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuardsAdminService": function AuthGuardsAdminService() {
          return (
            /* binding */
            _AuthGuardsAdminService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../helpers */
      7018);
      /* harmony import */


      var _data_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../data/services */
      19764);
      /* harmony import */


      var _data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../data/services/messages/message.service */
      20985);

      var _AuthGuardsAdminService = /*#__PURE__*/function () {
        function _AuthGuardsAdminService(router, routerHelperService, authService, messageService) {
          _classCallCheck(this, _AuthGuardsAdminService);

          this.router = router;
          this.routerHelperService = routerHelperService;
          this.authService = authService;
          this.messageService = messageService;
        }

        _createClass(_AuthGuardsAdminService, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var token = localStorage.getItem('token');
            var user = JSON.parse(localStorage.getItem('user') || null);
            this.authService.changeUserInfo(user);
            route.data = {
              token: token,
              user: user
            };

            if (token && Object.keys(token).length !== 0) {
              var url = this.getStateUrl(route, state.url);
              return true;
            }

            return this.routerHelperService.redirectToLogin();
          }
        }, {
          key: "canActivateChild",
          value: function canActivateChild(route, state) {
            var user = route.data;

            if (user) {
              var url = this.getStateUrl(route, state.url);
              return true;
            }

            return this.canActivate(route, state);
          }
        }, {
          key: "getStateUrl",
          value: function getStateUrl(route, url) {
            var configPath = route.routeConfig.path;

            if (!configPath) {
              return configPath;
            }

            var pathConfig = route.routeConfig.path.split('/:');

            if (pathConfig.length) {
              var path = pathConfig[0];
              var index = url.indexOf(path);
              index += path.length;
              var finalUrl = url.substr(0, index);
              return finalUrl;
            }
          }
        }, {
          key: "canLoad",
          value: function canLoad(route) {
            var url = "/".concat(route.path);
          }
        }]);

        return _AuthGuardsAdminService;
      }();

      _AuthGuardsAdminService.ɵfac = function AuthGuardsAdminService_Factory(t) {
        return new (t || _AuthGuardsAdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_helpers__WEBPACK_IMPORTED_MODULE_0__.RouterHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_data_services__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService));
      };

      _AuthGuardsAdminService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _AuthGuardsAdminService,
        factory: _AuthGuardsAdminService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    7018:
    /*!**************************************!*\
      !*** ./src/app/lib/helpers/index.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RouterHelperService": function RouterHelperService() {
          return (
            /* reexport safe */
            _router_helper__WEBPACK_IMPORTED_MODULE_0__.RouterHelperService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _router_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./router.helper */
      60267); // start:ng42.barrel
      // end:ng42.barrel

      /***/

    },

    /***/
    60267:
    /*!**********************************************!*\
      !*** ./src/app/lib/helpers/router.helper.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RouterHelperService": function RouterHelperService() {
          return (
            /* binding */
            _RouterHelperService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _data_models_common_router_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/models/common/router-info.model */
      51547);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _RouterHelperService = /*#__PURE__*/function () {
        function _RouterHelperService(router) {
          var _this7 = this;

          _classCallCheck(this, _RouterHelperService);

          this.router = router;
          this.previousUrl = undefined;
          this.currentUrl = undefined;
          this.eventRouter = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.routerInfo = new _data_models_common_router_info_model__WEBPACK_IMPORTED_MODULE_0__.RouterInfoModel();
          this.currentUrl = this.router.url;
          router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
              _this7.currentRouter = event;
              _this7.routerInfo.previousUrl = _this7.currentUrl;
              _this7.routerInfo.currentUrl = event.url;

              _this7.eventRouter.next(_this7.routerInfo);
            }
          });
        }

        _createClass(_RouterHelperService, [{
          key: "getPreviousUrl",
          get: function get() {
            return this.previousUrl;
          }
        }, {
          key: "checkCurrentPage",
          value: function checkCurrentPage(path) {
            var url = location.pathname;

            if (url.indexOf(path) !== -1) {
              return true;
            }

            return false;
          }
        }, {
          key: "redirectToLogin",
          value: function redirectToLogin() {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            var returnUrl = "";

            if (window.location.pathname.length !== 0) {
              returnUrl = "".concat(window.location.pathname).concat(encodeURIComponent(window.location.search));
            }

            if (returnUrl) {
              this.router.navigate(["/login"], {
                queryParams: {
                  returnUrl: returnUrl
                },
                queryParamsHandling: 'merge'
              });
            } else {
              this.router.navigate(["/login"]);
            }
          }
        }]);

        return _RouterHelperService;
      }();

      _RouterHelperService.ɵfac = function RouterHelperService_Factory(t) {
        return new (t || _RouterHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };

      _RouterHelperService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _RouterHelperService,
        factory: _RouterHelperService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    8403:
    /*!*****************************************!*\
      !*** ./src/app/lib/http/http-client.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpClientService": function HttpClientService() {
          return (
            /* binding */
            _HttpClientService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../environments/environment */
      91477);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var _environments_config_appConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../environments/config/appConfig */
      63249);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../helpers */
      7018);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);

      var _HttpClientService = /*#__PURE__*/function () {
        function _HttpClientService(http, routerHelperService, location, activeModal, baseUrl) {
          _classCallCheck(this, _HttpClientService);

          this.http = http;
          this.routerHelperService = routerHelperService;
          this.location = location;
          this.activeModal = activeModal;
          this.baseUrl = baseUrl;
          _environments_config_appConfig__WEBPACK_IMPORTED_MODULE_1__.AppConfig.settings.API_URL = baseUrl;
        }

        _createClass(_HttpClientService, [{
          key: "handleError",
          value: function handleError(err) {
            if (err) {
              if (err.status === 401) {
                this.activeModal.dismissAll();

                if (window.location.pathname === '/login') {
                  return;
                }

                this.routerHelperService.redirectToLogin();
              } else if (err.status === 403) {}
            }

            return err;
          }
        }, {
          key: "getHeader",
          value: function getHeader(param) {
            var isSetToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
            headers = headers.append('Access-Control-Allow-Origin', _environments_config_appConfig__WEBPACK_IMPORTED_MODULE_1__.AppConfig.settings.API_URL);

            if (param && param.headers) {
              // headers = param.headers;
              var listKeys = Object.keys(param.headers).map(function (key) {
                return {
                  name: key,
                  value: param.headers[key]
                };
              });
              listKeys.forEach(function (item) {
                headers = headers.append(item.name, item.value);
              });
            }

            var authToken = {
              token: localStorage.getItem('token')
            };

            if (authToken && authToken.token && isSetToken) {
              headers = headers.append('Authorization', "Bearer ".concat(authToken.token) || '');
            }

            var httpOptions = {
              headers: headers
            };

            if (param) {
              if (param.params) {
                var ignores = param.params.ignores || [];
                var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();

                var _listKeys = Object.keys(param.params).map(function (key) {
                  return {
                    name: key,
                    value: param.params[key]
                  };
                });

                var queryParamsString = '';

                _listKeys.forEach(function (item) {
                  if (item.name !== 'isGenerate' && item.name !== 'ignores') {
                    var check = ignores.find(function (x) {
                      return x === item.name;
                    });

                    if (item.value === null || item.value === undefined) {
                      item.value = '';
                    }

                    params = params.append(item.name, item.value);

                    if (item.value !== undefined && item.value !== null && !check) {
                      if (queryParamsString !== '') {
                        queryParamsString += '&';
                      }

                      queryParamsString += item.name + '=' + encodeURIComponent(item.value);
                    }
                  }
                }); // console.log(params);


                httpOptions = Object.assign(Object.assign({}, httpOptions), {
                  params: params
                });

                if (param.params.isGenerate) {
                  this.location.replaceState(window.location.pathname + '?' + queryParamsString);
                }
              }

              if (param.options) {
                httpOptions = Object.assign(Object.assign({}, httpOptions), param.options);
              }
            }

            return httpOptions;
          }
        }, {
          key: "setUserInfo",
          value: function setUserInfo(data) {
            var isPost = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (data) {// const authToken = SecurityHelper.getStoreAuthen();
              // if (authToken && authToken.user) {
              //   data.userId = authToken.user.id;
              //   if (isPost) {
              //     data.createdBy = authToken.user.id;
              //   } else {
              //     data.updateBy = authToken.user.id;
              //   }
              // }
            }
          }
        }, {
          key: "getSync",
          value: function getSync(apiUrl, params) {
            var _this8 = this;

            var url = this.getFullUrl(apiUrl);
            return new Promise(function (resolve, reject) {
              var options = _this8.getHeader(params);

              _this8.http.get(url, Object.assign(Object.assign({}, options), {
                withCredentials: true
              })).subscribe(function (res) {
                if (res && res.data && res.roles) {
                  res = res.data;
                }

                resolve(res);
              }, function (error) {
                if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
                  _this8.handleError(error);
                } else {
                  reject(_this8.handleError(error));
                }
              });
            });
          }
        }, {
          key: "deleteSync",
          value: function deleteSync(apiUrl, params) {
            var _this9 = this;

            var url = this.getFullUrl(apiUrl);
            return new Promise(function (resolve, reject) {
              _this9.http["delete"](url, _this9.getHeader(params)).subscribe(function (res) {
                resolve(res);
              }, function (error) {
                if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
                  _this9.handleError(error);
                } else {
                  reject(_this9.handleError(error));
                }
              });
            });
          }
        }, {
          key: "postSync",
          value: function postSync(apiUrl, data) {
            var _this10 = this;

            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var isOption = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var url = this.getFullUrl(apiUrl);

            if (!isOption) {
              this.setUserInfo(params);
            }

            return new Promise(function (resolve, reject) {
              _this10.http.post(url, data, _this10.getHeader(params)).subscribe(function (res) {
                resolve(res);
              }, function (error) {
                if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
                  _this10.handleError(error);
                } else {
                  reject(_this10.handleError(error));
                }
              });
            });
          }
        }, {
          key: "putSync",
          value: function putSync(apiUrl, data, params) {
            var isOption = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this11 = this;

              var url;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    url = this.getFullUrl(apiUrl);

                    if (!isOption) {
                      this.setUserInfo(params);
                    }

                    return _context4.abrupt("return", new Promise(function (resolve, reject) {
                      _this11.http.put(url, data, _this11.getHeader(params)).subscribe(function (res) {
                        resolve(res);
                      }, function (error) {
                        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
                          _this11.handleError(error);
                        } else {
                          reject(_this11.handleError(error));
                        }
                      });
                    }));

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "get",
          value: function get(apiUrl, params) {
            var url = this.getFullUrl(apiUrl);
            return this.http.get(url, this.getHeader(params)).toPromise();
          }
        }, {
          key: "delete",
          value: function _delete(apiUrl, params) {
            var url = this.getFullUrl(apiUrl);
            return this.http["delete"](url, this.getHeader(params)).toPromise();
          }
        }, {
          key: "post",
          value: function post(apiUrl, data) {
            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var url = this.getFullUrl(apiUrl);
            this.setUserInfo(params);
            return this.http.post(url, data, this.getHeader(params)).toPromise();
          }
        }, {
          key: "put",
          value: function put(apiUrl, data) {
            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var url = this.getFullUrl(apiUrl);
            this.setUserInfo(params);
            return this.http.put(url, data, this.getHeader(params)).toPromise();
          }
        }, {
          key: "getObservable",
          value: function getObservable(apiUrl) {
            var _this12 = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var isLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var url = this.getFullUrl(apiUrl);
            var httpOptions = this.getHeader(params);
            httpOptions = this.getLoadingHeader(isLoading, httpOptions);
            return this.http.get(url, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function (m) {
              return _this12.mappingDataResponse(m);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(function (response) {
              _this12.handleErrorObservable(response);

              throw response;
            }));
          }
        }, {
          key: "postObservable",
          value: function postObservable(apiUrl) {
            var _this13 = this;

            var request = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var isLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var url = this.getFullUrl(apiUrl);
            var httpOptions = this.getHeader();
            httpOptions = this.getLoadingHeader(isLoading, httpOptions);
            return this.http.post(url, request, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function (m) {
              return _this13.mappingDataResponse(m);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(function (response) {
              _this13.handleErrorObservable(response);

              throw response;
            }));
          }
        }, {
          key: "putObservable",
          value: function putObservable(apiUrl, request) {
            var _this14 = this;

            var isLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var url = this.getFullUrl(apiUrl);
            var httpOptions = this.getHeader();
            httpOptions = this.getLoadingHeader(isLoading, httpOptions);
            return this.http.put(url, request, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function (m) {
              return _this14.mappingDataResponse(m);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(function (response) {
              _this14.handleErrorObservable(response);

              throw response;
            }));
          }
        }, {
          key: "deleteObservable",
          value: function deleteObservable(apiUrl) {
            var _this15 = this;

            var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var url = this.getFullUrl(apiUrl);
            var httpOptions = this.getHeader();
            httpOptions = this.getLoadingHeader(isLoading, httpOptions);
            return this.http["delete"](url, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function (m) {
              return _this15.mappingDataResponse(m);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(function (response) {
              _this15.handleErrorObservable(response);

              throw response;
            }));
          }
        }, {
          key: "getFullUrl",
          value: function getFullUrl(url) {
            // console.log(AppConfig.settings.API_URL);
            return "".concat(_environments_config_appConfig__WEBPACK_IMPORTED_MODULE_1__.AppConfig.settings.API_URL).concat(url);
          }
        }, {
          key: "getLoadingHeader",
          value: function getLoadingHeader(isLoading, httpOptions) {
            if (isLoading) {
              return httpOptions;
            }

            var newHeader = httpOptions.headers.append('IsLoading', 'false');
            httpOptions = Object.assign(Object.assign({}, httpOptions), {
              headers: newHeader
            });
            return httpOptions;
          }
        }, {
          key: "handleErrorObservable",
          value: function handleErrorObservable(response) {
            if (response.status === 401) {
              this.activeModal.dismissAll();

              if (window.location.pathname === '/login') {
                return;
              }

              this.routerHelperService.redirectToLogin();
            } else if (response.status === 403) {// if (SecurityHelper.isLogin) {
              //   Toastr.warning('Please make sure you have right access');
              //   return;
              // }
            }
          }
        }, {
          key: "mappingDataResponse",
          value: function mappingDataResponse(response) {
            if ((response === null || response === void 0 ? void 0 : response.id) < 0) {
              throw response;
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(response);
          }
        }]);

        return _HttpClientService;
      }();

      _HttpClientService.ɵfac = function HttpClientService_Factory(t) {
        return new (t || _HttpClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_helpers__WEBPACK_IMPORTED_MODULE_2__.RouterHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"]('BASE_URL'));
      };

      _HttpClientService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
        token: _HttpClientService,
        factory: _HttpClientService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    41299:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BreadcrumbComponent": function BreadcrumbComponent() {
          return (
            /* binding */
            _BreadcrumbComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/internal/operators */
      68470);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function BreadcrumbComponent_li_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.breadcrumbs == null ? null : ctx_r0.breadcrumbs.parentBreadcrumb, " ");
        }
      }

      function BreadcrumbComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.breadcrumbs == null ? null : ctx_r1.breadcrumbs.childBreadcrumb, " ");
        }
      }

      var _BreadcrumbComponent = /*#__PURE__*/function () {
        function _BreadcrumbComponent(activatedRoute, router) {
          var _this16 = this;

          _classCallCheck(this, _BreadcrumbComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd;
          })).pipe((0, rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function () {
            return _this16.activatedRoute;
          })).pipe((0, rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (route) {
            while (route.firstChild) {
              route = route.firstChild;
            }

            return route;
          })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(function (route) {
            return route.outlet === _angular_router__WEBPACK_IMPORTED_MODULE_3__.PRIMARY_OUTLET;
          })).subscribe(function (route) {
            var snapshot = _this16.router.routerState.snapshot;
            var title = route.snapshot.data['title'];
            var parent = route.parent.snapshot.data['breadcrumb'];
            var child = route.snapshot.data['breadcrumb'];
            _this16.breadcrumbs = {};
            _this16.title = title;
            _this16.breadcrumbs = {
              "parentBreadcrumb": parent,
              "childBreadcrumb": child
            };
          });
        }

        _createClass(_BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }]);

        return _BreadcrumbComponent;
      }();

      _BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || _BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _BreadcrumbComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _BreadcrumbComponent,
        selectors: [["app-breadcrumb"]],
        inputs: {
          breadcrumbs: "breadcrumbs",
          title: "title"
        },
        decls: 16,
        vars: 5,
        consts: [[1, "container-fluid"], [1, "page-header"], [1, "row"], [1, "col-lg-6"], [1, "page-header-left"], [1, "breadcrumb", "pull-right"], [1, "breadcrumb-item"], [3, "routerLink"], [3, "icon"], ["class", "breadcrumb-item", 4, "ngIf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item", "active"]],
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Admin panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ol", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-feather-icons", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BreadcrumbComponent_li_14_Template, 2, 1, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, BreadcrumbComponent_li_15_Template, 2, 1, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.breadcrumbs == null ? null : ctx.breadcrumbs.parentBreadcrumb);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.breadcrumbs == null ? null : ctx.breadcrumbs.childBreadcrumb);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    58676:
    /*!************************************************************************************************!*\
      !*** ./src/app/shared/components/custom-view-cell-number/custom-view-cell-number.component.ts ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomViewCellNumberComponent": function CustomViewCellNumberComponent() {
          return (
            /* binding */
            _CustomViewCellNumberComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _lib_data_services_pipe_vnd_format_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../lib/data/services/pipe/vnd-format.pipe */
      96190);

      var _CustomViewCellNumberComponent = /*#__PURE__*/function () {
        function _CustomViewCellNumberComponent() {
          _classCallCheck(this, _CustomViewCellNumberComponent);
        }

        _createClass(_CustomViewCellNumberComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _CustomViewCellNumberComponent;
      }();

      _CustomViewCellNumberComponent.ɵfac = function CustomViewCellNumberComponent_Factory(t) {
        return new (t || _CustomViewCellNumberComponent)();
      };

      _CustomViewCellNumberComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CustomViewCellNumberComponent,
        selectors: [["app-custom-view-cell-number"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        decls: 3,
        vars: 3,
        consts: [[1, "text-right"]],
        template: function CustomViewCellNumberComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "vndFormat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.value));
          }
        },
        pipes: [_lib_data_services_pipe_vnd_format_pipe__WEBPACK_IMPORTED_MODULE_0__.VndFormatPipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tdmlldy1jZWxsLW51bWJlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    59314:
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/customViewCell/customViewCell.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomViewCellComponent": function CustomViewCellComponent() {
          return (
            /* binding */
            _CustomViewCellComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _CustomViewCellComponent = /*#__PURE__*/function () {
        function _CustomViewCellComponent() {
          _classCallCheck(this, _CustomViewCellComponent);
        }

        _createClass(_CustomViewCellComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _CustomViewCellComponent;
      }();

      _CustomViewCellComponent.ɵfac = function CustomViewCellComponent_Factory(t) {
        return new (t || _CustomViewCellComponent)();
      };

      _CustomViewCellComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CustomViewCellComponent,
        selectors: [["app-customViewCell"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "text-right"]],
        template: function CustomViewCellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21WaWV3Q2VsbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    61676:
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/feather-icons/feather-icons.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FeatherIconsComponent": function FeatherIconsComponent() {
          return (
            /* binding */
            _FeatherIconsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! feather-icons */
      38789);
      /* harmony import */


      var feather_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FeatherIconsComponent = /*#__PURE__*/function () {
        function _FeatherIconsComponent() {
          _classCallCheck(this, _FeatherIconsComponent);
        }

        _createClass(_FeatherIconsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            setTimeout(function () {
              feather_icons__WEBPACK_IMPORTED_MODULE_0__.replace();
            });
          }
        }]);

        return _FeatherIconsComponent;
      }();

      _FeatherIconsComponent.ɵfac = function FeatherIconsComponent_Factory(t) {
        return new (t || _FeatherIconsComponent)();
      };

      _FeatherIconsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _FeatherIconsComponent,
        selectors: [["app-feather-icons"]],
        inputs: {
          icon: "icon"
        },
        decls: 1,
        vars: 1,
        template: function FeatherIconsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-feather", ctx.icon);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0aGVyLWljb25zLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    66526:
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/footer/footer.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent() {
          _classCallCheck(this, _FooterComponent);
        }

        _createClass(_FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FooterComponent;
      }();

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)();
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["app-footer"]],
        decls: 9,
        vars: 0,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-6", "footer-copyright"], [1, "mb-0"], [1, "col-md-6"], [1, "pull-right", "mb-0"], [1, "fa", "fa-heart"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Copyright 2021 \xA9 Restaff All rights reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hand crafted & made with");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36290:
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/header/header.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_lib_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/environments/environment */
      91477);
      /* harmony import */


      var _service_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/nav.service */
      21442);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/lib/data/services */
      19764);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../directives/fullscreen.directive */
      61301);
      /* harmony import */


      var _directives_uiImageLoader_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../directives/uiImageLoader.directive */
      59578);

      var _c0 = function _c0(a0) {
        return {
          open: a0
        };
      };

      var _HeaderComponent = /*#__PURE__*/function () {
        function _HeaderComponent(navServices, router, activedRoute, authService) {
          _classCallCheck(this, _HeaderComponent);

          this.navServices = navServices;
          this.router = router;
          this.activedRoute = activedRoute;
          this.authService = authService;
          this.right_sidebar = false;
          this.open = false;
          this.openNav = false;
          this.rightSidebarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        }

        _createClass(_HeaderComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.entrySub) {
              this.entrySub.unsubscribe();
              this.entrySub = null;
            }
          }
        }, {
          key: "collapseSidebar",
          value: function collapseSidebar() {
            this.open = !this.open;
            this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
          }
        }, {
          key: "right_side_bar",
          value: function right_side_bar() {
            this.right_sidebar = !this.right_sidebar;
            this.rightSidebarEvent.emit(this.right_sidebar);
          }
        }, {
          key: "openMobileNav",
          value: function openMobileNav() {
            this.openNav = !this.openNav;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.authService.callUserInfo.subscribe(function (it) {
              return _this17.userInfo = it;
            });
          }
        }, {
          key: "onLogout",
          value: function onLogout() {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            this.router.navigateByUrl('/login');
          }
        }, {
          key: "openClient",
          value: function openClient() {
            window.open(src_app_lib_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.client, '_blank').focus();
          }
        }]);

        return _HeaderComponent;
      }();

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_nav_service__WEBPACK_IMPORTED_MODULE_1__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_2__.AuthService));
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-header"]],
        outputs: {
          rightSidebarEvent: "rightSidebarEvent"
        },
        decls: 36,
        vars: 13,
        consts: [[1, "page-main-header"], [1, "main-header-right", "row"], [1, "main-header-left", "d-lg-none"], [1, "logo-wrapper"], [3, "routerLink"], ["src", "assets/images/dashboard/multikart-logo.png", "alt", "", 1, "blur-up", "lazyloaded"], [1, "mobile-sidebar"], [1, "media-body", "text-right", "switch-sm"], [1, "switch"], ["id", "sidebar-toggle", 2, "cursor", "pointer", 3, "icon", "click"], [1, "nav-right", "col"], [1, "nav-menus", 3, "ngClass"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["href", "javascript:void(0)", "toggleFullscreen", "", 1, "text-dark"], [3, "icon"], [1, "onhover-dropdown"], [1, "media", "align-items-center"], ["appUiImageLoader", "", "height", "50", "width", "50", "alt", "header-user", 1, "align-self-center", "pull-right", "img-50", "rounded-circle", 3, "src"], [1, "dotted-animation"], [1, "animate-circle"], [1, "main-circle"], [1, "profile-dropdown", "onhover-show-div", "p-20", "profile-dropdown-hover"], [3, "click"], [1, "d-lg-none", "mobile-toggle", "pull-right", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "app-feather-icons", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Template_app_feather_icons_click_10_listener() {
              return ctx.collapseSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_14_listener() {
              return ctx.openClient();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "client");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "app-feather-icons", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ul", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "app-feather-icons", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Edit Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_31_listener() {
              return ctx.onLogout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "app-feather-icons", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Logout ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_34_listener() {
              return ctx.openMobileNav();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "app-feather-icons", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("open", ctx.open);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", "/dashboard/default");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "align-left");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](11, _c0, ctx.openNav));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "maximize-2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx.userInfo == null ? null : ctx.userInfo.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", "profiles/profile-settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "user");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "log-out");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "more-horizontal");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_4__.ToggleFullscreenDirective, _directives_uiImageLoader_directive__WEBPACK_IMPORTED_MODULE_5__.UiImageLoaderDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36711:
    /*!*********************************************************************************!*\
      !*** ./src/app/shared/components/modals/modal-footer/modal-footer.component.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalFooterComponent": function ModalFooterComponent() {
          return (
            /* binding */
            _ModalFooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _models_modal_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/modal.model */
      5383);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ModalFooterComponent_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalFooterComponent_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.action();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.data == null ? null : ctx_r0.data.title, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          backgroundColor: a0
        };
      };

      function ModalFooterComponent_ng_container_2_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalFooterComponent_ng_container_2_button_1_Template_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var button_r5 = restoredCtx.$implicit;
            return button_r5.onAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var button_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, button_r5.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](button_r5.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", button_r5.title, " ");
        }
      }

      function ModalFooterComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalFooterComponent_ng_container_2_button_1_Template, 2, 7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.data == null ? null : ctx_r1.data.buttons);
        }
      }

      var _ModalFooterComponent = /*#__PURE__*/function () {
        function _ModalFooterComponent() {
          _classCallCheck(this, _ModalFooterComponent);

          this.data = new _models_modal_model__WEBPACK_IMPORTED_MODULE_0__.ModalFooterModel();
          this.onAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_ModalFooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "action",
          value: function action() {
            this.onAction.emit("ok");
          }
        }]);

        return _ModalFooterComponent;
      }();

      _ModalFooterComponent.ɵfac = function ModalFooterComponent_Factory(t) {
        return new (t || _ModalFooterComponent)();
      };

      _ModalFooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ModalFooterComponent,
        selectors: [["app-modal-footer"]],
        inputs: {
          data: "data"
        },
        outputs: {
          onAction: "onAction"
        },
        decls: 3,
        vars: 2,
        consts: [[1, "modal-footer"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 3, "style", "class", "click", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"]],
        template: function ModalFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalFooterComponent_button_1_Template, 2, 1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModalFooterComponent_ng_container_2_Template, 2, 1, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.data == null ? null : ctx.data.buttons));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.buttons);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    71279:
    /*!*********************************************************************************!*\
      !*** ./src/app/shared/components/modals/modal-header/modal-header.component.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalHeaderComponent": function ModalHeaderComponent() {
          return (
            /* binding */
            _ModalHeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _models_modal_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/modal.model */
      5383);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _c0 = function _c0() {
        return {
          "text-transform": "none"
        };
      };

      var _ModalHeaderComponent = /*#__PURE__*/function () {
        function _ModalHeaderComponent() {
          _classCallCheck(this, _ModalHeaderComponent);

          this.data = new _models_modal_model__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModel();
          this.onAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_ModalHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "action",
          value: function action() {
            this.onAction.emit("ok");
          }
        }]);

        return _ModalHeaderComponent;
      }();

      _ModalHeaderComponent.ɵfac = function ModalHeaderComponent_Factory(t) {
        return new (t || _ModalHeaderComponent)();
      };

      _ModalHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ModalHeaderComponent,
        selectors: [["app-modal-header"]],
        inputs: {
          data: "data"
        },
        outputs: {
          onAction: "onAction"
        },
        decls: 6,
        vars: 3,
        consts: [[1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title", 3, "ngStyle"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]],
        template: function ModalHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalHeaderComponent_Template_button_click_3_listener() {
              return ctx.action();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.title, " ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    5383:
    /*!****************************************************************!*\
      !*** ./src/app/shared/components/modals/models/modal.model.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalHeaderModel": function ModalHeaderModel() {
          return (
            /* binding */
            _ModalHeaderModel
          );
        },

        /* harmony export */
        "ModalFooterModel": function ModalFooterModel() {
          return (
            /* binding */
            _ModalFooterModel
          );
        },

        /* harmony export */
        "ModalButtonModel": function ModalButtonModel() {
          return (
            /* binding */
            _ModalButtonModel
          );
        },

        /* harmony export */
        "ModalFile": function ModalFile() {
          return (
            /* binding */
            _ModalFile
          );
        },

        /* harmony export */
        "TypeFile": function TypeFile() {
          return (
            /* binding */
            _TypeFile
          );
        },

        /* harmony export */
        "EntityType": function EntityType() {
          return (
            /* binding */
            _EntityType
          );
        }
        /* harmony export */

      });

      var _ModalHeaderModel = /*#__PURE__*/_createClass(function _ModalHeaderModel() {
        _classCallCheck(this, _ModalHeaderModel);

        this.title = '';
        this.color = '';
      });

      var _ModalFooterModel = /*#__PURE__*/_createClass(function _ModalFooterModel() {
        _classCallCheck(this, _ModalFooterModel);

        this.title = '';
        this.color = '';
      });

      var _ModalButtonModel = /*#__PURE__*/_createClass(function _ModalButtonModel() {
        _classCallCheck(this, _ModalButtonModel);

        this.title = '';
        this.color = '';
      });

      var _ModalFile = /*#__PURE__*/_createClass(function _ModalFile() {
        _classCallCheck(this, _ModalFile);

        this.enityId = '';
      });

      var _TypeFile;

      (function (TypeFile) {
        TypeFile["IMAGE"] = ".jpg, .jpeg, .png, .icon";
        TypeFile["FILE"] = ".jpg, .jpeg, .png, .icon, .doc, .docx, .xls, .xlsx, .pdf, .pptx, .ppt, .txt";
      })(_TypeFile || (_TypeFile = {}));

      var _EntityType;

      (function (EntityType) {
        EntityType["BANNER"] = "banner";
        EntityType["CATEGORY"] = "category";
        EntityType["FILE"] = "file";
        EntityType["PRODUCT"] = "product";
        EntityType["SOCIALMEDIA"] = "socialmedia";
        EntityType["USER"] = "user";
        EntityType["BLOG"] = "blog";
      })(_EntityType || (_EntityType = {}));
      /***/

    },

    /***/
    46913:
    /*!**************************************************************************************!*\
      !*** ./src/app/shared/components/paging-server-view/paging-server-view.component.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PagingServerViewComponent": function PagingServerViewComponent() {
          return (
            /* binding */
            _PagingServerViewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! lodash */
      202);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function PagingServerViewComponent_ng_container_16_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r1, " ");
        }
      }

      function PagingServerViewComponent_ng_container_16_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PagingServerViewComponent_ng_container_16_li_2_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.onPageIndexChange(item_r1 - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1);
        }
      }

      function PagingServerViewComponent_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PagingServerViewComponent_ng_container_16_li_1_Template, 5, 1, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PagingServerViewComponent_ng_container_16_li_2_Template, 3, 1, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1 == (ctx_r0.data == null ? null : ctx_r0.data.pageIndex) + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1 != (ctx_r0.data == null ? null : ctx_r0.data.pageIndex) + 1);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          disabled: a0
        };
      };

      var _PagingServerViewComponent = /*#__PURE__*/function () {
        function _PagingServerViewComponent() {
          _classCallCheck(this, _PagingServerViewComponent);

          this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_PagingServerViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "pagelist",
          get: function get() {
            if (!this.data) {
              return [];
            }

            if (this.data.totalPage < 5) {
              return (0, lodash__WEBPACK_IMPORTED_MODULE_0__.range)(1, this.data.totalPage + 1);
            }

            if (this.data.pageIndex <= 2) {
              return (0, lodash__WEBPACK_IMPORTED_MODULE_0__.range)(1, 5);
            }

            if (this.data.pageIndex > this.data.totalPage - 2) {
              return (0, lodash__WEBPACK_IMPORTED_MODULE_0__.range)(this.data.totalPage - 3, this.data.totalPage + 1);
            }

            return this.data ? (0, lodash__WEBPACK_IMPORTED_MODULE_0__.range)(this.data.pageIndex - 1, this.data.pageIndex + 3) : [];
          }
        }, {
          key: "onPageIndexChange",
          value: function onPageIndexChange(pageIndex) {
            var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
            this.page.emit(pageIndex);
          }
        }]);

        return _PagingServerViewComponent;
      }();

      _PagingServerViewComponent.ɵfac = function PagingServerViewComponent_Factory(t) {
        return new (t || _PagingServerViewComponent)();
      };

      _PagingServerViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _PagingServerViewComponent,
        selectors: [["app-paging-server-view"]],
        inputs: {
          data: "data"
        },
        outputs: {
          page: "page"
        },
        decls: 29,
        vars: 13,
        consts: [[2, "height", "50px", "position", "relative", "cursor", "pointer"], ["_ngcontent-serverapp-c237", "", "_nghost-serverapp-c222", "", 1, "ng-star-inserted", 2, "position", "absolute", "right", "0"], ["_ngcontent-serverapp-c222", "", 1, "ng2-smart-pagination-nav", "ng-star-inserted"], ["_ngcontent-serverapp-c222", "", 1, "ng2-smart-pagination", "pagination"], ["_ngcontent-serverapp-c222", "", 1, "ng2-smart-page-item", "page-item", 3, "ngClass"], ["_ngcontent-serverapp-c222", "", "aria-label", "First", 1, "ng2-smart-page-link", "page-link", 3, "click"], ["_ngcontent-serverapp-c222", "", "aria-hidden", "true"], ["_ngcontent-serverapp-c222", "", 1, "sr-only"], ["_ngcontent-serverapp-c222", "", "aria-label", "Prev", 1, "ng2-smart-page-link", "page-link", "page-link-prev", 3, "click"], [4, "ngFor", "ngForOf"], ["_ngcontent-serverapp-c222", "", "aria-label", "Next", 1, "ng2-smart-page-link", "page-link", "page-link-next", 3, "click"], ["_ngcontent-serverapp-c222", "", "aria-label", "Last", 1, "ng2-smart-page-link", "page-link", 3, "click"], ["_ngcontent-serverapp-c222", "", "class", "ng2-smart-page-item page-item active ng-star-inserted", 4, "ngIf"], ["_ngcontent-serverapp-c222", "", "class", "ng2-smart-page-item page-item ng-star-inserted", 4, "ngIf"], ["_ngcontent-serverapp-c222", "", 1, "ng2-smart-page-item", "page-item", "active", "ng-star-inserted"], ["_ngcontent-serverapp-c222", "", 1, "ng2-smart-page-link", "page-link", "ng-star-inserted"], ["_ngcontent-serverapp-c222", "", 1, "ng2-smart-page-item", "page-item", "ng-star-inserted"], ["_ngcontent-serverapp-c222", "", 1, "ng2-smart-page-link", "page-link", "ng-star-inserted", 3, "click"]],
        template: function PagingServerViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng2-smart-table-pager", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PagingServerViewComponent_Template_a_click_5_listener() {
              return ctx.onPageIndexChange(0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\xAB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PagingServerViewComponent_Template_a_click_11_listener() {
              return ctx.onPageIndexChange((ctx.data == null ? null : ctx.data.pageIndex) - 1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "<");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Prev");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PagingServerViewComponent_ng_container_16_Template, 3, 2, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PagingServerViewComponent_Template_a_click_18_listener() {
              return ctx.onPageIndexChange((ctx.data == null ? null : ctx.data.pageIndex) + 1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PagingServerViewComponent_Template_a_click_24_listener() {
              return ctx.onPageIndexChange((ctx.data == null ? null : ctx.data.totalPage) - 1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\xBB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, !(ctx.data == null ? null : ctx.data.hasPreviousPage)));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, !(ctx.data == null ? null : ctx.data.hasPreviousPage)));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pagelist);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, (ctx.data == null ? null : ctx.data.pageIndex) + 1 >= (ctx.data == null ? null : ctx.data.totalPage)));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, (ctx.data == null ? null : ctx.data.pageIndex) + 1 >= (ctx.data == null ? null : ctx.data.totalPage)));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmctc2VydmVyLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    40908:
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/right-sidebar/right-sidebar.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RightSidebarComponent": function RightSidebarComponent() {
          return (
            /* binding */
            _RightSidebarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _directives_uiImageLoader_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../directives/uiImageLoader.directive */
      59578);

      function RightSidebarComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", user_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r1.status, "");
        }
      }

      var _RightSidebarComponent = /*#__PURE__*/function () {
        function _RightSidebarComponent() {
          _classCallCheck(this, _RightSidebarComponent);

          this.users = [{
            img: "assets/images/dashboard/user.png",
            name: "Vincent Porter",
            status: "Online"
          }, {
            img: "assets/images/dashboard/user1.jpg",
            name: "Ain Chavez",
            status: "28 minutes ago"
          }, {
            img: "assets/images/dashboard/user2.jpg",
            name: "Kori Thomas",
            status: "Online"
          }, {
            img: "assets/images/dashboard/user3.jpg",
            name: "Erica Hughes",
            status: "Online"
          }, {
            img: "assets/images/dashboard/man.png",
            name: "Ginger Johnston",
            status: "2 minutes ago"
          }, {
            img: "assets/images/dashboard/user5.jpg",
            name: "Prasanth Anand",
            status: "2 hour ago"
          }, {
            img: "assets/images/dashboard/designer.jpg",
            name: "Hileri Jecno",
            status: "Online"
          }];
        }

        _createClass(_RightSidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _RightSidebarComponent;
      }();

      _RightSidebarComponent.ɵfac = function RightSidebarComponent_Factory(t) {
        return new (t || _RightSidebarComponent)();
      };

      _RightSidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _RightSidebarComponent,
        selectors: [["app-right-sidebar"]],
        decls: 16,
        vars: 1,
        consts: [[1, "container", "p-0"], [1, "modal-header", "p-l-20", "p-r-20"], [1, "col-sm-8", "p-0"], [1, "modal-title", "font-weight-bold"], [1, "col-sm-4", "text-right", "p-0"], ["data-feather", "settings", 1, "mr-2"], [1, "friend-list-search", "mt-0"], ["type", "text", "placeholder", "search friend"], [1, "fa", "fa-search"], [1, "p-l-30", "p-r-30"], [1, "chat-box"], [1, "people-list", "friend-list"], [1, "list"], ["class", "clearfix", 4, "ngFor", "ngForOf"], [1, "clearfix"], ["appUiImageLoader", "", "alt", "", 1, "rounded-circle", "user-image", "blur-up", "lazyloaded", 3, "src"], [1, "status-circle", "online"], [1, "about"], [1, "name"], [1, "status"]],
        template: function RightSidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "FRIEND LIST");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, RightSidebarComponent_li_15_Template, 8, 3, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _directives_uiImageLoader_directive__WEBPACK_IMPORTED_MODULE_0__.UiImageLoaderDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    6664:
    /*!****************************************************************!*\
      !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidebarComponent": function SidebarComponent() {
          return (
            /* binding */
            _SidebarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/data/services */
      19764);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _service_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/nav.service */
      21442);
      /* harmony import */


      var _directives_uiImageLoader_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../directives/uiImageLoader.directive */
      59578);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../feather-icons/feather-icons.component */
      61676);

      function SidebarComponent_li_13_a_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r1.badgeType, " ml-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuItem_r1.badgeValue);
        }
      }

      function SidebarComponent_li_13_a_1_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 20);
        }
      }

      function SidebarComponent_li_13_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_li_13_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r10.toggletNavActive(menuItem_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-feather-icons", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_13_a_1_span_4_Template, 2, 4, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_13_a_1_i_5_Template, 1, 0, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", menuItem_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuItem_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }

      function SidebarComponent_li_13_a_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r1.badgeType, " ml-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuItem_r1.badgeValue);
        }
      }

      function SidebarComponent_li_13_a_2_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 20);
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function SidebarComponent_li_13_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-feather-icons", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_13_a_2_span_4_Template, 2, 4, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_13_a_2_i_5_Template, 1, 0, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", !menuItem_r1.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, menuItem_r1.path));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", menuItem_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuItem_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }

      function SidebarComponent_li_13_a_3_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r1.badgeType, " ml-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuItem_r1.badgeValue);
        }
      }

      function SidebarComponent_li_13_a_3_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 20);
        }
      }

      function SidebarComponent_li_13_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-feather-icons", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_13_a_3_span_4_Template, 2, 4, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_13_a_3_i_5_Template, 1, 0, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", !menuItem_r1.type ? null : menuItem_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", menuItem_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuItem_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }

      function SidebarComponent_li_13_a_4_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r1.badgeType, " ml-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuItem_r1.badgeValue);
        }
      }

      function SidebarComponent_li_13_a_4_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 20);
        }
      }

      function SidebarComponent_li_13_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-feather-icons", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_13_a_4_span_4_Template, 2, 4, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_13_a_4_i_5_Template, 1, 0, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", !menuItem_r1.type ? null : menuItem_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", menuItem_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuItem_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_a_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", childrenItem_r27.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](childrenItem_r27.badgeValue);
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_a_1_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 33);
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_li_13_ul_5_li_1_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38);

            var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

            return ctx_r36.toggletNavActive(childrenItem_r27);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_13_ul_5_li_1_a_1_span_4_Template, 2, 4, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_13_ul_5_li_1_a_1_i_5_Template, 1, 0, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", childrenItem_r27.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_a_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", childrenItem_r27.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](childrenItem_r27.badgeValue);
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_a_2_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 33);
        }
      }

      var _c1 = function _c1() {
        return {
          exact: true
        };
      };

      function SidebarComponent_li_13_ul_5_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_13_ul_5_li_1_a_2_span_4_Template, 2, 4, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_13_ul_5_li_1_a_2_i_5_Template, 1, 0, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", !childrenItem_r27.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, childrenItem_r27.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", childrenItem_r27.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_a_3_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", childrenItem_r27.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](childrenItem_r27.badgeValue);
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_a_3_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 33);
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_13_ul_5_li_1_a_3_span_4_Template, 2, 4, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_13_ul_5_li_1_a_3_i_5_Template, 1, 0, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", !childrenItem_r27.type ? null : childrenItem_r27.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", childrenItem_r27.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_a_4_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", childrenItem_r27.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](childrenItem_r27.badgeValue);
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_a_4_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 33);
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_13_ul_5_li_1_a_4_span_4_Template, 2, 4, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_13_ul_5_li_1_a_4_i_5_Template, 1, 0, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", !childrenItem_r27.type ? null : childrenItem_r27.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", childrenItem_r27.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_ul_5_li_1_a_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", childrenSubItem_r53.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](childrenSubItem_r53.badgeValue);
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_ul_5_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_13_ul_5_li_1_ul_5_li_1_a_1_span_4_Template, 2, 4, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", !childrenSubItem_r53.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, childrenSubItem_r53.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", childrenSubItem_r53.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenSubItem_r53.badgeType);
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_ul_5_li_1_a_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", childrenSubItem_r53.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](childrenSubItem_r53.badgeValue);
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_ul_5_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_13_ul_5_li_1_ul_5_li_1_a_2_span_4_Template, 2, 4, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", !childrenSubItem_r53.type ? null : childrenSubItem_r53.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", childrenSubItem_r53.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenSubItem_r53.badgeType);
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_ul_5_li_1_a_3_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", childrenSubItem_r53.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](childrenSubItem_r53.badgeValue);
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_ul_5_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_13_ul_5_li_1_ul_5_li_1_a_3_span_4_Template, 2, 4, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", !childrenSubItem_r53.type ? null : childrenSubItem_r53.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", childrenSubItem_r53.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenSubItem_r53.badgeType);
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_5_li_1_ul_5_li_1_a_1_Template, 5, 7, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarComponent_li_13_ul_5_li_1_ul_5_li_1_a_2_Template, 5, 5, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_li_13_ul_5_li_1_ul_5_li_1_a_3_Template, 5, 3, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r53 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenSubItem_r53.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenSubItem_r53.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenSubItem_r53.type === "extTabLink");
        }
      }

      function SidebarComponent_li_13_ul_5_li_1_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_5_li_1_ul_5_li_1_Template, 4, 3, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", childrenItem_r27.children);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          active: a0
        };
      };

      function SidebarComponent_li_13_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_5_li_1_a_1_Template, 6, 3, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarComponent_li_13_ul_5_li_1_a_2_Template, 6, 8, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_li_13_ul_5_li_1_a_3_Template, 6, 6, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_13_ul_5_li_1_a_4_Template, 6, 4, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_13_ul_5_li_1_ul_5_Template, 2, 1, "ul", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c2, childrenItem_r27.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
        }
      }

      var _c3 = function _c3(a0, a1) {
        return {
          "menu-open": a0,
          "menu-close": a1
        };
      };

      function SidebarComponent_li_13_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_5_li_1_Template, 6, 8, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](2, _c3, menuItem_r1.active, !menuItem_r1.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", menuItem_r1.children);
        }
      }

      function SidebarComponent_li_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_13_a_1_Template, 6, 4, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarComponent_li_13_a_2_Template, 6, 7, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_li_13_a_3_Template, 6, 5, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_13_a_4_Template, 6, 5, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_13_ul_5_Template, 2, 5, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c2, menuItem_r1.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.type === "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }

      var _SidebarComponent = /*#__PURE__*/function () {
        function _SidebarComponent(router, navServices, authService, inforWebService) {
          var _this18 = this;

          _classCallCheck(this, _SidebarComponent);

          this.router = router;
          this.navServices = navServices;
          this.authService = authService;
          this.inforWebService = inforWebService; // this.userManagerService.UserSubject.subscribe((it) =>{
          //   this.userInfo = it;
          // });

          this.fetchWebInFo();
          this.navServices.items.subscribe(function (menuItems) {
            _this18.menuItems = menuItems;

            _this18.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
                menuItems.filter(function (items) {
                  if (items.path === event.url) _this18.setNavActive(items);
                  if (!items.children) return false;
                  items.children.filter(function (subItems) {
                    if (subItems.path === event.url) _this18.setNavActive(subItems);
                    if (!subItems.children) return false;
                    subItems.children.filter(function (subSubItems) {
                      if (subSubItems.path === event.url) _this18.setNavActive(subSubItems);
                    });
                  });
                });
              }
            });
          });
        }

        _createClass(_SidebarComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.entrySub) {
              this.entrySub.unsubscribe();
              this.entrySub = null;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.authService.callUserInfo.subscribe(function (it) {
              return _this19.userInfo = it;
            });
          } // Active Nave state

        }, {
          key: "setNavActive",
          value: function setNavActive(item) {
            this.menuItems.filter(function (menuItem) {
              if (menuItem != item) menuItem.active = false;
              if (menuItem.children && menuItem.children.includes(item)) menuItem.active = true;

              if (menuItem.children) {
                menuItem.children.filter(function (submenuItems) {
                  if (submenuItems.children && submenuItems.children.includes(item)) {
                    menuItem.active = true;
                    submenuItems.active = true;
                  }
                });
              }
            });
          } // Click Toggle menu

        }, {
          key: "toggletNavActive",
          value: function toggletNavActive(item) {
            var _this20 = this;

            if (!item.active) {
              this.menuItems.forEach(function (a) {
                if (_this20.menuItems.includes(item)) a.active = false;
                if (!a.children) return false;
                a.children.forEach(function (b) {
                  if (a.children.includes(item)) {
                    b.active = false;
                  }
                });
              });
            }

            item.active = !item.active;
          } //Fileupload

        }, {
          key: "readUrl",
          value: function readUrl(event) {
            var _this21 = this;

            if (event.target.files.length === 0) return; //Image upload validation

            var mimeType = event.target.files[0].type;

            if (mimeType.match(/image\/*/) == null) {
              return;
            } // Image upload


            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = function (_event) {
              _this21.url = reader.result;
            };
          } //Web Information

        }, {
          key: "fetchWebInFo",
          value: function fetchWebInFo() {
            var _this22 = this;

            this.inforWebService.get(null).then(function (res) {
              if (!res.hasError) {
                _this22.infoWeb = res.data;
              }
            })["catch"](function (er) {
              if (er.error.hasError) {}
            });
          }
        }]);

        return _SidebarComponent;
      }();

      _SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || _SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_nav_service__WEBPACK_IMPORTED_MODULE_1__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_0__.InformationWebsiteService));
      };

      _SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _SidebarComponent,
        selectors: [["app-sidebar"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_0__.AuthService, src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_0__.InformationWebsiteService])],
        decls: 14,
        vars: 6,
        consts: [[1, "main-header-left", "d-none", "d-lg-block"], [1, "logo-wrapper", "d-flex", "justify-content-center", "p-0"], [3, "routerLink"], ["appUiImageLoader", "", "alt", "", 1, "blur-up", "lazyloaded", 2, "height", "55px", 3, "src"], [1, "sidebar", "custom-scrollbar"], [1, "sidebar-user", "text-center"], ["appUiImageLoader", "", "height", "60", "width", "60", "alt", "#", 1, "img-60", "rounded-circle", 3, "src"], [1, "mt-3", "f-14"], [1, "sidebar-menu"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["href", "javascript:void(0)", "class", "sidebar-header", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", "class", "sidebar-header", 3, "routerLink", 4, "ngIf"], ["class", "sidebar-header", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "sidebar-header", 3, "href", 4, "ngIf"], ["class", "sidebar-submenu", 3, "ngClass", 4, "ngIf"], ["href", "javascript:void(0)", 1, "sidebar-header", 3, "click"], [3, "icon"], [3, "class", 4, "ngIf"], ["class", "fa fa-angle-right pull-right", 4, "ngIf"], [1, "fa", "fa-angle-right", "pull-right"], ["routerLinkActive", "active", 1, "sidebar-header", 3, "routerLink"], [1, "sidebar-header", 3, "href"], ["target", "_blank", 1, "sidebar-header", 3, "href"], [1, "sidebar-submenu", 3, "ngClass"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "sidebar-submenu", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], [1, "fa", "fa-circle"], ["class", "fa fa-angle-down pull-right", 4, "ngIf"], [1, "fa", "fa-angle-down", "pull-right"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions"], ["target", "_blank", 3, "href"], [1, "sidebar-submenu"], [4, "ngFor", "ngForOf"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h6", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, SidebarComponent_li_13_Template, 6, 8, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.infoWeb == null ? null : ctx.infoWeb.logo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.userInfo == null ? null : ctx.userInfo.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.userInfo == null ? null : ctx.userInfo.firstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.userInfo.lastName);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.menuItems);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _directives_uiImageLoader_directive__WEBPACK_IMPORTED_MODULE_2__.UiImageLoaderDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__.FeatherIconsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    75288:
    /*!************************************************************************!*\
      !*** ./src/app/shared/components/upload-file/upload-file.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UploadFileComponent": function UploadFileComponent() {
          return (
            /* binding */
            _UploadFileComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/data/models */
      82409);
      /* harmony import */


      var src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/lib/data/services */
      19764);
      /* harmony import */


      var _modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../modals/models/modal.model */
      5383);
      /* harmony import */


      var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/lib/data/services/messages/message.service */
      20985);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_dropzone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-dropzone */
      54276);

      function UploadFileComponent_ng_container_0_ng_container_4_ngx_dropzone_preview_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-dropzone-preview", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("removed", function UploadFileComponent_ng_container_0_ng_container_4_ngx_dropzone_preview_1_Template_ngx_dropzone_preview_removed_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);

            var f_r4 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

            return ctx_r5.onRemove(f_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ngx-dropzone-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var f_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("removable", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", f_r4.name, " (", f_r4.type, ")");
        }
      }

      function UploadFileComponent_ng_container_0_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UploadFileComponent_ng_container_0_ng_container_4_ngx_dropzone_preview_1_Template, 3, 3, "ngx-dropzone-preview", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.files);
        }
      }

      function UploadFileComponent_ng_container_0_ng_container_5_ngx_dropzone_image_preview_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-dropzone-image-preview", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("removed", function UploadFileComponent_ng_container_0_ng_container_5_ngx_dropzone_image_preview_1_Template_ngx_dropzone_image_preview_removed_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);

            var f_r8 = restoredCtx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

            return ctx_r9.onRemove(f_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var f_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("removable", true)("file", f_r8);
        }
      }

      function UploadFileComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UploadFileComponent_ng_container_0_ng_container_5_ngx_dropzone_image_preview_1_Template, 1, 2, "ngx-dropzone-image-preview", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.files);
        }
      }

      function UploadFileComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ngx-dropzone", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function UploadFileComponent_ng_container_0_Template_ngx_dropzone_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r11.onSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ngx-dropzone-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, UploadFileComponent_ng_container_0_ng_container_4_Template, 2, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, UploadFileComponent_ng_container_0_ng_container_5_Template, 2, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](ctx_r0.styleFile);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("multiple", ctx_r0.data.multiBoolen);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("accept", ctx_r0.data.typeFile);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.isBannerUpload ? "Size image must over 500x250" : "Upload file");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.data.typeFile != ctx_r0.typeIMAGE);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.data.typeFile == ctx_r0.typeIMAGE);
        }
      }

      var _UploadFileComponent = /*#__PURE__*/function () {
        function _UploadFileComponent(fileService, messageService) {
          _classCallCheck(this, _UploadFileComponent);

          this.fileService = fileService;
          this.messageService = messageService;
          this.isBannerUpload = false;
          this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.typeIMAGE = _modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__.TypeFile.IMAGE;
          this.onRemoveLocal();
          this.styleFile = 'width: 450px; height: 200px;';
        }

        _createClass(_UploadFileComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this23 = this;

            if (this.fileURL) {
              this.files = [];
              this.fileURL.forEach(function (res) {
                if (res) {
                  _this23.converUrltoFile(src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_1__.FileService.getLinkFile(res.toString())).then(function (res) {
                    _this23.files.push(res);
                  });
                }
              });
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.data) {
              this.data.listFile = [];
            }
          } // onUpdate()
          // {
          //   this.createImage(this.file);
          // }

        }, {
          key: "onRemoveLocal",
          value: function onRemoveLocal() {
            this.fileURL = [];
            this.files = [];
          } // onRemoveUpdate(id: string) {
          //   this.data.listFile.forEach((e, i) => {
          //     if (e.id == id) {
          //       this.data.listFile.splice(i, 1);
          //     }
          //   });
          // }

        }, {
          key: "onDownload",
          value: function onDownload(file) {
            return this.fileService.getLinkDownloadFile(file.url);
          } // onChangeImg(event) {
          //   if (!this.data.multiBoolen) {
          //     this.onRemoveLocal();
          //   }
          //   var files = event.target.files;
          //   Array.from(files).forEach((file: File) => {
          //     if (file.size === 0) {
          //       return;
          //     }
          //     var mimeType = file.type;
          //     if (mimeType.match(/image\/*/) == null) {
          //       alert('Only images are supported.');
          //       return;
          //     }
          //     var reader = new FileReader();
          //     reader.readAsDataURL(file);
          //     reader.onload = (_event) => {
          //       this.fileURL.push(reader.result);
          //     };
          //     this.files.push(file);
          //     // console.log(file);
          //   });
          //   this.createImage(this.files);
          // }

        }, {
          key: "createImage",
          value: function createImage(files) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var _this24 = this;

              var formData;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(files.length <= 0)) {
                      _context5.next = 2;
                      break;
                    }

                    return _context5.abrupt("return");

                  case 2:
                    formData = new FormData();
                    files.forEach(function (file) {
                      formData.append('files', file);
                    });
                    formData.append('entityType', this.data.enityType);
                    formData.append('entityId', this.data.enityId);
                    _context5.next = 8;
                    return this.fileService.saveFile(formData).then(function (res) {
                      _this24.messageService.notification('Upload Success', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);

                      _this24.data.listFile = [].concat(_toConsumableArray(_this24.data.listFile), _toConsumableArray(res.data));

                      _this24.actionChange(res.data.map(function (res) {
                        return res.url;
                      }), null);
                    })["catch"](function (er) {
                      var _a;

                      return _this24.messageService.alert('Upload Fail', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR, (_a = er.error.message) !== null && _a !== void 0 ? _a : er.error);
                    });

                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "actionChange",
          value: function actionChange(add, remove) {
            var removeAll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            this.onChange.emit({
              add: add,
              remove: remove,
              removeAll: removeAll
            });
          } // getImage(imageUrl: string) {
          //   return FileService.getLinkFile(imageUrl);
          // }

        }, {
          key: "onSelect",
          value: function onSelect(event) {
            var _this25 = this;

            if (this.isBannerUpload) {
              var reader = new FileReader();
              reader.readAsDataURL(event.addedFiles[0]);

              reader.onload = function () {
                var img = new Image();
                img.src = reader.result;

                img.onload = function () {
                  var height = img.naturalHeight;
                  var width = img.naturalWidth;
                  if (height < 500 || width < 250) return _this25.messageService.alert('Size image must over 500x250');

                  _this25.exceptUpload(event);
                };
              };

              return;
            }

            this.exceptUpload(event);
          }
        }, {
          key: "exceptUpload",
          value: function exceptUpload(event) {
            if (!this.data.multiBoolen) {
              this.onRemoveLocal();
              this.actionChange(null, null, true);
            }

            this.createImage(event.addedFiles);
          }
        }, {
          key: "onRemove",
          value: function onRemove(event) {
            // console.log(event);
            this.files.splice(this.files.indexOf(event), 1);
            this.actionChange(null, event.name);
          }
        }, {
          key: "converUrltoFile",
          value: function converUrltoFile(url) {
            return fetch(url).then(function (e) {
              return e.blob();
            }).then(function (blob) {
              var b = blob;
              b.lastModifiedDate = new Date();
              b.name = url.split(/[\\\/]/).pop();
              return b;
            });
          }
        }]);

        return _UploadFileComponent;
      }();

      _UploadFileComponent.ɵfac = function UploadFileComponent_Factory(t) {
        return new (t || _UploadFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_1__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService));
      };

      _UploadFileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _UploadFileComponent,
        selectors: [["app-upload-file"]],
        inputs: {
          data: "data",
          styleFile: "styleFile",
          fileURL: "fileURL",
          isBannerUpload: "isBannerUpload",
          sizeImage: "sizeImage"
        },
        outputs: {
          onChange: "onChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [3, "multiple", "accept", "change"], [3, "removable", "removed", 4, "ngFor", "ngForOf"], [3, "removable", "removed"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "removable", "file", "removed", 4, "ngFor", "ngForOf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "removable", "file", "removed"]],
        template: function UploadFileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, UploadFileComponent_ng_container_0_Template, 6, 7, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ngx_dropzone__WEBPACK_IMPORTED_MODULE_7__.NgxDropzoneComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_7__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ngx_dropzone__WEBPACK_IMPORTED_MODULE_7__.NgxDropzonePreviewComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_7__.NgxDropzoneImagePreviewComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQtZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    18217:
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/viewimagecell/viewimagecell.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewImageCellComponent": function ViewImageCellComponent() {
          return (
            /* binding */
            _ViewImageCellComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _directives_uiImageLoader_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../directives/uiImageLoader.directive */
      59578);

      function ViewImageCellComponent_img_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 1);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      var _ViewImageCellComponent = /*#__PURE__*/function () {
        function _ViewImageCellComponent() {
          _classCallCheck(this, _ViewImageCellComponent);
        }

        _createClass(_ViewImageCellComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "image",
          get: function get() {
            if (!this.value) {
              return null;
            }

            var fileExt = this.value.split(',')[0].split('.').pop();

            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'icon') {
              return this.value.split(',')[0];
            }

            return '';
          }
        }]);

        return _ViewImageCellComponent;
      }();

      _ViewImageCellComponent.ɵfac = function ViewImageCellComponent_Factory(t) {
        return new (t || _ViewImageCellComponent)();
      };

      _ViewImageCellComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ViewImageCellComponent,
        selectors: [["app-viewimagecell"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        decls: 1,
        vars: 1,
        consts: [["appUiImageLoader", "", "onclick", "window.open(this.src)", "style", "height: 75px; width: 75px; cursor: pointer;", 3, "src", 4, "ngIf"], ["appUiImageLoader", "", "onclick", "window.open(this.src)", 2, "height", "75px", "width", "75px", "cursor", "pointer", 3, "src"]],
        template: function ViewImageCellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ViewImageCellComponent_img_0_Template, 1, 1, "img", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.value);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _directives_uiImageLoader_directive__WEBPACK_IMPORTED_MODULE_0__.UiImageLoaderDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3aW1hZ2VjZWxsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    61301:
    /*!***********************************************************!*\
      !*** ./src/app/shared/directives/fullscreen.directive.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ToggleFullscreenDirective": function ToggleFullscreenDirective() {
          return (
            /* binding */
            _ToggleFullscreenDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var screenfull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! screenfull */
      15950);
      /* harmony import */


      var screenfull__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ToggleFullscreenDirective = /*#__PURE__*/function () {
        function _ToggleFullscreenDirective() {
          _classCallCheck(this, _ToggleFullscreenDirective);
        }

        _createClass(_ToggleFullscreenDirective, [{
          key: "onClick",
          value: function onClick() {
            if (screenfull__WEBPACK_IMPORTED_MODULE_0__.isEnabled) {
              screenfull__WEBPACK_IMPORTED_MODULE_0__.toggle();
            }
          }
        }]);

        return _ToggleFullscreenDirective;
      }();

      _ToggleFullscreenDirective.ɵfac = function ToggleFullscreenDirective_Factory(t) {
        return new (t || _ToggleFullscreenDirective)();
      };

      _ToggleFullscreenDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _ToggleFullscreenDirective,
        selectors: [["", "toggleFullscreen", ""]],
        hostBindings: function ToggleFullscreenDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToggleFullscreenDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        }
      });
      /***/
    },

    /***/
    59578:
    /*!**************************************************************!*\
      !*** ./src/app/shared/directives/uiImageLoader.directive.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UiImageLoaderDirective": function UiImageLoaderDirective() {
          return (
            /* binding */
            _UiImageLoaderDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_lib_environments_config_appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/environments/config/appConfig */
      63249);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _UiImageLoaderDirective = /*#__PURE__*/function () {
        function _UiImageLoaderDirective(renderer, el) {
          _classCallCheck(this, _UiImageLoaderDirective);

          this.renderer = renderer;
          this.el = el;
          this.defaultImg = "/assets/images/error.png";
        }

        _createClass(_UiImageLoaderDirective, [{
          key: "src",
          set: function set(value) {
            if (!value) {
              return;
            }

            var result = "".concat(src_app_lib_environments_config_appConfig__WEBPACK_IMPORTED_MODULE_0__.AppConfig.settings.API_URL, "/Files/").concat(value);

            if (value.includes('http')) {
              result = value;
            }

            if (value.includes('assets')) {
              result = value;
            }

            this.sUrl = result;
          }
        }, {
          key: "updateUrl",
          value: function updateUrl() {
            this.sUrl = this.defaultImg;
          }
        }]);

        return _UiImageLoaderDirective;
      }();

      _UiImageLoaderDirective.ɵfac = function UiImageLoaderDirective_Factory(t) {
        return new (t || _UiImageLoaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
      };

      _UiImageLoaderDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _UiImageLoaderDirective,
        selectors: [["", "appUiImageLoader", ""]],
        hostVars: 1,
        hostBindings: function UiImageLoaderDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function UiImageLoaderDirective_error_HostBindingHandler() {
              return ctx.updateUrl();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("src", ctx.sUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrlOrResourceUrl"]);
          }
        },
        inputs: {
          src: "src"
        }
      });
      /***/
    },

    /***/
    89207:
    /*!**************************************************************************!*\
      !*** ./src/app/shared/layout/content-layout/content-layout.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContentLayoutComponent": function ContentLayoutComponent() {
          return (
            /* binding */
            _ContentLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var ng_animate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-animate */
      69860);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _service_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../service/nav.service */
      21442);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../components/header/header.component */
      36290);
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/sidebar/sidebar.component */
      6664);
      /* harmony import */


      var _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/right-sidebar/right-sidebar.component */
      40908);
      /* harmony import */


      var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/footer/footer.component */
      66526);

      var _ContentLayoutComponent = /*#__PURE__*/function () {
        function _ContentLayoutComponent(navServices, activedRoute) {
          _classCallCheck(this, _ContentLayoutComponent);

          this.navServices = navServices;
          this.activedRoute = activedRoute;
          this.layoutType = 'RTL';
          this.layoutClass = false;
        }

        _createClass(_ContentLayoutComponent, [{
          key: "getRouterOutletState",
          value: function getRouterOutletState(outlet) {
            return outlet.isActivated ? outlet.activatedRoute : '';
          }
        }, {
          key: "rightSidebar",
          value: function rightSidebar($event) {
            this.right_side_bar = $event;
          }
        }, {
          key: "clickRtl",
          value: function clickRtl(val) {
            if (val === 'RTL') {
              document.body.className = 'rtl';
              this.layoutClass = true;
              this.layoutType = 'LTR';
            } else {
              document.body.className = '';
              this.layoutClass = false;
              this.layoutType = 'RTL';
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ContentLayoutComponent;
      }();

      _ContentLayoutComponent.ɵfac = function ContentLayoutComponent_Factory(t) {
        return new (t || _ContentLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
      };

      _ContentLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _ContentLayoutComponent,
        selectors: [["app-content-layout"]],
        decls: 15,
        vars: 5,
        consts: [[1, "page-wrapper"], [3, "rightSidebarEvent"], [1, "page-body-wrapper"], [1, "page-sidebar"], ["id", "right_side_bar", 1, "right-sidebar"], [1, "page-body"], ["o", "outlet"], [1, "footer"]],
        template: function ContentLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "app-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("rightSidebarEvent", function ContentLayoutComponent_Template_app_header_rightSidebarEvent_2_listener($event) {
              return ctx.rightSidebar($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-right-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "router-outlet", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "footer", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("open", ctx.navServices.collapseSidebar);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show", ctx.right_side_bar);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@animateRoute", ctx.getRouterOutletState(_r0));
          }
        },
        directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.RightSidebarComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"],
        data: {
          animation: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('animateRoute', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('* => *', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_8__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_9__.fadeIn, {// Set the duration to 5seconds and delay to 2 seconds
            //params: { timing: 3}
          }))])]
        }
      });
      /***/
    },

    /***/
    54989:
    /*!*************************************************!*\
      !*** ./src/app/shared/routes/content-routes.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "content": function content() {
          return (
            /* binding */
            _content
          );
        }
        /* harmony export */

      });

      var _content = [{
        path: 'banners',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_components_banners_banners_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../../components/banners/banners.module */
          46147)).then(function (m) {
            return m.BannersModule;
          });
        },
        data: {
          breadcrumb: 'Banners'
        }
      }, {
        path: 'profiles',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_components_profiles_profiles_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../../components/profiles/profiles.module */
          84110)).then(function (m) {
            return m.ProfilesModule;
          });
        },
        data: {
          breadcrumb: 'Profiles'
        }
      }, {
        path: 'social-medias',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_components_social-medias_social-medias_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../../components/social-medias/social-medias.module */
          45366)).then(function (m) {
            return m.SocialMediasModule;
          });
        },
        data: {
          breadcrumb: 'Social Medias'
        }
      }, {
        path: 'categories',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_components_categories_categories_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../../components/categories/categories.module */
          51459)).then(function (m) {
            return m.CategoriesModule;
          });
        },
        data: {
          breadcrumb: 'Categories'
        }
      }, {
        path: 'files',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ../../components/files/files.module */
          17879)).then(function (m) {
            return m.FilesModule;
          });
        }
      }, {
        path: 'coupons',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_components_coupons_coupons_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../../components/coupons/coupons.module */
          51813)).then(function (m) {
            return m.CouponsModule;
          });
        },
        data: {
          breadcrumb: 'Coupons'
        }
      }, {
        path: 'users',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_components_users_users_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../../components/users/users.module */
          90329)).then(function (m) {
            return m.UsersModule;
          });
        },
        data: {
          breadcrumb: 'Admins'
        }
      }, {
        path: 'products',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angular_js"), __webpack_require__.e("default-src_app_lib_ckeditor_Base64Upload_js-src_app_lib_customCkeditor_ckeditor5-build-class-399254"), __webpack_require__.e("src_app_components_products_products_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../../components/products/products.module */
          39493)).then(function (m) {
            return m.ProductModule;
          });
        },
        data: {
          breadcrumb: 'Products'
        }
      }, {
        path: 'blogs',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angular_js"), __webpack_require__.e("default-src_app_lib_ckeditor_Base64Upload_js-src_app_lib_customCkeditor_ckeditor5-build-class-399254"), __webpack_require__.e("src_app_components_blogs_blogs_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../../components/blogs/blogs.module */
          81599)).then(function (m) {
            return m.BlogsModule;
          });
        },
        data: {
          breadcrumb: 'Blogs'
        }
      }, {
        path: 'orders',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_components_orders_orders_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../../components/orders/orders.module */
          8605)).then(function (m) {
            return m.OrdersModule;
          });
        },
        data: {
          breadcrumb: 'Orders'
        }
      }, {
        path: 'page-content',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angular_js"), __webpack_require__.e("default-src_app_lib_ckeditor_Base64Upload_js-src_app_lib_customCkeditor_ckeditor5-build-class-399254"), __webpack_require__.e("src_app_components_pageContents_pageContent_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../../components/pageContents/pageContent.module */
          18313)).then(function (m) {
            return m.PageContentModule;
          });
        },
        data: {
          breadcrumb: 'Page Contents'
        }
      }, {
        path: 'information-website',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angular_js"), __webpack_require__.e("src_app_components_information-website_information_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../../components/information-website/information.module */
          5854)).then(function (m) {
            return m.InformationWebsiteModule;
          });
        },
        data: {
          breadcrumb: 'Website Information'
        }
      }, {
        path: 'customers',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angular_js"), __webpack_require__.e("src_app_components_customers_customers_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../../components/customers/customers.module */
          58004)).then(function (m) {
            return m.CustomerModule;
          });
        },
        data: {
          breadcrumb: 'Customers'
        }
      }, {
        path: 'contact',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angular_js"), __webpack_require__.e("default-src_app_lib_ckeditor_Base64Upload_js-src_app_lib_customCkeditor_ckeditor5-build-class-399254"), __webpack_require__.e("src_app_components_contacts_contact_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ../../components/contacts/contact.module */
          41646)).then(function (m) {
            return m.ContactModule;
          });
        },
        data: {
          breadcrumb: 'Contact'
        }
      }, {
        path: 'error',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_components_error_error_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../../components/error/error.module */
          12948)).then(function (m) {
            return m.ErrorModule;
          });
        }
      }];
      /***/
    },

    /***/
    21442:
    /*!***********************************************!*\
      !*** ./src/app/shared/service/nav.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavService": function NavService() {
          return (
            /* binding */
            _NavService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var _windows_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./windows.service */
      2735);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _NavService = /*#__PURE__*/function () {
        function _NavService(window) {
          _classCallCheck(this, _NavService);

          this.window = window;
          this.collapseSidebar = false;
          this.MENUITEMS = [{
            title: 'Page',
            icon: 'clipboard',
            type: 'sub',
            active: false,
            children: [{
              path: '/blogs/list-blogs',
              title: 'Blog List',
              type: 'link'
            }, {
              path: '/page-content/list-page-content',
              title: 'Page Content',
              type: 'link'
            }]
          }, {
            title: 'Product',
            icon: 'package',
            type: 'sub',
            active: false,
            children: [{
              path: '/products/list-products',
              title: 'Products',
              type: 'link'
            }, {
              path: '/orders/list-orders',
              title: 'Orders',
              type: 'link'
            }, {
              path: '/categories/list-categories',
              title: 'Category',
              type: 'link'
            }, {
              path: '/coupons/list-coupons',
              title: 'Coupon',
              type: 'link'
            }]
          }, {
            title: 'Admins & Customers',
            icon: 'users',
            type: 'sub',
            active: false,
            children: [{
              path: '/users/list-users',
              title: 'Admins',
              type: 'link'
            }, {
              path: '/customers/list-customers',
              title: 'Customers ',
              type: 'link'
            }, {
              path: '/contact/list-contact',
              title: 'Contact',
              type: 'link'
            }]
          }, {
            title: 'Settings',
            icon: 'settings',
            type: 'sub',
            active: false,
            children: [{
              path: '/banners/list-banners',
              title: 'Banners',
              type: 'link'
            }, {
              path: '/social-medias/list-social-medias',
              title: 'Social Media',
              type: 'link'
            }, {
              path: '/information-website/list-information-website',
              title: 'Website Information',
              type: 'link'
            }]
          }];
          this.items = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.MENUITEMS);
          this.onResize();

          if (this.screenWidth < 991) {
            this.collapseSidebar = true;
          }
        } // Windows width


        _createClass(_NavService, [{
          key: "onResize",
          value: function onResize(event) {
            this.screenWidth = window.innerWidth;
          }
        }]);

        return _NavService;
      }();

      _NavService.ɵfac = function NavService_Factory(t) {
        return new (t || _NavService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_windows_service__WEBPACK_IMPORTED_MODULE_0__.WINDOW));
      };

      _NavService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _NavService,
        factory: _NavService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2735:
    /*!***************************************************!*\
      !*** ./src/app/shared/service/windows.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WINDOW": function WINDOW() {
          return (
            /* binding */
            _WINDOW
          );
        },

        /* harmony export */
        "WindowRef": function WindowRef() {
          return (
            /* binding */
            _WindowRef
          );
        },

        /* harmony export */
        "BrowserWindowRef": function BrowserWindowRef() {
          return (
            /* binding */
            _BrowserWindowRef
          );
        },

        /* harmony export */
        "windowFactory": function windowFactory() {
          return (
            /* binding */
            _windowFactory
          );
        },

        /* harmony export */
        "browserWindowProvider": function browserWindowProvider() {
          return (
            /* binding */
            _browserWindowProvider
          );
        },

        /* harmony export */
        "windowProvider": function windowProvider() {
          return (
            /* binding */
            _windowProvider
          );
        },

        /* harmony export */
        "WINDOW_PROVIDERS": function WINDOW_PROVIDERS() {
          return (
            /* binding */
            _WINDOW_PROVIDERS
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* Create a new injection token for injecting the window into a component. */


      var _WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('WindowToken');
      /* Define abstract class for obtaining reference to the global window object. */


      var _WindowRef = /*#__PURE__*/function () {
        function _WindowRef() {
          _classCallCheck(this, _WindowRef);
        }

        _createClass(_WindowRef, [{
          key: "nativeWindow",
          get: function get() {
            throw new Error('Not implemented.');
          }
        }]);

        return _WindowRef;
      }();
      /* Define class that implements the abstract class and returns the native window object. */


      var _BrowserWindowRef = /*#__PURE__*/function (_WindowRef2) {
        _inherits(_BrowserWindowRef, _WindowRef2);

        function _BrowserWindowRef() {
          _classCallCheck(this, _BrowserWindowRef);

          return _callSuper(this, _BrowserWindowRef);
        }

        _createClass(_BrowserWindowRef, [{
          key: "nativeWindow",
          get: function get() {
            return window;
          }
        }]);

        return _BrowserWindowRef;
      }(_WindowRef);

      _BrowserWindowRef.ɵfac = function BrowserWindowRef_Factory(t) {
        return new (t || _BrowserWindowRef)();
      };

      _BrowserWindowRef.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _BrowserWindowRef,
        factory: _BrowserWindowRef.ɵfac
      });
      /* Create an factory function that returns the native window object. */

      function _windowFactory(browserWindowRef, platformId) {
        if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(platformId)) {
          return browserWindowRef.nativeWindow;
        }

        return new Object();
      }
      /* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */


      var _browserWindowProvider = {
        provide: _WindowRef,
        useClass: _BrowserWindowRef
      };
      /* Create an injectable provider that uses the windowFactory function for returning the native window object. */

      var _windowProvider = {
        provide: _WINDOW,
        useFactory: _windowFactory,
        deps: [_WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      };
      /* Create an array of providers. */

      var _WINDOW_PROVIDERS = [_browserWindowProvider, _windowProvider];
      /***/
    },

    /***/
    44466:
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      66526);
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/header/header.component */
      36290);
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/sidebar/sidebar.component */
      6664);
      /* harmony import */


      var _directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./directives/fullscreen.directive */
      61301);
      /* harmony import */


      var _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./layout/content-layout/content-layout.component */
      89207);
      /* harmony import */


      var _service_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./service/nav.service */
      21442);
      /* harmony import */


      var _service_windows_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./service/windows.service */
      2735);
      /* harmony import */


      var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/breadcrumb/breadcrumb.component */
      41299);
      /* harmony import */


      var _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/right-sidebar/right-sidebar.component */
      40908);
      /* harmony import */


      var _components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/modals/modal-header/modal-header.component */
      71279);
      /* harmony import */


      var _components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/modals/modal-footer/modal-footer.component */
      36711);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _lib_data_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../lib/data/services */
      19764);
      /* harmony import */


      var _components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/upload-file/upload-file.component */
      75288);
      /* harmony import */


      var ngx_dropzone__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ngx-dropzone */
      54276);
      /* harmony import */


      var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @sweetalert2/ngx-sweetalert2 */
      17749);
      /* harmony import */


      var _directives_uiImageLoader_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./directives/uiImageLoader.directive */
      59578);
      /* harmony import */


      var _components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/viewimagecell/viewimagecell.component */
      18217);
      /* harmony import */


      var _components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/customViewCell/customViewCell.component */
      59314);
      /* harmony import */


      var _components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/custom-view-cell-number/custom-view-cell-number.component */
      58676);
      /* harmony import */


      var _lib_data_services_pipe_vnd_format_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../lib/data/services/pipe/vnd-format.pipe */
      96190);
      /* harmony import */


      var _components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/paging-server-view/paging-server-view.component */
      46913);
      /* harmony import */


      var _lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../lib/data/services/messages/message.service */
      20985);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SharedModule = /*#__PURE__*/_createClass(function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      });

      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
        providers: [_service_nav_service__WEBPACK_IMPORTED_MODULE_6__.NavService, _service_windows_service__WEBPACK_IMPORTED_MODULE_7__.WINDOW_PROVIDERS, _lib_data_services__WEBPACK_IMPORTED_MODULE_12__.FileService, _lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_20__.MessageService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModalModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_25__.NgxDropzoneModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_26__.SweetAlert2Module.forRoot()], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_26__.SweetAlert2Module]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](_SharedModule, {
          declarations: [_directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_4__.ToggleFullscreenDirective, _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_5__.ContentLayoutComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbComponent, _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_9__.RightSidebarComponent, _components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_10__.ModalHeaderComponent, _components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_11__.ModalFooterComponent, _components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_13__.UploadFileComponent, _directives_uiImageLoader_directive__WEBPACK_IMPORTED_MODULE_14__.UiImageLoaderDirective, _components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_15__.ViewImageCellComponent, _components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_16__.CustomViewCellComponent, _components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_17__.CustomViewCellNumberComponent, _lib_data_services_pipe_vnd_format_pipe__WEBPACK_IMPORTED_MODULE_18__.VndFormatPipe, _components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_19__.PagingServerViewComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModalModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_25__.NgxDropzoneModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_26__.SweetAlert2Module],
          exports: [_directives_uiImageLoader_directive__WEBPACK_IMPORTED_MODULE_14__.UiImageLoaderDirective, _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent, _directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_4__.ToggleFullscreenDirective, _components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_11__.ModalFooterComponent, _components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_10__.ModalHeaderComponent, _components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_13__.UploadFileComponent, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_26__.SweetAlert2Module, _components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_15__.ViewImageCellComponent, _components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_16__.CustomViewCellComponent, _components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_17__.CustomViewCellNumberComponent, _lib_data_services_pipe_vnd_format_pipe__WEBPACK_IMPORTED_MODULE_18__.VndFormatPipe, _components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_19__.PagingServerViewComponent]
        });
      })();
      /***/

    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment2
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment2 = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule); // .catch(err => console.error(err));

      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map