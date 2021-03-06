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
import Reward from '../Vouchery/Reward';

/**
 * Rewards service.
 * @module api/RewardsApi
 * @version 2.0.0
 */
export default class RewardsApi {

    /**
     * Constructs a new RewardsApi. 
     * @alias module:api/RewardsApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a reward
     * @param {Number} campaignId Campaign ID
     * @param {Object} opts Optional parameters
     * @param {module:Vouchery/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Vouchery/Reward} and HTTP response
     */
    createRewardWithHttpInfo(campaignId, opts) {
        opts = opts || {};
        let postBody = opts['UNKNOWN_BASE_TYPE'];
        // verify the required parameter 'campaignId' is set
        if (campaignId === undefined || campaignId === null) {
            throw new Error("Missing the required parameter 'campaignId' when calling createReward");
        }

        let pathParams = {
            'campaign_id': campaignId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Bearer'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Reward;
        return this.apiClient.callApi(
            '/campaigns/{campaign_id}/rewards', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null
        );
    }

    /**
     * Create a reward
     * @param {Number} campaignId Campaign ID
     * @param {Object} opts Optional parameters
     * @param {module:Vouchery/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Vouchery/Reward}
     */
    createReward(campaignId, opts) {
        return this.createRewardWithHttpInfo(campaignId, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Delete a reward
     * @param {Number} id Reward ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteRewardWithHttpInfo(id) {
        let postBody = null;
        // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling deleteReward");
        }

        let pathParams = {
            'id': id
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Bearer'];
        let contentTypes = [];
        let accepts = [];
        let returnType = null;
        return this.apiClient.callApi(
            '/rewards/{id}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null
        );
    }

    /**
     * Delete a reward
     * @param {Number} id Reward ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteReward(id) {
        return this.deleteRewardWithHttpInfo(id)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get a reward
     * @param {Number} id Reward ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Vouchery/Reward} and HTTP response
     */
    getRewardWithHttpInfo(id) {
        let postBody = null;
        // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling getReward");
        }

        let pathParams = {
            'id': id
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Bearer'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = Reward;
        return this.apiClient.callApi(
            '/rewards/{id}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null
        );
    }

    /**
     * Get a reward
     * @param {Number} id Reward ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Vouchery/Reward}
     */
    getReward(id) {
        return this.getRewardWithHttpInfo(id)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Get all rewards for a campaign
     * @param {Number} campaignId Campaign ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:Vouchery/Reward>} and HTTP response
     */
    getRewardsWithHttpInfo(campaignId) {
        let postBody = null;
        // verify the required parameter 'campaignId' is set
        if (campaignId === undefined || campaignId === null) {
            throw new Error("Missing the required parameter 'campaignId' when calling getRewards");
        }

        let pathParams = {
            'campaign_id': campaignId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Bearer'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = [Reward];
        return this.apiClient.callApi(
            '/campaigns/{campaign_id}/rewards', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null
        );
    }

    /**
     * Get all rewards for a campaign
     * @param {Number} campaignId Campaign ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:Vouchery/Reward>}
     */
    getRewards(campaignId) {
        return this.getRewardsWithHttpInfo(campaignId)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


    /**
     * Update a reward
     * @param {Number} id Reward ID
     * @param {Object} opts Optional parameters
     * @param {module:Vouchery/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Vouchery/Reward} and HTTP response
     */
    updateRewardWithHttpInfo(id, opts) {
        opts = opts || {};
        let postBody = opts['UNKNOWN_BASE_TYPE'];
        // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter 'id' when calling updateReward");
        }

        let pathParams = {
            'id': id
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['Bearer'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = Reward;
        return this.apiClient.callApi(
            '/rewards/{id}', 'PATCH',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, null
        );
    }

    /**
     * Update a reward
     * @param {Number} id Reward ID
     * @param {Object} opts Optional parameters
     * @param {module:Vouchery/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Vouchery/Reward}
     */
    updateReward(id, opts) {
        return this.updateRewardWithHttpInfo(id, opts)
            .then(function(response_and_data) {
                return response_and_data.data;
            });
    }


}