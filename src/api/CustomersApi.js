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
import Customer from '../Vouchery/Customer';
import InlineObject from '../Vouchery/InlineObject';
import InlineObject1 from '../Vouchery/InlineObject1';
import InlineResponse200 from '../Vouchery/InlineResponse200';
import Redemption from '../Vouchery/Redemption';
import Voucher from '../Vouchery/Voucher';

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
     * Assign vouchers to a customer
     * @param {String} identifier Customer identifier
     * @param {Object} opts Optional parameters
     * @param {module:Vouchery/InlineObject1} opts.inlineObject1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Vouchery/Customer} and HTTP response
     */
    assignVouchersToCustomerWithHttpInfo(identifier, opts) {
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
            authNames, contentTypes, accepts, returnType, null
        );
    }

    /**
     * Assign vouchers to a customer
     * @param {String} identifier Customer identifier
     * @param {Object} opts Optional parameters
     * @param {module:Vouchery/InlineObject1} opts.inlineObject1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Vouchery/Customer}
     */
    assignVouchersToCustomer(identifier, opts) {
        return this.assignVouchersToCustomerWithHttpInfo(identifier, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Create a customer
     * @param {Object} opts Optional parameters
     * @param {module:Vouchery/Customer} opts.customer 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Vouchery/Customer} and HTTP response
     */
    createCustomerWithHttpInfo(opts) {
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
            authNames, contentTypes, accepts, returnType, null
        );
    }

    /**
     * Create a customer
     * @param {Object} opts Optional parameters
     * @param {module:Vouchery/Customer} opts.customer 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Vouchery/Customer}
     */
    createCustomer(opts) {
        return this.createCustomerWithHttpInfo(opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Delete a customer
     * @param {String} identifier Customer identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCustomerWithHttpInfo(identifier) {
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
            authNames, contentTypes, accepts, returnType, null
        );
    }

    /**
     * Delete a customer
     * @param {String} identifier Customer identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCustomer(identifier) {
        return this.deleteCustomerWithHttpInfo(identifier)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get a customer
     * @param {String} identifier Customer identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Vouchery/Customer} and HTTP response
     */
    getCustomerWithHttpInfo(identifier) {
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
            authNames, contentTypes, accepts, returnType, null
        );
    }

    /**
     * Get a customer
     * @param {String} identifier Customer identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Vouchery/Customer}
     */
    getCustomer(identifier) {
        return this.getCustomerWithHttpInfo(identifier)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get redemptions performed by a customer
     * @param {String} identifier Customer identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:Vouchery/Redemption>} and HTTP response
     */
    getCustomerRedemptionsWithHttpInfo(identifier) {
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
            authNames, contentTypes, accepts, returnType, null
        );
    }

    /**
     * Get redemptions performed by a customer
     * @param {String} identifier Customer identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:Vouchery/Redemption>}
     */
    getCustomerRedemptions(identifier) {
        return this.getCustomerRedemptionsWithHttpInfo(identifier)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get vouchers assigned to a customer
     * @param {String} identifier Customer identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:Vouchery/Voucher>} and HTTP response
     */
    getCustomerVouchersWithHttpInfo(identifier) {
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
            authNames, contentTypes, accepts, returnType, null
        );
    }

    /**
     * Get vouchers assigned to a customer
     * @param {String} identifier Customer identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:Vouchery/Voucher>}
     */
    getCustomerVouchers(identifier) {
        return this.getCustomerVouchersWithHttpInfo(identifier)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get all customers
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:Vouchery/Customer>} and HTTP response
     */
    getCustomersWithHttpInfo() {
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
            authNames, contentTypes, accepts, returnType, null
        );
    }

    /**
     * Get all customers
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:Vouchery/Customer>}
     */
    getCustomers() {
        return this.getCustomersWithHttpInfo()
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Import your own customers
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Vouchery/InlineResponse200} and HTTP response
     */
    importCustomersWithHttpInfo(opts) {
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
            authNames, contentTypes, accepts, returnType, null
        );
    }

    /**
     * Import your own customers
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Vouchery/InlineResponse200}
     */
    importCustomers(opts) {
        return this.importCustomersWithHttpInfo(opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Remove (unassign) vouchers from a customer
     * @param {String} identifier Customer identifier
     * @param {Object} opts Optional parameters
     * @param {module:Vouchery/InlineObject} opts.inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Vouchery/Customer} and HTTP response
     */
    removeVouchersFromCustomerWithHttpInfo(identifier, opts) {
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
            authNames, contentTypes, accepts, returnType, null
        );
    }

    /**
     * Remove (unassign) vouchers from a customer
     * @param {String} identifier Customer identifier
     * @param {Object} opts Optional parameters
     * @param {module:Vouchery/InlineObject} opts.inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Vouchery/Customer}
     */
    removeVouchersFromCustomer(identifier, opts) {
        return this.removeVouchersFromCustomerWithHttpInfo(identifier, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Update a customer
     * @param {String} identifier Customer identifier
     * @param {Object} opts Optional parameters
     * @param {module:Vouchery/Customer} opts.customer 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Vouchery/Customer} and HTTP response
     */
    updateCustomerWithHttpInfo(identifier, opts) {
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
            authNames, contentTypes, accepts, returnType, null
        );
    }

    /**
     * Update a customer
     * @param {String} identifier Customer identifier
     * @param {Object} opts Optional parameters
     * @param {module:Vouchery/Customer} opts.customer 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Vouchery/Customer}
     */
    updateCustomer(identifier, opts) {
        return this.updateCustomerWithHttpInfo(identifier, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


}