/**
 * Vouchery API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
 * Contact: hello@vouchery.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The MaxDiscountRule model module.
 * @module model/MaxDiscountRule
 * @version 1.0
 */
class MaxDiscountRule {
    /**
     * Constructs a new <code>MaxDiscountRule</code>.
     * @alias module:model/MaxDiscountRule
     */
    constructor() {

        MaxDiscountRule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {}

    /**
     * Constructs a <code>MaxDiscountRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MaxDiscountRule} obj Optional instance to populate.
     * @return {module:model/MaxDiscountRule} The populated <code>MaxDiscountRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MaxDiscountRule();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('campaign_id')) {
                obj['campaign_id'] = ApiClient.convertToType(data['campaign_id'], 'Number');
            }
            if (data.hasOwnProperty('max_discount')) {
                obj['max_discount'] = ApiClient.convertToType(data['max_discount'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MaxDiscountRule.TypeEnum} type
 */
MaxDiscountRule.prototype['type'] = undefined;

/**
 * @member {Number} id
 */
MaxDiscountRule.prototype['id'] = undefined;

/**
 * @member {Number} campaign_id
 */
MaxDiscountRule.prototype['campaign_id'] = undefined;

/**
 * @member {Number} max_discount
 */
MaxDiscountRule.prototype['max_discount'] = undefined;

/**
 * @member {Date} created_at
 */
MaxDiscountRule.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
MaxDiscountRule.prototype['updated_at'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
MaxDiscountRule['TypeEnum'] = {

    /**
     * value: "MaxDiscountRule"
     * @const
     */
    "MaxDiscountRule": "MaxDiscountRule"
};



export default MaxDiscountRule;