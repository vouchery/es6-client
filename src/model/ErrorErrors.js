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
 * The ErrorErrors model module.
 * @module model/ErrorErrors
 * @version 2.0.0
 */
class ErrorErrors {
    /**
     * Constructs a new <code>ErrorErrors</code>.
     * @alias module:model/ErrorErrors
     */
    constructor() {

        ErrorErrors.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {}

    /**
     * Constructs a <code>ErrorErrors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorErrors} obj Optional instance to populate.
     * @return {module:model/ErrorErrors} The populated <code>ErrorErrors</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorErrors();

            if (data.hasOwnProperty('attribute')) {
                obj['attribute'] = ApiClient.convertToType(data['attribute'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('boundary_value')) {
                obj['boundary_value'] = ApiClient.convertToType(data['boundary_value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Attribute name
 * @member {String} attribute
 */
ErrorErrors.prototype['attribute'] = undefined;

/**
 * Machine-readable API error code
 * @member {module:model/ErrorErrors.CodeEnum} code
 */
ErrorErrors.prototype['code'] = undefined;

/**
 * Human-readable error message
 * @member {String} message
 */
ErrorErrors.prototype['message'] = undefined;

/**
 * Minimum, maximum, or expected value for this attribute
 * @member {String} boundary_value
 */
ErrorErrors.prototype['boundary_value'] = undefined;





/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
ErrorErrors['CodeEnum'] = {

    /**
     * value: "required"
     * @const
     */
    "required": "required",

    /**
     * value: "below_minimum"
     * @const
     */
    "below_minimum": "below_minimum",

    /**
     * value: "above_maximum"
     * @const
     */
    "above_maximum": "above_maximum",

    /**
     * value: "unexpected_value"
     * @const
     */
    "unexpected_value": "unexpected_value",

    /**
     * value: "must_be_unique"
     * @const
     */
    "must_be_unique": "must_be_unique",

    /**
     * value: "should_match_confirmation"
     * @const
     */
    "should_match_confirmation": "should_match_confirmation",

    /**
     * value: "must_be_accepted"
     * @const
     */
    "must_be_accepted": "must_be_accepted",

    /**
     * value: "must_be_null"
     * @const
     */
    "must_be_null": "must_be_null",

    /**
     * value: "too_short"
     * @const
     */
    "too_short": "too_short",

    /**
     * value: "too_long"
     * @const
     */
    "too_long": "too_long",

    /**
     * value: "wrong_length"
     * @const
     */
    "wrong_length": "wrong_length",

    /**
     * value: "invalid"
     * @const
     */
    "invalid": "invalid",

    /**
     * value: "invalid_date"
     * @const
     */
    "invalid_date": "invalid_date",

    /**
     * value: "invalid_time"
     * @const
     */
    "invalid_time": "invalid_time",

    /**
     * value: "invalid_datetime"
     * @const
     */
    "invalid_datetime": "invalid_datetime",

    /**
     * value: "not_allowed_to_have_vouchers"
     * @const
     */
    "not_allowed_to_have_vouchers": "not_allowed_to_have_vouchers",

    /**
     * value: "already_confirmed"
     * @const
     */
    "already_confirmed": "already_confirmed",

    /**
     * value: "expired"
     * @const
     */
    "expired": "expired",

    /**
     * value: "missing_required_tags"
     * @const
     */
    "missing_required_tags": "missing_required_tags",

    /**
     * value: "includes_forbidden_tags"
     * @const
     */
    "includes_forbidden_tags": "includes_forbidden_tags",

    /**
     * value: "missing_required_category"
     * @const
     */
    "missing_required_category": "missing_required_category",

    /**
     * value: "outside_of_permitted_areas"
     * @const
     */
    "outside_of_permitted_areas": "outside_of_permitted_areas",

    /**
     * value: "not_valid_at_this_time"
     * @const
     */
    "not_valid_at_this_time": "not_valid_at_this_time",

    /**
     * value: "maximum_redemptions_exceeded"
     * @const
     */
    "maximum_redemptions_exceeded": "maximum_redemptions_exceeded",

    /**
     * value: "budget_exceeded"
     * @const
     */
    "budget_exceeded": "budget_exceeded",

    /**
     * value: "new_customer_required"
     * @const
     */
    "new_customer_required": "new_customer_required",

    /**
     * value: "per_customer_limit_exceeded"
     * @const
     */
    "per_customer_limit_exceeded": "per_customer_limit_exceeded",

    /**
     * value: "time_limit_expired"
     * @const
     */
    "time_limit_expired": "time_limit_expired",

    /**
     * value: "redemptions_limit_exceeded"
     * @const
     */
    "redemptions_limit_exceeded": "redemptions_limit_exceeded",

    /**
     * value: "below_campaign_minimum"
     * @const
     */
    "below_campaign_minimum": "below_campaign_minimum",

    /**
     * value: "unknown_tags"
     * @const
     */
    "unknown_tags": "unknown_tags",

    /**
     * value: "does_not_match_assigned_customer"
     * @const
     */
    "does_not_match_assigned_customer": "does_not_match_assigned_customer",

    /**
     * value: "not_active"
     * @const
     */
    "not_active": "not_active",

    /**
     * value: "unique_code_already_used"
     * @const
     */
    "unique_code_already_used": "unique_code_already_used",

    /**
     * value: "not_match"
     * @const
     */
    "not_match": "not_match"
};



export default ErrorErrors;