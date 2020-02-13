# VoucheryApiReference.NewCustomerRuleApi

All URIs are relative to *https://preview.vouchery.io/api/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNewCustomerRule**](NewCustomerRuleApi.md#createNewCustomerRule) | **POST** /campaigns/{campaign_id}/new_customer_rule | Create the new customer rule
[**deleteNewCustomerRule**](NewCustomerRuleApi.md#deleteNewCustomerRule) | **DELETE** /campaigns/{campaign_id}/new_customer_rule | Delete the new customer rule
[**getNewCustomerRule**](NewCustomerRuleApi.md#getNewCustomerRule) | **GET** /campaigns/{campaign_id}/new_customer_rule | Get the new customer rule
[**updateNewCustomerRule**](NewCustomerRuleApi.md#updateNewCustomerRule) | **PATCH** /campaigns/{campaign_id}/new_customer_rule | Update the new customer rule


<a name="createNewCustomerRule"></a>
# **createNewCustomerRule**
> NewCustomerRule createNewCustomerRule(campaignId, opts)

Create the new customer rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.NewCustomerRuleApi();
let campaignId = 56; // Number | Campaign ID
let opts = {
  'newCustomerRule': new VoucheryApiReference.NewCustomerRule() // NewCustomerRule | 
};
apiInstance.createNewCustomerRule(campaignId, opts, (error, data, response) => {
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
 **newCustomerRule** | [**NewCustomerRule**](NewCustomerRule.md)|  | [optional] 

### Return type

[**NewCustomerRule**](NewCustomerRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNewCustomerRule"></a>
# **deleteNewCustomerRule**
> deleteNewCustomerRule(campaignId)

Delete the new customer rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.NewCustomerRuleApi();
let campaignId = 56; // Number | Campaign ID
apiInstance.deleteNewCustomerRule(campaignId, (error, data, response) => {
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

<a name="getNewCustomerRule"></a>
# **getNewCustomerRule**
> NewCustomerRule getNewCustomerRule(campaignId)

Get the new customer rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.NewCustomerRuleApi();
let campaignId = 56; // Number | Campaign ID
apiInstance.getNewCustomerRule(campaignId, (error, data, response) => {
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

[**NewCustomerRule**](NewCustomerRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateNewCustomerRule"></a>
# **updateNewCustomerRule**
> NewCustomerRule updateNewCustomerRule(campaignId, opts)

Update the new customer rule

### Example
```javascript
import VoucheryApiReference from 'vouchery_api_reference';
let defaultClient = VoucheryApiReference.ApiClient.instance;

// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new VoucheryApiReference.NewCustomerRuleApi();
let campaignId = 56; // Number | Campaign ID
let opts = {
  'newCustomerRule': new VoucheryApiReference.NewCustomerRule() // NewCustomerRule | 
};
apiInstance.updateNewCustomerRule(campaignId, opts, (error, data, response) => {
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
 **newCustomerRule** | [**NewCustomerRule**](NewCustomerRule.md)|  | [optional] 

### Return type

[**NewCustomerRule**](NewCustomerRule.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

