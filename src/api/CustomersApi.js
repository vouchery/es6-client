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
import Customer from '../model/Customer';
import InlineObject from '../model/InlineObject';
import InlineObject1 from '../model/InlineObject1';
import InlineResponse200 from '../model/InlineResponse200';
import Redemption from '../model/Redemption';
import Voucher from '../model/Voucher';

/**
 * Customers service.
 * @module api/CustomersApi
 * @version 2.0.0
 */
export default class CustomersApi {

    /**
     * Constructs a new CustomersApi. 
     * @alias module:api/CustomersApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the assignVouchersToCustomer operation.
     * @callback module:api/CustomersApi~assignVouchersToCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Customer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign vouchers to a customer
     * @param {String} identifier Customer identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.inlineObject1 
     * @param {module:api/CustomersApi~assignVouchersToCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Customer}
     */
    assignVouchersToCustomer(identifier, opts, callback) {
        opts = opts || {};
        let postBody = opts['inlineObject1'];
        // verify the required parameter 'identifier' is set
        if (identifier === undefined || identifier === null) {
            throw new Error("Missing the required parameter 'identifier' when calling assignVouchersToCustomer");
        }

        let pathParams = {
            'identifier': identifier
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Basic'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Customer;
        return this.apiClient.callApi(
            '/customers/{identifier}/vouchers', 'PATCH',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the createCustomer operation.
     * @callback module:api/CustomersApi~createCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Customer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a customer
     * @param {Object} opts Optional parameters
     * @param {module:model/Customer} opts.customer 
     * @param {module:api/CustomersApi~createCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Customer}
     */
    createCustomer(opts, callback) {
        opts = opts || {};
        let postBody = opts['customer'];

        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Basic'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Customer;
        return this.apiClient.callApi(
            '/customers', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the deleteCustomer operation.
     * @callback module:api/CustomersApi~deleteCustomerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a customer
     * @param {String} identifier Customer identifier
     * @param {module:api/CustomersApi~deleteCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCustomer(identifier, callback) {
        let postBody = null;
        // verify the required parameter 'identifier' is set
        if (identifier === undefined || identifier === null) {
            throw new Error("Missing the required parameter 'identifier' when calling deleteCustomer");
        }

        let pathParams = {
            'identifier': identifier
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Basic'];
        let contentTypes = [];
        let accepts = [];
        let returnType = null;
        return this.apiClient.callApi(
            '/customers/{identifier}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the getCustomer operation.
     * @callback module:api/CustomersApi~getCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Customer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a customer
     * @param {String} identifier Customer identifier
     * @param {module:api/CustomersApi~getCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Customer}
     */
    getCustomer(identifier, callback) {
        let postBody = null;
        // verify the required parameter 'identifier' is set
        if (identifier === undefined || identifier === null) {
            throw new Error("Missing the required parameter 'identifier' when calling getCustomer");
        }

        let pathParams = {
            'identifier': identifier
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Basic'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = Customer;
        return this.apiClient.callApi(
            '/customers/{identifier}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the getCustomerRedemptions operation.
     * @callback module:api/CustomersApi~getCustomerRedemptionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Redemption>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get redemptions performed by a customer
     * @param {String} identifier Customer identifier
     * @param {module:api/CustomersApi~getCustomerRedemptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Redemption>}
     */
    getCustomerRedemptions(identifier, callback) {
        let postBody = null;
        // verify the required parameter 'identifier' is set
        if (identifier === undefined || identifier === null) {
            throw new Error("Missing the required parameter 'identifier' when calling getCustomerRedemptions");
        }

        let pathParams = {
            'identifier': identifier
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Basic'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = [Redemption];
        return this.apiClient.callApi(
            '/customers/{identifier}/redemptions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the getCustomerVouchers operation.
     * @callback module:api/CustomersApi~getCustomerVouchersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Voucher>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get vouchers assigned to a customer
     * @param {String} identifier Customer identifier
     * @param {module:api/CustomersApi~getCustomerVouchersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Voucher>}
     */
    getCustomerVouchers(identifier, callback) {
        let postBody = null;
        // verify the required parameter 'identifier' is set
        if (identifier === undefined || identifier === null) {
            throw new Error("Missing the required parameter 'identifier' when calling getCustomerVouchers");
        }

        let pathParams = {
            'identifier': identifier
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Basic'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = [Voucher];
        return this.apiClient.callApi(
            '/customers/{identifier}/vouchers', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the getCustomers operation.
     * @callback module:api/CustomersApi~getCustomersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Customer>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all customers
     * @param {module:api/CustomersApi~getCustomersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Customer>}
     */
    getCustomers(callback) {
        let postBody = null;

        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Basic'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = [Customer];
        return this.apiClient.callApi(
            '/customers', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the importCustomers operation.
     * @callback module:api/CustomersApi~importCustomersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import your own customers
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {module:api/CustomersApi~importCustomersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    importCustomers(opts, callback) {
        opts = opts || {};
        let postBody = null;

        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {
            'file': opts['file']
        };

        let authNames = ['Basic'];
        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];
        let returnType = InlineResponse200;
        return this.apiClient.callApi(
            '/customers/import', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the removeVouchersFromCustomer operation.
     * @callback module:api/CustomersApi~removeVouchersFromCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Customer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove (unassign) vouchers from a customer
     * @param {String} identifier Customer identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @param {module:api/CustomersApi~removeVouchersFromCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Customer}
     */
    removeVouchersFromCustomer(identifier, opts, callback) {
        opts = opts || {};
        let postBody = opts['inlineObject'];
        // verify the required parameter 'identifier' is set
        if (identifier === undefined || identifier === null) {
            throw new Error("Missing the required parameter 'identifier' when calling removeVouchersFromCustomer");
        }

        let pathParams = {
            'identifier': identifier
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Basic'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Customer;
        return this.apiClient.callApi(
            '/customers/{identifier}/vouchers', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }

    /**
     * Callback function to receive the result of the updateCustomer operation.
     * @callback module:api/CustomersApi~updateCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Customer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a customer
     * @param {String} identifier Customer identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/Customer} opts.customer 
     * @param {module:api/CustomersApi~updateCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Customer}
     */
    updateCustomer(identifier, opts, callback) {
        opts = opts || {};
        let postBody = opts['customer'];
        // verify the required parameter 'identifier' is set
        if (identifier === undefined || identifier === null) {
            throw new Error("Missing the required parameter 'identifier' when calling updateCustomer");
        }

        let pathParams = {
            'identifier': identifier
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Basic'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Customer;
        return this.apiClient.callApi(
            '/customers/{identifier}', 'PATCH',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null, callback
        );
    }


}