export class TsUtil {

  /**
   * Returns a deep copy of a object. It replaces the command JSON.parse(JSON.stringify(object)).
   *
   * <p>Best performance ran at https://jsperf.com/deep-copy-vs-json-stringify-json-parse/51
   *
   * @param obj Object to be copied.
   * @returns {any} Copy of object.
   */
  deepCopyObject(object: any): any {
    if (typeof object !== "object") { return object; }
    if (!object) { return object; }
    if ( object.constructor === Array ) {
      const r = [];  const l = object.length;
      for ( let i = 0; i < l; i++ ) { r[i] = this.deepCopyObject( object[i] ); }
      return r;
    }
    const r: any = {};
    for (const i in object ) {
      r[i] = this.deepCopyObject( object[i] );
     }
    return r;
  }
}