"use strict";
(self["webpackChunkmultikart_backend"] = self["webpackChunkmultikart_backend"] || []).push([["src_app_components_contacts_contact_module_ts"],{

/***/ 51202:
/*!**********************************************************************************!*\
  !*** ./src/app/components/contacts/contact-details/contact-details.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactDetailComponent": function() { return /* binding */ ContactDetailComponent; }
/* harmony export */ });
/* harmony import */ var src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/lib/customCkeditor/ckeditor5-build-classic */ 98722);
/* harmony import */ var src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_lib_ckeditor_Base64Upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/lib/@ckeditor/Base64Upload */ 4697);
/* harmony import */ var src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/modals/models/modal.model */ 5383);
/* harmony import */ var src_app_lib_data_services_contacts_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/lib/data/services/contacts/contact.service */ 29652);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/modals/modal-header/modal-header.component */ 71279);
/* harmony import */ var _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/modals/modal-footer/modal-footer.component */ 36711);










class ContactDetailComponent {
    constructor(formBuilder, pageContentService, ngbActiveModal) {
        this.formBuilder = formBuilder;
        this.pageContentService = pageContentService;
        this.ngbActiveModal = ngbActiveModal;
        this.editor = src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__;
        this.editorConfig = {
            extraPlugins: [src_app_lib_ckeditor_Base64Upload__WEBPACK_IMPORTED_MODULE_1__.default],
        };
    }
    onReady(editor) {
        editor.ui
            .getEditableElement()
            .parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    ngOnInit() {
        this.loadItem();
        this.createModal();
    }
    createModal() {
        this.modalHeader = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__.ModalHeaderModel();
        this.modalHeader.title = `Update Contact`;
        this.modalFooter = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_2__.ModalFooterModel();
        this.modalFooter.buttons = [
            {
                color: 'btn btn-primary',
                title: 'close',
                onAction: (event) => {
                    this.ngbActiveModal.dismiss();
                },
            },
        ];
        if (this.item.status == 'Pending') {
            this.modalFooter.buttons = [
                {
                    color: 'btn btn-success',
                    title: 'Progress',
                    onAction: (event) => {
                        this.progress();
                    },
                },
                {
                    color: 'btn btn-primary',
                    title: 'Complete',
                    onAction: (event) => {
                        this.complete();
                    },
                },
            ];
        }
        if (this.item.status == 'In Progress') {
            this.modalFooter.buttons = [
                {
                    color: 'btn btn-primary',
                    title: 'Complete',
                    onAction: (event) => {
                        this.complete();
                    },
                },
            ];
        }
    }
    loadItem() {
        this.pageContentForm = this.formBuilder.group({
            firstName: [this.item ? this.item.firstName : ''],
            lastName: [this.item ? this.item.lastName : ''],
            email: [this.item ? this.item.email : ''],
            phoneNumber: [this.item ? this.item.phoneNumber : ''],
            message: [this.item ? this.item.message : ''],
            status: [this.item ? this.item.status : ''],
        });
    }
    loadModel() {
        this.contact = {
            id: this.item ? this.item.id : '',
            firstName: this.pageContentForm.value.firstName,
            lastName: this.pageContentForm.value.lastName,
            email: this.pageContentForm.value.email,
            phoneNumber: this.pageContentForm.value.phoneNumber,
            message: this.pageContentForm.value.message,
            status: this.item.status,
        };
    }
    callServiceToSave() {
        this.pageContentService
            .save(this.contact)
            .then(() => {
            this.ngbActiveModal.close();
        })
            .catch((er) => {
            if (er.error.hasError) {
                // console.log(er.error.message);
            }
        });
    }
    progress() {
        if (this.pageContentForm.invalid) {
            // console.log(this.pageContentForm);
            return;
        }
        this.loadModel();
        this.contact.status = "In Progress";
        this.callServiceToSave();
    }
    complete() {
        if (this.pageContentForm.invalid) {
            // console.log(this.pageContentForm);
            return;
        }
        this.loadModel();
        this.contact.status = "Completed";
        this.callServiceToSave();
    }
    close(event) {
        this.ngbActiveModal.dismiss();
    }
}
ContactDetailComponent.ɵfac = function ContactDetailComponent_Factory(t) { return new (t || ContactDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_lib_data_services_contacts_contact_service__WEBPACK_IMPORTED_MODULE_3__.ContactService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbActiveModal)); };
ContactDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ContactDetailComponent, selectors: [["app-contact-details"]], inputs: { item: "item" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([src_app_lib_data_services_contacts_contact_service__WEBPACK_IMPORTED_MODULE_3__.ContactService])], decls: 35, vars: 3, consts: [[3, "data", "onAction"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-body"], ["id", "account", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "active", "show"], ["novalidate", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], [1, "col-xl-3", "col-md-4"], ["type", "text", "formControlName", "firstName", "readonly", "", 1, "form-control", "col-xl-9", "col-md-8"], ["type", "text", "formControlName", "lastName", "readonly", "", 1, "form-control", "col-xl-9", "col-md-8"], ["type", "text", "formControlName", "email", "readonly", "", 1, "form-control", "col-xl-9", "col-md-8"], ["type", "text", "formControlName", "phoneNumber", "readonly", "", 1, "form-control", "col-xl-9", "col-md-8"], ["rows", "4", "formControlName", "message", "readonly", "", 1, "form-control", "col-xl-9", "col-md-8"], ["type", "text", "formControlName", "status", "readonly", "", 1, "form-control", "col-xl-9", "col-md-8"]], template: function ContactDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-modal-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onAction", function ContactDetailComponent_Template_app_modal_header_onAction_0_listener($event) { return ctx.close($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Contact Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "app-modal-footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onAction", function ContactDetailComponent_Template_app_modal_footer_onAction_34_listener() { return ctx.complete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.modalHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.pageContentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.modalFooter);
    } }, directives: [_shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_4__.ModalHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_5__.ModalFooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 90699:
/*!***************************************************************!*\
  !*** ./src/app/components/contacts/contact-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactRouting": function() { return /* binding */ ContactRouting; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _list_contact_list_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-contact/list-contact.component */ 94824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-contact',
                component: _list_contact_list_contact_component__WEBPACK_IMPORTED_MODULE_0__.ListContactComponent,
                data: {
                    title: 'Contact List',
                    breadcrumb: 'Contact List',
                },
            },
        ],
    },
];
class ContactRouting {
}
ContactRouting.ɵfac = function ContactRouting_Factory(t) { return new (t || ContactRouting)(); };
ContactRouting.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContactRouting });
ContactRouting.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 41646:
/*!*******************************************************!*\
  !*** ./src/app/components/contacts/contact.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactModule": function() { return /* binding */ ContactModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 69570);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-details/contact-details.component */ 51202);
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-routing.module */ 90699);
/* harmony import */ var _list_contact_list_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-contact/list-contact.component */ 94824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);










