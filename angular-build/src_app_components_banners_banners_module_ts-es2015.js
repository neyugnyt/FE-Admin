"use strict";
(self["webpackChunkmultikart_backend"] = self["webpackChunkmultikart_backend"] || []).push([["src_app_components_banners_banners_module_ts"],{

/***/ 84175:
/*!*******************************************************************************!*\
  !*** ./src/app/components/banners/banners-detail/banners-detail.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannersDetailComponent": function() { return /* binding */ BannersDetailComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/lib/data/models */ 82409);
/* harmony import */ var src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/modals/models/modal.model */ 5383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var src_app_lib_data_services_banners_banners_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/lib/data/services/banners/banners.service */ 41374);
/* harmony import */ var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/lib/data/services/messages/message.service */ 20985);
/* harmony import */ var _shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/modals/modal-header/modal-header.component */ 71279);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/upload-file/upload-file.component */ 75288);
/* harmony import */ var _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/modals/modal-footer/modal-footer.component */ 36711);












function BannersDetailComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Title is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function BannersDetailComponent_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Image is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function BannersDetailComponent_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Display Order is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid ": a0 }; };
class BannersDetailComponent {
    constructor(formBuilder, ngbActiveModal, bannersService, messageService) {
        this.formBuilder = formBuilder;
        this.ngbActiveModal = ngbActiveModal;
        this.bannersService = bannersService;
        this.messageService = messageService;
        this.submitted = false;
        this.modalFile = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_1__.ModalFile();
        this.modalFile.typeFile = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_1__.TypeFile.IMAGE;
        this.modalFile.multiBoolen = false;
        this.modalFile.enityType = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_1__.EntityType.BANNER;
    }
    ngOnInit() {
        this.loadFormItem();
        this.createModal();
        if (this.item) {
            this.fileURL = [];
            this.item.imageUrl.split(',').forEach((it) => {
                this.fileURL.push(it);
            });
        }
    }
    loadFormItem() {
        this.bannersForm = this.formBuilder.group({
            title: [this.item ? this.item.title : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            description: [this.item ? this.item.description : ''],
            link: [this.item ? this.item.link : ''],
            imageUrl: [this.item ? this.item.imageUrl : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            displayOrder: [
                this.item ? this.item.displayOrder : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
            ],
        });
    }
    createModal() {
        this.modalHeader = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_1__.ModalHeaderModel();
        this.modalHeader.title =
            this.item != null ? `Update ${this.item.title}` : `Add Banner`;
        this.modalFooter = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_1__.ModalFooterModel();
        this.modalFooter.title = 'Save';
    }
    get bannersFormControl() {
        return this.bannersForm.controls;
    }
    saveBanner(event) {
        this.banner = {
            title: this.bannersForm.controls.title.value,
            description: this.bannersForm.controls.description.value,
            link: this.bannersForm.controls.link.value,
            imageUrl: this.bannersForm.controls.imageUrl.value,
            displayOrder: this.bannersForm.controls.displayOrder.value,
            id: this.item ? this.item.id : '',
            files: this.modalFile.listFile,
        };
        this.submitted = true;
        if (this.bannersForm.valid) {
            this.bannersService
                .save(this.banner)
                .then((res) => {
                this.messageService.notification(this.item ? 'Banner has been edited' : 'Banner has been created', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);
                this.bannersForm.reset();
                this.submitted = false;
                this.ngbActiveModal.close();
            })
                .catch((er) => {
                var _a, _b;
                this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : "Server Disconnected", src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
            });
        }
    }
    close(event) {
        this.ngbActiveModal.dismiss();
    }
    onChangeData(event) {
        if (event == null) {
            return;
        }
        if (!this.fileURL) {
            this.fileURL = [];
        }
        if (event.add) {
            this.fileURL = [...this.fileURL, ...event.add];
        }
        if (event.remove) {
            this.fileURL.forEach((e, i) => {
                if (e.includes(event.remove)) {
                    this.fileURL.splice(i, 1);
                }
            });
        }
        if (event.removeAll) {
            this.fileURL = [];
        }
        this.bannersForm.controls.imageUrl.setValue(this.fileURL.join(','));
        console.log(this.fileURL);
    }
}
BannersDetailComponent.ɵfac = function BannersDetailComponent_Factory(t) { return new (t || BannersDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_lib_data_services_banners_banners_service__WEBPACK_IMPORTED_MODULE_2__.BannersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService)); };
BannersDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: BannersDetailComponent, selectors: [["app-banners-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([])], decls: 49, vars: 18, consts: [[3, "data", "onAction"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-body"], ["id", "account", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "active", "show"], ["novalidate", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom0", "type", "text", "required", "", "formControlName", "title", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], [1, "invalid-feedback", "col-md-3", "offset-md-3"], ["class", "text-danger", 4, "ngIf"], ["for", "", 1, "col-xl-3", "col-md-4"], ["id", "", "type", "text", "formControlName", "description", 1, "form-control", "col-xl-8", "col-md-7"], ["id", "validationCustom1", "type", "text", "formControlName", "link", 1, "form-control", "col-xl-8", "col-md-7"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom2", "type", "text", "formControlName", "imageUrl", "hidden", "", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], [1, "col-xl-8", "col-md-7", "p-0"], ["styleFile", "width: 100%; height: auto;", 3, "data", "fileURL", "isBannerUpload", "onChange"], ["for", "validationCustom3", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom3", "type", "number", "required", "", "formControlName", "displayOrder", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], [1, "invalid-feedback", "col-md-5", "offset-md-3"], [1, "text-danger"]], template: function BannersDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-modal-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onAction", function BannersDetailComponent_Template_app_modal_header_onAction_0_listener($event) { return ctx.close($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Banner Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, BannersDetailComponent_span_17_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, " Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "app-upload-file", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function BannersDetailComponent_Template_app_upload_file_onChange_37_listener($event) { return ctx.onChangeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, BannersDetailComponent_span_39_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, " Display Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, BannersDetailComponent_span_47_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "app-modal-footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onAction", function BannersDetailComponent_Template_app_modal_footer_onAction_48_listener($event) { return ctx.saveBanner($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.modalHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.bannersForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](12, _c0, (ctx.bannersFormControl.title.touched || ctx.submitted) && (ctx.bannersFormControl.title.errors == null ? null : ctx.bannersFormControl.title.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.bannersFormControl.title.touched || ctx.submitted) && (ctx.bannersFormControl.title.errors == null ? null : ctx.bannersFormControl.title.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](14, _c0, (ctx.bannersFormControl.imageUrl.touched || ctx.submitted) && (ctx.bannersFormControl.imageUrl.errors == null ? null : ctx.bannersFormControl.imageUrl.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.modalFile)("fileURL", ctx.fileURL)("isBannerUpload", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.bannersFormControl.imageUrl.touched || ctx.submitted) && (ctx.bannersFormControl.imageUrl.errors == null ? null : ctx.bannersFormControl.imageUrl.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](16, _c0, (ctx.bannersFormControl.displayOrder.touched || ctx.submitted) && (ctx.bannersFormControl.displayOrder.errors == null ? null : ctx.bannersFormControl.displayOrder.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.bannersFormControl.displayOrder.touched || ctx.submitted) && (ctx.bannersFormControl.displayOrder.errors == null ? null : ctx.bannersFormControl.displayOrder.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.modalFooter);
    } }, directives: [_shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_4__.ModalHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_5__.UploadFileComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_6__.ModalFooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5uZXJzLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 66359:
/*!**************************************************************!*\
  !*** ./src/app/components/banners/banners-routing.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannersRoutingModule": function() { return /* binding */ BannersRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _list_banners_list_banners_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-banners/list-banners.component */ 35596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-banners',
                component: _list_banners_list_banners_component__WEBPACK_IMPORTED_MODULE_0__.ListBannersComponent,
                data: {
                    title: "Banner List",
                    breadcrumb: "Banner List"
                }
            }
        ]
    }
];
class BannersRoutingModule {
}
BannersRoutingModule.ɵfac = function BannersRoutingModule_Factory(t) { return new (t || BannersRoutingModule)(); };
BannersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BannersRoutingModule });
BannersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BannersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 46147:
/*!******************************************************!*\
  !*** ./src/app/components/banners/banners.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannersModule": function() { return /* binding */ BannersModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var _list_banners_list_banners_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-banners/list-banners.component */ 35596);
/* harmony import */ var _banners_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banners-routing.module */ 66359);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/lib/data/services */ 19764);
/* harmony import */ var _banners_detail_banners_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banners-detail/banners-detail.component */ 84175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);










