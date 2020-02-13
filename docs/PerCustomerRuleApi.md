# VoucheryApiReference.PerCustomerRuleApi

All URIs are relative to *https://preview.vouchery.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPerCustomerRule**](PerCustomerRuleApi.md#createPerCustomerRule) | **POST** /campaigns/{campaign_id}/per_customer_rule | Create the per customer rule
[**deletePerCustomerRule**](PerCustomerRuleApi.md#deletePerCustomerRule) | **DELETE** /campaigns/{campaign_id}/per_customer_rule | Delete the per customer rule
[**getPerCustomerRule**](PerCustomerRuleApi.md#getPerCustomerRule) | **GET** /campaigns/{campaign_id}/per_customer_rule | Get the per customer rule
[**updatePerCustomerRule**](PerCustomerRuleApi.md#updatePerCustomerRule) | **PATCH** /campaigns/{campaign_id}/per_customer_rule | Update the per customer rule


<a name="createPerCustomerRule"></a>
# **createPerCustomerRule**
> PerCustomerRule createPerCustomerRule(campaignId, opts)

Create the per customer rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.PerCustomerRuleApi();
let campaignId = 56; // Number | Campaign ID
let opts = {
  'perCustomerRule': new VoucheryApiReference.PerCustomerRule() // PerCustomerRule | 
};
apiInstance.createPerCustomerRule(campaignId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Campaign ID | 
 **perCustomerRule** | [**PerCustomerRule**](PerCustomerRule.md)|  | [optional] 

### Return type

[**PerCustomerRule**](PerCustomerRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePerCustomerRule"></a>
# **deletePerCustomerRule**
> deletePerCustomerRule(campaignId)

Delete the per customer rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.PerCustomerRuleApi();
let campaignId = 56; // Number | Campaign ID
apiInstance.deletePerCustomerRule(campaignId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Campaign ID | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPerCustomerRule"></a>
# **getPerCustomerRule**
> PerCustomerRule getPerCustomerRule(campaignId)

Get the per customer rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.PerCustomerRuleApi();
let campaignId = 56; // Number | Campaign ID
apiInstance.getPerCustomerRule(campaignId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Campaign ID | 

### Return type

[**PerCustomerRule**](PerCustomerRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePerCustomerRule"></a>
# **updatePerCustomerRule**
> PerCustomerRule updatePerCustomerRule(campaignId, opts)

Update the per customer rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.PerCustomerRuleApi();
let campaignId = 56; // Number | Campaign ID
let opts = {
  'perCustomerRule': new VoucheryApiReference.PerCustomerRule() // PerCustomerRule | 
};
apiInstance.updatePerCustomerRule(campaignId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| Campaign ID | 
 **perCustomerRule** | [**PerCustomerRule**](PerCustomerRule.md)|  | [optional] 

### Return type

[**PerCustomerRule**](PerCustomerRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

