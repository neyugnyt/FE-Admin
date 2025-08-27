"use strict";
(self["webpackChunkmultikart_backend"] = self["webpackChunkmultikart_backend"] || []).push([["src_app_components_blogs_blogs_module_ts"],{

/***/ 30890:
/*!*************************************************************************!*\
  !*** ./src/app/components/blogs/blogs-detail/blogs-detail.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogsDetailComponent": function() { return /* binding */ BlogsDetailComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/modals/models/modal.model */ 5383);
/* harmony import */ var src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/lib/customCkeditor/ckeditor5-build-classic */ 98722);
/* harmony import */ var src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/lib/data/models */ 82409);
/* harmony import */ var src_app_lib_ckeditor_Base64Upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/lib/@ckeditor/Base64Upload */ 4697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var src_app_lib_data_services_blogs_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/lib/data/services/blogs/blog.service */ 55928);
/* harmony import */ var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/lib/data/services/messages/message.service */ 20985);
/* harmony import */ var _shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/modals/modal-header/modal-header.component */ 71279);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/upload-file/upload-file.component */ 75288);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 69570);
/* harmony import */ var _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/modals/modal-footer/modal-footer.component */ 36711);


// import * as DecoupledEditor from 'src/app/lib/customCkeditor/ckeditor5-build-decoupled-document';













function BlogsDetailComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Title is required or invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function BlogsDetailComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Short description is required or invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function BlogsDetailComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Image is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function BlogsDetailComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Content is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid ": a0 }; };
class BlogsDetailComponent {
    constructor(formBuilder, ngbActiveModal, blogService, messageService) {
        this.formBuilder = formBuilder;
        this.ngbActiveModal = ngbActiveModal;
        this.blogService = blogService;
        this.messageService = messageService;
        this.submitted = false;
        this.editor = src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        this.editorConfig = {
            extraPlugins: [src_app_lib_ckeditor_Base64Upload__WEBPACK_IMPORTED_MODULE_3__.default],
        };
        this.modalFile = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_0__.ModalFile();
        this.modalFile.typeFile = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_0__.TypeFile.IMAGE;
        this.modalFile.multiBoolen = false;
        this.modalFile.enityType = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_0__.EntityType.BLOG;
    }
    onReady(editor) {
        editor.ui
            .getEditableElement()
            .parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    ngOnInit() {
        this.loadFormItem();
        this.createModal();
        if (this.item) {
            this.fileURL = [];
            this.fileURL.push(this.item.imageUrl);
        }
    }
    loadFormItem() {
        this.blogForm = this.formBuilder.group({
            title: [this.item ? this.item.title : '', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            shortDes: [this.item ? this.item.shortDes : '', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            contentHTML: [
                this.item ? this.item.contentHTML : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required,
            ],
            imageUrl: [this.item ? this.item.imageUrl : '', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
        });
    }
    createModal() {
        this.modalHeader = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModel();
        this.modalHeader.title =
            this.item != null ? `Update ${this.item.title}` : `Add Blog`;
        this.modalFooter = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_0__.ModalFooterModel();
        this.modalFooter.title = 'Save';
    }
    saveBlog(event) {
        this.blog = {
            title: this.blogForm.controls.title.value.trim(),
            shortDes: this.blogForm.controls.shortDes.value.trim(),
            contentHTML: this.blogForm.controls.contentHTML.value,
            imageUrl: this.blogForm.controls.imageUrl.value,
            id: this.item ? this.item.id : '',
            createdByName: this.item ? this.item.createdByName : '',
        };
        this.submitted = true;
        if (this.blogForm.valid) {
            this.blogService
                .save(this.blog)
                .then(() => {
                this.messageService.notification(this.item ? 'Update Success' : 'Create Success', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__.TypeSweetAlertIcon.SUCCESS);
                this.blogForm.reset();
                this.submitted = false;
                this.ngbActiveModal.close();
            })
                .catch((er) => {
                var _a;
                this.messageService.alert((_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error), src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__.TypeSweetAlertIcon.ERROR);
            });
        }
    }
    close(event) {
        this.ngbActiveModal.dismiss();
    }
    get blogFormControl() {
        return this.blogForm.controls;
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
        this.blogForm.controls.imageUrl.setValue(this.fileURL.join(','));
    }
}
BlogsDetailComponent.ɵfac = function BlogsDetailComponent_Factory(t) { return new (t || BlogsDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_lib_data_services_blogs_blog_service__WEBPACK_IMPORTED_MODULE_4__.BlogService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService)); };
BlogsDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: BlogsDetailComponent, selectors: [["app-blogs-detail"]], decls: 45, vars: 24, consts: [[3, "data", "onAction"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-body"], ["id", "account", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "active", "show"], ["novalidate", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom0", "type", "text", "required", "", "formControlName", "title", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], [1, "invalid-feedback", "col-md-5", "offset-md-3"], ["class", "text-danger", 4, "ngIf"], ["for", "", 1, "col-xl-3", "col-md-4"], ["id", "", "type", "text", "formControlName", "shortDes", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom2", "type", "text", "formControlName", "imageUrl", "hidden", "", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], [1, "col-xl-8", "col-md-7", "p-0"], ["styleFile", "width: 100%; height: auto;", 3, "data", "fileURL", "onChange"], ["id", "validationCustom1", "type", "text", "formControlName", "contentHTML", 1, "col-xl-8", "col-md-7", "p-0", 3, "editor", "config", "ngClass", "ready"], [1, "text-danger"]], template: function BlogsDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-modal-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onAction", function BlogsDetailComponent_Template_app_modal_header_onAction_0_listener($event) { return ctx.close($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Blog Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, " Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, BlogsDetailComponent_span_17_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, " Short description");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, BlogsDetailComponent_span_25_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, " Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "app-upload-file", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onChange", function BlogsDetailComponent_Template_app_upload_file_onChange_33_listener($event) { return ctx.onChangeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, BlogsDetailComponent_span_35_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, " Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "ckeditor", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ready", function BlogsDetailComponent_Template_ckeditor_ready_41_listener($event) { return ctx.onReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, BlogsDetailComponent_span_43_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "app-modal-footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onAction", function BlogsDetailComponent_Template_app_modal_footer_onAction_44_listener($event) { return ctx.saveBlog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx.modalHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.blogForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](16, _c0, (ctx.blogFormControl.title.touched || ctx.submitted) && (ctx.blogFormControl.title.errors == null ? null : ctx.blogFormControl.title.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.blogFormControl.title.touched || ctx.submitted) && (ctx.blogFormControl.title.errors == null ? null : ctx.blogFormControl.title.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](18, _c0, (ctx.blogFormControl.shortDes.touched || ctx.submitted) && (ctx.blogFormControl.shortDes.errors == null ? null : ctx.blogFormControl.shortDes.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.blogFormControl.shortDes.touched || ctx.submitted) && (ctx.blogFormControl.shortDes.errors == null ? null : ctx.blogFormControl.shortDes.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](20, _c0, (ctx.blogFormControl.imageUrl.touched || ctx.submitted) && (ctx.blogFormControl.imageUrl.errors == null ? null : ctx.blogFormControl.imageUrl.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx.modalFile)("fileURL", ctx.fileURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.blogFormControl.imageUrl.touched || ctx.submitted) && (ctx.blogFormControl.imageUrl.errors == null ? null : ctx.blogFormControl.imageUrl.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("editor", ctx.editor)("config", ctx.editorConfig)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](22, _c0, (ctx.blogFormControl.shortDes.touched || ctx.submitted) && (ctx.blogFormControl.shortDes.errors == null ? null : ctx.blogFormControl.shortDes.errors.required)))("config", ctx.editorConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.blogFormControl.contentHTML.touched || ctx.submitted) && (ctx.blogFormControl.contentHTML.errors == null ? null : ctx.blogFormControl.contentHTML.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", ctx.modalFooter);
    } }, directives: [_shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_6__.ModalHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_7__.UploadFileComponent, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__.CKEditorComponent, _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_8__.ModalFooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9ncy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 19769:
/*!**********************************************************!*\
  !*** ./src/app/components/blogs/blogs-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogsRoutingModule": function() { return /* binding */ BlogsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _list_blogs_list_blogs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-blogs/list-blogs.component */ 64854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-blogs',
                component: _list_blogs_list_blogs_component__WEBPACK_IMPORTED_MODULE_0__.ListBlogsComponent,
                data: {
                    title: 'Blog List',
                    breadcrumb: 'Blog List',
                },
            },
        ],
    },
];
class BlogsRoutingModule {
}
BlogsRoutingModule.ɵfac = function BlogsRoutingModule_Factory(t) { return new (t || BlogsRoutingModule)(); };
BlogsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BlogsRoutingModule });
BlogsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlogsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 81599:
/*!**************************************************!*\
  !*** ./src/app/components/blogs/blogs.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogsModule": function() { return /* binding */ BlogsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var src_app_lib_data_services_blogs_blog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/lib/data/services/blogs/blog.service */ 55928);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _blogs_detail_blogs_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blogs-detail/blogs-detail.component */ 30890);
