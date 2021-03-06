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
import CampaignCreatedBy from './CampaignCreatedBy';
import SubCampaign from './SubCampaign';

/**
 * The MainCampaign model module.
 * @module Vouchery/MainCampaign
 * @version 2.0.0
 */
class MainCampaign {
    /**
     * Constructs a new <code>MainCampaign</code>.
     * @alias module:Vouchery/MainCampaign
     * @param type {module:Vouchery/MainCampaign.TypeEnum} This field is required only when you create a campaign. Main Campaign is a wrapper for multipe Sub Campaings, grouped together. Main Campaign can have own budget and redemptions limit.
     * @param name {String} The name of the campaign must be unique.
     */
    constructor(type, name) {

        MainCampaign.initialize(this, type, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, name) {
        obj['type'] = type;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>MainCampaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Vouchery/MainCampaign} obj Optional instance to populate.
     * @return {module:Vouchery/MainCampaign} The populated <code>MainCampaign</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MainCampaign();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = ApiClient.convertToType(data['template'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('max_total_budget')) {
                obj['max_total_budget'] = ApiClient.convertToType(data['max_total_budget'], 'Number');
            }
            if (data.hasOwnProperty('max_redemptions')) {
                obj['max_redemptions'] = ApiClient.convertToType(data['max_redemptions'], 'Number');
            }
            if (data.hasOwnProperty('team')) {
                obj['team'] = ApiClient.convertToType(data['team'], 'String');
            }
            if (data.hasOwnProperty('budget_code')) {
                obj['budget_code'] = ApiClient.convertToType(data['budget_code'], 'String');
            }
            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], [SubCampaign]);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = CampaignCreatedBy.constructFromObject(data['created_by']);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_by')) {
                obj['updated_by'] = CampaignCreatedBy.constructFromObject(data['updated_by']);
            }
        }
        return obj;
    }


}

/**
 * This field is required only when you create a campaign. Main Campaign is a wrapper for multipe Sub Campaings, grouped together. Main Campaign can have own budget and redemptions limit.
 * @member {module:Vouchery/MainCampaign.TypeEnum} type
 */
MainCampaign.prototype['type'] = undefined;

/**
 * @member {Number} id
 */
MainCampaign.prototype['id'] = undefined;

/**
 * @member {module:Vouchery/MainCampaign.StatusEnum} status
 */
MainCampaign.prototype['status'] = undefined;

/**
 * The name of the campaign must be unique.
 * @member {String} name
 */
MainCampaign.prototype['name'] = undefined;

/**
 * Valid template values for MainCampaign are: discount, loyalty, gift_card.
 * @member {module:Vouchery/MainCampaign.TemplateEnum} template
 */
MainCampaign.prototype['template'] = undefined;

/**
 * @member {String} description
 */
MainCampaign.prototype['description'] = undefined;

/**
 * The budget available for all discount campaigns grouped by this campaign.
 * @member {Number} max_total_budget
 */
MainCampaign.prototype['max_total_budget'] = undefined;

/**
 * The maximum number of redemptions available across all discount campaigns grouped by this campaign.
 * @member {Number} max_redemptions
 */
MainCampaign.prototype['max_redemptions'] = undefined;

/**
 * @member {String} team
 */
MainCampaign.prototype['team'] = undefined;

/**
 * @member {String} budget_code
 */
MainCampaign.prototype['budget_code'] = undefined;

/**
 * List of child campaigns
 * @member {Array.<module:Vouchery/SubCampaign>} children
 */
MainCampaign.prototype['children'] = undefined;

/**
 * @member {Date} created_at
 */
MainCampaign.prototype['created_at'] = undefined;

/**
 * @member {module:Vouchery/CampaignCreatedBy} created_by
 */
MainCampaign.prototype['created_by'] = undefined;

/**
 * @member {Date} updated_at
 */
MainCampaign.prototype['updated_at'] = undefined;

/**
 * @member {module:Vouchery/CampaignCreatedBy} updated_by
 */
MainCampaign.prototype['updated_by'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
MainCampaign['TypeEnum'] = {

    /**
     * value: "MainCampaign"
     * @const
     */
    "MainCampaign": "MainCampaign"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
MainCampaign['StatusEnum'] = {

    /**
     * value: "draft"
     * @const
     */
    "draft": "draft",

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive",

    /**
     * value: "archived"
     * @const
     */
    "archived": "archived"
};


/**
 * Allowed values for the <code>template</code> property.
 * @enum {String}
 * @readonly
 */
MainCampaign['TemplateEnum'] = {

    /**
     * value: "discount"
     * @const
     */
    "discount": "discount",

    /**
     * value: "loyalty"
     * @const
     */
    "loyalty": "loyalty",

    /**
     * value: "gift_card"
     * @const
     */
    "gift_card": "gift_card"
};



export default MainCampaign;