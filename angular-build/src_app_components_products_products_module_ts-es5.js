(function () {
  "use strict";

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkmultikart_backend"] = self["webpackChunkmultikart_backend"] || []).push([["src_app_components_products_products_module_ts"], {
    /***/
    27951:
    /*!******************************************************************************!*\
      !*** ./src/app/components/products/list-products/list-products.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ListProductsComponent": function ListProductsComponent() {
          return (
            /* binding */
            _ListProductsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/data/models */
      82409);
      /* harmony import */


      var src_app_lib_data_services_products_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/lib/data/services/products/product.service */
      22197);
      /* harmony import */


      var src_app_shared_components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/components/viewimagecell/viewimagecell.component */
      18217);
      /* harmony import */


      var src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/components/custom-view-cell-number/custom-view-cell-number.component */
      58676);
      /* harmony import */


      var src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/components/customViewCell/customViewCell.component */
      59314);
      /* harmony import */


      var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../product-details/product-details.component */
      63070);
      /* harmony import */


      var src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/components/custom-view-cell-string/custom-view-cell-string.component */
      57870);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/lib/data/services/messages/message.service */
      20985);
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng2-smart-table */
      98391);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/components/paging-server-view/paging-server-view.component */
      46913);

      function ListProductsComponent_app_paging_server_view_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-paging-server-view", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("page", function ListProductsComponent_app_paging_server_view_9_Template_app_paging_server_view_page_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r1.onPage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx_r0.data);
        }
      }

      var _ListProductsComponent = /*#__PURE__*/function () {
        function _ListProductsComponent(modalService, productService, messageService) {
          _classCallCheck(this, _ListProductsComponent);

          this.modalService = modalService;
          this.productService = productService;
          this.messageService = messageService;
          this.params = {};
          this.closeResult = '';
          this.settings = {
            mode: 'external',
            actions: {
              position: 'right'
            },
            columns: {
              imageUrl: {
                title: 'Image',
                type: 'custom',
                renderComponent: src_app_shared_components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_2__.ViewImageCellComponent,
                filter: false
              },
              name: {
                title: 'Name',
                type: 'custom',
                renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_6__.CustomViewCellStringComponent
              },
              description: {
                title: 'Product Details',
                filter: false
              },
              categoryName: {
                title: 'Category Name',
                filter: false
              },
              isFeatured: {
                title: 'Is Featured',
                filter: false
              },
              price: {
                type: 'custom',
                title: 'Price',
                renderComponent: src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_3__.CustomViewCellNumberComponent,
                filter: false
              },
              displayOrder: {
                title: 'Display Order',
                type: 'custom',
                renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_4__.CustomViewCellComponent,
                filter: false
              }
            }
          };
          this.params.pageIndex = 0;
          this.fetch();
        }

        _createClass(_ListProductsComponent, [{
          key: "delete",
          value: function _delete(event) {
            var _this = this;

            var product = event.data;
            this.messageService.confirm('Are you sure to delete this item?', 'Yes').then(function (res) {
              if (res.isConfirmed) {
                _this.productService["delete"](product).then(function () {
                  _this.messageService.notification('Delete successful', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);

                  _this.fetch();
                })["catch"](function (er) {
                  var _a, _b;

                  return _this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
                });
              }
            });
          }
        }, {
          key: "openPopup",
          value: function openPopup(item) {
            var _this2 = this;

            var modalRef = this.modalService.open(_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__.ProductDetailsComponent, {
              size: 'xl'
            });
            modalRef.componentInstance.item = item === null || item === void 0 ? void 0 : item.data;
            return modalRef.result.then(function () {
              _this2.fetch();
            }, function (reason) {
              _this2.closeResult = "Dismissed ".concat(_this2.getDismissReason(reason));
            });
          }
        }, {
          key: "fetch",
          value: function fetch() {
            var _this3 = this;

            this.productService.get({
              params: this.params
            }).then(function (res) {
              if (!res.hasError) {
                _this3.products = res.data.results;
                _this3.data = res.data;
              }
            })["catch"](function (er) {
              var _a, _b;

              _this3.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR); // if (er.error.hasError) {
              //   // console.log(er.error.message);
              // }

            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.ModalDismissReasons.ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.ModalDismissReasons.BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onPage",
          value: function onPage(event) {
            this.params.pageIndex = event;
            this.fetch();
          }
        }]);

        return _ListProductsComponent;
      }();

      _ListProductsComponent.ɵfac = function ListProductsComponent_Factory(t) {
        return new (t || _ListProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_lib_data_services_products_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_7__.MessageService));
      };

      _ListProductsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: _ListProductsComponent,
        selectors: [["app-list-products"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([src_app_lib_data_services_products_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService])],
        decls: 10,
        vars: 3,
        consts: [[1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "card-body", "vendor-table"], ["id", "batchDelete", 1, "custom-datatable", "media-datatable"], [1, "table-responsive"], [3, "settings", "source", "edit", "create", "delete"], [3, "data", "page", 4, "ngIf"], [3, "data", "page"]],
        template: function ListProductsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Product Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ng2-smart-table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("edit", function ListProductsComponent_Template_ng2_smart_table_edit_8_listener($event) {
              return ctx.openPopup($event);
            })("create", function ListProductsComponent_Template_ng2_smart_table_create_8_listener() {
              return ctx.openPopup(null);
            })("delete", function ListProductsComponent_Template_ng2_smart_table_delete_8_listener($event) {
              return ctx["delete"]($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ListProductsComponent_app_paging_server_view_9_Template, 1, 1, "app-paging-server-view", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.products);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.totalPage) > 1);
          }
        },
        directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_11__.Ng2SmartTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_8__.PagingServerViewComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    63070:
    /*!**********************************************************************************!*\
      !*** ./src/app/components/products/product-details/product-details.component.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductDetailsComponent": function ProductDetailsComponent() {
          return (
            /* binding */
            _ProductDetailsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/data/models */
      82409);
      /* harmony import */


      var src_app_lib_data_services_categories_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/lib/data/services/categories/category.service */
      19865);
      /* harmony import */


      var src_app_lib_data_services_products_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/lib/data/services/products/product.service */
      22197);
      /* harmony import */


      var src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/components/modals/models/modal.model */
      5383);
      /* harmony import */


      var src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/lib/customCkeditor/ckeditor5-build-classic */
      98722);
      /* harmony import */


      var src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var src_app_lib_ckeditor_Base64Upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/lib/@ckeditor/Base64Upload */
      4697);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/lib/data/services/messages/message.service */
      20985);
      /* harmony import */


      var _shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/components/modals/modal-header/modal-header.component */
      71279);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/components/upload-file/upload-file.component */
      75288);
      /* harmony import */


      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-angular */
      69570);
      /* harmony import */


      var _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/components/modals/modal-footer/modal-footer.component */
      36711); // import * as DecoupledEditor from 'src/app/lib/customCkeditor/ckeditor5-build-decoupled-document';


      function ProductDetailsComponent_span_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function ProductDetailsComponent_span_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Max: 50 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function ProductDetailsComponent_span_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Min: 3 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function ProductDetailsComponent_span_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function ProductDetailsComponent_span_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Max: 300 character");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function ProductDetailsComponent_span_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function ProductDetailsComponent_span_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Value must in range (1 ~ 5000000)");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function ProductDetailsComponent_span_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Value must in range (1 ~ 5000000)");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function ProductDetailsComponent_span_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function ProductDetailsComponent_option_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", category_r12.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", category_r12.name, " ");
        }
      }

      function ProductDetailsComponent_span_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function ProductDetailsComponent_span_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid ": a0
        };
      };

      var _ProductDetailsComponent = /*#__PURE__*/function () {
        function _ProductDetailsComponent(formBuilder, productService, ngbActiveModal, categoryService, messageService) {
          _classCallCheck(this, _ProductDetailsComponent);

          this.formBuilder = formBuilder;
          this.productService = productService;
          this.ngbActiveModal = ngbActiveModal;
          this.categoryService = categoryService;
          this.messageService = messageService;
          this.regex = '^[a-z|A-Z|ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ|0-9 ,-.]*$';
          this.submitted = false;
          this.editor = src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__;
          this.editorConfig = {
            extraPlugins: [src_app_lib_ckeditor_Base64Upload__WEBPACK_IMPORTED_MODULE_5__["default"]]
          };
          this.modalFile = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_3__.ModalFile();
          this.modalFile.typeFile = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_3__.TypeFile.IMAGE;
          this.modalFile.multiBoolen = true;
          this.modalFile.enityType = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_3__.EntityType.PRODUCT;
        }

        _createClass(_ProductDetailsComponent, [{
          key: "onReady",
          value: function onReady(editor) {
            editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {}
        }, {
          key: "productFormsControl",
          get: function get() {
            return this.productsForm.controls;
          }
        }, {
          key: "fetchCategory",
          value: function fetchCategory() {
            var _this4 = this;

            this.categoryService.get(null).then(function (res) {
              if (!res.hasError) {
                _this4.categories = res.data.results.filter(function (r) {
                  return r.isDeleted == false;
                });
              }
            })["catch"](function (er) {
              var _a, _b;

              _this4.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR); // if (er.error.hasError) {
              //   console.log(er.error.message);
              // }

            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this5 = this;

            if (this.productsForm.invalid) {
              this.messageService.alert('Invalid Form make sure you input valid value !', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
              this.submitted = true;
              return;
            }

            this.submitted = true;
            this.product = {
              name: this.productsForm.value.name,
              description: this.productsForm.value.description,
              contentHTML: this.productsForm.value.contentHTML,
              imageUrl: this.productsForm.value.imageUrl,
              price: this.productsForm.value.price,
              categoryName: this.categories.filter(function (it) {
                return it.id == _this5.productsForm.value.category;
              })[0].name,
              categoryId: this.productsForm.value.category,
              displayOrder: this.productsForm.value.displayOrder,
              hasDisplayHomePage: this.productsForm.value.hasDisplayHomePage,
              isFeatured: this.productsForm.value.isFeatured,
              id: this.item ? this.item.id : '',
              files: this.modalFile.listFile
            };
            return this.productService.save(this.product).then(function () {
              _this5.messageService.notification(_this5.item ? 'Product has been updated' : 'Product has been created', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);

              _this5.ngbActiveModal.close();
            })["catch"](function (er) {
              var _a, _b;

              _this5.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
            });
          }
        }, {
          key: "loadItem",
          value: function loadItem() {
            this.productsForm = this.formBuilder.group({
              name: [this.item ? this.item.name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(this.regex)]],
              description: [this.item ? this.item.description : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(300), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(this.regex)]],
              contentHTML: [this.item ? this.item.contentHTML : ''],
              imageUrl: [this.item ? this.item.imageUrl : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
              price: [this.item ? this.item.price : this.item, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.max(5000000), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern('[0-9]*')]],
              category: [this.item ? this.item.categoryId : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
              displayOrder: [this.item ? this.item.displayOrder : 1, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.max(1000000), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern('[0-9]+')]],
              hasDisplayHomePage: [this.item ? this.item.hasDisplayHomePage : false],
              isFeatured: [this.item ? this.item.isFeatured : false]
            });
            this.modalHeader = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_3__.ModalHeaderModel();
            this.modalHeader.title = this.item ? "Update ".concat(this.item.name) : "Add New Product";
            this.modalFooter = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_3__.ModalFooterModel();
            this.modalFooter.title = 'Save';
          }
        }, {
          key: "close",
          value: function close(event) {
            this.ngbActiveModal.dismiss();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.fetchCategory();
            this.loadItem();

            if (this.item) {
              this.fileURL = [];
              this.item.imageUrl.split(',').forEach(function (it) {
                _this6.fileURL.push(it);
              });
            }
          }
        }, {
          key: "onChangeData",
          value: function onChangeData(event) {
            var _this7 = this;

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
                if (e.includes(event.remove)) {
                  _this7.fileURL.splice(i, 1);
                }
              });
            }

            if (event.removeAll) {
              this.fileURL = [];
            }

            this.productsForm.controls.imageUrl.setValue(this.fileURL.join(','));
          }
        }]);

        return _ProductDetailsComponent;
      }();

      _ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) {
        return new (t || _ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_lib_data_services_products_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_lib_data_services_categories_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_6__.MessageService));
      };

      _ProductDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: _ProductDetailsComponent,
        selectors: [["app-product-details"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([src_app_lib_data_services_products_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService, src_app_lib_data_services_categories_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]],
        decls: 77,
        vars: 37,
        consts: [[3, "data", "onAction"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "card", "tab2-card"], [1, "card-body"], ["id", "account", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "active", "show"], ["novalidate", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "col-lg-6"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom0", "type", "text", "required", "", "formControlName", "name", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], [1, "invalid-feedback", "col-md-3", "offset-md-3"], ["class", "text-danger", 4, "ngIf"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom1", "type", "text", "required", "", "formControlName", "description", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["for", "validationCustom5", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom5", "type", "number", "required", "", "formControlName", "price", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["for", "validationCustom7", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom7", "type", "number", "required", "", "formControlName", "displayOrder", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["for", "validationCustom6", 1, "col-xl-3", "col-md-4"], ["formControlName", "category", 3, "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], [1, "invalid-feedback", "col-md-3", "offset-md-0"], ["for", "validationCustom8", 1, "col-xl-7", "col-md-4"], ["id", "validationCustom8", "type", "checkbox", "formControlName", "hasDisplayHomePage", 1, "form-check-input", "col-xl-10", "col-md-6"], ["for", "validationCustom9", 1, "col-xl-7", "col-md-4"], ["id", "validationCustom9", "type", "checkbox", "formControlName", "isFeatured", 1, "form-check-input", "col-xl-10", "col-md-6"], [1, "col-lg-6", "col-md-6", "col-sm-6"], ["id", "validationCustom4", "type", "text", "formControlName", "imageUrl", "required", "", "hidden", "", 1, "form-control", "col-lg-6", "col-md-6", "col-sm-6", 3, "ngClass"], ["styleFile", "width: 350px; height: 300px;", "sizeImage", "650 x 700", 3, "data", "fileURL", "onChange"], ["for", "validationCustom3", 1, "col-xl-6", "col-md-4"], ["id", "validationCustom3", "type", "text", "formControlName", "contentHTML", 1, "col-xl-12", "col-md-12", "p-0", 3, "editor", "config", "ready"], [1, "text-danger"], [3, "value"]],
        template: function ProductDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-modal-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onAction", function ProductDetailsComponent_Template_app_modal_header_onAction_0_listener($event) {
              return ctx.close($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, " Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, ProductDetailsComponent_span_19_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, ProductDetailsComponent_span_20_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, ProductDetailsComponent_span_21_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, " Product Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, ProductDetailsComponent_span_29_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, ProductDetailsComponent_span_30_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, " Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, ProductDetailsComponent_span_38_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, ProductDetailsComponent_span_39_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, ProductDetailsComponent_span_40_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, " Display Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](46, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, ProductDetailsComponent_span_48_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, " Category Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "select", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](55, ProductDetailsComponent_option_55_Template, 2, 2, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, ProductDetailsComponent_span_57_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, " Display Home Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](61, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, " Is Featured");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](65, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](68, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "app-upload-file", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onChange", function ProductDetailsComponent_Template_app_upload_file_onChange_69_listener($event) {
              return ctx.onChangeData($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](71, ProductDetailsComponent_span_71_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, " Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "ckeditor", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ready", function ProductDetailsComponent_Template_ckeditor_ready_75_listener($event) {
              return ctx.onReady($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "app-modal-footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onAction", function ProductDetailsComponent_Template_app_modal_footer_onAction_76_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", ctx.modalHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.productsForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](25, _c0, (ctx.productFormsControl.name.touched || ctx.submitted) && (ctx.productFormsControl.name.errors == null ? null : ctx.productFormsControl.name.errors.required) || ctx.productFormsControl.name.hasError("maxlength") || ctx.productFormsControl.name.hasError("minlength")));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.productFormsControl.name.touched || ctx.submitted) && (ctx.productFormsControl.name.errors == null ? null : ctx.productFormsControl.name.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.productFormsControl.name.hasError("maxlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.productFormsControl.name.hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](27, _c0, (ctx.productFormsControl.description.touched || ctx.submitted) && (ctx.productFormsControl.description.errors == null ? null : ctx.productFormsControl.description.errors.required) || ctx.productFormsControl.description.hasError("maxlength")));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.productFormsControl.description.touched || ctx.submitted) && (ctx.productFormsControl.description.errors == null ? null : ctx.productFormsControl.description.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.productFormsControl.description.hasError("maxlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](29, _c0, (ctx.productFormsControl.price.touched || ctx.submitted) && (ctx.productFormsControl.price.errors == null ? null : ctx.productFormsControl.price.errors.required) || (ctx.productFormsControl.price.errors == null ? null : ctx.productFormsControl.price.errors.max) || (ctx.productFormsControl.price.errors == null ? null : ctx.productFormsControl.price.errors.min)));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.productFormsControl.price.touched || ctx.submitted) && (ctx.productFormsControl.price.errors == null ? null : ctx.productFormsControl.price.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.productFormsControl.price.errors == null ? null : ctx.productFormsControl.price.errors.max);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.productFormsControl.price.errors == null ? null : ctx.productFormsControl.price.errors.min);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](31, _c0, (ctx.productFormsControl.displayOrder.touched || ctx.submitted) && (ctx.productFormsControl.displayOrder.errors == null ? null : ctx.productFormsControl.displayOrder.errors.required)));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.productFormsControl.displayOrder.touched || ctx.submitted) && (ctx.productFormsControl.displayOrder.errors == null ? null : ctx.productFormsControl.displayOrder.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](33, _c0, (ctx.productFormsControl.category.touched || ctx.submitted) && (ctx.productFormsControl.category.errors == null ? null : ctx.productFormsControl.category.errors.required)));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.productFormsControl.category.touched || ctx.submitted) && (ctx.productFormsControl.category.errors == null ? null : ctx.productFormsControl.category.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](35, _c0, (ctx.productFormsControl.imageUrl.touched || ctx.submitted) && (ctx.productFormsControl.imageUrl.errors == null ? null : ctx.productFormsControl.imageUrl.errors.required)));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", ctx.modalFile)("fileURL", ctx.fileURL);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.productFormsControl.imageUrl.touched || ctx.submitted) && (ctx.productFormsControl.imageUrl.errors == null ? null : ctx.productFormsControl.imageUrl.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("editor", ctx.editor)("config", ctx.editorConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", ctx.modalFooter);
          }
        },
        directives: [_shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_7__.ModalHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_8__.UploadFileComponent, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__.CKEditorComponent, _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_9__.ModalFooterComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    73639:
    /*!****************************************************************!*\
      !*** ./src/app/components/products/products-routing.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductRoutingModule": function ProductRoutingModule() {
          return (
            /* binding */
            _ProductRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./list-products/list-products.component */
      27951);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        children: [{
          path: 'list-products',
          component: _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_0__.ListProductsComponent,
          data: {
            title: "Product List",
            breadcrumb: "Product List"
          }
        }]
      }];

      var _ProductRoutingModule = /*#__PURE__*/_createClass(function _ProductRoutingModule() {
        _classCallCheck(this, _ProductRoutingModule);
      });

      _ProductRoutingModule.ɵfac = function ProductRoutingModule_Factory(t) {
        return new (t || _ProductRoutingModule)();
      };

      _ProductRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ProductRoutingModule
      });
      _ProductRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ProductRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    39493:
    /*!********************************************************!*\
      !*** ./src/app/components/products/products.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductModule": function ProductModule() {
          return (
            /* binding */
            _ProductModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-angular */
      69570);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-smart-table */
      98391);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);
      /* harmony import */


      var _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./list-products/list-products.component */
      27951);
      /* harmony import */


      var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product-details/product-details.component */
      63070);
      /* harmony import */


      var _products_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./products-routing.module */
      73639);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ProductModule = /*#__PURE__*/_createClass(function _ProductModule() {
        _classCallCheck(this, _ProductModule);
      });

      _ProductModule.ɵfac = function ProductModule_Factory(t) {
        return new (t || _ProductModule)();
      };

      _ProductModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _ProductModule
      });
      _ProductModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _products_routing_module__WEBPACK_IMPORTED_MODULE_3__.ProductRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModalModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__.Ng2SmartTableModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__.CKEditorModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_ProductModule, {
          declarations: [_list_products_list_products_component__WEBPACK_IMPORTED_MODULE_1__.ListProductsComponent, _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__.ProductDetailsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _products_routing_module__WEBPACK_IMPORTED_MODULE_3__.ProductRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModalModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__.Ng2SmartTableModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__.CKEditorModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_components_products_products_module_ts-es5.js.map