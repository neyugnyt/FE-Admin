(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkmultikart_backend"] = self["webpackChunkmultikart_backend"] || []).push([["src_app_components_orders_orders_module_ts"], {
    /***/
    80917:
    /*!***********************************************************************!*\
      !*** ./src/app/components/orders/list-order/list-orders.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ListOrdersComponent": function ListOrdersComponent() {
          return (
            /* binding */
            _ListOrdersComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/data/models */
      82409);
      /* harmony import */


      var src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/lib/data/services/orders/orders.service */
      2924);
      /* harmony import */


      var src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/components/custom-view-cell-number/custom-view-cell-number.component */
      58676);
      /* harmony import */


      var src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/components/customViewCell/customViewCell.component */
      59314);
      /* harmony import */


      var _update_order_update_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../update-order/update-order.component */
      85110);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/lib/data/services/messages/message.service */
      20985);
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng2-smart-table */
      98391);
      /* harmony import */


      var _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/components/paging-server-view/paging-server-view.component */
      46913);

      function ListOrdersComponent_app_paging_server_view_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-paging-server-view", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function ListOrdersComponent_app_paging_server_view_26_Template_app_paging_server_view_page_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r5.onPage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx_r4.data);
        }
      }

      var _ListOrdersComponent = /*#__PURE__*/function () {
        function _ListOrdersComponent(modalService, ordersService, datePipe, messageService) {
          var _this = this;

          _classCallCheck(this, _ListOrdersComponent);

          this.modalService = modalService;
          this.ordersService = ordersService;
          this.datePipe = datePipe;
          this.messageService = messageService;
          this.filter = '';
          this.params = {};
          this.isGetOrders = false;
          this.settings = {
            mode: 'external',
            actions: {
              position: 'right',
              add: false,
              "delete": false
            },
            columns: {
              code: {
                title: 'Code'
              },
              createByDate: {
                filter: false,
                title: 'Created Date',
                valuePrepareFunction: function valuePrepareFunction(date) {
                  return _this.datePipe.transform(new Date(date), 'dd/MM/yyyy');
                },
                type: 'custom',
                renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_3__.CustomViewCellComponent
              },
              fullName: {
                title: 'Full Name'
              },
              address: {
                title: 'Address'
              },
              phone: {
                title: 'Phone',
                type: 'custom',
                renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_3__.CustomViewCellComponent
              },
              email: {
                title: 'Email'
              },
              status: {
                filter: false,
                title: 'Status'
              },
              note: {
                filter: false,
                title: 'Note'
              },
              hasCoupon: {
                filter: false,
                title: 'Coupon Applied',
                valuePrepareFunction: function valuePrepareFunction(cell, row) {
                  return cell ? row.couponName : '';
                }
              },
              totalAmount: {
                filter: false,
                title: 'Total Amount',
                value: 'totalAmount',
                type: 'custom',
                renderComponent: src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_2__.CustomViewCellNumberComponent
              }
            }
          };
          this.params.pageIndex = 0; // this.getOrders();
        }

        _createClass(_ListOrdersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.actionFilter('New');
          }
        }, {
          key: "getOrders",
          value: function getOrders() {
            var _this2 = this;

            this.isGetOrders = false;
            this.ordersService.get({
              params: this.params
            }).then(function (res) {
              if (!res.hasError) {
                _this2.data = res.data;
                _this2.orders = res.data.results;

                _this2.orders.forEach(function (order) {
                  order.hasCoupon = false;

                  if (order.couponCode) {
                    order.hasCoupon = true;
                  }
                });
              }
            })["catch"](function (er) {
              if (er.error.hasError) {
                console.log(er.error.message);
              }
            });
          }
        }, {
          key: "openUpdate",
          value: function openUpdate(event) {
            var _this3 = this;

            var modalRef = this.modalService.open(_update_order_update_order_component__WEBPACK_IMPORTED_MODULE_4__.UpdateOrderComponent, {
              size: 'lg'
            });
            modalRef.componentInstance.item = event === null || event === void 0 ? void 0 : event.data;
            modalRef.result.then(function () {
              return _this3.getOrders();
            }, function (dismiss) {});
          }
        }, {
          key: "statusFilter",
          value: function statusFilter(button) {
            this.isGetOrders = true;
            var status = button.innerText.toUpperCase() !== 'All'.toUpperCase() ? button.innerText : '';
            button.classList.add('active');

            if (this.filter == status || status == '') {
              this.filter = '';
              this.params.pageIndex = 0;
              return this.getOrders();
            }

            this.filter = status;
            return this.actionFilter(status);
          }
        }, {
          key: "removeAllAction",
          value: function removeAllAction() {
            for (var _len = arguments.length, left = new Array(_len), _key = 0; _key < _len; _key++) {
              left[_key] = arguments[_key];
            }

            left.forEach(function (i) {
              return i.classList.remove('active');
            });
          }
        }, {
          key: "actionFilter",
          value: function actionFilter(status) {
            var _this4 = this;

            this.ordersService.getByStatus(null, status).then(function (response) {
              _this4.orders = response.data ? response.data : [];

              _this4.orders.forEach(function (order) {
                order.hasCoupon = false;

                if (order.couponCode) {
                  order.hasCoupon = true;
                }
              });
            })["catch"](function (er) {
              var _a, _b;

              _this4.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR); // if (er.error.hasError) {
              //   console.log(er.error.message)
              // }

            });
          }
        }, {
          key: "onPage",
          value: function onPage(event) {
            this.params.pageIndex = event;
            this.getOrders();
          }
        }]);

        return _ListOrdersComponent;
      }();

      _ListOrdersComponent.ɵfac = function ListOrdersComponent_Factory(t) {
        return new (t || _ListOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService));
      };

      _ListOrdersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _ListOrdersComponent,
        selectors: [["app-list-orders"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe])],
        decls: 27,
        vars: 3,
        consts: [[1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "card-body", "vendor-table"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", "btn-xs", "mr-2", 3, "click"], ["allButton", ""], ["type", "button", 1, "btn", "btn-primary", "btn-xs", "mr-2", "active", 3, "click"], ["newButton", ""], ["approvedButton", ""], ["rejectedButton", ""], ["id", "batchDelete", 1, "custom-datatable", "media-datatable"], [1, "table-responsive"], [3, "settings", "source", "sourceChange", "edit"], [3, "data", "page", 4, "ngIf"], [3, "data", "page"]],
        template: function ListOrdersComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Order Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Order Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListOrdersComponent_Template_button_click_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](20);

              ctx.removeAllAction(_r0, _r1, _r2, _r3);
              return ctx.statusFilter(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " All ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListOrdersComponent_Template_button_click_13_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](20);

              ctx.removeAllAction(_r0, _r1, _r2, _r3);
              return ctx.statusFilter(_r1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " New ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 5, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListOrdersComponent_Template_button_click_16_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](20);

              ctx.removeAllAction(_r0, _r1, _r2, _r3);
              return ctx.statusFilter(_r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " Approved ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 5, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListOrdersComponent_Template_button_click_19_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](20);

              ctx.removeAllAction(_r0, _r1, _r2, _r3);
              return ctx.statusFilter(_r3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Rejected ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "ng2-smart-table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sourceChange", function ListOrdersComponent_Template_ng2_smart_table_sourceChange_25_listener($event) {
              return ctx.orders = $event;
            })("edit", function ListOrdersComponent_Template_ng2_smart_table_edit_25_listener($event) {
              return ctx.openUpdate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ListOrdersComponent_app_paging_server_view_26_Template, 1, 1, "app-paging-server-view", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.orders);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isGetOrders && (ctx.data == null ? null : ctx.data.totalPage) > 1);
          }
        },
        directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__.Ng2SmartTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_6__.PagingServerViewComponent],
        styles: ["button.btn.btn-primary.active[_ngcontent-%COMP%] {\n  background-color: #f93e44 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Qtb3JkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUFDRiIsImZpbGUiOiJsaXN0LW9yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbi5idG4uYnRuLXByaW1hcnkuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjkzZTQ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    58614:
    /*!************************************************************!*\
      !*** ./src/app/components/orders/orders-routing.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrdersRoutingModule": function OrdersRoutingModule() {
          return (
            /* binding */
            _OrdersRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _list_order_list_orders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./list-order/list-orders.component */
      80917);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        children: [{
          path: 'list-orders',
          component: _list_order_list_orders_component__WEBPACK_IMPORTED_MODULE_0__.ListOrdersComponent,
          data: {
            title: "Order List",
            breadcrumb: "Order List"
          }
        }]
      }];

      var _OrdersRoutingModule = /*#__PURE__*/_createClass(function _OrdersRoutingModule() {
        _classCallCheck(this, _OrdersRoutingModule);
      });

      _OrdersRoutingModule.ɵfac = function OrdersRoutingModule_Factory(t) {
        return new (t || _OrdersRoutingModule)();
      };

      _OrdersRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _OrdersRoutingModule
      });
      _OrdersRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_OrdersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    8605:
    /*!****************************************************!*\
      !*** ./src/app/components/orders/orders.module.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrdersModule": function OrdersModule() {
          return (
            /* binding */
            _OrdersModule
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


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);
      /* harmony import */


      var src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/lib/data/services */
      19764);
      /* harmony import */


      var _list_order_list_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-order/list-orders.component */
      80917);
      /* harmony import */


      var _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orders-routing.module */
      58614);
      /* harmony import */


      var _update_order_update_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./update-order/update-order.component */
      85110);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _OrdersModule = /*#__PURE__*/_createClass(function _OrdersModule() {
        _classCallCheck(this, _OrdersModule);
      });

      _OrdersModule.ɵfac = function OrdersModule_Factory(t) {
        return new (t || _OrdersModule)();
      };

      _OrdersModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _OrdersModule
      });
      _OrdersModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_1__.BannersService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableModule, _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__.OrdersRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_OrdersModule, {
          declarations: [_list_order_list_orders_component__WEBPACK_IMPORTED_MODULE_2__.ListOrdersComponent, _update_order_update_order_component__WEBPACK_IMPORTED_MODULE_4__.UpdateOrderComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableModule, _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__.OrdersRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
        });
      })();
      /***/

    },

    /***/
    85110:
    /*!**************************************************************************!*\
      !*** ./src/app/components/orders/update-order/update-order.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UpdateOrderComponent": function UpdateOrderComponent() {
          return (
            /* binding */
            _UpdateOrderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! tslib */
      42321);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/data/models */
      82409);
      /* harmony import */


      var src_app_lib_data_models_orders_order_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/lib/data/models/orders/order.model */
      88285);
      /* harmony import */


      var src_app_lib_data_services_orders_order_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/lib/data/services/orders/order-details.service */
      63960);
      /* harmony import */


      var src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/lib/data/services/orders/orders.service */
      2924);
      /* harmony import */


      var src_app_shared_components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/components/viewimagecell/viewimagecell.component */
      18217);
      /* harmony import */


      var src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/components/modals/models/modal.model */
      5383);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/components/custom-view-cell-number/custom-view-cell-number.component */
      58676);
      /* harmony import */


      var src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/components/customViewCell/customViewCell.component */
      59314);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/lib/data/services/messages/message.service */
      20985);
      /* harmony import */


      var _shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/components/modals/modal-header/modal-header.component */
      71279);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng2-smart-table */
      98391);
      /* harmony import */


      var _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../shared/components/modals/modal-footer/modal-footer.component */
      36711);

      function UpdateOrderComponent_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Full Name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function UpdateOrderComponent_span_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Address is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function UpdateOrderComponent_span_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Email is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function UpdateOrderComponent_span_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Phone is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      var _UpdateOrderComponent = /*#__PURE__*/function () {
        function _UpdateOrderComponent(formBuilder, ngbActiveModal, ordersService, orderDetailsService, messageService) {
          _classCallCheck(this, _UpdateOrderComponent);

          this.formBuilder = formBuilder;
          this.ngbActiveModal = ngbActiveModal;
          this.ordersService = ordersService;
          this.orderDetailsService = orderDetailsService;
          this.messageService = messageService;
          this.order = new src_app_lib_data_models_orders_order_model__WEBPACK_IMPORTED_MODULE_1__.OrderModel();
          this.submitted = false;
          this.settings = {
            mode: 'external',
            actions: false,
            columns: {
              productImgUrl: {
                title: 'Image',
                type: 'custom',
                renderComponent: src_app_shared_components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_4__.ViewImageCellComponent
              },
              productName: {
                title: 'Product Name'
              },
              price: {
                title: 'Price',
                value: 'price',
                type: 'custom',
                renderComponent: src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_7__.CustomViewCellNumberComponent
              },
              quantity: {
                title: 'Quantity',
                value: 'quantity',
                type: 'custom',
                renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_8__.CustomViewCellComponent
              },
              totalAmount: {
                title: 'Total Amount',
                value: 'totalAmount',
                type: 'custom',
                renderComponent: src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_7__.CustomViewCellNumberComponent
              }
            }
          };
        }

        _createClass(_UpdateOrderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadFormItem();
            this.createModal();
            this.getOrderDetails();
          }
        }, {
          key: "loadFormItem",
          value: function loadFormItem() {
            var check = this.item.status == 'Rejected';
            this.orderForm = this.formBuilder.group({
              fullName: [{
                value: this.item.fullName,
                disabled: check
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
              address: [{
                value: this.item.address,
                disabled: check
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
              email: [{
                value: this.item.email,
                disabled: check
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
              phone: [{
                value: this.item.phone,
                disabled: check
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
              status: [{
                value: this.item.status,
                disabled: true
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]
            });
          }
        }, {
          key: "createModal",
          value: function createModal() {
            var _this5 = this;

            this.modalHeader = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_5__.ModalHeaderModel();
            this.modalHeader.title = "Update Order";
            this.modalFooter = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_5__.ModalFooterModel();
            this.modalFooter.buttons = [{
              color: 'btn btn-primary',
              title: 'close',
              onAction: function onAction(event) {
                _this5.ngbActiveModal.dismiss();
              }
            }];

            if (this.item.status == 'New') {
              this.modalFooter.buttons = [{
                color: 'btn btn-info',
                title: 'save',
                onAction: function onAction(event) {
                  _this5.save();
                }
              }, {
                color: 'btn btn-success',
                title: 'approve',
                onAction: function onAction(event) {
                  _this5.approve();
                }
              }, {
                color: 'btn btn-primary',
                title: 'reject',
                onAction: function onAction(event) {
                  _this5.reject();
                }
              }];
            }

            if (this.item.status == 'Approved') {
              this.modalFooter.buttons = [{
                color: 'btn btn-info',
                title: 'save',
                onAction: function onAction(event) {
                  _this5.save();
                }
              }, {
                color: 'btn btn-primary',
                title: 'close',
                onAction: function onAction(event) {
                  _this5.ngbActiveModal.dismiss();
                }
              }];
            }
          }
        }, {
          key: "orderFormControl",
          get: function get() {
            return this.orderForm.controls;
          }
        }, {
          key: "loadOrderModel",
          value: function loadOrderModel() {
            this.order = {
              fullName: this.orderForm.controls.fullName.value,
              address: this.orderForm.controls.address.value,
              email: this.orderForm.controls.email.value,
              phone: this.orderForm.controls.phone.value,
              status: this.item.status,
              id: this.item.id,
              totalAmount: this.item.totalAmount,
              totalItem: this.item.totalItem
            };
          }
        }, {
          key: "save",
          value: function save() {
            var _this6 = this;

            this.loadOrderModel();
            this.submitted = true;

            if (this.orderForm.valid) {
              this.ordersService.update(this.order).then(function () {
                _this6.messageService.notification('Order has been edited', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);
              })["catch"](function (er) {
                var _a, _b;

                _this6.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
              });
            }
          }
        }, {
          key: "approve",
          value: function approve() {
            var _this7 = this;

            this.loadOrderModel();
            this.order.status = 'Approved';
            this.messageService.confirm("Do you want to approve the order?", 'Yes', 'No', false).then(function (result) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var _this8 = this;

                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      if (result.isConfirmed) {
                        this.submitted = true;

                        if (this.orderForm.valid) {
                          this.ordersService.update(this.order).then(function () {
                            _this8.messageService.notification('Order has been approved', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);

                            _this8.ngbActiveModal.close();
                          })["catch"](function (er) {
                            var _a, _b;

                            _this8.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
                          });
                        }
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "reject",
          value: function reject() {
            var _this9 = this;

            this.loadOrderModel();
            this.order.status = 'Rejected';
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
              title: "Do you want to reject the order?",
              input: 'text',
              inputPlaceholder: 'Why?',
              showCancelButton: true,
              confirmButtonText: "Yes",
              icon: 'question'
            }).then(function (result) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this9, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                var _this10 = this;

                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      if (result.isConfirmed) {
                        this.submitted = true;
                        this.order.note = result.value;
                        console.log(result.value);

                        if (this.orderForm.valid) {
                          this.ordersService.update(this.order).then(function (res) {
                            _this10.messageService.notification('Order has been rejected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);

                            _this10.ngbActiveModal.close();
                          })["catch"](function (er) {
                            var _a, _b;

                            _this10.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR); // if (er.error.hasError) {
                            //   console.log(er.error.message);
                            // }

                          });
                        }
                      }

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, this);
              }));
            });
          }
        }, {
          key: "getOrderDetails",
          value: function getOrderDetails() {
            var _this11 = this;

            this.orderDetailsService.getByOrder(this.item.id, null).then(function (res) {
              if (!res.hasError) {
                _this11.orderDetails = res.data;
              }
            })["catch"](function (er) {
              var _a, _b;

              _this11.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR); // if (er.error.hasError) {
              //   console.log(er.error.message);
              // }

            });
          }
        }, {
          key: "close",
          value: function close(event) {
            this.ngbActiveModal.dismiss();
          }
        }]);

        return _UpdateOrderComponent;
      }();

      _UpdateOrderComponent.ɵfac = function UpdateOrderComponent_Factory(t) {
        return new (t || _UpdateOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_lib_data_services_orders_order_details_service__WEBPACK_IMPORTED_MODULE_2__.OrderDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_9__.MessageService));
      };

      _UpdateOrderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
        type: _UpdateOrderComponent,
        selectors: [["app-update-order"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService, src_app_lib_data_services_orders_order_details_service__WEBPACK_IMPORTED_MODULE_2__.OrderDetailsService])],
        decls: 53,
        vars: 10,
        consts: [[3, "data", "onAction"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-body"], ["id", "account", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "active", "show"], ["novalidate", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], [1, "col-xl-3", "col-md-4"], ["type", "text", "required", "", "formControlName", "fullName", 1, "form-control", "col-xl-8", "col-md-7"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "required", "", "formControlName", "address", 1, "form-control", "col-xl-8", "col-md-7"], ["type", "text", "required", "", "formControlName", "email", 1, "form-control", "col-xl-8", "col-md-7"], ["type", "text", "required", "", "formControlName", "phone", 1, "form-control", "col-xl-8", "col-md-7"], ["type", "text", "required", "", "formControlName", "status", "readonly", "", 1, "form-control", "col-xl-8", "col-md-7"], [1, "col-12"], [1, "vendor-table"], ["id", "batchDelete", 1, "custom-datatable", "media-datatable"], [1, "table-responsive"], [3, "settings", "source", "sourceChange"], [1, "text-danger"]],
        template: function UpdateOrderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-modal-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onAction", function UpdateOrderComponent_Template_app_modal_header_onAction_0_listener($event) {
              return ctx.close($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, " Full Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, UpdateOrderComponent_span_16_Template, 2, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, " Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, UpdateOrderComponent_span_23_Template, 2, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, " Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](29, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, UpdateOrderComponent_span_30_Template, 2, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, " Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](36, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, UpdateOrderComponent_span_37_Template, 2, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, " Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](43, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, "Order Details List");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "ng2-smart-table", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sourceChange", function UpdateOrderComponent_Template_ng2_smart_table_sourceChange_51_listener($event) {
              return ctx.orderDetails = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "app-modal-footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onAction", function UpdateOrderComponent_Template_app_modal_footer_onAction_52_listener() {
              return ctx.approve();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("data", ctx.modalHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.orderForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Order ", ctx.item.code, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.orderFormControl.fullName.touched || ctx.submitted) && (ctx.orderFormControl.fullName.errors == null ? null : ctx.orderFormControl.fullName.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.orderFormControl.address.touched || ctx.submitted) && (ctx.orderFormControl.address.errors == null ? null : ctx.orderFormControl.address.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.orderFormControl.email.touched || ctx.submitted) && (ctx.orderFormControl.email.errors == null ? null : ctx.orderFormControl.email.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.orderFormControl.phone.touched || ctx.submitted) && (ctx.orderFormControl.phone.errors == null ? null : ctx.orderFormControl.phone.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.orderDetails);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("data", ctx.modalFooter);
          }
        },
        directives: [_shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_10__.ModalHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, ng2_smart_table__WEBPACK_IMPORTED_MODULE_17__.Ng2SmartTableComponent, _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_11__.ModalFooterComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    88285:
    /*!*******************************************************!*\
      !*** ./src/app/lib/data/models/orders/order.model.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderModel": function OrderModel() {
          return (
            /* binding */
            _OrderModel
          );
        },

        /* harmony export */
        "OrderDetailModel": function OrderDetailModel() {
          return (
            /* binding */
            _OrderDetailModel
          );
        }
        /* harmony export */

      });

      var _OrderModel = /*#__PURE__*/_createClass(function _OrderModel() {
        _classCallCheck(this, _OrderModel);

        this.firstName = '';
        this.lastName = '';
        this.address = '';
        this.phone = '';
        this.email = '';
        this.note = '';
        this.status = 'New';
        this.totalAmount = 0;
        this.totalItem = 0;
        this.orderDetails = [];
      });

      var _OrderDetailModel = /*#__PURE__*/_createClass(function _OrderDetailModel() {
        _classCallCheck(this, _OrderDetailModel);

        // orderId:string;
        this.productName = '';
        this.productId = '';
        this.price = 0;
        this.quantity = 0;
        this.totalAmount = 0;
        this.productImgUrl = '';
      });
      /***/

    },

    /***/
    63960:
    /*!*******************************************************************!*\
      !*** ./src/app/lib/data/services/orders/order-details.service.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderDetailsService": function OrderDetailsService() {
          return (
            /* binding */
            _OrderDetailsService
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

      var _OrderDetailsService = /*#__PURE__*/function () {
        function _OrderDetailsService(httpClient) {
          _classCallCheck(this, _OrderDetailsService);

          this.httpClient = httpClient;
          this.url = '/api/order-detail';
        }

        _createClass(_OrderDetailsService, [{
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
          value: function _delete(id) {
            var url = "".concat(this.url, "?id=").concat(id);
            return this.httpClient.deleteObservable(url).toPromise();
          }
        }, {
          key: "getByOrder",
          value: function getByOrder(id, request) {
            var url = "".concat(this.url, "/order?id=").concat(id);
            return this.httpClient.getObservable(url, request).toPromise();
          }
        }]);

        return _OrderDetailsService;
      }();

      _OrderDetailsService.ɵfac = function OrderDetailsService_Factory(t) {
        return new (t || _OrderDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__.HttpClientService));
      };

      _OrderDetailsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _OrderDetailsService,
        factory: _OrderDetailsService.ɵfac
      });
      /***/
    },

    /***/
    2924:
    /*!************************************************************!*\
      !*** ./src/app/lib/data/services/orders/orders.service.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrdersService": function OrdersService() {
          return (
            /* binding */
            _OrdersService
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

      var _OrdersService = /*#__PURE__*/function () {
        function _OrdersService(httpClient) {
          _classCallCheck(this, _OrdersService);

          this.httpClient = httpClient;
          this.url = '/api/order';
        }

        _createClass(_OrdersService, [{
          key: "get",
          value: function get(request) {
            return this.httpClient.getObservable(this.url, request).toPromise();
          }
        }, {
          key: "getDetails",
          value: function getDetails(request) {
            return this.httpClient.getObservable(this.url + '-detail', request).toPromise();
          }
        }, {
          key: "getByStatus",
          value: function getByStatus(request, status) {
            return this.httpClient.getObservable(this.url + '/by-status?status=' + status, request).toPromise();
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
        }]);

        return _OrdersService;
      }();

      _OrdersService.ɵfac = function OrdersService_Factory(t) {
        return new (t || _OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__.HttpClientService));
      };

      _OrdersService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _OrdersService,
        factory: _OrdersService.ɵfac
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_orders_orders_module_ts-es5.js.map