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
import RuleProductItemExistsItemConditions from './RuleProductItemExistsItemConditions';

/**
 * The RuleProductItemExists model module.
 * @module Vouchery/RuleProductItemExists
 * @version 2.0.0
 */
class RuleProductItemExists {
    /**
     * Constructs a new <code>RuleProductItemExists</code>.
     * @alias module:Vouchery/RuleProductItemExists
     * @param type {module:Vouchery/RuleProductItemExists.TypeEnum} 
     * @param itemConditions {Array.<module:Vouchery/RuleProductItemExistsItemConditions>} Array of item conditions, that item should fit
     */
    constructor(type, itemConditions) {

        RuleProductItemExists.initialize(this, type, itemConditions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, itemConditions) {
        obj['type'] = type;
        obj['item_conditions'] = itemConditions;
    }

    /**
     * Constructs a <code>RuleProductItemExists</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Vouchery/RuleProductItemExists} obj Optional instance to populate.
     * @return {module:Vouchery/RuleProductItemExists} The populated <code>RuleProductItemExists</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleProductItemExists();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('item_conditions')) {
                obj['item_conditions'] = ApiClient.convertToType(data['item_conditions'], [RuleProductItemExistsItemConditions]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Vouchery/RuleProductItemExists.TypeEnum} type
 */
RuleProductItemExists.prototype['type'] = undefined;

/**
 * Array of item conditions, that item should fit
 * @member {Array.<module:Vouchery/RuleProductItemExistsItemConditions>} item_conditions
 */
RuleProductItemExists.prototype['item_conditions'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RuleProductItemExists['TypeEnum'] = {

    /**
     * value: "ProductItemExists"
     * @const
     */
    "ProductItemExists": "ProductItemExists"
};



export default RuleProductItemExists;