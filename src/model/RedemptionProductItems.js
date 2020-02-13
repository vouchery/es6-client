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
 * The RedemptionProductItems model module.
 * @module model/RedemptionProductItems
 * @version 2.0.0
 */
class RedemptionProductItems {
    /**
     * Constructs a new <code>RedemptionProductItems</code>.
     * @alias module:model/RedemptionProductItems
     */
    constructor() {

        RedemptionProductItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {}

    /**
     * Constructs a <code>RedemptionProductItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RedemptionProductItems} obj Optional instance to populate.
     * @return {module:model/RedemptionProductItems} The populated <code>RedemptionProductItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RedemptionProductItems();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('product_identifier')) {
                obj['product_identifier'] = ApiClient.convertToType(data['product_identifier'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
RedemptionProductItems.prototype['name'] = undefined;

/**
 * @member {String} sku
 */
RedemptionProductItems.prototype['sku'] = undefined;

/**
 * @member {String} product_identifier
 */
RedemptionProductItems.prototype['product_identifier'] = undefined;

/**
 * @member {Number} quantity
 */
RedemptionProductItems.prototype['quantity'] = undefined;

/**
 * @member {Number} price
 */
RedemptionProductItems.prototype['price'] = undefined;

/**
 * @member {Array.<String>} categories
 */
RedemptionProductItems.prototype['categories'] = undefined;






export default RedemptionProductItems;