/**
 * Vouchery API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
 * Contact: hello@vouchery.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Area from '../model/Area';

/**
 * Areas service.
 * @module api/AreasApi
 * @version 1.0
 */
export default class AreasApi {

    /**
     * Constructs a new AreasApi. 
     * @alias module:api/AreasApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createArea operation.
     * @callback module:api/AreasApi~createAreaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Area} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an area
     * @param {Object} opts Optional parameters
     * @param {module:model/Area} opts.area 
     * @param {module:api/AreasApi~createAreaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Area}
     */
    createArea(opts, callback) {
        opts = opts || {};
        let postBody = opts['area'];


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Basic'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Area;

        return this.apiClient.callApi(
            '/areas', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }

    /**
     * Callback function to receive the result of the deleteArea operation.
     * @callback module:api/AreasApi~deleteAreaCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an area
     * @param {Number} id Area ID
     * @param {module:api/AreasApi~deleteAreaCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteArea(id, callback) {
        let postBody = null;

        // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling deleteArea");
        }


        let pathParams = {
            'id': id
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Basic'];
        let contentTypes = [];
        let accepts = [];
        let returnType = null;

        return this.apiClient.callApi(
            '/areas/{id}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }

    /**
     * Callback function to receive the result of the getArea operation.
     * @callback module:api/AreasApi~getAreaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Area} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an area
     * @param {Number} id Area ID
     * @param {module:api/AreasApi~getAreaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Area}
     */
    getArea(id, callback) {
        let postBody = null;

        // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling getArea");
        }


        let pathParams = {
            'id': id
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Basic'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = Area;

        return this.apiClient.callApi(
            '/areas/{id}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }

    /**
     * Callback function to receive the result of the getAreas operation.
     * @callback module:api/AreasApi~getAreasCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Area>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all areas
     * @param {module:api/AreasApi~getAreasCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Area>}
     */
    getAreas(callback) {
        let postBody = null;


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Basic'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = [Area];

        return this.apiClient.callApi(
            '/areas', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }

    /**
     * Callback function to receive the result of the updateArea operation.
     * @callback module:api/AreasApi~updateAreaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Area} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an area
     * @param {Number} id Area ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Area} opts.area 
     * @param {module:api/AreasApi~updateAreaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Area}
     */
    updateArea(id, opts, callback) {
        opts = opts || {};
        let postBody = opts['area'];

        // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling updateArea");
        }


        let pathParams = {
            'id': id
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Basic'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Area;

        return this.apiClient.callApi(
            '/areas/{id}', 'PATCH',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }


}