class BannersModule {
}
BannersModule.ɵfac = function BannersModule_Factory(t) { return new (t || BannersModule)(); };
BannersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: BannersModule });
BannersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_3__.BannersService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule,
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableModule,
            _banners_routing_module__WEBPACK_IMPORTED_MODULE_1__.BannersRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BannersModule, { declarations: [_list_banners_list_banners_component__WEBPACK_IMPORTED_MODULE_0__.ListBannersComponent, _banners_detail_banners_detail_component__WEBPACK_IMPORTED_MODULE_4__.BannersDetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableModule,
        _banners_routing_module__WEBPACK_IMPORTED_MODULE_1__.BannersRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 35596:
/*!***************************************************************************!*\
  !*** ./src/app/components/banners/list-banners/list-banners.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListBannersComponent": function() { return /* binding */ ListBannersComponent; }
/* harmony export */ });
/* harmony import */ var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/lib/data/models */ 82409);
/* harmony import */ var src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/custom-view-cell-string/custom-view-cell-string.component */ 57870);
/* harmony import */ var src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/customViewCell/customViewCell.component */ 59314);
/* harmony import */ var src_app_shared_components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/viewimagecell/viewimagecell.component */ 18217);
/* harmony import */ var _banners_detail_banners_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../banners-detail/banners-detail.component */ 84175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var src_app_lib_data_services_banners_banners_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/lib/data/services/banners/banners.service */ 41374);
/* harmony import */ var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/lib/data/services/messages/message.service */ 20985);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/paging-server-view/paging-server-view.component */ 46913);












