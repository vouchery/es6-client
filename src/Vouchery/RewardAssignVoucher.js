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
 * The RewardAssignVoucher model module.
 * @module Vouchery/RewardAssignVoucher
 * @version 2.0.0
 */
class RewardAssignVoucher {
    /**
     * Constructs a new <code>RewardAssignVoucher</code>.
     * @alias module:Vouchery/RewardAssignVoucher
     * @param type {module:Vouchery/RewardAssignVoucher.TypeEnum} 
     * @param voucherCampaignId {Number} Subcampaign ID, voucher is related to.
     */
    constructor(type, voucherCampaignId) {

        RewardAssignVoucher.initialize(this, type, voucherCampaignId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, voucherCampaignId) {
        obj['type'] = type;
        obj['voucher_campaign_id'] = voucherCampaignId;
    }

    /**
     * Constructs a <code>RewardAssignVoucher</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Vouchery/RewardAssignVoucher} obj Optional instance to populate.
     * @return {module:Vouchery/RewardAssignVoucher} The populated <code>RewardAssignVoucher</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RewardAssignVoucher();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('voucher_campaign_id')) {
                obj['voucher_campaign_id'] = ApiClient.convertToType(data['voucher_campaign_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:Vouchery/RewardAssignVoucher.TypeEnum} type
 */
RewardAssignVoucher.prototype['type'] = undefined;

/**
 * Subcampaign ID, voucher is related to.
 * @member {Number} voucher_campaign_id
 */
RewardAssignVoucher.prototype['voucher_campaign_id'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RewardAssignVoucher['TypeEnum'] = {

    /**
     * value: "AssignVoucher"
     * @const
     */
    "AssignVoucher": "AssignVoucher"
};



export default RewardAssignVoucher;