class ContactModule {
}
ContactModule.ɵfac = function ContactModule_Factory(t) { return new (t || ContactModule)(); };
ContactModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ContactModule });
ContactModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_2__.ContactRouting,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModalModule,
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__.Ng2SmartTableModule,
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__.CKEditorModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ContactModule, { declarations: [_list_contact_list_contact_component__WEBPACK_IMPORTED_MODULE_3__.ListContactComponent, _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_1__.ContactDetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _contact_routing_module__WEBPACK_IMPORTED_MODULE_2__.ContactRouting,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModalModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__.Ng2SmartTableModule,
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__.CKEditorModule] }); })();


/***/ }),

/***/ 94824:
/*!****************************************************************************!*\
  !*** ./src/app/components/contacts/list-contact/list-contact.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListContactComponent": function() { return /* binding */ ListContactComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/lib/data/models */ 82409);
/* harmony import */ var src_app_lib_data_services_contacts_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/lib/data/services/contacts/contact.service */ 29652);
/* harmony import */ var src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/custom-view-cell-string/custom-view-cell-string.component */ 57870);
/* harmony import */ var src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/customViewCell/customViewCell.component */ 59314);
/* harmony import */ var _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact-details/contact-details.component */ 51202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/lib/data/services/messages/message.service */ 20985);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/paging-server-view/paging-server-view.component */ 46913);













