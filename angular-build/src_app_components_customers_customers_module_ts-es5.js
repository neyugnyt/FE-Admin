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

  (self["webpackChunkmultikart_backend"] = self["webpackChunkmultikart_backend"] || []).push([["src_app_components_customers_customers_module_ts"], {
    /***/
    12299:
    /*!*************************************************************************************!*\
      !*** ./src/app/components/customers/customer-details/customer-details.component.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomerDetailsComponent": function CustomerDetailsComponent() {
          return (
            /* binding */
            _CustomerDetailsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/data/models */
      82409);
      /* harmony import */


      var src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/lib/data/services */
      19764);
      /* harmony import */


      var src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/components/modals/models/modal.model */
      5383);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/lib/data/services/messages/message.service */
      20985);
      /* harmony import */


      var _shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/components/modals/modal-header/modal-header.component */
      71279);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/components/upload-file/upload-file.component */
      75288);
      /* harmony import */


      var _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/components/modals/modal-footer/modal-footer.component */
      36711);

      function CustomerDetailsComponent_div_16_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Username is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function CustomerDetailsComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CustomerDetailsComponent_div_16_div_1_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.f.username.errors.required);
        }
      }

      function CustomerDetailsComponent_div_17_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function CustomerDetailsComponent_div_17_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CustomerDetailsComponent_div_17_div_6_div_1_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.f.password.errors.required);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      function CustomerDetailsComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, CustomerDetailsComponent_div_17_div_6_Template, 2, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, ctx_r1.submitted && ctx_r1.f.password.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ctx_r1.f.password.errors);
        }
      }

      function CustomerDetailsComponent_div_24_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " FirstName is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function CustomerDetailsComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CustomerDetailsComponent_div_24_div_1_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.f.firstName.errors.required);
        }
      }

      function CustomerDetailsComponent_div_31_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " LastName is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function CustomerDetailsComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CustomerDetailsComponent_div_31_div_1_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.f.lastName.errors.required);
        }
      }

      function CustomerDetailsComponent_div_38_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function CustomerDetailsComponent_div_38_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Wrong type email");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function CustomerDetailsComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CustomerDetailsComponent_div_38_div_1_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CustomerDetailsComponent_div_38_div_2_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.f.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.f.email.errors.email);
        }
      }

      function CustomerDetailsComponent_div_43_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Address is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function CustomerDetailsComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CustomerDetailsComponent_div_43_div_1_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.f.address.errors.required);
        }
      }

      function CustomerDetailsComponent_div_48_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Phone is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function CustomerDetailsComponent_div_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CustomerDetailsComponent_div_48_div_1_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.f.phone.errors.required);
        }
      }

      function CustomerDetailsComponent_div_55_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Image is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function CustomerDetailsComponent_div_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CustomerDetailsComponent_div_55_div_1_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.f.imageUrl.errors.required);
        }
      }

      var _CustomerDetailsComponent = /*#__PURE__*/function () {
        function _CustomerDetailsComponent(formBuilder, customerService, ngbActiveModal, messageService) {
          _classCallCheck(this, _CustomerDetailsComponent);

          this.formBuilder = formBuilder;
          this.customerService = customerService;
          this.ngbActiveModal = ngbActiveModal;
          this.messageService = messageService;
          this.submitted = false;
          this.modalFile = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__.ModalFile();
          this.modalFile.typeFile = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__.TypeFile.IMAGE;
          this.modalFile.multiBoolen = false;
          this.modalFile.enityType = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__.EntityType.USER;
        }

        _createClass(_CustomerDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadItem();

            if (this.item) {
              this.fileURL = [];
              this.fileURL.push(this.item.imageUrl);
            }
          }
        }, {
          key: "loadItem",
          value: function loadItem() {
            this.usersForm = this.formBuilder.group({
              username: [this.item ? this.item.username : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
              password: [this.item ? this.item.password : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
              email: [this.item ? this.item.email : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]],
              firstName: [this.item ? this.item.firstName : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
              lastName: [this.item ? this.item.lastName : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
              imageUrl: [this.item ? this.item.imageUrl : ''],
              address: [this.item ? this.item.address : ''],
              phone: [this.item ? this.item.phone : '']
            });
            this.modalHeader = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__.ModalHeaderModel();
            this.modalHeader.title = this.item ? "Update ".concat(this.item.username) : "Add";
            this.modalFooter = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__.ModalFooterModel();
            this.modalFooter.title = 'Save';
          }
        }, {
          key: "f",
          get: function get() {
            return this.usersForm.controls;
          }
        }, {
          key: "save",
          value: function save() {
            this.submitted = true;

            if (this.usersForm.invalid) {
              // console.log(this.usersForm);
              return;
            }

            this.user = {
              username: this.usersForm.value.username,
              password: this.usersForm.value.password,
              email: this.usersForm.value.email,
              firstName: this.usersForm.value.firstName,
              lastName: this.usersForm.value.lastName,
              imageUrl: this.usersForm.value.imageUrl,
              id: this.item ? this.item.id : '',
              files: this.modalFile.listFile,
              address: this.usersForm.value.address,
              phone: this.usersForm.value.phone
            };
            this.callServiceToSave();
          }
        }, {
          key: "callServiceToSave",
          value: function callServiceToSave() {
            var _this = this;

            this.customerService.save(this.user).then(function () {
              _this.messageService.notification(_this.item ? 'Profile has been updated' : 'Profile has been created', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);

              _this.ngbActiveModal.close();
            })["catch"](function (er) {
              var _a, _b;

              _this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
            });
          }
        }, {
          key: "close",
          value: function close(event) {
            this.ngbActiveModal.dismiss();
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
                if (e.includes(event.remove)) {
                  _this2.fileURL.splice(i, 1);
                }
              });
            }

            if (event.removeAll) {
              this.fileURL = [];
            }

            this.usersForm.controls.imageUrl.setValue(this.fileURL.join(','));
          }
        }]);

        return _CustomerDetailsComponent;
      }();

      _CustomerDetailsComponent.ɵfac = function CustomerDetailsComponent_Factory(t) {
        return new (t || _CustomerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_1__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService));
      };

      _CustomerDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _CustomerDetailsComponent,
        selectors: [["app-customer-details"]],
        inputs: {
          item: "item"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_1__.CustomerService])],
        decls: 57,
        vars: 34,
        consts: [[3, "data", "onAction"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-body"], ["id", "account", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "active", "show"], ["novalidate", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], ["type", "text", "formControlName", "username", "autocomplete", "username", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["class", "invalid-feedback col-md-5 offset-md-3", 4, "ngIf"], ["class", "form-group row", 4, "ngIf"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["type", "text", "formControlName", "firstName", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["type", "text", "formControlName", "lastName", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["type", "text", "formControlName", "email", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["type", "text", "formControlName", "address", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["type", "text", "formControlName", "phone", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["type", "text", "formControlName", "imageUrl", "hidden", "", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], [1, "col-xl-8", "col-md-7", "p-0"], ["styleFile", "width: 100%; height: auto;", 3, "data", "fileURL", "onChange"], [1, "invalid-feedback", "col-md-5", "offset-md-3"], [4, "ngIf"], ["type", "password", "formControlName", "password", "autocomplete", "new-password", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"]],
        template: function CustomerDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-modal-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onAction", function CustomerDetailsComponent_Template_app_modal_header_onAction_0_listener($event) {
              return ctx.close($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Customer Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, CustomerDetailsComponent_div_16_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, CustomerDetailsComponent_div_17_Template, 7, 4, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " FirstName");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, CustomerDetailsComponent_div_24_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " LastName");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, CustomerDetailsComponent_div_31_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, " Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, CustomerDetailsComponent_div_38_Template, 3, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, CustomerDetailsComponent_div_43_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, " Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, CustomerDetailsComponent_div_48_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, " Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "app-upload-file", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function CustomerDetailsComponent_Template_app_upload_file_onChange_54_listener($event) {
              return ctx.onChangeData($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, CustomerDetailsComponent_div_55_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "app-modal-footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onAction", function CustomerDetailsComponent_Template_app_modal_footer_onAction_56_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.modalHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.usersForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](20, _c0, ctx.submitted && ctx.f.username.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.item);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](22, _c0, ctx.submitted && ctx.f.firstName.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.firstName.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](24, _c0, ctx.submitted && ctx.f.lastName.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.lastName.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](26, _c0, ctx.submitted && ctx.f.email.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](28, _c0, ctx.submitted && ctx.f.address.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.address.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](30, _c0, ctx.submitted && ctx.f.phone.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.phone.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](32, _c0, ctx.submitted && ctx.f.imageUrl.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.modalFile)("fileURL", ctx.fileURL);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.imageUrl.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.modalFooter);
          }
        },
        directives: [_shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_4__.ModalHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_5__.UploadFileComponent, _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_6__.ModalFooterComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    69624:
    /*!******************************************************************!*\
      !*** ./src/app/components/customers/customers-routing.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomerRoutingModule": function CustomerRoutingModule() {
          return (
            /* binding */
            _CustomerRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./customer-details/customer-details.component */
      12299);
      /* harmony import */


      var _list_customers_list_customers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./list-customers/list-customers.component */
      55522);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        children: [{
          path: 'list-customers',
          component: _list_customers_list_customers_component__WEBPACK_IMPORTED_MODULE_1__.ListCustomersComponent,
          data: {
            title: "Customer List",
            breadcrumb: "Customer List"
          }
        }, {
          path: 'create-customers',
          component: _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_0__.CustomerDetailsComponent,
          data: {
            title: "Create Customer",
            breadcrumb: "Create Customer"
          }
        }]
      }];

      var _CustomerRoutingModule = /*#__PURE__*/_createClass(function _CustomerRoutingModule() {
        _classCallCheck(this, _CustomerRoutingModule);
      });

      _CustomerRoutingModule.ɵfac = function CustomerRoutingModule_Factory(t) {
        return new (t || _CustomerRoutingModule)();
      };

      _CustomerRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _CustomerRoutingModule
      });
      _CustomerRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_CustomerRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    58004:
    /*!**********************************************************!*\
      !*** ./src/app/components/customers/customers.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomerModule": function CustomerModule() {
          return (
            /* binding */
            _CustomerModule
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


      var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./customer-details/customer-details.component */
      12299);
      /* harmony import */


      var _customers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./customers-routing.module */
      69624);
      /* harmony import */


      var _list_customers_list_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-customers/list-customers.component */
      55522);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _CustomerModule = /*#__PURE__*/_createClass(function _CustomerModule() {
        _classCallCheck(this, _CustomerModule);
      });

      _CustomerModule.ɵfac = function CustomerModule_Factory(t) {
        return new (t || _CustomerModule)();
      };

      _CustomerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _CustomerModule
      });
      _CustomerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _customers_routing_module__WEBPACK_IMPORTED_MODULE_2__.CustomerRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModalModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__.Ng2SmartTableModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__.CKEditorModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_CustomerModule, {
          declarations: [_list_customers_list_customers_component__WEBPACK_IMPORTED_MODULE_3__.ListCustomersComponent, _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_1__.CustomerDetailsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _customers_routing_module__WEBPACK_IMPORTED_MODULE_2__.CustomerRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModalModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__.Ng2SmartTableModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__.CKEditorModule]
        });
      })();
      /***/

    },

    /***/
    55522:
    /*!*********************************************************************************!*\
      !*** ./src/app/components/customers/list-customers/list-customers.component.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ListCustomersComponent": function ListCustomersComponent() {
          return (
            /* binding */
            _ListCustomersComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/data/models */
      82409);
      /* harmony import */


      var src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/lib/data/services */
      19764);
      /* harmony import */


      var src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/components/custom-view-cell-string/custom-view-cell-string.component */
      57870);
      /* harmony import */


      var src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/components/customViewCell/customViewCell.component */
      59314);
      /* harmony import */


      var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../customer-details/customer-details.component */
      12299);
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


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng2-smart-table */
      98391);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/components/paging-server-view/paging-server-view.component */
      46913);

      function ListCustomersComponent_app_paging_server_view_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-paging-server-view", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function ListCustomersComponent_app_paging_server_view_9_Template_app_paging_server_view_page_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r1.onPage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx_r0.data);
        }
      }

      var _ListCustomersComponent = /*#__PURE__*/function () {
        function _ListCustomersComponent(modalService, customerService, messageService) {
          _classCallCheck(this, _ListCustomersComponent);

          this.modalService = modalService;
          this.customerService = customerService;
          this.messageService = messageService;
          this.closeResult = '';
          this.params = {};
          this.settings = {
            mode: 'external',
            actions: {
              position: 'right'
            },
            columns: {
              username: {
                title: 'Username',
                type: 'custom',
                renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_2__.CustomViewCellStringComponent
              },
              firstName: {
                title: 'First Name',
                type: 'custom',
                renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_2__.CustomViewCellStringComponent
              },
              lastName: {
                title: 'Last Name',
                type: 'custom',
                renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_2__.CustomViewCellStringComponent
              },
              email: {
                title: 'Email',
                type: 'custom',
                renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_2__.CustomViewCellStringComponent
              },
              phone: {
                title: 'Phone',
                type: 'custom',
                renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_3__.CustomViewCellComponent
              }
            }
          };
          this.getList();
        }

        _createClass(_ListCustomersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "delete",
          value: function _delete(event) {
            var _this3 = this;

            var category = event.data;
            this.messageService.confirm("Do you want to delete the customer?", 'Yes').then(function (it) {
              if (it.isConfirmed) {
                _this3.customerService["delete"](category).then(function (it) {
                  _this3.messageService.notification("Customer has been deleted", src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);

                  _this3.getList();
                })["catch"](function (er) {
                  var _a, _b;

                  _this3.messageService.notification("Delete Fail", src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR, (_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected');
                });
              }
            });
          }
        }, {
          key: "openPopup",
          value: function openPopup(item) {
            var _this4 = this;

            var modalRef = this.modalService.open(_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__.CustomerDetailsComponent, {
              size: 'lg'
            });
            if (item) modalRef.componentInstance.item = item.data;
            modalRef.result.then(function (close) {
              _this4.getList();
            }, function (dismiss) {});
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this5 = this;

            this.customerService.get({
              params: this.params
            }).then(function (res) {
              if (!res.hasError) {
                _this5.customers = res.data.results;
                _this5.data = res.data;
              }
            })["catch"](function (er) {
              var _a, _b;

              _this5.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
            });
          }
        }, {
          key: "onPage",
          value: function onPage(event) {
            this.params.pageIndex = event;
            this.getList();
          }
        }]);

        return _ListCustomersComponent;
      }();

      _ListCustomersComponent.ɵfac = function ListCustomersComponent_Factory(t) {
        return new (t || _ListCustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_1__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService));
      };

      _ListCustomersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _ListCustomersComponent,
        selectors: [["app-list-customers"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_1__.CustomerService])],
        decls: 10,
        vars: 3,
        consts: [[1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "card-body", "vendor-table"], [1, "custom-datatable", "media-datatable"], [1, "table-responsive"], [3, "settings", "source", "edit", "create", "delete", "sourceChange"], [3, "data", "page", 4, "ngIf"], [3, "data", "page"]],
        template: function ListCustomersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Customer Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ng2-smart-table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("edit", function ListCustomersComponent_Template_ng2_smart_table_edit_8_listener($event) {
              return ctx.openPopup($event);
            })("create", function ListCustomersComponent_Template_ng2_smart_table_create_8_listener() {
              return ctx.openPopup(null);
            })("delete", function ListCustomersComponent_Template_ng2_smart_table_delete_8_listener($event) {
              return ctx["delete"]($event);
            })("sourceChange", function ListCustomersComponent_Template_ng2_smart_table_sourceChange_8_listener($event) {
              return ctx.customers = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ListCustomersComponent_app_paging_server_view_9_Template, 1, 1, "app-paging-server-view", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.customers);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.totalPage) > 1);
          }
        },
        directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_6__.PagingServerViewComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWN1c3RvbWVycy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    57870:
    /*!************************************************************************************************!*\
      !*** ./src/app/shared/components/custom-view-cell-string/custom-view-cell-string.component.ts ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CustomViewCellStringComponent": function CustomViewCellStringComponent() {
          return (
            /* binding */
            _CustomViewCellStringComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _CustomViewCellStringComponent = /*#__PURE__*/function () {
        function _CustomViewCellStringComponent() {
          _classCallCheck(this, _CustomViewCellStringComponent);
        }

        _createClass(_CustomViewCellStringComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _CustomViewCellStringComponent;
      }();

      _CustomViewCellStringComponent.ɵfac = function CustomViewCellStringComponent_Factory(t) {
        return new (t || _CustomViewCellStringComponent)();
      };

      _CustomViewCellStringComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CustomViewCellStringComponent,
        selectors: [["app-custom-view-cell-string"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "text-left"]],
        template: function CustomViewCellStringComponent_Template(rf, ctx) {
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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tdmlldy1jZWxsLXN0cmluZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_customers_customers_module_ts-es5.js.map