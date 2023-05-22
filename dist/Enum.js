"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceStatusEnum = exports.FileStatusEnum = void 0;
var FileStatusEnum;
(function (FileStatusEnum) {
    FileStatusEnum["PICKUP_BY_SFTP"] = "PICKUP_BY_SFTP";
    FileStatusEnum["STORE_TO_BUCKET"] = "STORE_TO_BUCKET";
    FileStatusEnum["PUSH_TO_QUEUE"] = "PUSH_TO_QUEUE";
    FileStatusEnum["IN_VALIDATOR"] = "IN_VALIDATOR";
    FileStatusEnum["QUEUE_SUCCESS"] = "QUEUE_SUCCESS";
    FileStatusEnum["SENT_TO_DEST"] = "SENT_TO_DEST";
    FileStatusEnum["FAILED"] = "FAILED";
})(FileStatusEnum = exports.FileStatusEnum || (exports.FileStatusEnum = {}));
var ResourceStatusEnum;
(function (ResourceStatusEnum) {
    ResourceStatusEnum["ACTIVE"] = "ACTIVE";
    ResourceStatusEnum["INACTIVE"] = "INACTIVE";
})(ResourceStatusEnum = exports.ResourceStatusEnum || (exports.ResourceStatusEnum = {}));
//# sourceMappingURL=Enum.js.map