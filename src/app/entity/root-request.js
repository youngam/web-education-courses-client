"use strict";
/**
 * Created by alex on 2/11/17.
 */
var RootRequest = (function () {
    function RootRequest(methodName, requestBody) {
        this.methodName = methodName;
        this.request = requestBody;
    }
    return RootRequest;
}());
exports.RootRequest = RootRequest;
//# sourceMappingURL=root-request.js.map