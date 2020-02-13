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
import RedemptionProductItems from './RedemptionProductItems';
import RedemptionVoucher from './RedemptionVoucher';

/**
 * The Redemption model module.
 * @module model/Redemption
 * @version 2.0
 */
class Redemption {
    /**
     * Constructs a new <code>Redemption</code>.
     * @alias module:model/Redemption
     * @param transactionId {String} Unique transaction ID which identifies underlying transaction in your system, e.g. order number, invoice number
     * @param totalTransactionCost {Number} 
     */
    constructor(transactionId, totalTransactionCost) {

        Redemption.initialize(this, transactionId, totalTransactionCost);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transactionId, totalTransactionCost) {
        obj['transaction_id'] = transactionId;
        obj['total_transaction_cost'] = totalTransactionCost;
    }

    /**
     * Constructs a <code>Redemption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Redemption} obj Optional instance to populate.
     * @return {module:model/Redemption} The populated <code>Redemption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Redemption();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('transaction_id')) {
                obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
            }
            if (data.hasOwnProperty('customer_identifier')) {
                obj['customer_identifier'] = ApiClient.convertToType(data['customer_identifier'], 'String');
            }
            if (data.hasOwnProperty('total_transaction_cost')) {
                obj['total_transaction_cost'] = ApiClient.convertToType(data['total_transaction_cost'], 'Number');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
            }
            if (data.hasOwnProperty('granted_discount')) {
                obj['granted_discount'] = ApiClient.convertToType(data['granted_discount'], 'Number');
            }
            if (data.hasOwnProperty('user_agent')) {
                obj['user_agent'] = ApiClient.convertToType(data['user_agent'], 'String');
            }
            if (data.hasOwnProperty('voucher')) {
                obj['voucher'] = RedemptionVoucher.constructFromObject(data['voucher']);
            }
            if (data.hasOwnProperty('confirmed')) {
                obj['confirmed'] = ApiClient.convertToType(data['confirmed'], 'Boolean');
            }
            if (data.hasOwnProperty('product_items')) {
                obj['product_items'] = ApiClient.convertToType(data['product_items'], [RedemptionProductItems]);
            }
            if (data.hasOwnProperty('validated_at')) {
                obj['validated_at'] = ApiClient.convertToType(data['validated_at'], 'Date');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Date');
            }
            if (data.hasOwnProperty('confirmed_at')) {
                obj['confirmed_at'] = ApiClient.convertToType(data['confirmed_at'], 'Date');
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
 * @member {module:model/Redemption.TypeEnum} type
 */
Redemption.prototype['type'] = undefined;

/**
 * Unique transaction ID which identifies underlying transaction in your system, e.g. order number, invoice number
 * @member {String} transaction_id
 */
Redemption.prototype['transaction_id'] = undefined;

/**
 * A string uniquely identifying customer in your system. Please check customers API.
 * @member {String} customer_identifier
 */
Redemption.prototype['customer_identifier'] = undefined;

/**
 * @member {Number} total_transaction_cost
 */
Redemption.prototype['total_transaction_cost'] = undefined;

/**
 * How many minutes should the redemption be valid for before it expires.
 * @member {Number} ttl
 */
Redemption.prototype['ttl'] = undefined;

/**
 * @member {Number} granted_discount
 */
Redemption.prototype['granted_discount'] = undefined;

/**
 * @member {String} user_agent
 */
Redemption.prototype['user_agent'] = undefined;

/**
 * @member {module:model/RedemptionVoucher} voucher
 */
Redemption.prototype['voucher'] = undefined;

/**
 * Only confirmed redemption are counted towards budget and total number of redemptions.
 * @member {Boolean} confirmed
 */
Redemption.prototype['confirmed'] = undefined;

/**
 * Array of product items, associated with a redemption
 * @member {Array.<module:model/RedemptionProductItems>} product_items
 */
Redemption.prototype['product_items'] = undefined;

/**
 * @member {Date} validated_at
 */
Redemption.prototype['validated_at'] = undefined;

/**
 * @member {Date} expires_at
 */
Redemption.prototype['expires_at'] = undefined;

/**
 * @member {Date} confirmed_at
 */
Redemption.prototype['confirmed_at'] = undefined;

/**
 * @member {Date} created_at
 */
Redemption.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Redemption.prototype['updated_at'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Redemption['TypeEnum'] = {

    /**
     * value: "Redemption"
     * @const
     */
    "Redemption": "Redemption"
};



export default Redemption;