function ListBannersComponent_app_paging_server_view_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-paging-server-view", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("page", function ListBannersComponent_app_paging_server_view_9_Template_app_paging_server_view_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r1.onPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r0.data);
} }
class ListBannersComponent {
    constructor(modalService, bannersService, messageService) {
        this.modalService = modalService;
        this.bannersService = bannersService;
        this.messageService = messageService;
        this.params = {};
        this.settings = {
            mode: 'external',
            actions: {
                position: 'right',
            },
            columns: {
                imageUrl: {
                    filter: false,
                    title: 'Image',
                    type: 'custom',
                    renderComponent: src_app_shared_components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_3__.ViewImageCellComponent,
                },
                title: {
                    title: 'Title',
                    type: 'custom',
                    renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_1__.CustomViewCellStringComponent,
                },
                description: {
                    title: 'Description',
                },
                link: {
                    title: 'Link',
                    type: 'html',
                    valuePrepareFunction: (value) => {
                        return `<a href='${value}' target="_blank">${value}</a>`;
                    },
                },
                displayOrder: {
                    title: 'Display Order',
                    value: 'displayOrder',
                    type: 'custom',
                    renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_2__.CustomViewCellComponent,
                },
            },
        };
        this.getBanners();
    }
    ngOnInit() { }
    getBanners() {
        this.bannersService
            .get({ params: this.params })
            .then((res) => {
            if (!res.hasError) {
                this.banners = res.data.results;
                this.data = res.data;
            }
        })
            .catch((er) => {
            var _a, _b;
            this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
        });
    }
    openDetails(event) {
        var modalRef = this.modalService.open(_banners_detail_banners_detail_component__WEBPACK_IMPORTED_MODULE_4__.BannersDetailComponent, {
            size: 'lg',
        });
        modalRef.componentInstance.item = event === null || event === void 0 ? void 0 : event.data;
        modalRef.result.then((close) => this.getBanners(), (dismiss) => { });
    }
    delete(event) {
        this.messageService
            .confirm(`Do you want to delete the banner?`, 'Yes')
            .then((res) => {
            if (res.isConfirmed) {
                let banner = event.data;
                this.bannersService
                    .delete(banner)
                    .then(() => {
                    this.messageService.notification('Banner has been deleted', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);
                    this.getBanners();
                })
                    .catch((er) => {
                    var _a, _b;
                    this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
                });
            }
        });
    }
    onPage(event) {
        this.params.pageIndex = event;
        this.getBanners();
    }
}
ListBannersComponent.ɵfac = function ListBannersComponent_Factory(t) { return new (t || ListBannersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_lib_data_services_banners_banners_service__WEBPACK_IMPORTED_MODULE_5__.BannersService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_6__.MessageService)); };
ListBannersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ListBannersComponent, selectors: [["app-list-banners"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([])], decls: 10, vars: 3, consts: [[1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "card-body", "vendor-table"], ["id", "batchDelete", 1, "custom-datatable", "media-datatable"], [1, "table-responsive"], [3, "settings", "source", "sourceChange", "create", "delete", "edit"], [3, "data", "page", 4, "ngIf"], [3, "data", "page"]], template: function ListBannersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Banner Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ng2-smart-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("sourceChange", function ListBannersComponent_Template_ng2_smart_table_sourceChange_8_listener($event) { return ctx.banners = $event; })("create", function ListBannersComponent_Template_ng2_smart_table_create_8_listener($event) { return ctx.openDetails($event); })("delete", function ListBannersComponent_Template_ng2_smart_table_delete_8_listener($event) { return ctx.delete($event); })("edit", function ListBannersComponent_Template_ng2_smart_table_edit_8_listener($event) { return ctx.openDetails($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ListBannersComponent_app_paging_server_view_9_Template, 1, 1, "app-paging-server-view", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.banners);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.totalPage) > 1);
    } }, directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__.Ng2SmartTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_7__.PagingServerViewComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWJhbm5lcnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 57870:
/*!************************************************************************************************!*\
  !*** ./src/app/shared/components/custom-view-cell-string/custom-view-cell-string.component.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomViewCellStringComponent": function() { return /* binding */ CustomViewCellStringComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class CustomViewCellStringComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomViewCellStringComponent.ɵfac = function CustomViewCellStringComponent_Factory(t) { return new (t || CustomViewCellStringComponent)(); };
CustomViewCellStringComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomViewCellStringComponent, selectors: [["app-custom-view-cell-string"]], inputs: { value: "value", rowData: "rowData" }, decls: 2, vars: 1, consts: [[1, "text-left"]], template: function CustomViewCellStringComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tdmlldy1jZWxsLXN0cmluZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_components_banners_banners_module_ts-es2015.js.map