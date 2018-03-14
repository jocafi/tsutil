"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a deep copy of a object. It replaces the command JSON.parse(JSON.stringify(object)).
 *
 * <p>Best performance ran at https://jsperf.com/deep-copy-vs-json-stringify-json-parse/51
 *
 * @param obj Object to be copied.
 * @returns {any} Copy of object.
 */
function deepCopyObject(object) {
    if (typeof object !== "object") {
        return object;
    }
    if (!object) {
        return object;
    }
    if (object.constructor === Array) {
        var r_1 = [];
        var l = object.length;
        for (var i = 0; i < l; i++) {
            r_1[i] = this.deepCopyObject(object[i]);
        }
        return r_1;
    }
    var r = {};
    for (var i in object) {
        r[i] = this.deepCopyObject(object[i]);
    }
    return r;
}
exports.deepCopyObject = deepCopyObject;
//# sourceMappingURL=deep-copy-object.js.map