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
 * The RuleCustomerMaxRedemptions model module.
 * @module model/RuleCustomerMaxRedemptions
 * @version 2.0
 */
class RuleCustomerMaxRedemptions {
    /**
     * Constructs a new <code>RuleCustomerMaxRedemptions</code>.
     * @alias module:model/RuleCustomerMaxRedemptions
     * @param type {module:model/RuleCustomerMaxRedemptions.TypeEnum} Limit the number of redemptions customer can redeem within subcampaign.
     * @param maxRedemptions {Number} 
     */
    constructor(type, maxRedemptions) {

        RuleCustomerMaxRedemptions.initialize(this, type, maxRedemptions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, maxRedemptions) {
        obj['type'] = type;
        obj['max_redemptions'] = maxRedemptions;
    }

    /**
     * Constructs a <code>RuleCustomerMaxRedemptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleCustomerMaxRedemptions} obj Optional instance to populate.
     * @return {module:model/RuleCustomerMaxRedemptions} The populated <code>RuleCustomerMaxRedemptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleCustomerMaxRedemptions();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('max_redemptions')) {
                obj['max_redemptions'] = ApiClient.convertToType(data['max_redemptions'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Limit the number of redemptions customer can redeem within subcampaign.
 * @member {module:model/RuleCustomerMaxRedemptions.TypeEnum} type
 * @default 'customer_max_redemptions'
 */
RuleCustomerMaxRedemptions.prototype['type'] = 'customer_max_redemptions';

/**
 * @member {Number} max_redemptions
 */
RuleCustomerMaxRedemptions.prototype['max_redemptions'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RuleCustomerMaxRedemptions['TypeEnum'] = {

    /**
     * value: "customer_max_redemptions"
     * @const
     */
    "customer_max_redemptions": "customer_max_redemptions"
};



export default RuleCustomerMaxRedemptions;