/* harmony import */ var _blogs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogs-routing.module */ 19769);
/* harmony import */ var _list_blogs_list_blogs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-blogs/list-blogs.component */ 64854);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 69570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);











class BlogsModule {
}
BlogsModule.ɵfac = function BlogsModule_Factory(t) { return new (t || BlogsModule)(); };
BlogsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: BlogsModule });
BlogsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [src_app_lib_data_services_blogs_blog_service__WEBPACK_IMPORTED_MODULE_0__.BlogService, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _blogs_routing_module__WEBPACK_IMPORTED_MODULE_3__.BlogsRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule,
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__.CKEditorModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BlogsModule, { declarations: [_list_blogs_list_blogs_component__WEBPACK_IMPORTED_MODULE_4__.ListBlogsComponent, _blogs_detail_blogs_detail_component__WEBPACK_IMPORTED_MODULE_2__.BlogsDetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _blogs_routing_module__WEBPACK_IMPORTED_MODULE_3__.BlogsRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__.CKEditorModule] }); })();


/***/ }),

/***/ 64854:
/*!*********************************************************************!*\
  !*** ./src/app/components/blogs/list-blogs/list-blogs.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListBlogsComponent": function() { return /* binding */ ListBlogsComponent; }
/* harmony export */ });
/* harmony import */ var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/lib/data/models */ 82409);
/* harmony import */ var src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/custom-view-cell-string/custom-view-cell-string.component */ 57870);
/* harmony import */ var src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/customViewCell/customViewCell.component */ 59314);
/* harmony import */ var src_app_shared_components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/viewimagecell/viewimagecell.component */ 18217);
/* harmony import */ var _blogs_detail_blogs_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blogs-detail/blogs-detail.component */ 30890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var src_app_lib_data_services_blogs_blog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/lib/data/services/blogs/blog.service */ 55928);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/lib/data/services/messages/message.service */ 20985);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/paging-server-view/paging-server-view.component */ 46913);












