"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var response_model_1 = require("../../shared-models/response.model");
var PurchaseOrderViewModelResponse = /** @class */ (function (_super) {
    __extends(PurchaseOrderViewModelResponse, _super);
    function PurchaseOrderViewModelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PurchaseOrderViewModelResponse;
}(response_model_1.ResponseModel));
exports.PurchaseOrderViewModelResponse = PurchaseOrderViewModelResponse;
//# sourceMappingURL=purchase-order-response.viewmodel.js.map