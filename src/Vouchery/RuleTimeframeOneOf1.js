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
 * The RuleTimeframeOneOf1 model module.
 * @module Vouchery/RuleTimeframeOneOf1
 * @version 2.0.0
 */
class RuleTimeframeOneOf1 {
    /**
     * Constructs a new <code>RuleTimeframeOneOf1</code>.
     * @alias module:Vouchery/RuleTimeframeOneOf1
     * @param type {module:Vouchery/RuleTimeframeOneOf1.TypeEnum} 
     * @param endTime {String} Date and time in future
     * @param timeZone {String} Time zone name as defined in the [tz database](http://www.iana.org/time-zones) (e.g. Europe/London)
     */
    constructor(type, endTime, timeZone) {

        RuleTimeframeOneOf1.initialize(this, type, endTime, timeZone);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, endTime, timeZone) {
        obj['type'] = type;
        obj['end_time'] = endTime;
        obj['time_zone'] = timeZone;
    }

    /**
     * Constructs a <code>RuleTimeframeOneOf1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Vouchery/RuleTimeframeOneOf1} obj Optional instance to populate.
     * @return {module:Vouchery/RuleTimeframeOneOf1} The populated <code>RuleTimeframeOneOf1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleTimeframeOneOf1();

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
        }
        return obj;
    }


}

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





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RuleTimeframeOneOf1['TypeEnum'] = {

    /**
     * value: "Timeframe"
     * @const
     */
    "Timeframe": "Timeframe"
};



export default RuleTimeframeOneOf1;