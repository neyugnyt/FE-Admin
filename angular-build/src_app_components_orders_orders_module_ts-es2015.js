"use strict";
(self["webpackChunkmultikart_backend"] = self["webpackChunkmultikart_backend"] || []).push([["src_app_components_orders_orders_module_ts"],{

/***/ 80917:
/*!***********************************************************************!*\
  !*** ./src/app/components/orders/list-order/list-orders.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListOrdersComponent": function() { return /* binding */ ListOrdersComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/lib/data/models */ 82409);
/* harmony import */ var src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/lib/data/services/orders/orders.service */ 2924);
/* harmony import */ var src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/custom-view-cell-number/custom-view-cell-number.component */ 58676);
/* harmony import */ var src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/customViewCell/customViewCell.component */ 59314);
/* harmony import */ var _update_order_update_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../update-order/update-order.component */ 85110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/lib/data/services/messages/message.service */ 20985);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/paging-server-view/paging-server-view.component */ 46913);













function ListOrdersComponent_app_paging_server_view_26_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-paging-server-view", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function ListOrdersComponent_app_paging_server_view_26_Template_app_paging_server_view_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r5.onPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx_r4.data);
} }
class ListOrdersComponent {
    constructor(modalService, ordersService, datePipe, messageService) {
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
                delete: false,
            },
            columns: {
                code: {
                    title: 'Code',
                },
                createByDate: {
                    filter: false,
                    title: 'Created Date',
                    valuePrepareFunction: (date) => {
                        return this.datePipe.transform(new Date(date), 'dd/MM/yyyy');
                    },
                    type: 'custom',
                    renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_3__.CustomViewCellComponent,
                },
                fullName: {
                    title: 'Full Name',
                },
                address: {
                    title: 'Address',
                },
                phone: {
                    title: 'Phone',
                    type: 'custom',
                    renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_3__.CustomViewCellComponent,
                },
                email: {
                    title: 'Email',
                },
                status: {
                    filter: false,
                    title: 'Status',
                },
                note: {
                    filter: false,
                    title: 'Note',
                },
                hasCoupon: {
                    filter: false,
                    title: 'Coupon Applied',
                    valuePrepareFunction: (cell, row) => {
                        return cell ? row.couponName : '';
                    },
                },
                totalAmount: {
                    filter: false,
                    title: 'Total Amount',
                    value: 'totalAmount',
                    type: 'custom',
                    renderComponent: src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_2__.CustomViewCellNumberComponent,
                },
            },
        };
        this.params.pageIndex = 0;
        // this.getOrders();
    }
    ngOnInit() {
        this.actionFilter('New');
    }
    getOrders() {
        this.isGetOrders = false;
        this.ordersService
            .get({ params: this.params })
            .then((res) => {
            if (!res.hasError) {
                this.data = res.data;
                this.orders = res.data.results;
                this.orders.forEach((order) => {
                    order.hasCoupon = false;
                    if (order.couponCode) {
                        order.hasCoupon = true;
                    }
                });
            }
        })
            .catch((er) => {
            if (er.error.hasError) {
                console.log(er.error.message);
            }
        });
    }
    openUpdate(event) {
        var modalRef = this.modalService.open(_update_order_update_order_component__WEBPACK_IMPORTED_MODULE_4__.UpdateOrderComponent, {
            size: 'lg',
        });
        modalRef.componentInstance.item = event === null || event === void 0 ? void 0 : event.data;
        modalRef.result.then(() => this.getOrders(), (dismiss) => { });
    }
    statusFilter(button) {
        this.isGetOrders = true;
        let status = button.innerText.toUpperCase() !== 'All'.toUpperCase()
            ? button.innerText
            : '';
        button.classList.add('active');
        if (this.filter == status || status == '') {
            this.filter = '';
            this.params.pageIndex = 0;
            return this.getOrders();
        }
        this.filter = status;
        return this.actionFilter(status);
    }
    removeAllAction(...left) {
        left.forEach((i) => i.classList.remove('active'));
    }
    actionFilter(status) {
        this.ordersService
            .getByStatus(null, status)
            .then((response) => {
            this.orders = response.data ? response.data : [];
            this.orders.forEach((order) => {
                order.hasCoupon = false;
                if (order.couponCode) {
                    order.hasCoupon = true;
                }
            });
        })
            .catch((er) => {
            var _a, _b;
            this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
            // if (er.error.hasError) {
            //   console.log(er.error.message)
            // }
        });
    }
    onPage(event) {
        this.params.pageIndex = event;
        this.getOrders();
    }
}
ListOrdersComponent.ɵfac = function ListOrdersComponent_Factory(t) { return new (t || ListOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService)); };
ListOrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ListOrdersComponent, selectors: [["app-list-orders"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe])], decls: 27, vars: 3, consts: [[1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "card-body", "vendor-table"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", "btn-xs", "mr-2", 3, "click"], ["allButton", ""], ["type", "button", 1, "btn", "btn-primary", "btn-xs", "mr-2", "active", 3, "click"], ["newButton", ""], ["approvedButton", ""], ["rejectedButton", ""], ["id", "batchDelete", 1, "custom-datatable", "media-datatable"], [1, "table-responsive"], [3, "settings", "source", "sourceChange", "edit"], [3, "data", "page", 4, "ngIf"], [3, "data", "page"]], template: function ListOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListOrdersComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](20); ctx.removeAllAction(_r0, _r1, _r2, _r3); return ctx.statusFilter(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListOrdersComponent_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](20); ctx.removeAllAction(_r0, _r1, _r2, _r3); return ctx.statusFilter(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 5, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListOrdersComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](20); ctx.removeAllAction(_r0, _r1, _r2, _r3); return ctx.statusFilter(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " Approved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 5, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListOrdersComponent_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](20); ctx.removeAllAction(_r0, _r1, _r2, _r3); return ctx.statusFilter(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Rejected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "ng2-smart-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sourceChange", function ListOrdersComponent_Template_ng2_smart_table_sourceChange_25_listener($event) { return ctx.orders = $event; })("edit", function ListOrdersComponent_Template_ng2_smart_table_edit_25_listener($event) { return ctx.openUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ListOrdersComponent_app_paging_server_view_26_Template, 1, 1, "app-paging-server-view", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isGetOrders && (ctx.data == null ? null : ctx.data.totalPage) > 1);
    } }, directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__.Ng2SmartTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_6__.PagingServerViewComponent], styles: ["button.btn.btn-primary.active[_ngcontent-%COMP%] {\n  background-color: #f93e44 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Qtb3JkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUFDRiIsImZpbGUiOiJsaXN0LW9yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbi5idG4uYnRuLXByaW1hcnkuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjkzZTQ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 58614:
/*!************************************************************!*\
  !*** ./src/app/components/orders/orders-routing.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersRoutingModule": function() { return /* binding */ OrdersRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _list_order_list_orders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-order/list-orders.component */ 80917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-orders',
                component: _list_order_list_orders_component__WEBPACK_IMPORTED_MODULE_0__.ListOrdersComponent,
                data: {
                    title: "Order List",
                    breadcrumb: "Order List"
                }
            }
        ]
    }
];
class OrdersRoutingModule {
}
OrdersRoutingModule.ɵfac = function OrdersRoutingModule_Factory(t) { return new (t || OrdersRoutingModule)(); };
OrdersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OrdersRoutingModule });
OrdersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrdersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8605:
/*!****************************************************!*\
  !*** ./src/app/components/orders/orders.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersModule": function() { return /* binding */ OrdersModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/lib/data/services */ 19764);
