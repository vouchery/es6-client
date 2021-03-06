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
 * The RuleTimeframe model module.
 * @module model/RuleTimeframe
 * @version 2.0.0
 */
class RuleTimeframe {
    /**
     * Constructs a new <code>RuleTimeframe</code>.
     * @alias module:model/RuleTimeframe
     * @param type {module:model/RuleTimeframe.TypeEnum} Defines start & end date when campaign will be valid and each voucher lifetime from the time of it's creation
     * @param startTime {String} Date and time in future
     * @param endTime {String} Date and time in future
     * @param voucherLifetime {Number} Number of seconds, each voucher will be valid from the time of it's creation
     * @param timeZone {String} Time zone name as defined in the [tz database](http://www.iana.org/time-zones) (e.g. Europe/London)
     */
    constructor(type, startTime, endTime, voucherLifetime, timeZone) {

        RuleTimeframe.initialize(this, type, startTime, endTime, voucherLifetime, timeZone);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, startTime, endTime, voucherLifetime, timeZone) {
        obj['type'] = type;
        obj['start_time'] = startTime;
        obj['end_time'] = endTime;
        obj['voucher_lifetime'] = voucherLifetime;
        obj['time_zone'] = timeZone;
    }

    /**
     * Constructs a <code>RuleTimeframe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleTimeframe} obj Optional instance to populate.
     * @return {module:model/RuleTimeframe} The populated <code>RuleTimeframe</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleTimeframe();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'String');
            }
            if (data.hasOwnProperty('end_time')) {
                obj['end_time'] = ApiClient.convertToType(data['end_time'], 'String');
            }
            if (data.hasOwnProperty('voucher_lifetime')) {
                obj['voucher_lifetime'] = ApiClient.convertToType(data['voucher_lifetime'], 'Number');
            }
            if (data.hasOwnProperty('time_zone')) {
                obj['time_zone'] = ApiClient.convertToType(data['time_zone'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines start & end date when campaign will be valid and each voucher lifetime from the time of it's creation
 * @member {module:model/RuleTimeframe.TypeEnum} type
 * @default 'timeframe'
 */
RuleTimeframe.prototype['type'] = 'timeframe';

/**
 * Date and time in future
 * @member {String} start_time
 */
RuleTimeframe.prototype['start_time'] = undefined;

/**
 * Date and time in future
 * @member {String} end_time
 */
RuleTimeframe.prototype['end_time'] = undefined;

/**
 * Number of seconds, each voucher will be valid from the time of it's creation
 * @member {Number} voucher_lifetime
 */
RuleTimeframe.prototype['voucher_lifetime'] = undefined;

/**
 * Time zone name as defined in the [tz database](http://www.iana.org/time-zones) (e.g. Europe/London)
 * @member {String} time_zone
 */
RuleTimeframe.prototype['time_zone'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RuleTimeframe['TypeEnum'] = {

    /**
     * value: "timeframe"
     * @const
     */
    "timeframe": "timeframe"
};



export default RuleTimeframe;