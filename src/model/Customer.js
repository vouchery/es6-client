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
import CustomerCategories from './CustomerCategories';

/**
 * The Customer model module.
 * @module model/Customer
 * @version 2.0.0
 */
class Customer {
    /**
     * Constructs a new <code>Customer</code>.
     * @alias module:model/Customer
     * @param identifier {String} Valid only for creating customer. Determines unique customer identifier in your application. Can be hash, id, email or any other unique value.
     */
    constructor(identifier) {

        Customer.initialize(this, identifier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, identifier) {
        obj['identifier'] = identifier;
    }

    /**
     * Constructs a <code>Customer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Customer} obj Optional instance to populate.
     * @return {module:model/Customer} The populated <code>Customer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Customer();

            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('loyalty_points')) {
                obj['loyalty_points'] = ApiClient.convertToType(data['loyalty_points'], 'Number');
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], [CustomerCategories]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
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
 * Valid only for creating customer. Determines unique customer identifier in your application. Can be hash, id, email or any other unique value.
 * @member {String} identifier
 */
Customer.prototype['identifier'] = undefined;

/**
 * Customer full name.
 * @member {String} name
 */
Customer.prototype['name'] = undefined;

/**
 * Number of loyalty points customer will have.
 * @member {Number} loyalty_points
 */
Customer.prototype['loyalty_points'] = undefined;

/**
 * Determine how customer is related to specific category by providing related tag.
 * @member {Array.<module:model/CustomerCategories>} categories
 */
Customer.prototype['categories'] = undefined;

/**
 * Any metadata, you want to store, related to customer. Key-value object, that will be displayed on customer profile page.
 * @member {Object} metadata
 */
Customer.prototype['metadata'] = undefined;

/**
 * @member {Date} created_at
 */
Customer.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Customer.prototype['updated_at'] = undefined;






export default Customer;