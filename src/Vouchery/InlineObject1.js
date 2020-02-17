/**
 * Vouchery API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * Contact: hello@vouchery.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineObject1 model module.
 * @module Vouchery/InlineObject1
 * @version 2.0.0
 */
class InlineObject1 {
    /**
     * Constructs a new <code>InlineObject1</code>.
     * @alias module:Vouchery/InlineObject1
     * @param vouchers {Array.<String>} Collection of voucher codes
     */
    constructor(vouchers) {

        InlineObject1.initialize(this, vouchers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, vouchers) {
        obj['vouchers'] = vouchers;
    }

    /**
     * Constructs a <code>InlineObject1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Vouchery/InlineObject1} obj Optional instance to populate.
     * @return {module:Vouchery/InlineObject1} The populated <code>InlineObject1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject1();

            if (data.hasOwnProperty('vouchers')) {
                obj['vouchers'] = ApiClient.convertToType(data['vouchers'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Collection of voucher codes
 * @member {Array.<String>} vouchers
 */
InlineObject1.prototype['vouchers'] = undefined;






export default InlineObject1;