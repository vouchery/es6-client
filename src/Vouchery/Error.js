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
import ErrorErrors from './ErrorErrors';

/**
 * The Error model module.
 * @module Vouchery/Error
 * @version 2.0.0
 */
class Error {
    /**
     * Constructs a new <code>Error</code>.
     * @alias module:Vouchery/Error
     */
    constructor() {

        Error.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {}

    /**
     * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Vouchery/Error} obj Optional instance to populate.
     * @return {module:Vouchery/Error} The populated <code>Error</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Error();

            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'Boolean');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [ErrorErrors]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} error
 */
Error.prototype['error'] = undefined;

/**
 * Machine-readable API error code
 * @member {module:Vouchery/Error.CodeEnum} code
 */
Error.prototype['code'] = undefined;

/**
 * Human-readable error message
 * @member {String} message
 */
Error.prototype['message'] = undefined;

/**
 * @member {Array.<module:Vouchery/ErrorErrors>} errors
 */
Error.prototype['errors'] = undefined;





/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
Error['CodeEnum'] = {

    /**
     * value: "invalid"
     * @const
     */
    "invalid": "invalid",

    /**
     * value: "not_found"
     * @const
     */
    "not_found": "not_found",

    /**
     * value: "not_authorized"
     * @const
     */
    "not_authorized": "not_authorized",

    /**
     * value: "forbidden"
     * @const
     */
    "forbidden": "forbidden",

    /**
     * value: "can_not_be_deleted"
     * @const
     */
    "can_not_be_deleted": "can_not_be_deleted",

    /**
     * value: "unknown_attribute"
     * @const
     */
    "unknown_attribute": "unknown_attribute",

    /**
     * value: "invalid_type"
     * @const
     */
    "invalid_type": "invalid_type",

    /**
     * value: "unknown_error"
     * @const
     */
    "unknown_error": "unknown_error"
};



export default Error;