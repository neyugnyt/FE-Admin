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

  (self["webpackChunkmultikart_backend"] = self["webpackChunkmultikart_backend"] || []).push([["src_app_components_users_users_module_ts"], {
    /***/
    14912:
    /*!*********************************************************************!*\
      !*** ./src/app/components/users/list-users/list-users.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ListUsersComponent": function ListUsersComponent() {
          return (
            /* binding */
            _ListUsersComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/lib/data/models */
      82409);
      /* harmony import */


      var src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/components/custom-view-cell-string/custom-view-cell-string.component */
      57870);
      /* harmony import */


      var src_app_shared_components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/components/viewimagecell/viewimagecell.component */
      18217);
      /* harmony import */


      var _users_details_users_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../users-details/users-details.component */
      38279);
      /* harmony import */


      var _lib_data_services_users_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../lib/data/services/users/user.service */
      72509);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/lib/data/services/messages/message.service */
      20985);
      /* harmony import */


      var src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/lib/data/services */
      19764);
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng2-smart-table */
      98391);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/components/paging-server-view/paging-server-view.component */
      46913);

      function ListUsersComponent_app_paging_server_view_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-paging-server-view", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("page", function ListUsersComponent_app_paging_server_view_9_Template_app_paging_server_view_page_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r1.onPage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r0.data);
        }
      }

      var _ListUsersComponent = /*#__PURE__*/function () {
        function _ListUsersComponent(modalService, userService, messageService, authService) {
          _classCallCheck(this, _ListUsersComponent);

          this.modalService = modalService;
          this.userService = userService;
          this.messageService = messageService;
          this.authService = authService;
          this.closeResult = '';
          this.params = {};
          this.settings = {
            mode: 'external',
            pager: {
              display: true,
              perPage: 10
            },
            actions: {
              position: 'right'
            },
            columns: {
              imageUrl: {
                filter: false,
                title: 'Image',
                type: 'custom',
                renderComponent: src_app_shared_components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_2__.ViewImageCellComponent
              },
              username: {
                title: 'Username',
                type: 'custom',
                renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_1__.CustomViewCellStringComponent
              },
              email: {
                title: 'Email'
              },
              firstName: {
                title: 'First Name'
              },
              lastName: {
                title: 'Last Name'
              }
            }
          };
          this.getList();
        }

        _createClass(_ListUsersComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subUser.unsubscribe();
            this.subUser = null;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.subUser = this.authService.callUserInfo.subscribe(function (res) {
              return _this.userInfo = res;
            });
          }
        }, {
          key: "delete",
          value: function _delete(event) {
            var _this2 = this;

            if (event.data.id == '10000000-0000-0000-0000-000000000000' || event.data.id == this.userInfo.id) {
              this.messageService.alert('Your access permissions may be inadequate to perform the requested operation on this resource.', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.INFO);
              return;
            }

            this.messageService.confirm("Do you want to delete the user?", 'Yes').then(function (res) {
              if (res.isConfirmed) {
                var user = event.data;

                _this2.userService["delete"](user).then(function () {
                  _this2.messageService.notification('User has been deleted', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);

                  _this2.getList();
                })["catch"](function (er) {
                  var _a, _b;

                  _this2.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
                });
              }
            });
          }
        }, {
          key: "openPopup",
          value: function openPopup(item) {
            var _this3 = this;

            if ('10000000-0000-0000-0000-000000000000' != this.userInfo.id && (item === null || item === void 0 ? void 0 : item.data.id) == '10000000-0000-0000-0000-000000000000') {
              this.messageService.alert('Your access permissions may be inadequate to perform the requested operation on this resource.', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.INFO);
              return;
            }

            var modalRef = this.modalService.open(_users_details_users_details_component__WEBPACK_IMPORTED_MODULE_3__.UserDetailComponent, {
              size: 'lg'
            });
            if (item) modalRef.componentInstance.item = item.data;
            modalRef.result.then(function (close) {
              _this3.getList();
            }, function (dismiss) {});
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this4 = this;

            this.userService.get({
              params: this.params
            }).then(function (res) {
              if (!res.hasError) {
                _this4.users = res.data.results;
              }
            })["catch"](function (er) {
              if (er.error.hasError) {// console.log(er.error.message);
              }
            });
          }
        }, {
          key: "onPage",
          value: function onPage(event) {
            this.params.pageIndex = event;
            this.getList();
          }
        }]);

        return _ListUsersComponent;
      }();

      _ListUsersComponent.ɵfac = function ListUsersComponent_Factory(t) {
        return new (t || _ListUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_lib_data_services_users_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_6__.AuthService));
      };

      _ListUsersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: _ListUsersComponent,
        selectors: [["app-list-users"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([_lib_data_services_users_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService])],
        decls: 10,
        vars: 3,
        consts: [[1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "card-body", "vendor-table"], [1, "custom-datatable", "media-datatable"], [1, "table-responsive"], [3, "settings", "source", "edit", "create", "delete", "sourceChange"], [3, "data", "page", 4, "ngIf"], [3, "data", "page"]],
        template: function ListUsersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Admin Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ng2-smart-table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("edit", function ListUsersComponent_Template_ng2_smart_table_edit_8_listener($event) {
              return ctx.openPopup($event);
            })("create", function ListUsersComponent_Template_ng2_smart_table_create_8_listener() {
              return ctx.openPopup(null);
            })("delete", function ListUsersComponent_Template_ng2_smart_table_delete_8_listener($event) {
              return ctx["delete"]($event);
            })("sourceChange", function ListUsersComponent_Template_ng2_smart_table_sourceChange_8_listener($event) {
              return ctx.users = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ListUsersComponent_app_paging_server_view_9_Template, 1, 1, "app-paging-server-view", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.users);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.totalPage) > 1);
          }
        },
        directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__.Ng2SmartTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_7__.PagingServerViewComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXVzZXJzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    38279:
    /*!***************************************************************************!*\
      !*** ./src/app/components/users/users-details/users-details.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserDetailComponent": function UserDetailComponent() {
          return (
            /* binding */
            _UserDetailComponent
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


      var src_app_lib_data_services_users_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/lib/data/services/users/user.service */
      72509);
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

      function UserDetailComponent_p_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.messageFail, " ");
        }
      }

      function UserDetailComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UserDetailComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Wrong email type");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _UserDetailComponent = /*#__PURE__*/function () {
        function _UserDetailComponent(formBuilder, userService, ngbActiveModal, messageService) {
          _classCallCheck(this, _UserDetailComponent);

          this.formBuilder = formBuilder;
          this.userService = userService;
          this.ngbActiveModal = ngbActiveModal;
          this.messageService = messageService;
          this.modalFile = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__.ModalFile();
          this.modalFile.typeFile = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__.TypeFile.IMAGE;
          this.modalFile.multiBoolen = false;
          this.modalFile.enityType = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__.EntityType.USER;
        }

        _createClass(_UserDetailComponent, [{
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
              email: [this.item ? this.item.email : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]],
              firstName: [this.item ? this.item.firstName : ''],
              lastName: [this.item ? this.item.lastName : ''],
              imageUrl: [this.item ? this.item.imageUrl : '']
            });
            this.modalHeader = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__.ModalHeaderModel();
            this.modalHeader.title = this.item ? "Update ".concat(this.item.username) : "Add";
            this.modalFooter = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__.ModalFooterModel();
            this.modalFooter.title = 'Save';
          }
        }, {
          key: "save",
          value: function save() {
            this.messageFail = '';

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
              files: this.modalFile.listFile
            };
            this.callServiceToSave();
          }
        }, {
          key: "callServiceToSave",
          value: function callServiceToSave() {
            var _this5 = this;

            this.userService.save(this.user).then(function (data) {
              _this5.messageService.notification(_this5.item ? 'Admin profile has been edited' : 'Admin profile has been created', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);

              _this5.ngbActiveModal.close();
            })["catch"](function (er) {
              var _a, _b;

              _this5.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);

              if (er.error.message) _this5.messageFail = er.error.message; // console.log(e);
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
            var _this6 = this;

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
                  _this6.fileURL.splice(i, 1);
                }
              });
            }

            if (event.removeAll) {
              this.fileURL = [];
            }

            this.usersForm.controls.imageUrl.setValue(this.fileURL.join(','));
          }
        }]);

        return _UserDetailComponent;
      }();

      _UserDetailComponent.ɵfac = function UserDetailComponent_Factory(t) {
        return new (t || _UserDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_lib_data_services_users_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService));
      };

      _UserDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _UserDetailComponent,
        selectors: [["app-users-details"]],
        inputs: {
          item: "item"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([src_app_lib_data_services_users_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService])],
        decls: 38,
        vars: 11,
        consts: [[3, "data", "onAction"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-body"], ["id", "account", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "active", "show"], ["novalidate", "", 1, "needs-validation", "user-add", 3, "formGroup"], ["class", "text-danger", 4, "ngIf"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], ["type", "text", "formControlName", "username", "autocomplete", "new-password", 1, "form-control", "col-xl-8", "col-md-7"], ["class", "form-group row", 4, "ngIf"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["type", "text", "formControlName", "email", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["class", "invalid-feedback col-md-5 offset-md-3", 4, "ngIf"], ["type", "text", "formControlName", "firstName", 1, "form-control", "col-xl-8", "col-md-7"], ["type", "text", "formControlName", "lastName", 1, "form-control", "col-xl-8", "col-md-7"], ["type", "text", "formControlName", "email", "hidden", "", 1, "form-control", "col-xl-8", "col-md-7"], [1, "col-xl-8", "col-md-7", "p-0"], ["styleFile", "width: 100%; height: auto;", 3, "data", "fileURL", "onChange"], [1, "text-danger"], ["type", "password", "formControlName", "password", "autocomplete", "new-password", 1, "form-control", "col-xl-8", "col-md-7"], [1, "invalid-feedback", "col-md-5", "offset-md-3"]],
        template: function UserDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-modal-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onAction", function UserDetailComponent_Template_app_modal_header_onAction_0_listener($event) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Admin Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, UserDetailComponent_p_10_Template, 2, 1, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, UserDetailComponent_div_17_Template, 6, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, " Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, UserDetailComponent_div_22_Template, 3, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " FirstName");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " LastName");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, " Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "app-upload-file", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function UserDetailComponent_Template_app_upload_file_onChange_36_listener($event) {
              return ctx.onChangeData($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "app-modal-footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onAction", function UserDetailComponent_Template_app_modal_footer_onAction_37_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.modalHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.usersForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.messageFail);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.item);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c0, ctx.usersForm.controls.email.dirty && (ctx.usersForm.controls.email.errors == null ? null : ctx.usersForm.controls.email.errors.email)));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.usersForm.controls.email.errors == null ? null : ctx.usersForm.controls.email.errors.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.modalFile)("fileURL", ctx.fileURL);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.modalFooter);
          }
        },
        directives: [_shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_4__.ModalHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_5__.UploadFileComponent, _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_6__.ModalFooterComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    99288:
    /*!**********************************************************!*\
      !*** ./src/app/components/users/users-routing.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UsersRoutingModule": function UsersRoutingModule() {
          return (
            /* binding */
            _UsersRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./list-users/list-users.component */
      14912);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        children: [{
          path: 'list-users',
          component: _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_0__.ListUsersComponent,
          data: {
            title: 'Admin List',
            breadcrumb: 'Admin List'
          }
        }]
      }];

      var _UsersRoutingModule = /*#__PURE__*/_createClass(function _UsersRoutingModule() {
        _classCallCheck(this, _UsersRoutingModule);
      });

      _UsersRoutingModule.ɵfac = function UsersRoutingModule_Factory(t) {
        return new (t || _UsersRoutingModule)();
      };

      _UsersRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _UsersRoutingModule
      });
      _UsersRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_UsersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    90329:
    /*!**************************************************!*\
      !*** ./src/app/components/users/users.module.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UsersModule": function UsersModule() {
          return (
            /* binding */
            _UsersModule
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


      var _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./list-users/list-users.component */
      14912);
      /* harmony import */


      var _users_details_users_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./users-details/users-details.component */
      38279);
      /* harmony import */


      var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./users-routing.module */
      99288);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _UsersModule = /*#__PURE__*/_createClass(function _UsersModule() {
        _classCallCheck(this, _UsersModule);
      });

      _UsersModule.ɵfac = function UsersModule_Factory(t) {
        return new (t || _UsersModule)();
      };

      _UsersModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _UsersModule
      });
      _UsersModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_3__.UsersRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModalModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__.Ng2SmartTableModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_UsersModule, {
          declarations: [_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_1__.ListUsersComponent, _users_details_users_details_component__WEBPACK_IMPORTED_MODULE_2__.UserDetailComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_3__.UsersRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModalModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__.Ng2SmartTableModule]
        });
      })();
      /***/

    },

    /***/
    72509:
    /*!*********************************************************!*\
      !*** ./src/app/lib/data/services/users/user.service.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserService": function UserService() {
          return (
            /* binding */
            _UserService
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

      var _UserService = /*#__PURE__*/function () {
        function _UserService(httpClient) {
          _classCallCheck(this, _UserService);

          this.httpClient = httpClient;
          this.url = '/api/user';
        }

        _createClass(_UserService, [{
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

        return _UserService;
      }();

      _UserService.ɵfac = function UserService_Factory(t) {
        return new (t || _UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__.HttpClientService));
      };

      _UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _UserService,
        factory: _UserService.ɵfac
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
//# sourceMappingURL=src_app_components_users_users_module_ts-es5.js.map