function ListBlogsComponent_app_paging_server_view_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-paging-server-view", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("page", function ListBlogsComponent_app_paging_server_view_9_Template_app_paging_server_view_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r1.onPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r0.data);
} }
class ListBlogsComponent {
    constructor(modalService, blogService, datePipe, messageService) {
        this.modalService = modalService;
        this.blogService = blogService;
        this.datePipe = datePipe;
        this.messageService = messageService;
        this.params = {};
        this.settings = {
            mode: 'external',
            actions: {
                position: 'right',
            },
            columns: {
                imageUrl: {
                    title: 'Image',
                    type: 'custom',
                    renderComponent: src_app_shared_components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_3__.ViewImageCellComponent,
                    filter: false,
                },
                title: {
                    title: 'Title',
                    type: 'custom',
                    renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_1__.CustomViewCellStringComponent,
                },
                shortDes: {
                    title: 'Short Description',
                },
                createByDate: {
                    filter: false,
                    title: 'Date Create',
                    valuePrepareFunction: (created) => {
                        return this.datePipe.transform(new Date(created), 'dd/MM/yyyy');
                    },
                    type: 'custom',
                    renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_2__.CustomViewCellComponent,
                },
            },
        };
    }
    getBlogs() {
        this.blogService
            .get({ params: this.params })
            .then((res) => {
            if (!res.hasError) {
                this.blogs = res.data.results;
                this.data = res.data;
            }
        })
            .catch((er) => {
            var _a, _b;
            this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
        });
    }
    openDetails(event) {
        var modalRef = this.modalService.open(_blogs_detail_blogs_detail_component__WEBPACK_IMPORTED_MODULE_4__.BlogsDetailComponent, {
            size: 'lg',
        });
        modalRef.componentInstance.item = event === null || event === void 0 ? void 0 : event.data;
        modalRef.result.then(() => this.getBlogs(), (dismiss) => { });
    }
    delete(event) {
        this.messageService
            .confirm(`Do you want to delete the Blog?`, 'Yes')
            .then((res) => {
            if (res.isConfirmed) {
                let blog = event.data;
                this.blogService.delete(blog).then(() => {
                    this.messageService.notification('Blog has been deleted', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);
                    this.getBlogs();
                });
            }
        });
    }
    onPage(event) {
        this.params.pageIndex = event;
        this.getBlogs();
    }
    ngOnInit() {
        this.params.pageIndex = 0;
        this.getBlogs();
    }
}
ListBlogsComponent.ɵfac = function ListBlogsComponent_Factory(t) { return new (t || ListBlogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_lib_data_services_blogs_blog_service__WEBPACK_IMPORTED_MODULE_5__.BlogService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_6__.MessageService)); };
ListBlogsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ListBlogsComponent, selectors: [["app-list-blogs"]], decls: 10, vars: 3, consts: [[1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "card-body", "vendor-table"], ["id", "batchDelete", 1, "custom-datatable", "media-datatable"], [1, "table-responsive"], [3, "settings", "source", "sourceChange", "create", "delete", "edit"], [3, "data", "page", 4, "ngIf"], [3, "data", "page"]], template: function ListBlogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Blog Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ng2-smart-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("sourceChange", function ListBlogsComponent_Template_ng2_smart_table_sourceChange_8_listener($event) { return ctx.blogs = $event; })("create", function ListBlogsComponent_Template_ng2_smart_table_create_8_listener() { return ctx.openDetails(null); })("delete", function ListBlogsComponent_Template_ng2_smart_table_delete_8_listener($event) { return ctx.delete($event); })("edit", function ListBlogsComponent_Template_ng2_smart_table_edit_8_listener($event) { return ctx.openDetails($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ListBlogsComponent_app_paging_server_view_9_Template, 1, 1, "app-paging-server-view", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.blogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.totalPage) > 1);
    } }, directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_11__.Ng2SmartTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_7__.PagingServerViewComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWJsb2dzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 55928:
/*!*********************************************************!*\
  !*** ./src/app/lib/data/services/blogs/blog.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogService": function() { return /* binding */ BlogService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/lib/http/http-client */ 8403);


class BlogService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = '/api/blog';
    }
    get(request) {
        return this.httpClient.getObservable(this.url, request).toPromise();
    }
    create(model) {
        return this.httpClient.postObservable(this.url, model).toPromise();
    }
    update(model) {
        return this.httpClient.putObservable(this.url, model).toPromise();
    }
    delete(model) {
        const url = `${this.url}/?id=${model === null || model === void 0 ? void 0 : model.id}`;
        return this.httpClient.deleteObservable(url).toPromise();
    }
    save(model) {
        if (model.id) {
            return this.update(model);
        }
        return this.create(model);
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__.HttpClientService)); };
BlogService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_components_blogs_blogs_module_ts-es2015.js.map