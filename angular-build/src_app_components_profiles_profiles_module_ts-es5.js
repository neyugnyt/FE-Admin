(function () {
  "use strict";

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmultikart_backend"] = self["webpackChunkmultikart_backend"] || []).push([["src_app_components_profiles_profiles_module_ts"], {
    /***/
    7378:
    /*!***************************************************************!*\
      !*** ./src/app/components/profiles/profile-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileRoutingModule": function ProfileRoutingModule() {
          return (
            /* binding */
            _ProfileRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile-settings/profile-settings.component */
      11296);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        children: [{
          path: 'profile-settings',
          component: _profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_0__.ProfileSettingsComponent,
          data: {
            title: "Profile Settings",
            breadcrumb: "Profile Settings"
          }
        }]
      }];

      var _ProfileRoutingModule = /*#__PURE__*/_createClass(function _ProfileRoutingModule() {
        _classCallCheck(this, _ProfileRoutingModule);
      });

      _ProfileRoutingModule.ɵfac = function ProfileRoutingModule_Factory(t) {
        return new (t || _ProfileRoutingModule)();
      };

      _ProfileRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ProfileRoutingModule
      });
      _ProfileRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ProfileRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    11296:
    /*!************************************************************************************!*\
      !*** ./src/app/components/profiles/profile-settings/profile-settings.component.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileSettingsComponent": function ProfileSettingsComponent() {
          return (
            /* binding */
            _ProfileSettingsComponent
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/components/modals/models/modal.model */
      5383);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/lib/data/services/messages/message.service */
      20985);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/components/feather-icons/feather-icons.component */
      61676);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_directives_uiImageLoader_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/directives/uiImageLoader.directive */
      59578);
      /* harmony import */


      var _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/components/upload-file/upload-file.component */
      75288);

      function ProfileSettingsComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-feather-icons", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Profile ");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", "user");
        }
      }

      function ProfileSettingsComponent_ng_template_8_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfileSettingsComponent_ng_template_8_div_6_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r7.updateSwitch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Update Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ProfileSettingsComponent_ng_template_8_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "table", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "First Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Last Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Avatar:");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.userInfo == null ? null : ctx_r5.userInfo.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.userInfo == null ? null : ctx_r5.userInfo.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.userInfo == null ? null : ctx_r5.userInfo.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r5.getImage, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        }
      }

      function ProfileSettingsComponent_ng_template_8_div_8_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ProfileSettingsComponent_ng_template_8_div_8_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Last name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ProfileSettingsComponent_ng_template_8_div_8_span_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ProfileSettingsComponent_ng_template_8_div_8_span_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ProfileSettingsComponent_ng_template_8_div_8_button_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfileSettingsComponent_ng_template_8_div_8_button_39_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);

            return ctx_r14.updateSwitch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " CANCEL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      function ProfileSettingsComponent_ng_template_8_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "form", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ProfileSettingsComponent_ng_template_8_div_8_span_9_Template, 2, 0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ProfileSettingsComponent_ng_template_8_div_8_span_17_Template, 2, 0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, ProfileSettingsComponent_ng_template_8_div_8_span_25_Template, 2, 0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, " Avatar");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "app-upload-file", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function ProfileSettingsComponent_ng_template_8_div_8_Template_app_upload_file_onChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r16.onChangeData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, ProfileSettingsComponent_ng_template_8_div_8_span_35_Template, 2, 0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, ProfileSettingsComponent_ng_template_8_div_8_button_39_Template, 2, 0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfileSettingsComponent_ng_template_8_div_8_Template_button_click_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r18.updateDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " SAVE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r6.profileForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](12, _c0, (ctx_r6.profileFormControl.firstName.touched || ctx_r6.submitted) && (ctx_r6.profileFormControl.firstName.errors == null ? null : ctx_r6.profileFormControl.firstName.errors.required)));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r6.profileFormControl.firstName.touched || ctx_r6.submitted) && (ctx_r6.profileFormControl.firstName.errors == null ? null : ctx_r6.profileFormControl.firstName.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](14, _c0, (ctx_r6.profileFormControl.lastName.touched || ctx_r6.submitted) && (ctx_r6.profileFormControl.lastName.errors == null ? null : ctx_r6.profileFormControl.lastName.errors.required)));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r6.profileFormControl.lastName.touched || ctx_r6.submitted) && (ctx_r6.profileFormControl.lastName.errors == null ? null : ctx_r6.profileFormControl.lastName.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](16, _c0, (ctx_r6.profileFormControl.email.touched || ctx_r6.submitted) && (ctx_r6.profileFormControl.email.errors == null ? null : ctx_r6.profileFormControl.email.errors.required)));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r6.profileFormControl.email.touched || ctx_r6.submitted) && (ctx_r6.profileFormControl.email.errors == null ? null : ctx_r6.profileFormControl.email.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](18, _c0, (ctx_r6.profileFormControl.imageUrl.touched || ctx_r6.submitted) && (ctx_r6.profileFormControl.imageUrl.errors == null ? null : ctx_r6.profileFormControl.imageUrl.errors.required)));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx_r6.modalFile)("fileURL", ctx_r6.fileURL);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r6.profileFormControl.imageUrl.touched || ctx_r6.submitted) && (ctx_r6.profileFormControl.imageUrl.errors == null ? null : ctx_r6.profileFormControl.imageUrl.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.update);
        }
      }

      function ProfileSettingsComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ProfileSettingsComponent_ng_template_8_div_6_Template, 3, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ProfileSettingsComponent_ng_template_8_div_7_Template, 22, 4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ProfileSettingsComponent_ng_template_8_div_8_Template, 42, 20, "div", 16);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.update);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.update);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.update);
        }
      }

      function ProfileSettingsComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Change Password ");
        }
      }

      function ProfileSettingsComponent_ng_template_11_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ProfileSettingsComponent_ng_template_11_span_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ProfileSettingsComponent_ng_template_11_span_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This field is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ProfileSettingsComponent_ng_template_11_span_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " New password and Confirm new password are not the same ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ProfileSettingsComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ProfileSettingsComponent_ng_template_11_span_10_Template, 2, 0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ProfileSettingsComponent_ng_template_11_span_18_Template, 2, 0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, " Confirm New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ProfileSettingsComponent_ng_template_11_span_26_Template, 2, 0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, ProfileSettingsComponent_ng_template_11_span_28_Template, 2, 0, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfileSettingsComponent_ng_template_11_Template_button_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r23.changePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, " CHANGE PASSWORD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r3.passwordForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](8, _c0, (ctx_r3.passwordFormControl.password.touched || ctx_r3.submitted) && (ctx_r3.passwordFormControl.password.errors == null ? null : ctx_r3.passwordFormControl.password.errors.required)));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r3.passwordFormControl.password.touched || ctx_r3.submitted) && (ctx_r3.passwordFormControl.password.errors == null ? null : ctx_r3.passwordFormControl.password.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c0, (ctx_r3.passwordFormControl.newPassword.touched || ctx_r3.submitted) && (ctx_r3.passwordFormControl.newPassword.errors == null ? null : ctx_r3.passwordFormControl.newPassword.errors.required)));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r3.passwordFormControl.newPassword.touched || ctx_r3.submitted) && (ctx_r3.passwordFormControl.newPassword.errors == null ? null : ctx_r3.passwordFormControl.newPassword.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](12, _c0, (ctx_r3.passwordFormControl.confirmNewPassword.touched || ctx_r3.submitted) && (ctx_r3.passwordFormControl.confirmNewPassword.errors == null ? null : ctx_r3.passwordFormControl.confirmNewPassword.errors.required) || ctx_r3.passwordFormControl.confirmNewPassword.value !== ctx_r3.passwordFormControl.newPassword.value && ctx_r3.passwordFormControl.confirmNewPassword.value.length > 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r3.passwordFormControl.confirmNewPassword.touched || ctx_r3.submitted) && (ctx_r3.passwordFormControl.confirmNewPassword.errors == null ? null : ctx_r3.passwordFormControl.confirmNewPassword.errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.passwordFormControl.confirmNewPassword.value !== ctx_r3.passwordFormControl.newPassword.value && ctx_r3.passwordFormControl.confirmNewPassword.value);
        }
      }

      var _ProfileSettingsComponent = /*#__PURE__*/function () {
        function _ProfileSettingsComponent(formBuilder, profileService, route, authService, messageService) {
          _classCallCheck(this, _ProfileSettingsComponent);

          this.formBuilder = formBuilder;
          this.profileService = profileService;
          this.route = route;
          this.authService = authService;
          this.messageService = messageService;
          this.submitted = false;
          this.update = false;
          this.modalFile = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__.ModalFile();
          this.modalFile.typeFile = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__.TypeFile.IMAGE;
          this.modalFile.multiBoolen = false;
          this.modalFile.enityType = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__.EntityType.USER;
        }

        _createClass(_ProfileSettingsComponent, [{
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
            var _this = this;

            this.entrySub = this.authService.callUserInfo.subscribe(function (it) {
              _this.userInfo = it;

              _this.loadFormItem();

              if (_this.userInfo) {
                _this.fileURL = [];

                _this.fileURL.push(_this.userInfo.imageUrl);
              }
            });
          }
        }, {
          key: "profileFormControl",
          get: function get() {
            return this.profileForm.controls;
          }
        }, {
          key: "passwordFormControl",
          get: function get() {
            return this.passwordForm.controls;
          }
        }, {
          key: "loadFormItem",
          value: function loadFormItem() {
            this.profileForm = this.formBuilder.group({
              firstName: [this.userInfo ? this.userInfo.firstName : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              lastName: [this.userInfo ? this.userInfo.lastName : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              email: [this.userInfo ? this.userInfo.email : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              imageUrl: [this.userInfo ? this.userInfo.imageUrl : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
            });
            this.passwordForm = this.formBuilder.group({
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              confirmNewPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
            });
          }
        }, {
          key: "updateSwitch",
          value: function updateSwitch() {
            this.modalFile.listFile = [];
            this.update = this.update == true ? false : true;
          }
        }, {
          key: "updateDetails",
          value: function updateDetails() {
            var _this2 = this;

            if (this.profileForm.invalid) {
              return;
            }

            this.updateProfile = {
              firstName: this.profileForm.controls.firstName.value,
              lastName: this.profileForm.controls.lastName.value,
              email: this.profileForm.controls.email.value,
              imageUrl: this.profileForm.controls.imageUrl.value,
              id: this.userInfo.id,
              files: this.modalFile.listFile
            };
            this.profileService.update(this.updateProfile).then(function (resp) {
              _this2.authService.changeUserInfo(resp.data);

              _this2.route.snapshot.data.user = resp.data;

              if (!resp.hasError) {
                _this2.messageService.notification('Profile has been updated', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);

                _this2.updateSwitch();
              }
            })["catch"](function (er) {
              var _a, _b;

              _this2.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnecter', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
            });
          }
        }, {
          key: "changePassword",
          value: function changePassword() {
            var _this3 = this;

            if (this.passwordForm.invalid || this.passwordFormControl.confirmNewPassword.value !== this.passwordFormControl.newPassword.value) {
              this.submitted = true;
              return;
            }

            this.passwordProfile = {
              password: this.passwordForm.controls.password.value,
              newPassword: this.passwordForm.controls.newPassword.value,
              confirmNewPassword: this.passwordForm.controls.confirmNewPassword.value,
              userName: this.userInfo.username
            };
            this.profileService.changePassword(this.passwordProfile).then(function (resp) {
              _this3.passwordForm.reset();

              _this3.messageService.notification('Password has been changed', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);

              _this3.submitted = false;
            })["catch"](function (er) {
              var _a, _b;

              _this3.messageService.notification((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
            });
          }
        }, {
          key: "onChangeData",
          value: function onChangeData(event) {
            var _this4 = this;

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
                  _this4.fileURL.splice(i, 1);
                }
              });
            }

            if (event.removeAll) {
              this.fileURL = [];
            }

            this.profileForm.controls.imageUrl.setValue(this.fileURL.join(','));
          }
        }, {
          key: "getImage",
          get: function get() {
            var _a; // console.log("get image");


            return (_a = this.userInfo) === null || _a === void 0 ? void 0 : _a.imageUrl;
          }
        }]);

        return _ProfileSettingsComponent;
      }();

      _ProfileSettingsComponent.ɵfac = function ProfileSettingsComponent_Factory(t) {
        return new (t || _ProfileSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_1__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService));
      };

      _ProfileSettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _ProfileSettingsComponent,
        selectors: [["app-profile-settings"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_1__.AuthService])],
        decls: 12,
        vars: 0,
        consts: [[1, "container-fluid"], [1, "row", 2, "justify-content", "center"], [1, "col-xl-12"], [1, "card", "tab2-card", "mb-4"], [1, "card-body"], [1, "tab-coupon", "profile-tabs"], ["ngbTabTitle", ""], ["ngbTabContent", ""], [3, "icon"], ["id", "top-profile", "role", "tabpanel", "aria-labelledby", "top-profile-tab", 1, "tab-pane", "fade", "show", "active"], [1, "row"], [1, "col-11"], [1, "d-flex", "justify-content-between", "align-items-baseline", "mb-2"], [1, "f-w-600"], ["class", "pull-right", 4, "ngIf"], ["class", "table-responsive profile-table", 4, "ngIf"], [4, "ngIf"], [1, "pull-right"], [1, "btn", "btn-primary", 3, "click"], [1, "table-responsive", "profile-table"], [1, "table", "table-responsive"], ["appUiImageLoader", "", 2, "width", "200px", "height", "200px", 3, "src"], ["novalidate", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom0", "type", "text", "required", "", "formControlName", "firstName", 1, "form-control", "col-xl-5", "col-md-7", 3, "ngClass"], [1, "invalid-feedback", "col-md-3", "offset-md-3"], ["class", "text-danger", 4, "ngIf"], ["for", "", 1, "col-xl-3", "col-md-4"], ["id", "", "type", "text", "formControlName", "lastName", 1, "form-control", "col-xl-5", "col-md-7", 3, "ngClass"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom1", "type", "text", "required", "", "formControlName", "email", 1, "form-control", "col-xl-5", "col-md-7", 3, "ngClass"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom2", "type", "text", "required", "", "formControlName", "imageUrl", "hidden", "", 1, "form-control", 3, "ngClass"], [1, "col-xl-5", "col-md-7", "p-0"], ["styleFile", "width: 100% height: auto;", 3, "data", "fileURL", "onChange"], [1, "row", "justify-content-between", "float-right"], ["class", "btn btn-default", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "text-danger"], [1, "btn", "btn-default", 3, "click"], ["data-feather", "settings"], ["id", "", "type", "password", "formControlName", "password", 1, "form-control", "col-xl-5", "col-md-7", 3, "ngClass"], [1, "invalid-feedback", "col-md-3", "offset-md-4"], ["id", "validationCustom1", "type", "password", "required", "", "formControlName", "newPassword", 1, "form-control", "col-xl-5", "col-md-7", 3, "ngClass"], ["id", "validationCustom2", "type", "password", "required", "", "formControlName", "confirmNewPassword", 1, "form-control", "col-xl-5", "col-md-7", 3, "ngClass"], [1, "invalid-feedback", "col-md-7", "offset-md-4"], [1, "invalid-feedback", "col-md-7", "offset-md-4", "d-block"], [1, "row", "float-right"]],
        template: function ProfileSettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ngb-tabset", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ProfileSettingsComponent_ng_template_7_Template, 2, 1, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ProfileSettingsComponent_ng_template_8_Template, 9, 3, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ProfileSettingsComponent_ng_template_10_Template, 2, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ProfileSettingsComponent_ng_template_11_Template, 34, 14, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTabset, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTab, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTabTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTabContent, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_4__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_directives_uiImageLoader_directive__WEBPACK_IMPORTED_MODULE_5__.UiImageLoaderDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_6__.UploadFileComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    84110:
    /*!********************************************************!*\
      !*** ./src/app/components/profiles/profiles.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilesModule": function ProfilesModule() {
          return (
            /* binding */
            _ProfilesModule
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile-routing.module */
      7378);
      /* harmony import */


      var src_app_lib_data_services_profiles_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/lib/data/services/profiles/profile.service */
      47133);
      /* harmony import */


      var _profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile-settings/profile-settings.component */
      11296);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ProfilesModule = /*#__PURE__*/_createClass(function _ProfilesModule() {
        _classCallCheck(this, _ProfilesModule);
      });

      _ProfilesModule.ɵfac = function ProfilesModule_Factory(t) {
        return new (t || _ProfilesModule)();
      };

      _ProfilesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _ProfilesModule
      });
      _ProfilesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [src_app_lib_data_services_profiles_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__.Ng2SmartTableModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProfileRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_ProfilesModule, {
          declarations: [_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_3__.ProfileSettingsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__.Ng2SmartTableModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProfileRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_components_profiles_profiles_module_ts-es5.js.map