/**
 * Returns a deep copy of a object. It replaces the command JSON.parse(JSON.stringify(object)).
 *
 * <p>Best performance ran at https://jsperf.com/deep-copy-vs-json-stringify-json-parse/51
 *
 * @param obj Object to be copied.
 * @returns {any} Copy of object.
 */
export declare function deepCopyObject(object: any): any;
