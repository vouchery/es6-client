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
 * The RewardGenerateVoucher model module.
 * @module model/RewardGenerateVoucher
 * @version 2.0
 */
class RewardGenerateVoucher {
    /**
     * Constructs a new <code>RewardGenerateVoucher</code>.
     * @alias module:model/RewardGenerateVoucher
     * @param type {module:model/RewardGenerateVoucher.TypeEnum} This reward generates voucher within specific subcampaign, that related only to particular customer.
     * @param prefix {String} A prefix in all generated vouchers. Needs to be unique within a project.
     * @param codeType {module:model/RewardGenerateVoucher.CodeTypeEnum} What characters should the code include. Possible choices are digits, letters, and mixed.
     * @param voucherCampaignId {Number} Subcampaign ID, new voucher will be related to.
     */
    constructor(type, prefix, codeType, voucherCampaignId) {

        RewardGenerateVoucher.initialize(this, type, prefix, codeType, voucherCampaignId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, prefix, codeType, voucherCampaignId) {
        obj['type'] = type;
        obj['prefix'] = prefix;
        obj['code_type'] = codeType;
        obj['voucher_campaign_id'] = voucherCampaignId;
    }

    /**
     * Constructs a <code>RewardGenerateVoucher</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RewardGenerateVoucher} obj Optional instance to populate.
     * @return {module:model/RewardGenerateVoucher} The populated <code>RewardGenerateVoucher</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RewardGenerateVoucher();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('code_type')) {
                obj['code_type'] = ApiClient.convertToType(data['code_type'], 'String');
            }
            if (data.hasOwnProperty('random_part_length')) {
                obj['random_part_length'] = ApiClient.convertToType(data['random_part_length'], 'Number');
            }
            if (data.hasOwnProperty('voucher_campaign_id')) {
                obj['voucher_campaign_id'] = ApiClient.convertToType(data['voucher_campaign_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * This reward generates voucher within specific subcampaign, that related only to particular customer.
 * @member {module:model/RewardGenerateVoucher.TypeEnum} type
 * @default 'generate_voucher'
 */
RewardGenerateVoucher.prototype['type'] = 'generate_voucher';

/**
 * @member {String} title
 */
RewardGenerateVoucher.prototype['title'] = undefined;

/**
 * @member {String} description
 */
RewardGenerateVoucher.prototype['description'] = undefined;

/**
 * A prefix in all generated vouchers. Needs to be unique within a project.
 * @member {String} prefix
 */
RewardGenerateVoucher.prototype['prefix'] = undefined;

/**
 * What characters should the code include. Possible choices are digits, letters, and mixed.
 * @member {module:model/RewardGenerateVoucher.CodeTypeEnum} code_type
 */
RewardGenerateVoucher.prototype['code_type'] = undefined;

/**
 * How long should the random part of the code be? Valid values are between 2 and 10.
 * @member {Number} random_part_length
 */
RewardGenerateVoucher.prototype['random_part_length'] = undefined;

/**
 * Subcampaign ID, new voucher will be related to.
 * @member {Number} voucher_campaign_id
 */
RewardGenerateVoucher.prototype['voucher_campaign_id'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RewardGenerateVoucher['TypeEnum'] = {

    /**
     * value: "generate_voucher"
     * @const
     */
    "generate_voucher": "generate_voucher"
};


/**
 * Allowed values for the <code>code_type</code> property.
 * @enum {String}
 * @readonly
 */
RewardGenerateVoucher['CodeTypeEnum'] = {

    /**
     * value: "mixed"
     * @const
     */
    "mixed": "mixed",

    /**
     * value: "digits"
     * @const
     */
    "digits": "digits",

    /**
     * value: "letters"
     * @const
     */
    "letters": "letters"
};



export default RewardGenerateVoucher;