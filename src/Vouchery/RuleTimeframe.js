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
import RuleTimeframeOneOf from './RuleTimeframeOneOf';
import RuleTimeframeOneOf1 from './RuleTimeframeOneOf1';
import RuleTimeframeOneOf2 from './RuleTimeframeOneOf2';

/**
 * The RuleTimeframe model module.
 * @module Vouchery/RuleTimeframe
 * @version 2.0.0
 */
class RuleTimeframe {
    /**
     * Constructs a new <code>RuleTimeframe</code>.
     * @alias module:Vouchery/RuleTimeframe
     * @implements module:Vouchery/RuleTimeframeOneOf
     * @implements module:Vouchery/RuleTimeframeOneOf1
     * @implements module:Vouchery/RuleTimeframeOneOf2
     * @param type {module:Vouchery/RuleTimeframe.TypeEnum} 
     * @param startTime {String} Date and time in future
     * @param endTime {String} Date and time in future
     * @param timeZone {String} Time zone name as defined in the [tz database](http://www.iana.org/time-zones) (e.g. Europe/London)
     * @param voucherLifetime {Number} Number of seconds, each voucher will be valid from the time of it's creation
     */
    constructor(type, startTime, endTime, timeZone, voucherLifetime) {
        RuleTimeframeOneOf.initialize(this, type, startTime, timeZone);
        RuleTimeframeOneOf1.initialize(this, type, endTime, timeZone);
        RuleTimeframeOneOf2.initialize(this, type, voucherLifetime, timeZone);
        RuleTimeframe.initialize(this, type, startTime, endTime, timeZone, voucherLifetime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, startTime, endTime, timeZone, voucherLifetime) {
        obj['type'] = type;
        obj['start_time'] = startTime;
        obj['end_time'] = endTime;
        obj['time_zone'] = timeZone;
        obj['voucher_lifetime'] = voucherLifetime;
    }

    /**
     * Constructs a <code>RuleTimeframe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Vouchery/RuleTimeframe} obj Optional instance to populate.
     * @return {module:Vouchery/RuleTimeframe} The populated <code>RuleTimeframe</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleTimeframe();
            RuleTimeframeOneOf.constructFromObject(data, obj);
            RuleTimeframeOneOf1.constructFromObject(data, obj);
            RuleTimeframeOneOf2.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'String');
            }
            if (data.hasOwnProperty('end_time')) {
                obj['end_time'] = ApiClient.convertToType(data['end_time'], 'String');
            }
            if (data.hasOwnProperty('time_zone')) {
                obj['time_zone'] = ApiClient.convertToType(data['time_zone'], 'String');
            }
            if (data.hasOwnProperty('voucher_lifetime')) {
                obj['voucher_lifetime'] = ApiClient.convertToType(data['voucher_lifetime'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:Vouchery/RuleTimeframe.TypeEnum} type
 */
RuleTimeframe.prototype['type'] = undefined;

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
 * Time zone name as defined in the [tz database](http://www.iana.org/time-zones) (e.g. Europe/London)
 * @member {String} time_zone
 */
RuleTimeframe.prototype['time_zone'] = undefined;

/**
 * Number of seconds, each voucher will be valid from the time of it's creation
 * @member {Number} voucher_lifetime
 */
RuleTimeframe.prototype['voucher_lifetime'] = undefined;


// Implement RuleTimeframeOneOf interface:
/**
 * @member {module:Vouchery/RuleTimeframeOneOf.TypeEnum} type
 */
RuleTimeframeOneOf.prototype['type'] = undefined;
/**
 * Date and time in future
 * @member {String} start_time
 */
RuleTimeframeOneOf.prototype['start_time'] = undefined;
/**
 * Date and time in future
 * @member {String} end_time
 */
RuleTimeframeOneOf.prototype['end_time'] = undefined;
/**
 * Time zone name as defined in the [tz database](http://www.iana.org/time-zones) (e.g. Europe/London)
 * @member {String} time_zone
 */
RuleTimeframeOneOf.prototype['time_zone'] = undefined;
// Implement RuleTimeframeOneOf1 interface:
/**
 * @member {module:Vouchery/RuleTimeframeOneOf1.TypeEnum} type
 */
RuleTimeframeOneOf1.prototype['type'] = undefined;
/**
 * Date and time in future
 * @member {String} start_time
 */
RuleTimeframeOneOf1.prototype['start_time'] = undefined;
/**
 * Date and time in future
 * @member {String} end_time
 */
RuleTimeframeOneOf1.prototype['end_time'] = undefined;
/**
 * Time zone name as defined in the [tz database](http://www.iana.org/time-zones) (e.g. Europe/London)
 * @member {String} time_zone
 */
RuleTimeframeOneOf1.prototype['time_zone'] = undefined;
// Implement RuleTimeframeOneOf2 interface:
/**
 * @member {module:Vouchery/RuleTimeframeOneOf2.TypeEnum} type
 */
RuleTimeframeOneOf2.prototype['type'] = undefined;
/**
 * Number of seconds, each voucher will be valid from the time of it's creation
 * @member {Number} voucher_lifetime
 */
RuleTimeframeOneOf2.prototype['voucher_lifetime'] = undefined;
/**
 * Time zone name as defined in the [tz database](http://www.iana.org/time-zones) (e.g. Europe/London)
 * @member {String} time_zone
 */
RuleTimeframeOneOf2.prototype['time_zone'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RuleTimeframe['TypeEnum'] = {

    /**
     * value: "Timeframe"
     * @const
     */
    "Timeframe": "Timeframe"
};



export default RuleTimeframe;