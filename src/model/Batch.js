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
 * The Batch model module.
 * @module model/Batch
 * @version 2.0
 */
class Batch {
    /**
     * Constructs a new <code>Batch</code>.
     * @alias module:model/Batch
     * @param size {Number} How many unique vouchers to generate? Can be an number between 1 and 50 000.
     * @param codeType {module:model/Batch.CodeTypeEnum} What characters should the code include. Possible choices are digits, letters, and mixed.
     * @param randomPartLength {Number} How long should the random part of the code be? Valid values are between 2 and 10, depending on batch size.
     * @param prefix {String} A prefix is required for batch generated vouchers. Needs to be unique within project.
     */
    constructor(size, codeType, randomPartLength, prefix) {

        Batch.initialize(this, size, codeType, randomPartLength, prefix);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, size, codeType, randomPartLength, prefix) {
        obj['size'] = size;
        obj['code_type'] = codeType;
        obj['random_part_length'] = randomPartLength;
        obj['prefix'] = prefix;
    }

    /**
     * Constructs a <code>Batch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Batch} obj Optional instance to populate.
     * @return {module:model/Batch} The populated <code>Batch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Batch();

            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('code_type')) {
                obj['code_type'] = ApiClient.convertToType(data['code_type'], 'String');
            }
            if (data.hasOwnProperty('random_part_length')) {
                obj['random_part_length'] = ApiClient.convertToType(data['random_part_length'], 'Number');
            }
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
        }
        return obj;
    }


}

/**
 * How many unique vouchers to generate? Can be an number between 1 and 50 000.
 * @member {Number} size
 */
Batch.prototype['size'] = undefined;

/**
 * What characters should the code include. Possible choices are digits, letters, and mixed.
 * @member {module:model/Batch.CodeTypeEnum} code_type
 */
Batch.prototype['code_type'] = undefined;

/**
 * How long should the random part of the code be? Valid values are between 2 and 10, depending on batch size.
 * @member {Number} random_part_length
 */
Batch.prototype['random_part_length'] = undefined;

/**
 * A prefix is required for batch generated vouchers. Needs to be unique within project.
 * @member {String} prefix
 */
Batch.prototype['prefix'] = undefined;





/**
 * Allowed values for the <code>code_type</code> property.
 * @enum {String}
 * @readonly
 */
Batch['CodeTypeEnum'] = {

    /**
     * value: "digits"
     * @const
     */
    "digits": "digits",

    /**
     * value: "letters"
     * @const
     */
    "letters": "letters",

    /**
     * value: "mixed"
     * @const
     */
    "mixed": "mixed"
};



export default Batch;