function ListContactComponent_app_paging_server_view_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-paging-server-view", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function ListContactComponent_app_paging_server_view_9_Template_app_paging_server_view_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r1.onPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx_r0.data);
} }
class ListContactComponent {
    constructor(modalService, contactService, messageService, datePipe) {
        this.modalService = modalService;
        this.contactService = contactService;
        this.messageService = messageService;
        this.datePipe = datePipe;
        this.params = {};
        this.settings = {
            mode: 'external',
            pager: {
                display: true,
                perPage: 10,
            },
            actions: {
                position: 'right',
                add: false,
                delete: false,
            },
            columns: {
                firstName: {
                    title: 'First Name',
                    type: 'custom',
                    renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_2__.CustomViewCellStringComponent,
                },
                lastName: {
                    title: 'Last Name',
                    type: 'custom',
                    renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_2__.CustomViewCellStringComponent,
                },
                phoneNumber: {
                    title: 'Phone Number',
                    type: 'custom',
                    renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_3__.CustomViewCellComponent,
                },
                email: { title: 'Email' },
                status: { title: 'Status' },
                createByDate: {
                    title: 'Create Date',
                    valuePrepareFunction: (date) => {
                        return this.datePipe.transform(new Date(date), 'dd/MM/yyyy');
                    },
                    type: 'custom',
                    renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_3__.CustomViewCellComponent,
                },
            },
        };
        this.getList();
    }
    openPopup(item) {
        var modalRef = this.modalService.open(_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_4__.ContactDetailComponent, {
            size: 'lg',
        });
        if (item)
            modalRef.componentInstance.item = item.data;
        if (!item)
            modalRef.componentInstance.item = item;
        modalRef.result.then((close) => {
            this.getList();
        }, (dismiss) => { });
    }
    delete(event) {
        this.messageService
            .confirm(`Do you want to delete the category?`, 'Yes')
            .then((res) => {
            if (res.isConfirmed) {
                let contact = event.data;
                this.contactService.delete(contact).then(() => {
                    this.messageService.notification('Contact has been deleted', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);
                    this.getList();
                });
            }
        });
    }
    getList() {
        this.contactService
            .getList(null)
            .then((res) => {
            if (!res.hasError) {
                this.contacts = res.data;
                // console.log('contact', res.data);
            }
        })
            .catch((er) => {
            if (er.error.hasError) {
                // console.log(er.error.message);
            }
        });
    }
    onPage(event) {
        this.params.pageIndex = event;
        this.getList();
    }
}
ListContactComponent.ɵfac = function ListContactComponent_Factory(t) { return new (t || ListContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_lib_data_services_contacts_contact_service__WEBPACK_IMPORTED_MODULE_1__.ContactService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe)); };
ListContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ListContactComponent, selectors: [["app-list-page-content"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([src_app_lib_data_services_contacts_contact_service__WEBPACK_IMPORTED_MODULE_1__.ContactService, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe])], decls: 10, vars: 3, consts: [[1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "card-body", "vendor-table"], [1, "custom-datatable", "media-datatable"], [1, "table-responsive"], [3, "settings", "source", "edit", "create", "delete", "sourceChange"], [3, "data", "page", 4, "ngIf"], [3, "data", "page"]], template: function ListContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Contact Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ng2-smart-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("edit", function ListContactComponent_Template_ng2_smart_table_edit_8_listener($event) { return ctx.openPopup($event); })("create", function ListContactComponent_Template_ng2_smart_table_create_8_listener() { return ctx.openPopup(null); })("delete", function ListContactComponent_Template_ng2_smart_table_delete_8_listener($event) { return ctx.delete($event); })("sourceChange", function ListContactComponent_Template_ng2_smart_table_sourceChange_8_listener($event) { return ctx.contacts = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ListContactComponent_app_paging_server_view_9_Template, 1, 1, "app-paging-server-view", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.contacts);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.totalPage) > 1);
    } }, directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__.Ng2SmartTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_6__.PagingServerViewComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWNvbnRhY3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 29652:
/*!***************************************************************!*\
  !*** ./src/app/lib/data/services/contacts/contact.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactService": function() { return /* binding */ ContactService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/lib/http/http-client */ 8403);


class ContactService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = '/api/contact';
    }
    getList(request) {
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
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__.HttpClientService)); };
ContactService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_components_contacts_contact_module_ts-es2015.js.map