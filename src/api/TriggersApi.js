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


import ApiClient from "../ApiClient";
import Trigger from '../Vouchery/Trigger';

/**
 * Triggers service.
 * @module api/TriggersApi
 * @version 2.0.0
 */
export default class TriggersApi {

    /**
     * Constructs a new TriggersApi. 
     * @alias module:api/TriggersApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a trigger
     * @param {Object} opts Optional parameters
     * @param {module:Vouchery/Trigger} opts.trigger 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Vouchery/Trigger} and HTTP response
     */
    createTriggerWithHttpInfo(opts) {
        opts = opts || {};
        let postBody = opts['trigger'];

        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Bearer'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Trigger;
        return this.apiClient.callApi(
            '/triggers', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null
        );
    }

    /**
     * Create a trigger
     * @param {Object} opts Optional parameters
     * @param {module:Vouchery/Trigger} opts.trigger 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Vouchery/Trigger}
     */
    createTrigger(opts) {
        return this.createTriggerWithHttpInfo(opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


}