/* harmony import */ var _list_order_list_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-order/list-orders.component */ 80917);
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders-routing.module */ 58614);
/* harmony import */ var _update_order_update_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-order/update-order.component */ 85110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);










class OrdersModule {
}
OrdersModule.ɵfac = function OrdersModule_Factory(t) { return new (t || OrdersModule)(); };
OrdersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: OrdersModule });
OrdersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_1__.BannersService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule,
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableModule,
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__.OrdersRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](OrdersModule, { declarations: [_list_order_list_orders_component__WEBPACK_IMPORTED_MODULE_2__.ListOrdersComponent, _update_order_update_order_component__WEBPACK_IMPORTED_MODULE_4__.UpdateOrderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableModule,
        _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__.OrdersRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 85110:
/*!**************************************************************************!*\
  !*** ./src/app/components/orders/update-order/update-order.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateOrderComponent": function() { return /* binding */ UpdateOrderComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/lib/data/models */ 82409);
/* harmony import */ var src_app_lib_data_models_orders_order_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/lib/data/models/orders/order.model */ 88285);
/* harmony import */ var src_app_lib_data_services_orders_order_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/lib/data/services/orders/order-details.service */ 63960);
/* harmony import */ var src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/lib/data/services/orders/orders.service */ 2924);
/* harmony import */ var src_app_shared_components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/viewimagecell/viewimagecell.component */ 18217);
/* harmony import */ var src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/modals/models/modal.model */ 5383);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/custom-view-cell-number/custom-view-cell-number.component */ 58676);
/* harmony import */ var src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/customViewCell/customViewCell.component */ 59314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/lib/data/services/messages/message.service */ 20985);
/* harmony import */ var _shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/modals/modal-header/modal-header.component */ 71279);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/modals/modal-footer/modal-footer.component */ 36711);





















function UpdateOrderComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Full Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function UpdateOrderComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Address is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function UpdateOrderComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function UpdateOrderComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Phone is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
class UpdateOrderComponent {
    constructor(formBuilder, ngbActiveModal, ordersService, orderDetailsService, messageService) {
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
                    renderComponent: src_app_shared_components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_4__.ViewImageCellComponent,
                },
                productName: {
                    title: 'Product Name',
                },
                price: {
                    title: 'Price',
                    value: 'price',
                    type: 'custom',
                    renderComponent: src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_7__.CustomViewCellNumberComponent,
                },
                quantity: {
                    title: 'Quantity',
                    value: 'quantity',
                    type: 'custom',
                    renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_8__.CustomViewCellComponent,
                },
                totalAmount: {
                    title: 'Total Amount',
                    value: 'totalAmount',
                    type: 'custom',
                    renderComponent: src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_7__.CustomViewCellNumberComponent,
                },
            },
        };
    }
    ngOnInit() {
        this.loadFormItem();
        this.createModal();
        this.getOrderDetails();
    }
    loadFormItem() {
        var check = this.item.status == 'Rejected';
        this.orderForm = this.formBuilder.group({
            fullName: [
                { value: this.item.fullName, disabled: check },
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
            ],
            address: [
                { value: this.item.address, disabled: check },
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
            ],
            email: [{ value: this.item.email, disabled: check }, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            phone: [{ value: this.item.phone, disabled: check }, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            status: [
                { value: this.item.status, disabled: true },
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
            ],
        });
    }
    createModal() {
        this.modalHeader = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_5__.ModalHeaderModel();
        this.modalHeader.title = `Update Order`;
        this.modalFooter = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_5__.ModalFooterModel();
        this.modalFooter.buttons = [
            {
                color: 'btn btn-primary',
                title: 'close',
                onAction: (event) => {
                    this.ngbActiveModal.dismiss();
                },
            },
        ];
        if (this.item.status == 'New') {
            this.modalFooter.buttons = [
                {
                    color: 'btn btn-info',
                    title: 'save',
                    onAction: (event) => {
                        this.save();
                    },
                },
                {
                    color: 'btn btn-success',
                    title: 'approve',
                    onAction: (event) => {
                        this.approve();
                    },
                },
                {
                    color: 'btn btn-primary',
                    title: 'reject',
                    onAction: (event) => {
                        this.reject();
                    },
                },
            ];
        }
        if (this.item.status == 'Approved') {
            this.modalFooter.buttons = [
                {
                    color: 'btn btn-info',
                    title: 'save',
                    onAction: (event) => {
                        this.save();
                    },
                },
                {
                    color: 'btn btn-primary',
                    title: 'close',
                    onAction: (event) => {
                        this.ngbActiveModal.dismiss();
                    },
                },
            ];
        }
    }
    get orderFormControl() {
        return this.orderForm.controls;
    }
    loadOrderModel() {
        this.order = {
            fullName: this.orderForm.controls.fullName.value,
            address: this.orderForm.controls.address.value,
            email: this.orderForm.controls.email.value,
            phone: this.orderForm.controls.phone.value,
            status: this.item.status,
            id: this.item.id,
            totalAmount: this.item.totalAmount,
            totalItem: this.item.totalItem,
        };
    }
    save() {
        this.loadOrderModel();
        this.submitted = true;
        if (this.orderForm.valid) {
            this.ordersService
                .update(this.order)
                .then(() => {
                this.messageService.notification('Order has been edited', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);
            })
                .catch((er) => {
                var _a, _b;
                this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
            });
        }
    }
    approve() {
        this.loadOrderModel();
        this.order.status = 'Approved';
        this.messageService
            .confirm(`Do you want to approve the order?`, 'Yes', 'No', false)
            .then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (result.isConfirmed) {
                this.submitted = true;
                if (this.orderForm.valid) {
                    this.ordersService
                        .update(this.order)
                        .then(() => {
                        this.messageService.notification('Order has been approved', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);
                        this.ngbActiveModal.close();
                    })
                        .catch((er) => {
                        var _a, _b;
                        this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
                    });
                }
            }
        }));
    }
    reject() {
        this.loadOrderModel();
        this.order.status = 'Rejected';
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            title: `Do you want to reject the order?`,
            input: 'text',
            inputPlaceholder: 'Why?',
            showCancelButton: true,
            confirmButtonText: `Yes`,
            icon: 'question',
        }).then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (result.isConfirmed) {
                this.submitted = true;
                this.order.note = result.value;
                console.log(result.value);
                if (this.orderForm.valid) {
                    this.ordersService
                        .update(this.order)
                        .then((res) => {
                        this.messageService.notification('Order has been rejected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.SUCCESS);
                        this.ngbActiveModal.close();
                    })
                        .catch((er) => {
                        var _a, _b;
                        this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
                        // if (er.error.hasError) {
                        //   console.log(er.error.message);
                        // }
                    });
                }
            }
        }));
    }
    getOrderDetails() {
        this.orderDetailsService
            .getByOrder(this.item.id, null)
            .then((res) => {
            if (!res.hasError) {
                this.orderDetails = res.data;
            }
        })
            .catch((er) => {
            var _a, _b;
            this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_0__.TypeSweetAlertIcon.ERROR);
            // if (er.error.hasError) {
            //   console.log(er.error.message);
            // }
        });
    }
    close(event) {
        this.ngbActiveModal.dismiss();
    }
}
UpdateOrderComponent.ɵfac = function UpdateOrderComponent_Factory(t) { return new (t || UpdateOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_lib_data_services_orders_order_details_service__WEBPACK_IMPORTED_MODULE_2__.OrderDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_9__.MessageService)); };
UpdateOrderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: UpdateOrderComponent, selectors: [["app-update-order"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService, src_app_lib_data_services_orders_order_details_service__WEBPACK_IMPORTED_MODULE_2__.OrderDetailsService])], decls: 53, vars: 10, consts: [[3, "data", "onAction"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-body"], ["id", "account", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "active", "show"], ["novalidate", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], [1, "col-xl-3", "col-md-4"], ["type", "text", "required", "", "formControlName", "fullName", 1, "form-control", "col-xl-8", "col-md-7"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "required", "", "formControlName", "address", 1, "form-control", "col-xl-8", "col-md-7"], ["type", "text", "required", "", "formControlName", "email", 1, "form-control", "col-xl-8", "col-md-7"], ["type", "text", "required", "", "formControlName", "phone", 1, "form-control", "col-xl-8", "col-md-7"], ["type", "text", "required", "", "formControlName", "status", "readonly", "", 1, "form-control", "col-xl-8", "col-md-7"], [1, "col-12"], [1, "vendor-table"], ["id", "batchDelete", 1, "custom-datatable", "media-datatable"], [1, "table-responsive"], [3, "settings", "source", "sourceChange"], [1, "text-danger"]], template: function UpdateOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-modal-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onAction", function UpdateOrderComponent_Template_app_modal_header_onAction_0_listener($event) { return ctx.close($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("sourceChange", function UpdateOrderComponent_Template_ng2_smart_table_sourceChange_51_listener($event) { return ctx.orderDetails = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onAction", function UpdateOrderComponent_Template_app_modal_footer_onAction_52_listener() { return ctx.approve(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_10__.ModalHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, ng2_smart_table__WEBPACK_IMPORTED_MODULE_17__.Ng2SmartTableComponent, _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_11__.ModalFooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 88285:
/*!*******************************************************!*\
  !*** ./src/app/lib/data/models/orders/order.model.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderModel": function() { return /* binding */ OrderModel; },
/* harmony export */   "OrderDetailModel": function() { return /* binding */ OrderDetailModel; }
/* harmony export */ });
class OrderModel {
    constructor() {
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
    }
}
class OrderDetailModel {
    constructor() {
        // orderId:string;
        this.productName = '';
        this.productId = '';
        this.price = 0;
        this.quantity = 0;
        this.totalAmount = 0;
        this.productImgUrl = '';
    }
}


/***/ }),

/***/ 63960:
/*!*******************************************************************!*\
  !*** ./src/app/lib/data/services/orders/order-details.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetailsService": function() { return /* binding */ OrderDetailsService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/lib/http/http-client */ 8403);


class OrderDetailsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = '/api/order-detail';
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
    delete(id) {
        const url = `${this.url}?id=${id}`;
        return this.httpClient.deleteObservable(url).toPromise();
    }
    getByOrder(id, request) {
        const url = `${this.url}/order?id=${id}`;
        return this.httpClient.getObservable(url, request).toPromise();
    }
}
OrderDetailsService.ɵfac = function OrderDetailsService_Factory(t) { return new (t || OrderDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__.HttpClientService)); };
OrderDetailsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderDetailsService, factory: OrderDetailsService.ɵfac });


/***/ }),

/***/ 2924:
/*!************************************************************!*\
  !*** ./src/app/lib/data/services/orders/orders.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersService": function() { return /* binding */ OrdersService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/lib/http/http-client */ 8403);


class OrdersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = '/api/order';
    }
    get(request) {
        return this.httpClient.getObservable(this.url, request).toPromise();
    }
    getDetails(request) {
        return this.httpClient.getObservable(this.url + '-detail', request).toPromise();
    }
    getByStatus(request, status) {
        return this.httpClient.getObservable(this.url + '/by-status?status=' + status, request).toPromise();
    }
    create(model) {
        return this.httpClient.postObservable(this.url, model).toPromise();
    }
    update(model) {
        return this.httpClient.putObservable(this.url, model).toPromise();
    }
    delete(model) {
        const url = `${this.url}?id=${model === null || model === void 0 ? void 0 : model.id}`;
        return this.httpClient.deleteObservable(url).toPromise();
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_0__.HttpClientService)); };
OrdersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrdersService, factory: OrdersService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_components_orders_orders_module_ts-es2015.js.map